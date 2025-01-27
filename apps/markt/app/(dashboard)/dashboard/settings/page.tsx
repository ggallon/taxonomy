import { redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { UserEmailForm } from "@/components/dashboard/user-email-form"
import { UserNameForm } from "@/components/dashboard/user-name-form"

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions.pages.signIn)
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user.name }} />
        <UserEmailForm
          className="mb-8"
          user={{ id: user.id, email: user.email }}
        />
      </div>
    </DashboardShell>
  )
}
