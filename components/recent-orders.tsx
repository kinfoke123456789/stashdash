"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

const orders = [
  {
    id: "ORD-5392",
    customer: {
      name: "Alex Johnson",
      email: "alex@example.com",
      image: "/placeholder.svg?height=32&width=32",
      initials: "AJ",
    },
    status: "In Transit",
    products: "Blue Dream, OG Kush",
    total: "$78.50",
    date: "2 minutes ago",
  },
  {
    id: "ORD-5391",
    customer: {
      name: "Sarah Williams",
      email: "sarah@example.com",
      image: "/placeholder.svg?height=32&width=32",
      initials: "SW",
    },
    status: "Delivered",
    products: "Sour Diesel, Edibles",
    total: "$64.25",
    date: "25 minutes ago",
  },
  {
    id: "ORD-5390",
    customer: {
      name: "Michael Brown",
      email: "michael@example.com",
      image: "/placeholder.svg?height=32&width=32",
      initials: "MB",
    },
    status: "Processing",
    products: "Purple Haze, Pre-rolls",
    total: "$42.75",
    date: "1 hour ago",
  },
  {
    id: "ORD-5389",
    customer: {
      name: "Emily Davis",
      email: "emily@example.com",
      image: "/placeholder.svg?height=32&width=32",
      initials: "ED",
    },
    status: "Delivered",
    products: "Girl Scout Cookies, Tincture",
    total: "$89.99",
    date: "2 hours ago",
  },
  {
    id: "ORD-5388",
    customer: {
      name: "David Wilson",
      email: "david@example.com",
      image: "/placeholder.svg?height=32&width=32",
      initials: "DW",
    },
    status: "Delivered",
    products: "Northern Lights, Vape Cartridge",
    total: "$56.50",
    date: "3 hours ago",
  },
]

export function RecentOrders() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Products</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={order.customer.image} alt={order.customer.name} />
                  <AvatarFallback>{order.customer.initials}</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-xs">
                  <div className="font-medium">{order.customer.name}</div>
                  <div className="text-muted-foreground">{order.customer.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "Delivered" ? "default" : order.status === "In Transit" ? "secondary" : "outline"
                }
                className={order.status === "Delivered" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-xs">{order.products}</TableCell>
            <TableCell className="text-right">{order.total}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Actions</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

