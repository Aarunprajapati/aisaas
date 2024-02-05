import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
 
export async function POST(req: Request) {
  const { messages } = await req.json();

  const freeTrial = await checkApiLimit();
  

  if (!freeTrial) {
    return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
  }
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });
   await incrementApiLimit();
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}