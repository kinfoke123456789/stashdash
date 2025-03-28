import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, MoreHorizontal, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function OrdersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
          <p className="text-muted-foreground">View and manage customer orders</p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Orders
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search orders..." className="pl-8 w-full md:w-[300px] lg:w-[400px]" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="processing">Processing</TabsTrigger>
          <TabsTrigger value="in-transit">In Transit</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>You have 156 total orders, with 18 requiring attention.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Products</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      id: "ORD-5392",
                      customer: {
                        name: "Alex Johnson",
                        email: "alex@example.com",
                        image: "/placeholder.svg?height=32&width=32",
                        initials: "AJ",
                      },
                      date: "2 minutes ago",
                      products: "Blue Dream, OG Kush",
                      status: "In Transit",
                      total: "$78.50",
                    },
                    {
                      id: "ORD-5391",
                      customer: {
                        name: "Sarah Williams",
                        email: "sarah@example.com",
                        image: "/placeholder.svg?height=32&width=32",
                        initials: "SW",
                      },
                      date: "25 minutes ago",
                      products: "Sour Diesel, Edibles",
                      status: "Delivered",
                      total: "$64.25",
                    },
                    {
                      id: "ORD-5390",
                      customer: {
                        name: "Michael Brown",
                        email: "michael@example.com",
                        image: "/placeholder.svg?height=32&width=32",
                        initials: "MB",
                      },
                      date: "1 hour ago",
                      products: "Purple Haze, Pre-rolls",
                      status: "Processing",
                      total: "$42.75",
                    },
                    {
                      id: "ORD-5389",
                      customer: {
                        name: "Emily Davis",
                        email: "emily@example.com",
                        image: "/placeholder.svg?height=32&width=32",
                        initials: "ED",
                      },
                      date: "2 hours ago",
                      products: "Girl Scout Cookies, Tincture",
                      status: "Delivered",
                      total: "$89.99",
                    },
                    {
                      id: "ORD-5388",
                      customer: {
                        name: "David Wilson",
                        email: "david@example.com",
                        image: "/placeholder.svg?height=32&width=32",
                        initials: "DW",
                      },
                      date: "3 hours ago",
                      products: "Northern Lights, Vape Cartridge",
                      status: "Delivered",
                      total: "$56.50",
                    },
                    {
                      id: "ORD-5387",
                      customer: {
                        name: "Lisa Anderson",
                        email: "lisa@example.com",
                        image: "/placeholder.svg?height=32&width=32",
                        initials: "LA",
                      },
                      date: "5 hours ago",
                      products: "Hybrid Gummies, CBD Oil",
                      status: "Cancelled",
                      total: "$34.99",
                    },
                    {
                      id: "ORD-5386",
                      customer: {
                        name: "Robert Taylor",
                        email: "robert@example.com",
                        image: "/placeholder.svg?height=32&width=32",
                        initials: "RT",
                      },
                      date: "Yesterday",
                      products: "Indica Blend, Rolling Papers",
                      status: "Delivered",
                      total: "$29.75",
                    },
                    {
                      id: "ORD-5385",
                      customer: {
                        name: "Jennifer Martinez",
                        email: "jennifer@example.com",
                        image: "/placeholder.svg?height=32&width=32",
                        initials: "JM",
                      },
                      date: "Yesterday",
                      products: "Sativa Vape, Grinder",
                      status: "Delivered",
                      total: "$67.50",
                    },
                  ].map((order) => (
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
                      <TableCell className="text-xs">{order.date}</TableCell>
                      <TableCell className="text-xs">{order.products}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            order.status === "Delivered"
                              ? "default"
                              : order.status === "In Transit"
                                ? "secondary"
                                : order.status === "Processing"
                                  ? "outline"
                                  : "destructive"
                          }
                          className={order.status === "Delivered" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{order.total}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View order details</DropdownMenuItem>
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Update status</DropdownMenuItem>
                            <DropdownMenuItem>Print receipt</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="processing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Processing Orders</CardTitle>
              <CardDescription>You have 5 orders currently being processed.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Processing orders would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="in-transit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>In Transit Orders</CardTitle>
              <CardDescription>You have 8 orders currently in transit.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">In transit orders would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="delivered" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivered Orders</CardTitle>
              <CardDescription>You have 142 completed deliveries.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Delivered orders would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cancelled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cancelled Orders</CardTitle>
              <CardDescription>You have 3 cancelled orders.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Cancelled orders would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

