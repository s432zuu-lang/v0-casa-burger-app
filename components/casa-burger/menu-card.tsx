"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"

interface MenuItem {
  id: string
  name: string
  description: string
  pricePan?: number
  priceTortilla?: number
  price?: number
  image: string
}

export function MenuCard({ item }: { item: MenuItem }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className="flex gap-4 rounded-xl bg-casa-card p-3 transition-colors hover:bg-casa-card-hover">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between min-w-0">
        <div>
          <h3
            className="text-base font-bold text-foreground truncate"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            {item.name}
          </h3>
          <p className="mt-0.5 text-xs text-casa-muted line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="flex items-end justify-between mt-2">
          <div>
            {item.pricePan && (
              <div className="flex items-baseline gap-1">
                <span className="text-[10px] text-casa-muted">Pan:</span>
                <span className="text-lg font-extrabold text-casa-orange">
                  {"$" + item.pricePan.toLocaleString("es-CO")}
                </span>
              </div>
            )}
            {item.priceTortilla && (
              <div className="flex items-baseline gap-1">
                <span className="text-[10px] text-casa-muted">Tortilla:</span>
                <span className="text-sm font-bold text-casa-orange">
                  {"$" + item.priceTortilla.toLocaleString("es-CO")}
                </span>
              </div>
            )}
            {item.price && !item.pricePan && (
              <span className="text-lg font-extrabold text-casa-orange">
                {"$" + item.price.toLocaleString("es-CO")}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              added
                ? "bg-green-600 text-foreground scale-95"
                : "bg-casa-orange text-casa-dark hover:brightness-110"
            }`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            {added ? "Listo!" : "Pedir"}
          </button>
        </div>
      </div>
    </div>
  )
}
