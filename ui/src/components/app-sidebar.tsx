"use client"

import * as React from "react"
import {
  GalleryVerticalEnd,
} from "lucide-react"

import { NavSupport} from "@/components/nav-support"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"
import { NavAdmin } from "./nav-main"
import { NavCustomer } from "./nav-customer"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter()
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => router.push("/")}
              size="lg" >

              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-primary-foreground border shadow-md p-2">
                <GalleryVerticalEnd className="size-10 text-neutral-500" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Lumen Billing</span>
                <span className="truncate text-xs">by Lumen</span>
              </div>

            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavAdmin />
        <NavCustomer />
        <NavSupport  className="mt-auto"/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
