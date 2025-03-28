import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, MapPin, MoreHorizontal, Plus, Search, Star, Truck } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DriversPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Drivers</h2>
          <p className="text-muted-foreground">Manage your delivery drivers and track their performance</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Driver
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search drivers..." className="pl-8 w-full md:w-[300px] lg:w-[400px]" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Drivers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
          <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Drivers</CardTitle>
                <Truck className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+2 this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                <Truck className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">3 deliveries in progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
                <Star className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8</div>
                <p className="text-xs text-muted-foreground">+0.2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Delivery Time</CardTitle>
                <MapPin className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32 min</div>
                <p className="text-xs text-muted-foreground">-8% from last week</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Driver Management</CardTitle>
              <CardDescription>View and manage all your delivery drivers.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Driver</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Deliveries</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "John Smith",
                      email: "john.smith@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "JS",
                      status: "Active",
                      location: "Downtown",
                      rating: 4.9,
                      deliveries: 342,
                      joined: "Jan 2022",
                    },
                    {
                      name: "Maria Garcia",
                      email: "maria.garcia@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "MG",
                      status: "Active",
                      location: "Westside",
                      rating: 4.7,
                      deliveries: 287,
                      joined: "Mar 2022",
                    },
                    {
                      name: "Robert Chen",
                      email: "robert.chen@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "RC",
                      status: "Active",
                      location: "Northside",
                      rating: 4.8,
                      deliveries: 256,
                      joined: "Apr 2022",
                    },
                    {
                      name: "Aisha Johnson",
                      email: "aisha.johnson@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "AJ",
                      status: "Inactive",
                      location: "Eastside",
                      rating: 4.6,
                      deliveries: 198,
                      joined: "Jun 2022",
                    },
                    {
                      name: "Carlos Rodriguez",
                      email: "carlos.rodriguez@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "CR",
                      status: "Active",
                      location: "Southside",
                      rating: 4.9,
                      deliveries: 312,
                      joined: "Feb 2022",
                    },
                    {
                      name: "Sarah Williams",
                      email: "sarah.williams@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "SW",
                      status: "Active",
                      location: "Downtown",
                      rating: 4.8,
                      deliveries: 275,
                      joined: "Mar 2022",
                    },
                    {
                      name: "David Kim",
                      email: "david.kim@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "DK",
                      status: "Onboarding",
                      location: "Westside",
                      rating: 0,
                      deliveries: 0,
                      joined: "Jul 2023",
                    },
                    {
                      name: "Lisa Patel",
                      email: "lisa.patel@example.com",
                      image: "/placeholder.svg?height=32&width=32",
                      initials: "LP",
                      status: "Inactive",
                      location: "Northside",
                      rating: 4.5,
                      deliveries: 156,
                      joined: "Aug 2022",
                    },
                  ].map((driver) => (
                    <TableRow key={driver.email}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={driver.image} alt={driver.name} />
                            <AvatarFallback>{driver.initials}</AvatarFallback>
                          </Avatar>
                          <div className="grid gap-0.5 text-xs">
                            <div className="font-medium">{driver.name}</div>
                            <div className="text-muted-foreground">{driver.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            driver.status === "Active"
                              ? "default"
                              : driver.status === "Inactive"
                                ? "secondary"
                                : "outline"
                          }
                          className={driver.status === "Active" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                        >
                          {driver.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{driver.location}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {driver.rating > 0 ? (
                            <>
                              <Star className="h-3 w-3 fill-current text-yellow-500 mr-1" />
                              <span>{driver.rating}</span>
                            </>
                          ) : (
                            "N/A"
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{driver.deliveries}</TableCell>
                      <TableCell>{driver.joined}</TableCell>
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
                            <DropdownMenuItem>View deliveries</DropdownMenuItem>
                            <DropdownMenuItem>View ratings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className={driver.status === "Active" ? "text-red-500" : "text-emerald-500"}
                            >
                              {driver.status === "Active" ? "Deactivate driver" : "Activate driver"}
                            </DropdownMenuItem>
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
              <CardTitle>Active Drivers</CardTitle>
              <CardDescription>Currently active delivery drivers.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Active drivers would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inactive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inactive Drivers</CardTitle>
              <CardDescription>Currently inactive delivery drivers.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Inactive drivers would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="onboarding" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Onboarding Drivers</CardTitle>
              <CardDescription>Drivers currently in the onboarding process.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Onboarding drivers would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

