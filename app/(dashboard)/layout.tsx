import type React from "react"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 md:px-8">
          <div className="hidden md:block">
            <MainNav />
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="hidden border-r md:block">
          <div className="flex h-full w-[220px]">
            <MainNav />
          </div>
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

