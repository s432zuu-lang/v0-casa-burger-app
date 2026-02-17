"use client"

import { MenuCard } from "./menu-card"
import type { MenuItem } from "@/lib/menu-data"

interface MenuSectionProps {
  items: MenuItem[]
  notice?: string
}

export function MenuSection({ items, notice }: MenuSectionProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <span className="text-5xl mb-3">🍽️</span>
        <p className="text-casa-muted text-sm text-center">
          No hay productos en esta categoria todavia.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 px-4 pb-28 pt-4">
      {notice && (
        <div className="rounded-xl bg-casa-orange/10 border border-casa-orange/20 px-4 py-2.5 text-center">
          <p className="text-sm font-semibold text-casa-orange">{notice}</p>
        </div>
      )}
      {items.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  )
}
