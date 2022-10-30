import {Document, model, Schema} from 'mongoose';
import moment from "moment";

interface IMessage extends Document {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    content: string;
    date: string;
}

const messageSchema = new Schema<IMessage>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: String, required: true}
});

const Message = model<IMessage>('Message', messageSchema);

export async function createMessage(message: IMessage) {
    const newMessage = new Message({
        firstName: message.firstName,
        lastName: message.lastName,
        email: message.email,
        subject: message.subject,
        content: message.content,
        date: moment().format('DD MMMM YYYY - HH:mm')
    });

    const res = await newMessage.save();
    return res !== undefined;
}
