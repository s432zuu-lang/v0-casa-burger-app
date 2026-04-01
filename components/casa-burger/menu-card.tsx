"use client"

import { ShoppingCart } from "lucide-react"
import type { MenuItem } from "@/lib/menu-data"

function formatPrice(n: number) {
  return "$" + n.toLocaleString("es-CO")
}

// Genera el mensaje de WhatsApp personalizado según la categoría y variantes del producto
function getWhatsappMessage(item: MenuItem): string {
  const nombre = item.name

  // Burgers — tienen variante pan/tortilla
  if (item.pricePan !== undefined) {
    return `Hola MÍA 😊 Estuve mirando el menú y me gustaría pedir una Burger ${nombre}. ¿Me puedes ayudar con el pedido?`
  }

  // Perros calientes — tienen variante sencillo/con papas
  if (item.priceSencillo !== undefined) {
    return `Hola MÍA 😊 Estuve mirando el menú y me gustaría pedir un Perro ${nombre}. ¿Me puedes ayudar con el pedido?`
  }

  // Parrilla — tienen variante 200g/300g
  if (item.price200g !== undefined) {
    return `Hola MÍA 😊 Estuve mirando el menú y me gustaría pedir ${nombre} de la parrilla. ¿Me puedes ayudar con el pedido?`
  }

  // Granizadas — tienen variante vaso/litro
  if (item.priceVaso !== undefined) {
    return `Hola MÍA 😊 Estuve mirando el menú y me gustaría pedir una ${nombre}. ¿Me puedes ayudar con el pedido?`
  }

  // Categorías específicas con artículo correcto
  const articuloFemenino = [
    "papas", "mazorcadas", "ensaladas", "picadas", "alitas",
    "pasta", "lasana", "parrillada", "costillas", "sobrebarriga",
    "carne", "cazuela", "granizada"
  ]
  const articuloMasculino = [
    "perros", "arroces", "pollo", "pescados", "gyros",
    "sandwich", "patacon", "arroz", "sancocho", "mute", "pincho", "churrasco", "robalo"
  ]

  const nombreLower = nombre.toLowerCase()
  const categoriaLower = item.category.toLowerCase()

  // Detectar artículo basado en nombre o categoría
  let articulo = "un"
  const esFemenino = articuloFemenino.some(f =>
    nombreLower.includes(f) || categoriaLower.includes(f)
  )
  const esMasculino = articuloMasculino.some(m =>
    nombreLower.includes(m) || categoriaLower.includes(m)
  )

  if (esFemenino) articulo = "una"
  else if (esMasculino) articulo = "un"

  // Casos especiales por categoría
  if (categoriaLower === "bebidas") {
    return `Hola MÍA 😊 Estuve mirando el menú y me gustaría pedir ${articulo} ${nombre}. ¿Me puedes ayudar con el pedido?`
  }

  if (categoriaLower === "almuerzos" || categoriaLower === "arma-tu-almuerzo") {
    return `Hola MÍA 😊 Estuve mirando el menú y me gustaría pedir el almuerzo — ${nombre}. ¿Me puedes ayudar con el pedido?`
  }

  if (categoriaLower === "especiales-domingo") {
    return `Hola MÍA 😊 Estuve mirando el menú y me gustaría pedir ${articulo} ${nombre} (especial de domingo). ¿Me puedes ayudar con el pedido?`
  }

  if (categoriaLower === "parrilla") {
    return `Hola MÍA 😊 Estuve mirando el menú y me gustaría pedir ${articulo} ${nombre} de la parrilla. ¿Me puedes ayudar con el pedido?`
  }

  if (categoriaLower === "pescados") {
    return `Hola MÍA 😊 Estuve mirando el menú y me gustaría pedir ${articulo} ${nombre}. ¿Me puedes ayudar con el pedido?`
  }

  // Mensaje genérico con artículo detectado
  return `Hola MÍA 😊 Estuve mirando el menú y me gustaría pedir ${articulo} ${nombre}. ¿Me puedes ayudar con el pedido?`
}

export function MenuCard({ item }: { item: MenuItem }) {
  const hasDualPrice =
    !!item.pricePan ||
    !!item.priceSencillo ||
    !!item.price200g ||
    !!item.priceVaso

  const whatsappText = encodeURIComponent(getWhatsappMessage(item))
  const whatsappUrl = `https://wa.me/573043396758?text=${whatsappText}`

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-casa-card px-4 py-3.5 transition-colors hover:bg-casa-card-hover">
      {/* Badge */}
      {item.badge && (
        <span className="self-start rounded-full bg-casa-orange/15 border border-casa-orange/30 px-2.5 py-0.5 text-[10px] font-bold text-casa-orange">
          {item.badge}
        </span>
      )}

      <div className="flex items-start justify-between gap-3">
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
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            {/* Pan / Tortilla */}
            {item.pricePan !== undefined && (
              <>
                <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                  <span className="text-[10px] uppercase tracking-wide text-casa-muted font-semibold">Pan</span>
                  <span className="text-sm font-extrabold text-casa-orange">
                    {formatPrice(item.pricePan)}
                  </span>
                </span>
                {item.priceTortilla !== undefined && (
                  <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                    <span className="text-[10px] uppercase tracking-wide text-casa-muted font-semibold">Tortilla</span>
                    <span className="text-sm font-bold text-casa-orange/80">
                      {formatPrice(item.priceTortilla)}
                    </span>
                  </span>
                )}
              </>
            )}

            {/* Sencillo / Con Papas */}
            {item.priceSencillo !== undefined && (
              <>
                <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                  <span className="text-[10px] uppercase tracking-wide text-casa-muted font-semibold">Sencillo</span>
                  <span className="text-sm font-extrabold text-casa-orange">
                    {formatPrice(item.priceSencillo)}
                  </span>
                </span>
                {item.priceConPapas !== undefined && (
                  <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                    <span className="text-[10px] uppercase tracking-wide text-casa-muted font-semibold">+Papas</span>
                    <span className="text-sm font-bold text-casa-orange/80">
                      {formatPrice(item.priceConPapas)}
                    </span>
                  </span>
                )}
              </>
            )}

            {/* 200g / 300g */}
            {item.price200g !== undefined && (
              <>
                <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                  <span className="text-[10px] uppercase tracking-wide text-casa-muted font-semibold">200g</span>
                  <span className="text-sm font-extrabold text-casa-orange">
                    {formatPrice(item.price200g)}
                  </span>
                </span>
                {item.price300g !== undefined && (
                  <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                    <span className="text-[10px] uppercase tracking-wide text-casa-muted font-semibold">300g</span>
                    <span className="text-sm font-bold text-casa-orange/80">
                      {formatPrice(item.price300g)}
                    </span>
                  </span>
                )}
              </>
            )}

            {/* Vaso / Litro */}
            {item.priceVaso !== undefined && (
              <>
                <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                  <span className="text-[10px] uppercase tracking-wide text-casa-muted font-semibold">Vaso</span>
                  <span className="text-sm font-extrabold text-casa-orange">
                    {formatPrice(item.priceVaso)}
                  </span>
                </span>
                {item.priceLitro !== undefined && (
                  <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                    <span className="text-[10px] uppercase tracking-wide text-casa-muted font-semibold">Litro</span>
                    <span className="text-sm font-bold text-casa-orange/80">
                      {formatPrice(item.priceLitro)}
                    </span>
                  </span>
                )}
              </>
            )}

            {/* Precio único */}
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
    </div>
  )
}
