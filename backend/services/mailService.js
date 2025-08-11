// services/mailService.js
const nodemailer = require('nodemailer');

exports.sendEmail = async (to, subject, body) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"AI Mailer" <${process.env.SMTP_USER}>`,
    to: Array.isArray(to) ? to.join(',') : to,
    subject,
    html: body,
  });
};
