"use client"

import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import type { MenuItem } from "@/lib/menu-data"

function formatPrice(n: number) {
  return "$" + n.toLocaleString("es-CO")
}

export function MenuCard({ item }: { item: MenuItem }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  // Build WhatsApp message
  const whatsappText = encodeURIComponent(
    `Hola Casa Burger! Quiero pedir: ${item.name}`
  )
  const whatsappUrl = `https://wa.me/573001234567?text=${whatsappText}`

  const hasDualPrice =
    !!item.pricePan ||
    !!item.priceSencillo ||
    !!item.price200g

  return (
    <div className="flex items-start justify-between gap-3 rounded-xl bg-casa-card px-4 py-3.5 transition-colors hover:bg-casa-card-hover">
      {/* Left: text info */}
      <div className="flex flex-1 flex-col gap-1 min-w-0">
        <h3
          className="text-[15px] font-bold text-foreground"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          {item.name}
        </h3>
        <p className="text-xs text-casa-muted leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Prices */}
        <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          {item.pricePan !== undefined && (
            <>
              <span className="flex items-baseline gap-1">
                <span className="text-[10px] uppercase tracking-wide text-casa-muted">Pan</span>
                <span className="text-base font-extrabold text-casa-orange">
                  {formatPrice(item.pricePan)}
                </span>
              </span>
              {item.priceTortilla !== undefined && (
                <span className="flex items-baseline gap-1">
                  <span className="text-[10px] uppercase tracking-wide text-casa-muted">Tortilla</span>
                  <span className="text-sm font-bold text-casa-orange/80">
                    {formatPrice(item.priceTortilla)}
                  </span>
                </span>
              )}
            </>
          )}
          {item.priceSencillo !== undefined && (
            <>
              <span className="flex items-baseline gap-1">
                <span className="text-[10px] uppercase tracking-wide text-casa-muted">Sencillo</span>
                <span className="text-base font-extrabold text-casa-orange">
                  {formatPrice(item.priceSencillo)}
                </span>
              </span>
              {item.priceConPapas !== undefined && (
                <span className="flex items-baseline gap-1">
                  <span className="text-[10px] uppercase tracking-wide text-casa-muted">+Papas</span>
                  <span className="text-sm font-bold text-casa-orange/80">
                    {formatPrice(item.priceConPapas)}
                  </span>
                </span>
              )}
            </>
          )}
          {item.price200g !== undefined && (
            <>
              <span className="flex items-baseline gap-1">
                <span className="text-[10px] uppercase tracking-wide text-casa-muted">200g</span>
                <span className="text-base font-extrabold text-casa-orange">
                  {formatPrice(item.price200g)}
                </span>
              </span>
              {item.price300g !== undefined && (
                <span className="flex items-baseline gap-1">
                  <span className="text-[10px] uppercase tracking-wide text-casa-muted">300g</span>
                  <span className="text-sm font-bold text-casa-orange/80">
                    {formatPrice(item.price300g)}
                  </span>
                </span>
              )}
            </>
          )}
          {item.price !== undefined && !hasDualPrice && (
            <span className="text-base font-extrabold text-casa-orange">
              {formatPrice(item.price)}
            </span>
          )}
        </div>
      </div>

      {/* Right: order button */}
      <div className="shrink-0 pt-1">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg bg-casa-orange px-3 py-2 text-xs font-bold text-casa-dark transition-all hover:brightness-110 active:scale-95"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Pedir
        </a>
      </div>
    </div>
  )
}
