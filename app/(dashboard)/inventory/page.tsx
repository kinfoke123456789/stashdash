import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, Download, Plus, Search } from "lucide-react"

export default function InventoryPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
          <p className="text-muted-foreground">Manage your product inventory and stock levels</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
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
          <Input type="search" placeholder="Search products..." className="pl-8 w-full md:w-[300px] lg:w-[400px]" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="flower">Flower</TabsTrigger>
          <TabsTrigger value="edibles">Edibles</TabsTrigger>
          <TabsTrigger value="concentrates">Concentrates</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Inventory Management</CardTitle>
              <CardDescription>You have 43 products in your inventory.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">SKU</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-center">Stock</TableHead>
                    <TableHead>
                      <div className="flex items-center justify-end">
                        Price
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      sku: "BD-001",
                      name: "Blue Dream",
                      category: "Flower",
                      stock: 124,
                      price: "$45.00",
                      status: "In Stock",
                    },
                    {
                      sku: "OG-002",
                      name: "OG Kush",
                      category: "Flower",
                      stock: 89,
                      price: "$48.00",
                      status: "In Stock",
                    },
                    {
                      sku: "SD-003",
                      name: "Sour Diesel",
                      category: "Flower",
                      stock: 56,
                      price: "$50.00",
                      status: "In Stock",
                    },
                    {
                      sku: "GSC-004",
                      name: "Girl Scout Cookies",
                      category: "Flower",
                      stock: 12,
                      price: "$52.00",
                      status: "Low Stock",
                    },
                    {
                      sku: "HG-005",
                      name: "Hybrid Gummies",
                      category: "Edibles",
                      stock: 230,
                      price: "$25.00",
                      status: "In Stock",
                    },
                    {
                      sku: "VC-006",
                      name: "Vape Cartridge - Indica",
                      category: "Concentrates",
                      stock: 78,
                      price: "$40.00",
                      status: "In Stock",
                    },
                    {
                      sku: "VC-007",
                      name: "Vape Cartridge - Sativa",
                      category: "Concentrates",
                      stock: 3,
                      price: "$40.00",
                      status: "Low Stock",
                    },
                    {
                      sku: "PR-008",
                      name: "Pre-Rolls Pack",
                      category: "Flower",
                      stock: 0,
                      price: "$30.00",
                      status: "Out of Stock",
                    },
                    {
                      sku: "TN-009",
                      name: "CBD Tincture",
                      category: "Concentrates",
                      stock: 45,
                      price: "$60.00",
                      status: "In Stock",
                    },
                    {
                      sku: "GR-010",
                      name: "Herb Grinder",
                      category: "Accessories",
                      stock: 67,
                      price: "$15.00",
                      status: "In Stock",
                    },
                  ].map((product) => (
                    <TableRow key={product.sku}>
                      <TableCell className="font-medium">{product.sku}</TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell className="text-center">{product.stock}</TableCell>
                      <TableCell className="text-right">{product.price}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={
                            product.status === "In Stock"
                              ? "default"
                              : product.status === "Low Stock"
                                ? "secondary"
                                : "destructive"
                          }
                          className={product.status === "In Stock" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                        >
                          {product.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="flower" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Flower Products</CardTitle>
              <CardDescription>You have 18 flower products in your inventory.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Flower-specific inventory would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="edibles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Edibles</CardTitle>
              <CardDescription>You have 12 edible products in your inventory.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Edibles-specific inventory would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="concentrates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Concentrates</CardTitle>
              <CardDescription>You have 8 concentrate products in your inventory.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Concentrates-specific inventory would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="accessories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Accessories</CardTitle>
              <CardDescription>You have 5 accessory products in your inventory.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Accessories-specific inventory would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

