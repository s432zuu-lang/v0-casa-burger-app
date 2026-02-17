"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/casa-burger/header"
import { Hero } from "@/components/casa-burger/hero"
import { CategoryTabs } from "@/components/casa-burger/category-tabs"
import { MenuSection } from "@/components/casa-burger/menu-section"
import { InfoSection } from "@/components/casa-burger/info-section"
import { WhatsAppFab } from "@/components/casa-burger/whatsapp-fab"
import { menuItems, almuerzos } from "@/lib/menu-data"

export default function CasaBurgerApp() {
  const [activeMain, setActiveMain] = useState("comida-rapida")
  const [activeCategory, setActiveCategory] = useState("burgers")

  const filteredItems = useMemo(() => {
    if (activeMain === "almuerzos") return almuerzos
    return menuItems.filter((item) => item.category === activeCategory)
  }, [activeMain, activeCategory])

  const notice =
    activeMain === "comida-rapida" && activeCategory === "burgers"
      ? "Todas las burgers incluyen papas a la francesa"
      : undefined

  return (
    <div className="mx-auto min-h-screen max-w-md bg-background">
      <Header />
      <Hero />
      <CategoryTabs
        activeMain={activeMain}
        activeCategory={activeCategory}
        onMainChange={(id) => {
          setActiveMain(id)
          if (id === "comida-rapida") setActiveCategory("burgers")
        }}
        onCategoryChange={setActiveCategory}
      />

      {activeMain === "info" ? (
        <InfoSection />
      ) : (
        <MenuSection items={filteredItems} notice={notice} />
      )}

      <WhatsAppFab />
    </div>
  )
}
