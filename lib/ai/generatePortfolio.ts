import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generatePortfolio(data: any) {
  const prompt = `
Create a professional portfolio for:

Name: ${data.name}
Headline: ${data.headline}
Skills: ${data.skills}
Projects: ${data.projects}
Experience: ${data.experience}

Generate:

1. About Me
2. Skills Summary
3. Project Descriptions
4. Career Objective
5. Professional Bio
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content;
}