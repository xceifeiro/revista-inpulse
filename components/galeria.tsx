"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ScrollFadeIn, ScrollScale } from "@/components/scroll-animations"
import { Camera } from "lucide-react"

export default function Galeria() {
  return (
    <section id="galeria" className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b to-gray-300 from-gray-200">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollFadeIn>
            <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">
              <Camera className="w-4 h-4 mr-2" />
              GALERIA
            </Badge>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200}>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Veja como foi a{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                última edição
              </span>
            </h2>
          </ScrollFadeIn>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <ScrollScale key={item} delay={item * 100}>
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&query=elegant magazine photo session ${item}`}
                    alt={`Galeria ${item}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-xs sm:text-sm font-semibold">Edição Anterior</p>
                  </div>
                </div>
              </ScrollScale>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
