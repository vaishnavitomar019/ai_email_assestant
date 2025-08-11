const groqService = require('../services/groqService');
const mailService = require('../services/mailService');

exports.generateEmail = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

    const aiResponse = await groqService.generateEmail(prompt);
    res.status(200).json({ email: aiResponse });
  } catch (err) {
    res.status(500).json({ error: 'Email generation failed', details: err.message });
  }
};

exports.sendEmail = async (req, res) => {
  try {
    const { to, subject, body } = req.body;
    if (!to || !subject || !body)
      return res.status(400).json({ error: 'Missing email fields' });

    await mailService.sendEmail(to, subject, body);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Email sending failed', details: err.message });
  }
};
