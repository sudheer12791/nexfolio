import OpenAI from "openai";

export async function generatePortfolio(data: any) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is missing.");
  }

  const openai = new OpenAI({ apiKey });

  const prompt = `
Create a professional portfolio for:
Name: ${data.name}
Headline: ${data.headline}
Skills: ${data.skills}
Projects: ${data.projects}
Experience: ${data.experience}
`;

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  return response.output_text;
}