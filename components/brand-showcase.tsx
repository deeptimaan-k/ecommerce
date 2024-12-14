import { Card, CardContent } from "@/components/ui/card"

interface BrandShowcaseProps {
  title: string
  brands: { name: string; logo: string }[]
}

export function BrandShowcase({ title, brands }: BrandShowcaseProps) {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {brands.map((brand) => (
            <Card key={brand.name} className="hover:shadow-md transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-4 flex items-center justify-center">
                <img src={brand.logo} alt={brand.name} className="h-12 w-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
    </section>
  )
}

