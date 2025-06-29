import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { AuthGuard } from "@/guards"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lumen Billing",
  description: "Modern billing software for businesses",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

          {children}
      

      </body>
    </html>
  )
}
