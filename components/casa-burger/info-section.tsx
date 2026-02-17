import Image from "next/image"
import { Clock, MapPin, Instagram } from "lucide-react"
import { schedule } from "@/lib/menu-data"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/483881927_18054317273156067_2587179646960112099_n-Jw9jQ47kc22cZWUtp2QcpI28H4S9Wq.jpg",
    alt: "Disfrutando una hamburguesa Casa Burger",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482081073_18053078198156067_7077819390944091041_n-VzNX5a4ffAFCUrloMzF4euz1IW1ioR.jpg",
    alt: "Alitas crujientes con salsa especial",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482111952_18053147114156067_7714590438776273013_n-4hDpuZ9zkHUdWAujvppVIXKnunaQXH.jpg",
    alt: "Alitas con papas y bebida refrescante",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/490726952_1330613685085324_4240376153520147361_n-qW7D7mPp7f79W204nsWjqkLHd5L0zZ.jpg",
    alt: "Bebida tropical con maracuya",
  },
]

export function InfoSection() {
  return (
    <div className="flex flex-col gap-5 px-4 pb-28 pt-4">
      {/* Gallery grid */}
      <div className="grid grid-cols-2 gap-2">
        {galleryImages.map((img, i) => (
          <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        ))}
      </div>

      {/* Schedule */}
      <div className="rounded-xl bg-casa-card p-5 flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <Clock className="h-5 w-5 shrink-0 text-casa-orange" />
          <h2
            className="text-base font-bold text-foreground"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Horarios
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          {schedule.map((s) => (
            <div key={s.day} className="flex items-center justify-between">
              <span className="text-sm text-foreground font-medium">{s.day}</span>
              <span className="text-sm text-casa-muted">{s.hours}</span>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-casa-muted leading-relaxed border-t border-border pt-3">
          Almuerzos disponibles de Martes a Sabado. Especiales de domingo solo los domingos.
        </p>
      </div>

      {/* Location */}
      <div className="rounded-xl bg-casa-card p-5 flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <MapPin className="h-5 w-5 shrink-0 text-casa-orange" />
          <h2
            className="text-base font-bold text-foreground"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            Ubicacion
          </h2>
        </div>
        <div>
          <p className="text-sm text-foreground font-medium">
            Cra 40 #204a-06, Barrio Los Andes
          </p>
          <p className="text-sm text-casa-muted">
            Floridablanca, Santander
          </p>
        </div>
      </div>

      {/* Social */}
      <a
        href="https://instagram.com/casaburgerflorida"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-xl bg-casa-card p-5 transition-colors hover:bg-casa-card-hover"
      >
        <Instagram className="h-5 w-5 shrink-0 text-casa-orange" />
        <div>
          <p
            className="text-base font-bold text-foreground"
            style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
          >
            @casaburgerflorida
          </p>
          <p className="text-xs text-casa-muted">Siguenos en Instagram</p>
        </div>
      </a>

      {/* About */}
      <div className="rounded-xl bg-casa-card p-5">
        <h2
          className="text-base font-bold text-foreground mb-2"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          Sobre Nosotros
        </h2>
        <p className="text-sm text-casa-muted leading-relaxed">
          En Casa Burger creemos que una buena hamburguesa puede cambiar tu dia.
          Usamos ingredientes frescos, carne artesanal y recetas con el sabor
          autentico de la casa. Desde nuestras jugosas burgers hasta nuestras
          alitas crujientes y almuerzos caseros, cada plato esta hecho con pasion
          en Floridablanca, Santander.
        </p>
      </div>
    </div>
  )
}
