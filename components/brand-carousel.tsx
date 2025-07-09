"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface BrandCarouselProps {
  trustedBy: string;
}

const brands = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", invertOnDark: true },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg" },
  { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg", invertOnDark: true },
  { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", invertOnDark: true },
]

export default function BrandCarousel({ trustedBy }: BrandCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollPosition = 0
    let animationId: number

    const scroll = () => {
      scrollPosition += 1.5 // Velocidad constante
      
      // Scroll infinito - cuando llega al final, resetea suavemente
      const maxScroll = scrollContainer.scrollWidth / 3 // Dividido por 3 porque triplicamos el array
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="w-full bg-background py-16 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-2">{trustedBy}</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto"></div>
        </div>

        <div className="relative overflow-hidden bg-muted/20 dark:bg-muted/10 rounded-xl py-8 border border-border/30">
          {/* Gradientes mejorados para modo claro y oscuro */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none"></div>

          {/* Gradientes adicionales para transición más suave */}
          <div className="absolute left-32 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-background/20 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-32 top-0 bottom-0 w-24 bg-gradient-to-l from-transparent via-background/20 to-transparent z-10 pointer-events-none"></div>

          <div ref={scrollRef} className="flex overflow-x-hidden space-x-16 px-8" style={{ scrollBehavior: "auto" }}>
            {/* Triplicamos el array para scroll infinito perfecto */}
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-40 h-20 bg-background dark:bg-card rounded-lg shadow-sm dark:shadow-md border border-border/40 hover:shadow-lg hover:border-border/60 transition-all duration-300 p-4"
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={60}
                  className={`max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ${
                    brand.invertOnDark ? 'dark:invert' : ''
                  }`}
                  unoptimized // Para URLs externas
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}