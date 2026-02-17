import Image from "next/image"

export function Hero() {
  return (
    <section className="relative w-full h-[320px] overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/495597784_18059509244156067_6959218874629851454_n-tu5WaS0o8qm8i0XfNmonMP5SIE9Gew.jpg"
        alt="Hamburguesa artesanal Casa Burger"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-casa-dark via-casa-dark/60 to-transparent" />
      <div className="absolute bottom-6 left-5 right-5">
        <h1
          className="text-3xl font-black uppercase leading-tight text-foreground"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          EL VERDADERO
          <br />
          <span className="text-casa-orange">SABOR DE LA CASA</span>
        </h1>
        <p className="mt-2 text-base text-casa-muted italic">
          Directo a tu puerta.
        </p>
      </div>
    </section>
  )
}
