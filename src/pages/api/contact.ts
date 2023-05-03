import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try{
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      let info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'carter.brooks91@gmail.com',
        subject: req.body.subject,
        text: `${req.body.message} Sent from: ${req.body.name} at ${req.body.email}`,
        html:
        `
        <h1>Name: </h1>
        <h3>${req.body.name}</h3>
        <h1>Email: </h1>
        <h3>${req.body.email}</h3>
        <h1>Subject: </h1>
        <h3>${req.body.subject}</h3>
        <h1>Message: </h1>
        <h3>${req.body.message}</h3>
        `
      });

      res.json({data: 'ok'})
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  }
  return res.status(400).json({message: 'Bad Request'})
}