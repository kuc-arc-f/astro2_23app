//const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer';
//
export const post: APIRoute = async ({ request }) => {
  const retObj = {ret: "NG", message: "Internal Server Error."};
  try {  
    const body = await request.json();
// /console.log(body);
    const receiverEmailAddress = body.to_mail;
    const transItem = {
      host: import.meta.env.PUBLIC_SMTP_HOST,
      port: import.meta.env.PUBLIC_SMTP_PORT,
      secure: import.meta.env.PUBLIC_SMTP_SECURE,
      auth: {
        user: import.meta.env.PUBLIC_SMTP_AUTH_USER,
        pass: import.meta.env.PUBLIC_SMTP_AUTH_PASS,
      },
    };
console.log(transItem);
    const sendItem = {
      from: import.meta.env.PUBLIC_FROM_MAIL_ADDRESS,
      to: receiverEmailAddress,
      subject: body.title,
      text: body.content,
    }
console.log(sendItem);
    let transporter = nodemailer.createTransport(transItem);
    let info = await transporter.sendMail(sendItem);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));    
    retObj.ret = "";
    return {
      body: JSON.stringify(retObj)
    }
  } catch (e) {
    console.error(e);
    return {body: JSON.stringify(retObj) }    
  } 
}