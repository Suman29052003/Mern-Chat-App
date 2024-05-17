const asyncHandler = require("express-async-handler");
const Chat = require("../models/chats.model");
const User = require("../models/user.model");

const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        console.log("UserId Param not sent with request");
        return res.sendStatus(400);
    }

    var isChat = await Chat.findOne({
        isGroupChat: false,
        send: [
            { users: { $eleMatch: { $eq: req.user._id, } } },
            { users: { $eleMatch: { $eq: userId } } }
        ],
    }).populate("users", "-password").populate("latestMessage")

    isChat = await User.populate(isChat, {
        path: 'latestMessage.sender',
        select: "name pic email"
    })

    if (isChat) {
        res.status(200).send(isChat);
    } else {
        var chatData = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.user.id, userId],
        };

        try {
            const createdChat = await Chat.create(chatData);
            const fullChat = await Chat.findOne({ _id: createdChat._id }).populate("users", "-password")
            res.status(200).send(fullChat);
        } catch (error) {
            res.status(400);
            throw new Error(error.message)
        }
    }
});


const fetchChats = asyncHandler(async (req, res) => {
    try {
        const results = await Chat.find({ users: req.user._id })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })
            .then(async (chats) => {
                const populatedChats = await User.populate(chats, {
                    path: "latestMessage.sender",
                    select: "name pic email"
                });
                res.status(200).send(populatedChats);
            });
    } catch (error) {
        console.error("Error fetching chats:", error);
        res.status(400).send({ error: "Internal Server Error" });
    }
});


const createGroupChat = asyncHandler(async (req, res) => {
    if(!req.body.users || !req.body.names){
        return res.status(400).send({message:"Please Fill all the fields"})
    }
    var users = JSON.parse(req.body.users);

    if(users.length<2){
        return res.status(400).send({message:"Please add atleast 2 users"})
    }

    users.push(req.user);

    try {
        const groupChat = await Chat.create({
            chatName:req.body.name,
            users:users,
            isGroupChat:true,
            groupAdmin:req.user
        })

        const fullGroupChat = await Chat.findOne({_id:groupChat._id}).populate("users","-password").populate("groupAdmin","-password");
        res.status(200).json(fullGroupChat)
    } catch (error) {
        res.status(400);
        throw new Error(error.message)
    }
})


const renameGroup = asyncHandler(async(req,res)=>{
    const{chatId,chatName} = req.body;
    const updatedChat = await Chat.findByIdAndUpdate(
        chatId,
        {
            chatName,
        },
        {
            new:true
        }
    )
    .populate("users","-password")
    .populate("groupAdmin","-password");

    if(!updatedChat){
        return res.status(400).send({message:"Chat not found"})
    }
    else{
        res.status(200).json(updatedChat)
    }
})


const addToGroup = asyncHandler(async(req,res)=>{
    const{chatId,userId} = req.body;
    const added = await Chat.findByIdAndUpdate(
        chatId,{
            $push:{users:userId},
        },
        {
            new:true
        }
    )
    .populate("users","-password")
    .populate("groupAdmin","-password")

    if(!added){
        return res.status(400).send({message:"Chat not found"})
    }
    else{
        res.json(added)
    }
})

const removeFromGroup = asyncHandler(async(req,res)=>{
    const{chatId,userId} = req.body;
    const removed = await Chat.findByIdAndUpdate(
        chatId,{
            $pull:{users:userId},
        },
        {
            new:true
        }
    )
    .populate("users","-password")
    .populate("groupAdmin","-password")

    if(!removed){
        return res.status(400).send({message:"Chat not found"})
    }
    else{
        res.json(removed)
    }
})

module.exports = { accessChat, fetchChats, createGroupChat,renameGroup,addToGroup,removeFromGroup }