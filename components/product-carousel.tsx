import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  name: string
  price: number
  originalPrice: number
  image: string
  discount: number
}

interface ProductCarouselProps {
  title: string
  products: Product[]
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
          <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden transform transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-4">
                <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
                <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4 pt-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                <span className="text-sm text-red-600 font-semibold">{product.discount}% off</span>
              </CardFooter>
            </Card>
          ))}
        </div>
    </section>
  )
}

