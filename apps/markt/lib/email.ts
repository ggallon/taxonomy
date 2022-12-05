import { Client } from "postmark"
import { siteConfig } from "@/config/site"

const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN)

export async function sendEmailWithTemplate({
  templateId,
  toEmail,
  fromEmail,
  url,
}: {
  templateId: number
  toEmail: string | string[]
  fromEmail: string
  url: string
}): Promise<boolean | Error> {
  const result = await postmarkClient.sendEmailWithTemplate({
    TemplateId: templateId,
    To: Array.isArray(toEmail) ? toEmail.join() : toEmail,
    From: fromEmail,
    TemplateModel: {
      action_url: url,
      product_name: siteConfig.name,
    },
    Headers: [
      {
        // Set this to prevent Gmail from threading emails.
        // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
        Name: "X-Entity-Ref-ID",
        Value: new Date().getTime() + "",
      },
    ],
  })

  if (result.ErrorCode) {
    throw new Error(result.Message)
  }

  return true
}
