"use client"

import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-casa-dark/95 backdrop-blur-md px-4 py-3 border-b border-border">
      <div className="flex items-center gap-3">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481711107_1286661239480569_1252316607986676116_n-Cr0nQhuSlNUDsnfcqCU170d6013GYz.jpg"
          alt="Casa Burger Logo"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <span
          className="text-lg font-bold tracking-wide text-foreground"
          style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
        >
          CASA BURGER
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-blink" />
        <span className="text-xs text-casa-muted">Abierto</span>
      </div>
    </header>
  )
}
