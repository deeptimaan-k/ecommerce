import Link from "next/link"
import { Search, Heart, ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const categories = [
  "Smartphones",
  "Smart Watches",
  "Laptops",
  "Android TVs",
  "Audio Store",
  "Tablets",
  "Personal Care",
  "Home Appliance",
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Sangeetha</span>
            <span className="text-sm">.com</span>
          </Link>

          <div className="flex-1 mx-6">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for smartphones, laptops etc"
                className="pl-8 bg-gray-800 text-white w-full max-w-2xl"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300">
              <User className="h-5 w-5 mr-2" />
              Login/Signup
            </Button>
          </div>
        </div>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between py-2 text-sm overflow-x-auto">
          {categories.map((category) => (
            <Link key={category} href={`/category/${category.toLowerCase().replace(" ", "-")}`} className="hover:text-yellow-400 transition-colors">
              {category}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

