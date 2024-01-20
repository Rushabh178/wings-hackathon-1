import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import OpenAI from "openai";
dotenv.config()


console.log(process.env.OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from CodeX!'
  })
})

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt.trim();
    const question = `act as farming chat bot that only knows about faming and aswere following question if related to topic '${prompt}' `;
    // prompt += ". If it is related farming then ony answer else give appropiate answer that you unable to answer"
    console.log(question);
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "user",
          "content": question
        }
      ],
      temperature: 0,
      max_tokens: 1345,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
  console.log(response.choices[0].message?.content);
  res.status(200).send({
    bot: response.choices[0].message?.content
  });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

app.listen(5000, () => console.log('AI server started on http://localhost:5000'))