import Image from "next/image"
import { Clock, MapPin, Phone, Instagram } from "lucide-react"

export function InfoSection() {
  return (
    <div className="flex flex-col gap-5 px-4 pb-28 pt-4">
      {/* Gallery */}
      <div className="grid grid-cols-2 gap-2">
        <div className="relative h-40 overflow-hidden rounded-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/483881927_18054317273156067_2587179646960112099_n-Jw9jQ47kc22cZWUtp2QcpI28H4S9Wq.jpg"
            alt="Disfrutando hamburguesa Casa Burger"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative h-40 overflow-hidden rounded-xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482111952_18053147114156067_7714590438776273013_n-4hDpuZ9zkHUdWAujvppVIXKnunaQXH.jpg"
            alt="Alitas con papas y bebida"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>

      {/* Info cards */}
      <div className="rounded-xl bg-casa-card p-5 flex flex-col gap-4">
        <h2
          className="text-lg font-bold text-foreground"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          Informacion
        </h2>

        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 shrink-0 text-casa-orange mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground">Horario</p>
            <p className="text-xs text-casa-muted">Lun - Sab: 11:30 AM - 9:00 PM</p>
            <p className="text-xs text-casa-muted">Domingo: 11:30 AM - 4:00 PM</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 shrink-0 text-casa-orange mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground">Ubicacion</p>
            <p className="text-xs text-casa-muted">
              Cra 5 #12-34, Centro Historico
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 shrink-0 text-casa-orange mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground">Telefono</p>
            <p className="text-xs text-casa-muted">+57 300 123 4567</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Instagram className="h-5 w-5 shrink-0 text-casa-orange mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground">Instagram</p>
            <p className="text-xs text-casa-muted">@casaburger</p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="rounded-xl bg-casa-card p-5">
        <h2
          className="text-lg font-bold text-foreground mb-2"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          Sobre Nosotros
        </h2>
        <p className="text-sm text-casa-muted leading-relaxed">
          En Casa Burger creemos que una buena hamburguesa puede cambiar tu dia.
          Usamos ingredientes frescos, carne artesanal y recetas con el sabor
          autentico de la casa. Desde nuestras jugosas burgers hasta nuestras
          alitas crujientes, cada plato esta hecho con pasion.
        </p>
      </div>
    </div>
  )
}
