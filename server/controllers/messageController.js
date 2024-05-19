const asyncHandler = require("express-async-handler");
const Message = require("../models/messages.model");
const Chat = require("../models/chats.model");
const User = require("../models/user.model");


const sendMessage = asyncHandler(async(req,res)=>{
    const{content,chatId}=req.body;

    if(!content || !chatId){
        console.log("Invalid data passed into request");
        return res.sendStatus(400)
    }

    var newMessage = {
        sender:req.user._id,
        content:content,
        chatId:chatId
    }

    try {
        var message = await Message.create(newMessage) ;

        message = await message.populate("sender","name pic");
        message = await message.populate("chat");
        message = await User.populate(message,{
            path:"chat.users",
            select : "name pic email"
        })

        await Chat.findByIdAndUpdate(req.body.chatId),{
            latestMessage:message
        }

        res.json(message)
    } catch (error) {
        throw new Error(error)
    }
});


const allMessages = asyncHandler(async(req,res)=>{
    try {
        const messages = await Message.find({chat:req.params.child})
        .populate("sender","name pic email")
        .populate("chat")

        res.json(messages)
    } catch (error) {
        throw new Error(error.message)
    }
})
module.exports = {sendMessage,allMessages};