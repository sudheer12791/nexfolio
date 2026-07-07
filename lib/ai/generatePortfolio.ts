import OpenAI from "openai";

export async function generatePortfolio(data: any) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
Create a professional portfolio for:
Name: ${data.name}
Headline: ${data.headline}
Skills: ${data.skills}
Projects: ${data.projects}
Experience: ${data.experience}
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