import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // This should allow you to successfully use NextAuth.js's Email provider behind strict corporate IT settings.
  // https://next-auth.js.org/tutorials/avoid-corporate-link-checking-email-provider
  if (req.method === "HEAD") {
    return res.status(200)
  }

  return await NextAuth(req, res, authOptions)
}
