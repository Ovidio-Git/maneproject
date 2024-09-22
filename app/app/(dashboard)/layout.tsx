import Link from 'next/link';
import {
  Home,
  Package,
  Package2,
  PanelLeft,
  Settings,
  Users2
} from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { User } from './user';
import { PageLogo } from '@/components/icons';
import Providers from './providers';
import { NavItem } from './nav-item';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <main className="flex min-h-screen w-full flex-col bg-muted/40">
        <DesktopNav />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-[190px]"> 
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <MobileNav />
            <DashboardBreadcrumb />
          </header>
          <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
            {children}
          </main>
        </div>
      </main>
    </Providers>
  );
}


function DesktopNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-50 flex-col border-r bg-background sm:flex"> 
      <nav className="flex flex-col items-center gap-4 px-4 sm:py-5">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground"
        >
          <PageLogo className="h-5 w-5 transition-all group-hover:scale-110" />
        </Link>

        {/* Nav Items con texto */}
        <NavItem href="/" label="Dashboard">
          <Home className="h-5 w-5" />
          <span className="ml-2">Dashboard</span>
        </NavItem>

        <NavItem href="/devices" label="Dispositivos">
          <Package className="h-5 w-5" />
          <span className="ml-2">Dispositivos</span>
        </NavItem>

        <NavItem href="/admin" label="Admin">
          <Users2 className="h-5 w-5" />
          <span className="ml-2">Admin</span>
        </NavItem>

      </nav>
      <nav className="mt-auto flex flex-col items-start gap-4 px-4 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-full items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <User username="Demo User"/>
            </Link>
          </TooltipTrigger>
        </Tooltip>
      </nav>
    </aside>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/devices"
            className="flex items-center gap-4 px-2.5 text-foreground"
          >
            <Package className="h-5 w-5" />
            Dispositivos
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Users2 className="h-5 w-5" />
            Admin
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Settings className="h-5 w-5" />
            Configuraciones
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function DashboardBreadcrumb() {
  return (
    <Breadcrumb className="hidden md:flex mt-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/devices">Dispositvos</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Todos los Dispositivos</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
