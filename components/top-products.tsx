"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const products = [
  {
    name: "Blue Dream",
    category: "Flower",
    image: "/placeholder.svg?height=40&width=40",
    initials: "BD",
    sales: "$4,200",
    growth: "+12%",
  },
  {
    name: "OG Kush",
    category: "Flower",
    image: "/placeholder.svg?height=40&width=40",
    initials: "OK",
    sales: "$3,850",
    growth: "+8%",
  },
  {
    name: "Sour Diesel",
    category: "Flower",
    image: "/placeholder.svg?height=40&width=40",
    initials: "SD",
    sales: "$3,225",
    growth: "+5%",
  },
  {
    name: "Girl Scout Cookies",
    category: "Flower",
    image: "/placeholder.svg?height=40&width=40",
    initials: "GS",
    sales: "$2,940",
    growth: "+15%",
  },
  {
    name: "Hybrid Gummies",
    category: "Edibles",
    image: "/placeholder.svg?height=40&width=40",
    initials: "HG",
    sales: "$2,830",
    growth: "+24%",
  },
]

export function TopProducts() {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.name} className="flex items-center">
          <Avatar className="h-9 w-9 mr-3">
            <AvatarImage src={product.image} alt={product.name} />
            <AvatarFallback>{product.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{product.name}</p>
            <p className="text-xs text-muted-foreground">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{product.sales}</p>
            <p className="text-xs text-emerald-500">{product.growth}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

