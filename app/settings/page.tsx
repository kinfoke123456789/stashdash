import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { BellRing, CreditCard, Lock, Mail, MapPin, Save, Settings, User } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <TabsTrigger value="general">
            <Settings className="mr-2 h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="profile">
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <BellRing className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="delivery">
            <MapPin className="mr-2 h-4 w-4" />
            Delivery Zones
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your store settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input id="store-name" defaultValue="StashDash Cannabis Delivery" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-email">Contact Email</Label>
                <Input id="store-email" type="email" defaultValue="contact@stashdash.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-phone">Contact Phone</Label>
                <Input id="store-phone" type="tel" defaultValue="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-address">Store Address</Label>
                <Textarea id="store-address" defaultValue="123 Main Street, Suite 101&#10;Anytown, CA 90210" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="business-hours">Business Hours</Label>
                <Textarea
                  id="business-hours"
                  defaultValue="Monday - Friday: 9:00 AM - 9:00 PM&#10;Saturday: 10:00 AM - 8:00 PM&#10;Sunday: 12:00 PM - 6:00 PM"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="store-active" defaultChecked />
                <Label htmlFor="store-active">Store Active</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tax Settings</CardTitle>
              <CardDescription>Configure tax rates for your products</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tax-rate">Default Tax Rate (%)</Label>
                <Input id="tax-rate" type="number" defaultValue="8.5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tax-id">Tax ID / License Number</Label>
                <Input id="tax-id" defaultValue="CA-12345-CANNABIS" />
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="tax-included" />
                <Label htmlFor="tax-included">Display prices with tax included</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="jane.doe@stashdash.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="admin">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue="Cannabis industry professional with 5+ years of experience in retail and delivery operations."
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-orders">New Orders</Label>
                    <p className="text-sm text-muted-foreground">Receive an email when a new order is placed</p>
                  </div>
                  <Switch id="email-orders" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-inventory">Low Inventory</Label>
                    <p className="text-sm text-muted-foreground">Receive an email when inventory is running low</p>
                  </div>
                  <Switch id="email-inventory" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-marketing">Marketing Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about marketing campaigns and promotions
                    </p>
                  </div>
                  <Switch id="email-marketing" />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-medium">Push Notifications</h3>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-orders">New Orders</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive a push notification when a new order is placed
                    </p>
                  </div>
                  <Switch id="push-orders" defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-delivery">Delivery Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive push notifications about delivery status changes
                    </p>
                  </div>
                  <Switch id="push-delivery" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Two-Factor Authentication</Label>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Session Management</Label>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                  <Button variant="outline">View Sessions</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Update Password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Manage your billing details and payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Current Plan</h3>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">StashDash Pro Plan</p>
                      <p className="text-sm text-muted-foreground">$99/month</p>
                    </div>
                    <Button variant="outline">Change Plan</Button>
                  </div>
                </div>

                <h3 className="text-lg font-medium">Payment Methods</h3>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-6 w-6" />
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 04/2025</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>

                <h3 className="text-lg font-medium">Billing History</h3>
                <div className="rounded-md border">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium">July 2023</p>
                      <p className="text-sm text-muted-foreground">StashDash Pro Plan</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-medium">$99.00</p>
                      <Button variant="ghost" size="sm">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email Receipt</span>
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium">June 2023</p>
                      <p className="text-sm text-muted-foreground">StashDash Pro Plan</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-medium">$99.00</p>
                      <Button variant="ghost" size="sm">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email Receipt</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivery" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Zone Settings</CardTitle>
              <CardDescription>Configure your delivery zones and fees</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-[400px] flex items-center justify-center border rounded-md bg-muted/40">
                <p className="text-muted-foreground">Delivery zone map will appear here</p>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-medium">Delivery Zones</h3>
                <div className="rounded-md border">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium">Zone 1 - Downtown</p>
                      <p className="text-sm text-muted-foreground">0-3 miles</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-medium">$5.00</p>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium">Zone 2 - Midtown</p>
                      <p className="text-sm text-muted-foreground">3-7 miles</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-medium">$8.00</p>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-medium">Zone 3 - Outer Areas</p>
                      <p className="text-sm text-muted-foreground">7-12 miles</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="font-medium">$12.00</p>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>

                <Button>
                  <MapPin className="mr-2 h-4 w-4" />
                  Add Delivery Zone
                </Button>

                <div className="space-y-2 pt-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="free-delivery-threshold" defaultChecked />
                    <Label htmlFor="free-delivery-threshold">Enable Free Delivery Threshold</Label>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="threshold-amount">Free Delivery for Orders Over</Label>
                    <Input id="threshold-amount" type="number" defaultValue="75" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

