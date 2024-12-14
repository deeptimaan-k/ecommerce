import { Button } from "@/components/ui/button"

export function HeroBanner() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="flex items-center justify-between">
        <div className="max-w-lg p-12">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">OPPO AI Phone</h1>
          <h2 className="text-3xl font-semibold mb-4 animate-fade-in animation-delay-200">Find X8 series</h2>
          <p className="text-xl mb-6 animate-fade-in animation-delay-400">Co-developed with HASSELBLAD</p>
          <h3 className="text-2xl font-semibold mb-6 animate-fade-in animation-delay-600">Powerful Camera, Powerful AI</h3>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300 animate-fade-in animation-delay-800">Shop Now</Button>
        </div>
        <div className="flex-shrink-0">
          <img src="https://i.ytimg.com/vi/yY6CWvow6bc/maxresdefault.jpg" alt="OPPO Find X8 series" className="h-96 w-auto object-contain animate-slide-in-right" />
        </div>
      </div>
    </div>
  )
}

