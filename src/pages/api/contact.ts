import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require('nodemailer');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log(req.body, process.env.EMAIL_USER)

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
      html: `<div>${req.body.message}</div>`
    });

    res.json({data: 'ok'})
  }
}