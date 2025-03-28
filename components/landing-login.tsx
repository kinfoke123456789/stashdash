"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Cannabis, CheckCircle2, EyeIcon, EyeOffIcon, ShieldCheck, TrendingUp } from "lucide-react"

export function LandingLogin() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication delay
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Product info */}
      <div className="flex-1 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 p-8 md:p-12 text-white flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-12">
            <Cannabis className="h-8 w-8 flex-shrink-0" />
            <h1 className="text-2xl font-bold tracking-tight">StashDash</h1>
          </div>

          <div className="space-y-8 max-w-xl">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Manage your cannabis delivery business with ease</h2>
              <p className="text-emerald-100 text-lg">
                StashDash Admin provides everything you need to run your cannabis delivery service efficiently and
                securely.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Complete Order Management</h3>
                  <p className="text-emerald-100">Track orders from placement to delivery with real-time updates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Inventory Tracking</h3>
                  <p className="text-emerald-100">
                    Manage your product catalog with automated stock alerts and reporting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Driver Management</h3>
                  <p className="text-emerald-100">
                    Optimize delivery routes and track driver performance in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Analytics & Reporting</h3>
                  <p className="text-emerald-100">Make data-driven decisions with comprehensive business analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-emerald-600">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-emerald-700 rounded-full">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <h4 className="font-medium">Secure & Compliant</h4>
                <p className="text-sm text-emerald-100">Meets all regulatory requirements</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-emerald-700 rounded-full">
                <TrendingUp className="h-5 w-5 text-emerald-300" />
              </div>
              <div>
                <h4 className="font-medium">Boost Efficiency</h4>
                <p className="text-sm text-emerald-100">Increase deliveries by up to 30%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign in to StashDash</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="admin@stashdash.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-xs text-emerald-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>

              <p className="mt-4 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="#" className="text-emerald-600 hover:underline">
                  Contact sales
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

