import { Anthropic } from "@anthropic-ai/sdk";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { input } = req.body;
    const apiKey = process.env.SECRET_KEY;

    const anthropic = new Anthropic({ apiKey });

    try {
      const response = await anthropic.completions.create({
        model: "claude-v1",
        prompt: `\n\nHuman: ${input}\n\nAssistant:`,
        max_tokens_to_sample: 1000,
        stop_sequences: ["\n\nHuman:"],
      });

      res.status(200).json({ output: response.completion });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
