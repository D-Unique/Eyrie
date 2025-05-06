import nodemailer from "nodemailer"
import { adminEmail, emailPass } from "./Constant.utility";
import { Logger } from "./Logger.utility";

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: adminEmail,
    pass: emailPass,
  },
});


const sendMail = async(senderName: string, senderEmail: string, recipientEmail: string, mailSubject: string, mailBody: string) => {
  
        const info = await transporter.sendMail({
            from: {
                name: senderName,
                address: senderEmail,
            },
            to: recipientEmail,
            subject: mailSubject,
            text: mailBody,
        });
        Logger.info(`Email with Id: ${info.messageId} sent to ${recipientEmail}`)

};


export default sendMail;
