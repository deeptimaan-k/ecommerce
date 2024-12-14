import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react'

const footerSections = [
  {
    title: "Sangeetha",
    links: [
      "Why Sangeetha",
      "Terms and Conditions",
      "Privacy Policy",
      "Returns and Refunds",
      "Grievance Redressal",
      "Disclosure",
      "Blog",
    ],
  },
  {
    title: "Shop By",
    links: ["Find A Store", "Home", "New Arrivals"],
  },
  {
    title: "Help",
    links: ["My Orders", "Customer Care", "Coupons"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us On</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>Copyright 2024 © Sangeetha Mobiles. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

