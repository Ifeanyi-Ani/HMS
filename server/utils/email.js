const nodemailer = require('nodemailer');
const sendEmail = async options => {
  // transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'youngestemma@gmail.com',
      pass: 'fphiivfeoypfeuwq',
    },
  });

  const emailOpt = {
    from: 'orbis <orbis@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(emailOpt);
};

module.exports = sendEmail;
