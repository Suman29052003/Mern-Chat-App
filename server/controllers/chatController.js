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


module.exports = { accessChat, fetchChats }