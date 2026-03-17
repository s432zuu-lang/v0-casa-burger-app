"use client"

import { comidaRapidaCategories, almuerzosCategories } from "@/lib/menu-data"

const mainTabs = [
  { id: "comida-rapida", label: "Comida Rapida" },
  { id: "almuerzos", label: "Almuerzos" },
  { id: "info", label: "Info" },
]

interface CategoryTabsProps {
  activeMain: string
  activeCategory: string
  onMainChange: (id: string) => void
  onCategoryChange: (id: string) => void
}

export function CategoryTabs({
  activeMain,
  activeCategory,
  onMainChange,
  onCategoryChange,
}: CategoryTabsProps) {
  const subcategories =
    activeMain === "comida-rapida"
      ? comidaRapidaCategories
      : activeMain === "almuerzos"
        ? almuerzosCategories
        : []

  return (
    <div className="sticky top-[57px] z-40 bg-casa-dark/95 backdrop-blur-md pb-3 pt-4">
      {/* Main tabs */}
      <div className="flex gap-2 px-4 mb-3">
        {mainTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onMainChange(tab.id)}
            className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-bold transition-all ${
              activeMain === tab.id
                ? "bg-casa-orange text-casa-dark"
                : "bg-secondary text-foreground"
            }`}
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Subcategory pills */}
      {subcategories.length > 0 && (
        <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4">
          {subcategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-casa-orange text-casa-dark"
                  : "bg-secondary text-foreground"
              }`}
            >
              <span className="text-sm">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
