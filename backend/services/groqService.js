const axios = require('axios');

exports.generateEmail = async (prompt) => {
  const res = await axios.post(
    `${process.env.GROQ_API_url}`,
    {
      model: 'llama3-70b-8192',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return res.data.choices[0].message.content.trim();
};
