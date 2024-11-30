"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"

export function QuickLinks() {
  const links = ["How it works", "FAQ", "Terms of Service", "Privacy Policy"]

  return (
    <Card className="bg-[#121212] border-gray-800 p-4">
      <h3 className="font-semibold mb-3">Quick Links</h3>
      <div className="space-y-2 text-sm">
        {links.map((link) => (
          <Link
            key={link}
            href="#"
            className="block text-gray-400 hover:text-white"
          >
            {link}
          </Link>
        ))}
      </div>
    </Card>
  )
}