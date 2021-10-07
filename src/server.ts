// Third-party requirements
import Fastify, { FastifyInstance } from "fastify";

// CONSTANTS
export const fakeDatabase = [
  { name: "Commando" },
  { name: "Rambo" },
  { name: "Full-Contact"}
]

// Function
export function buildServer(options = {}): FastifyInstance{
  const server = Fastify(options)
  // Routes
  server.get('/movies', getAllMovies)

  return server
}

async function getAllMovies(): Promise<Member[]>{
  return fakeDatabase
}

// Type definition
interface Member {
  name: string
}
