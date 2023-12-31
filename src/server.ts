import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { uploadVideoRoute } from "./routes/upload-video"
import { createTranscriptionRoute } from "./routes/create-transcription"
import { generateAICompletition } from "./routes/generate-ai-completition"

const app = fastify()

app.register(fastifyCors, {
  origin: "*",
})
app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletition)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server Running!")
  })
