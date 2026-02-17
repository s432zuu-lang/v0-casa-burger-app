"use client"

import Image from "next/image"
import { MenuCard } from "./menu-card"
import type { MenuItem, CategoryBanner } from "@/lib/menu-data"

interface MenuSectionProps {
  items: MenuItem[]
  banner?: CategoryBanner
}

export function MenuSection({ items, banner }: MenuSectionProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <p className="text-casa-muted text-sm text-center">
          No hay productos en esta categoria.
        </p>
      </div>
    )
  }

  // Group items by subcategory if they have one
  const grouped = items.reduce<Record<string, MenuItem[]>>((acc, item) => {
    const key = item.subcategory || "_default"
    if (!acc[key]) acc[key] = []
    acc[key].push(item)
    return acc
  }, {})

  const hasSubgroups = Object.keys(grouped).length > 1 || !grouped["_default"]

  return (
    <div className="flex flex-col gap-3 px-4 pb-28 pt-3">
      {/* Section banner */}
      {banner && (
        <div className="relative h-44 w-full overflow-hidden rounded-2xl mb-1">
          <Image
            src={banner.image}
            alt="Seccion del menu"
            fill
            className="object-cover"
            sizes="(max-width: 448px) 100vw, 448px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-casa-dark/80 via-casa-dark/20 to-transparent" />
        </div>
      )}

      {/* Notice */}
      {banner?.notice && (
        <div className="rounded-xl bg-casa-orange/10 border border-casa-orange/20 px-4 py-2.5 text-center">
          <p className="text-xs font-semibold text-casa-orange leading-relaxed">
            {banner.notice}
          </p>
        </div>
      )}

      {/* Arma tu almuerzo has a special step layout */}
      {hasSubgroups ? (
        Object.entries(grouped).map(([sub, subItems]) => (
          <div key={sub} className="flex flex-col gap-2">
            {sub !== "_default" && (
              <h3
                className="text-sm font-bold text-casa-orange mt-2 px-1"
                style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
              >
                {sub}
              </h3>
            )}
            {subItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ))
      ) : (
        items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))
      )}

      {/* Acompanamiento info for arma tu almuerzo */}
      {hasSubgroups && items[0]?.category === "arma-tu-almuerzo" && (
        <div className="rounded-xl bg-casa-card border border-border px-4 py-3 mt-1">
          <p
            className="text-sm font-bold text-foreground mb-1.5"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Elige tu Acompanamiento
          </p>
          <div className="flex flex-wrap gap-2">
            {["Yuca frita", "Patacon", "Casquitos de papa", "Papa a la francesa", "Papa amarilla"].map((a) => (
              <span
                key={a}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-casa-muted"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
