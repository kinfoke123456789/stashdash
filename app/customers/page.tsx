import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, MoreHorizontal, Search, ShoppingBag, Users } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CustomersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <p className="text-muted-foreground">Manage your customer database and view purchase history</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search customers..." className="pl-8 w-full md:w-[300px] lg:w-[400px]" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Customers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="vip">VIP</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                <Users className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,834</div>
                <p className="text-xs text-muted-foreground">+156 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                <Users className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,429</div>
                <p className="text-xs text-muted-foreground">+43 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
                <ShoppingBag className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$64.50</div>
                <p className="text-xs text-muted-foreground">+$3.25 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Repeat Purchase Rate</CardTitle>
                <ShoppingBag className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Customer Database</CardTitle>
              <CardDescription>View and manage your customer information.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>Spent</TableHead>
                    <TableHead>Last Order</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Alex Johnson",
                      email: "alex@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "AJ",
                      status: "Active",
                      orders: 24,
                      spent: "$1,284.50",
                      lastOrder: "2 days ago",
                      joined: "Jan 2022",
                      vip: true,
                    },
                    {
                      name: "Sarah Williams",
                      email: "sarah@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "SW",
                      status: "Active",
                      orders: 18,
                      spent: "$964.25",
                      lastOrder: "1 week ago",
                      joined: "Mar 2022",
                      vip: false,
                    },
                    {
                      name: "Michael Brown",
                      email: "michael@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "MB",
                      status: "Inactive",
                      orders: 5,
                      spent: "$242.75",
                      lastOrder: "3 months ago",
                      joined: "Apr 2022",
                      vip: false,
                    },
                    {
                      name: "Emily Davis",
                      email: "emily@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "ED",
                      status: "Active",
                      orders: 32,
                      spent: "$1,789.99",
                      lastOrder: "Yesterday",
                      joined: "Feb 2022",
                      vip: true,
                    },
                    {
                      name: "David Wilson",
                      email: "david@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "DW",
                      status: "Active",
                      orders: 12,
                      spent: "$656.50",
                      lastOrder: "2 weeks ago",
                      joined: "May 2022",
                      vip: false,
                    },
                    {
                      name: "Lisa Anderson",
                      email: "lisa@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "LA",
                      status: "New",
                      orders: 1,
                      spent: "$34.99",
                      lastOrder: "1 day ago",
                      joined: "Jul 2023",
                      vip: false,
                    },
                    {
                      name: "Robert Taylor",
                      email: "robert@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "RT",
                      status: "Active",
                      orders: 8,
                      spent: "$429.75",
                      lastOrder: "3 days ago",
                      joined: "Jun 2022",
                      vip: false,
                    },
                    {
                      name: "Jennifer Martinez",
                      email: "jennifer@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "JM",
                      status: "Active",
                      orders: 15,
                      spent: "$867.50",
                      lastOrder: "5 days ago",
                      joined: "Apr 2022",
                      vip: false,
                    },
                  ].map((customer) => (
                    <TableRow key={customer.email}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={customer.image} alt={customer.name} />
                            <AvatarFallback>{customer.initials}</AvatarFallback>
                          </Avatar>
                          <div className="grid gap-0.5 text-xs">
                            <div className="flex items-center font-medium">
                              {customer.name}
                              {customer.vip && <Badge className="ml-2 bg-yellow-500 hover:bg-yellow-600">VIP</Badge>}
                            </div>
                            <div className="text-muted-foreground">{customer.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            customer.status === "Active"
                              ? "default"
                              : customer.status === "Inactive"
                                ? "secondary"
                                : "outline"
                          }
                          className={
                            customer.status === "Active"
                              ? "bg-emerald-500 hover:bg-emerald-600"
                              : customer.status === "New"
                                ? "bg-blue-500 hover:bg-blue-600"
                                : ""
                          }
                        >
                          {customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{customer.orders}</TableCell>
                      <TableCell>{customer.spent}</TableCell>
                      <TableCell>{customer.lastOrder}</TableCell>
                      <TableCell>{customer.joined}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit details</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View orders</DropdownMenuItem>
                            <DropdownMenuItem>Send message</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>{customer.vip ? "Remove VIP status" : "Add VIP status"}</DropdownMenuItem>
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
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Customers</CardTitle>
              <CardDescription>Customers who have ordered in the last 90 days.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Active customers would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="new" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>New Customers</CardTitle>
              <CardDescription>Customers who joined in the last 30 days.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">New customers would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vip" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>VIP Customers</CardTitle>
              <CardDescription>Your most valuable customers.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">VIP customers would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

