"use client"

import * as React from "react"
import { User } from "@prisma/client"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { userEmailSchema } from "@/lib/validations/user"
import { Card } from "@/ui/card"
import { toast } from "@/ui/toast"
import { Icons } from "@/components/icons"

interface UserEmailFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<User, "id" | "email">
}

type FormData = z.infer<typeof userEmailSchema>

export function UserEmailForm({
  user,
  className,
  ...props
}: UserEmailFormProps) {
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(userEmailSchema),
    defaultValues: {
      email: user.email,
    },
  })
  const [isSaving, setIsSaving] = React.useState<boolean>(false)
  const [isChanged, setIsChanged] = React.useState<boolean>(false)

  async function onSubmit(data: FormData) {
    setIsSaving(true)

    const response = await fetch(`/api/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
      }),
    })

    setIsSaving(false)

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        message: "Your email was not updated. Please try again.",
        type: "error",
      })
    }

    toast({
      message: "Your email has been updated.",
      type: "success",
    })

    router.refresh()
  }

  return (
    <form
      className={cn(className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Card>
        <Card.Header>
          <Card.Title>Your Email</Card.Title>
          <Card.Description>
            Please enter the email address you want to use to log in with Markt.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="grid gap-1">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="my-0 mb-2 block h-9 w-[350px] rounded-md border border-slate-300 py-2 px-3 text-sm placeholder:text-slate-400 hover:border-slate-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
              size={32}
              type="email"
              name="email"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                onChange: (e) => {
                  const email = getValues("email")
                  if (email !== user.email) {
                    setIsChanged(true)
                  } else {
                    setIsChanged(false)
                  }
                },
              })}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
        </Card.Content>
        <Card.Footer>
          {isChanged && (
            <button
              id="cancel"
              type="reset"
              className="relative inline-flex h-8 items-center rounded-md border border-transparent bg-slate-50 px-3 py-2 text-sm font-medium text-gray-500 hover:text-slate-900 focus:text-slate-900 focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0"
              onClick={(event) => {
                event.preventDefault()
                setValue("email", user.email, {
                  shouldValidate: true,
                  shouldDirty: true,
                })
                setIsChanged(false)
              }}
            >
              <span>Cancel</span>
            </button>
          )}
          <button
            id="submit"
            type="submit"
            className={cn(
              "relative inline-flex h-8 items-center rounded-md border border-transparent bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
              {
                "cursor-not-allowed opacity-60": !isChanged || isSaving,
              }
            )}
            disabled={!isChanged || isSaving}
          >
            {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <span>Save</span>
          </button>
        </Card.Footer>
      </Card>
    </form>
  )
}
