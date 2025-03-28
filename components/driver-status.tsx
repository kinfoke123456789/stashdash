"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const drivers = [
  {
    name: "John Smith",
    status: "Delivering",
    location: "Downtown",
    orders: 2,
    image: "/placeholder.svg?height=32&width=32",
    initials: "JS",
    lastUpdate: "2 min ago",
  },
  {
    name: "Maria Garcia",
    status: "Available",
    location: "Westside",
    orders: 0,
    image: "/placeholder.svg?height=32&width=32",
    initials: "MG",
    lastUpdate: "Just now",
  },
  {
    name: "Robert Chen",
    status: "Delivering",
    location: "Northside",
    orders: 1,
    image: "/placeholder.svg?height=32&width=32",
    initials: "RC",
    lastUpdate: "5 min ago",
  },
  {
    name: "Aisha Johnson",
    status: "Break",
    location: "Eastside",
    orders: 0,
    image: "/placeholder.svg?height=32&width=32",
    initials: "AJ",
    lastUpdate: "15 min ago",
  },
  {
    name: "Carlos Rodriguez",
    status: "Available",
    location: "Southside",
    orders: 0,
    image: "/placeholder.svg?height=32&width=32",
    initials: "CR",
    lastUpdate: "3 min ago",
  },
]

export function DriverStatus() {
  return (
    <div className="space-y-4">
      {drivers.map((driver) => (
        <div key={driver.name} className="flex items-center">
          <Avatar className="h-9 w-9 mr-3">
            <AvatarImage src={driver.image} alt={driver.name} />
            <AvatarFallback>{driver.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center">
              <p className="text-sm font-medium leading-none mr-2">{driver.name}</p>
              <Badge
                variant={
                  driver.status === "Delivering" ? "secondary" : driver.status === "Available" ? "default" : "outline"
                }
                className={driver.status === "Available" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
              >
                {driver.status}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              {driver.location} • {driver.status === "Delivering" ? `${driver.orders} orders` : "No orders"}
            </p>
          </div>
          <div className="text-xs text-muted-foreground">{driver.lastUpdate}</div>
        </div>
      ))}
    </div>
  )
}

