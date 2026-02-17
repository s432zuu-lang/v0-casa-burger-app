"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/casa-burger/header"
import { Hero } from "@/components/casa-burger/hero"
import { CategoryTabs } from "@/components/casa-burger/category-tabs"
import { MenuSection } from "@/components/casa-burger/menu-section"
import { InfoSection } from "@/components/casa-burger/info-section"
import { WhatsAppFab } from "@/components/casa-burger/whatsapp-fab"
import { menuItems, almuerzoItems, categoryBanners } from "@/lib/menu-data"

export default function CasaBurgerApp() {
  const [activeMain, setActiveMain] = useState("comida-rapida")
  const [activeCategory, setActiveCategory] = useState("burgers")

  const filteredItems = useMemo(() => {
    if (activeMain === "comida-rapida") {
      return menuItems.filter((item) => item.category === activeCategory)
    }
    if (activeMain === "almuerzos") {
      return almuerzoItems.filter((item) => item.category === activeCategory)
    }
    return []
  }, [activeMain, activeCategory])

  const banner = categoryBanners[activeCategory]

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
          if (id === "almuerzos") setActiveCategory("arma-tu-almuerzo")
        }}
        onCategoryChange={setActiveCategory}
      />

      {activeMain === "info" ? (
        <InfoSection />
      ) : (
        <MenuSection items={filteredItems} banner={banner} />
      )}

      <WhatsAppFab />
    </div>
  )
}
