"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3, Cannabis, ClipboardList, Home, Package, Settings, Truck, Users } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-2">
      <Link href="/dashboard" className="flex items-center space-x-2 px-2 py-4">
        <Cannabis className="h-6 w-6 text-emerald-600" />
        <span className="font-bold text-xl">StashDash</span>
      </Link>
      <nav className="grid gap-1 px-2">
        <Button variant={pathname === "/dashboard" ? "secondary" : "ghost"} className="justify-start" asChild>
          <Link href="/dashboard">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </Button>
        <Button variant={pathname === "/dashboard/orders" ? "secondary" : "ghost"} className="justify-start" asChild>
          <Link href="/dashboard/orders">
            <ClipboardList className="mr-2 h-4 w-4" />
            Orders
          </Link>
        </Button>
        <Button variant={pathname === "/dashboard/inventory" ? "secondary" : "ghost"} className="justify-start" asChild>
          <Link href="/dashboard/inventory">
            <Package className="mr-2 h-4 w-4" />
            Inventory
          </Link>
        </Button>
        <Button variant={pathname === "/dashboard/drivers" ? "secondary" : "ghost"} className="justify-start" asChild>
          <Link href="/dashboard/drivers">
            <Truck className="mr-2 h-4 w-4" />
            Drivers
          </Link>
        </Button>
        <Button variant={pathname === "/dashboard/customers" ? "secondary" : "ghost"} className="justify-start" asChild>
          <Link href="/dashboard/customers">
            <Users className="mr-2 h-4 w-4" />
            Customers
          </Link>
        </Button>
        <Button variant={pathname === "/dashboard/analytics" ? "secondary" : "ghost"} className="justify-start" asChild>
          <Link href="/dashboard/analytics">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </Link>
        </Button>
        <Button variant={pathname === "/dashboard/settings" ? "secondary" : "ghost"} className="justify-start" asChild>
          <Link href="/dashboard/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
      </nav>
    </div>
  )
}

