"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code,
  Database,
  Globe,
  Lock,
  MessageSquare,
  Search,
  Settings,
  Shield,
  Zap,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Copy,
  Check,
  Users,
  Calendar,
  CreditCard,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const translations = {
  es: {
    // Header
    title: "Documentación",
    subtitle: "Guías completas para usar BarberApp",
    backToHome: "Volver al inicio",
    searchPlaceholder: "Buscar en documentación...",
    
    // Navigation
    gettingStarted: "Primeros Pasos",
    userGuide: "Guía de Usuario",
    features: "Funcionalidades",
    integrations: "Integraciones",
    troubleshooting: "Solución de Problemas",
    
    // Getting Started
    quickStart: "Inicio Rápido",
    quickStartDesc: "Configura tu barbería en menos de 5 minutos",
    installation: "Instalación",
    installationDesc: "Guía paso a paso de instalación",
    configuration: "Configuración",
    configurationDesc: "Personaliza tu barbería",
    
    // User Guide
    bookingSystem: "Sistema de Reservas",
    bookingDesc: "Gestiona citas y clientes",
    clientManagement: "Gestión de Clientes",
    clientDesc: "Administra tu base de datos",
    paymentSystem: "Sistema de Pagos",
    paymentDesc: "Procesa pagos de forma segura",
    reports: "Reportes",
    reportsDesc: "Analiza tu negocio",
    
    // Features
    onlineBooking: "Reservas Online",
    onlineDesc: "Permite reservas 24/7",
    notifications: "Notificaciones",
    notificationsDesc: "WhatsApp y SMS automáticos",
    calendar: "Calendario",
    calendarDesc: "Sincronización con Google Calendar",
    analytics: "Analytics",
    analyticsDesc: "Reportes y métricas",
    
    // Integrations
    paymentGateways: "Pasarelas de Pago",
    paymentDesc: "Integra métodos de pago",
    calendarSync: "Sincronización de Calendario",
    calendarDesc: "Conecta con Google Calendar",
    messaging: "Mensajería",
    messagingDesc: "WhatsApp y SMS",
    accounting: "Contabilidad",
    accountingDesc: "Integración con sistemas contables",
    
    // Troubleshooting
    commonIssues: "Problemas Comunes",
    issuesDesc: "Soluciones rápidas",
    errorCodes: "Códigos de Error",
    errorDesc: "Referencia de errores",
    support: "Soporte",
    supportDesc: "Contacta al equipo",
    
    // Content
    setupSteps: "Pasos de Configuración",
    setupDesc: "Configura tu barbería paso a paso",
    businessInfo: "Información del Negocio",
    businessDesc: "Datos básicos de tu barbería",
    services: "Servicios",
    servicesDesc: "Configura tus servicios y precios",
    
    // Status
    stable: "Estable",
    beta: "Beta",
    deprecated: "Deprecado",
    
    // Actions
    copyCode: "Copiar código",
    copied: "Copiado",
    viewDocs: "Ver documentación",
    tryIt: "Probar",
    
    // Footer
    ctaTitle: "¿Necesitas Ayuda?",
    ctaSubtitle: "Nuestro equipo está aquí para ayudarte",
    contactSupport: "Contactar Soporte",
  },
  en: {
    // Header
    title: "Documentation",
    subtitle: "Complete guides to use BarberApp",
    backToHome: "Back to home",
    searchPlaceholder: "Search documentation...",
    
    // Navigation
    gettingStarted: "Getting Started",
    userGuide: "User Guide",
    features: "Features",
    integrations: "Integrations",
    troubleshooting: "Troubleshooting",
    
    // Getting Started
    quickStart: "Quick Start",
    quickStartDesc: "Set up your barbershop in under 5 minutes",
    installation: "Installation",
    installationDesc: "Step-by-step installation guide",
    configuration: "Configuration",
    configurationDesc: "Customize your barbershop",
    
    // User Guide
    bookingSystem: "Booking System",
    bookingDesc: "Manage appointments and clients",
    clientManagement: "Client Management",
    clientDesc: "Manage your database",
    paymentSystem: "Payment System",
    paymentDesc: "Process payments securely",
    reports: "Reports",
    reportsDesc: "Analyze your business",
    
    // Features
    onlineBooking: "Online Booking",
    onlineDesc: "Allow 24/7 bookings",
    notifications: "Notifications",
    notificationsDesc: "Automatic WhatsApp and SMS",
    calendar: "Calendar",
    calendarDesc: "Google Calendar sync",
    analytics: "Analytics",
    analyticsDesc: "Reports and metrics",
    
    // Integrations
    paymentGateways: "Payment Gateways",
    paymentDesc: "Integrate payment methods",
    calendarSync: "Calendar Sync",
    calendarDesc: "Connect with Google Calendar",
    messaging: "Messaging",
    messagingDesc: "WhatsApp and SMS",
    accounting: "Accounting",
    accountingDesc: "Integration with accounting systems",
    
    // Troubleshooting
    commonIssues: "Common Issues",
    issuesDesc: "Quick solutions",
    errorCodes: "Error Codes",
    errorDesc: "Error reference",
    support: "Support",
    supportDesc: "Contact the team",
    
    // Content
    setupSteps: "Setup Steps",
    setupDesc: "Configure your barbershop step by step",
    businessInfo: "Business Information",
    businessDesc: "Basic data of your barbershop",
    services: "Services",
    servicesDesc: "Configure your services and prices",
    
    // Status
    stable: "Stable",
    beta: "Beta",
    deprecated: "Deprecated",
    
    // Actions
    copyCode: "Copy code",
    copied: "Copied",
    viewDocs: "View docs",
    tryIt: "Try it",
    
    // Footer
    ctaTitle: "Need Help?",
    ctaSubtitle: "Our team is here to help you",
    contactSupport: "Contact Support",
  },
}

export default function DocumentationPage() {
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [searchTerm, setSearchTerm] = useState("")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const t = translations[language]

  const openWhatsApp = () => {
    const message = language === "es" 
      ? "¡Hola! Necesito ayuda con la documentación de BarberApp. ¿Podrían asistirme?"
      : "Hello! I need help with BarberApp documentation. Could you assist me?"
    window.open(`https://wa.me/573102566276?text=${encodeURIComponent(message)}`, "_blank")
  }

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const navigation = [
    {
      title: t.gettingStarted,
      icon: <BookOpen className="size-4" />,
      items: [
        { title: t.quickStart, description: t.quickStartDesc, href: "#quick-start" },
        { title: t.installation, description: t.installationDesc, href: "#installation" },
        { title: t.configuration, description: t.configurationDesc, href: "#configuration" },
      ]
    },
    {
      title: t.userGuide,
      icon: <Users className="size-4" />,
      items: [
        { title: t.bookingSystem, description: t.bookingDesc, href: "#booking" },
        { title: t.clientManagement, description: t.clientDesc, href: "#clients" },
        { title: t.paymentSystem, description: t.paymentDesc, href: "#payments" },
        { title: t.reports, description: t.reportsDesc, href: "#reports" },
      ]
    },
    {
      title: t.features,
      icon: <Zap className="size-4" />,
      items: [
        { title: t.onlineBooking, description: t.onlineDesc, href: "#online" },
        { title: t.notifications, description: t.notificationsDesc, href: "#notifications" },
        { title: t.calendar, description: t.calendarDesc, href: "#calendar" },
        { title: t.analytics, description: t.analyticsDesc, href: "#analytics" },
      ]
    },
    {
      title: t.integrations,
      icon: <Database className="size-4" />,
      items: [
        { title: t.paymentGateways, description: t.paymentDesc, href: "#payment-gateways" },
        { title: t.calendarSync, description: t.calendarDesc, href: "#calendar-sync" },
        { title: t.messaging, description: t.messagingDesc, href: "#messaging" },
        { title: t.accounting, description: t.accountingDesc, href: "#accounting" },
      ]
    },
    {
      title: t.troubleshooting,
      icon: <Settings className="size-4" />,
      items: [
        { title: t.commonIssues, description: t.issuesDesc, href: "#issues" },
        { title: t.errorCodes, description: t.errorDesc, href: "#errors" },
        { title: t.support, description: t.supportDesc, href: "#support" },
      ]
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                <BookOpen className="size-4" />
              </div>
              <span>BarberApp Docs</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setLanguage(language === "es" ? "en" : "es")}>
              <Globe className="size-4" />
            </Button>
            <Button className="rounded-full" onClick={openWhatsApp}>
              {t.contactSupport}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-80 border-r bg-muted/20 p-6 overflow-y-auto">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <nav className="space-y-6">
            {navigation.map((section, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-3">
                  {section.icon}
                  <h3 className="font-semibold text-sm">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="size-4" />
                {t.backToHome}
              </Link>
              <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
              <p className="text-xl text-muted-foreground">{t.subtitle}</p>
            </div>

            {/* Quick Start Section */}
            <section id="quick-start" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">{t.quickStart}</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="size-5 text-primary" />
                    {t.quickStartDesc}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">{t.businessInfo}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{t.businessDesc}</p>
                      <div className="bg-muted p-3 rounded-lg text-sm">
                        • Nombre de la barbería<br/>
                        • Dirección y contacto<br/>
                        • Horarios de atención
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{t.services}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{t.servicesDesc}</p>
                      <div className="bg-muted p-3 rounded-lg text-sm">
                        • Corte de cabello<br/>
                        • Barba<br/>
                        • Tratamientos
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Configuración</h4>
                      <p className="text-sm text-muted-foreground mb-3">Personaliza tu aplicación</p>
                      <div className="bg-muted p-3 rounded-lg text-sm">
                        • Colores y logo<br/>
                        • Métodos de pago<br/>
                        • Notificaciones
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* User Guide Section */}
            <section id="booking" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">{t.userGuide}</h2>
              
              <div className="space-y-8">
                {/* Booking System */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="size-5 text-primary" />
                      {t.bookingSystem}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{t.bookingDesc}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">{t.stable}</Badge>
                        <h4 className="font-semibold mb-2">Reservas Online</h4>
                        <p className="text-sm text-muted-foreground">Los clientes pueden reservar 24/7 desde tu sitio web</p>
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2">Gestión</Badge>
                        <h4 className="font-semibold mb-2">Panel de Control</h4>
                        <p className="text-sm text-muted-foreground">Administra todas las reservas desde tu dashboard</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Client Management */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="size-5 text-primary" />
                      {t.clientManagement}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">Clientes</Badge>
                          <span className="text-sm font-medium">Base de Datos</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Gestiona información de clientes, historial y preferencias</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">Historial</Badge>
                          <span className="text-sm font-medium">Servicios</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Registro completo de servicios realizados</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">Notificaciones</Badge>
                          <span className="text-sm font-medium">Recordatorios</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Envío automático de confirmaciones y recordatorios</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment System */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="size-5 text-primary" />
                      {t.paymentSystem}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{t.paymentDesc}</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="size-12 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                          <CreditCard className="size-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-1">PayPal</h4>
                        <p className="text-xs text-muted-foreground">Pagos online seguros</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="size-12 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Shield className="size-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-1">Bancolombia</h4>
                        <p className="text-xs text-muted-foreground">Transferencias bancarias</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="size-12 mx-auto mb-2 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Smartphone className="size-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-1">Efectivo</h4>
                        <p className="text-xs text-muted-foreground">Pagos en efectivo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Features Section */}
            <section id="online" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">{t.features}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="size-5 text-primary" />
                      {t.onlineBooking}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{t.onlineDesc}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">24/7</Badge>
                        <span className="text-sm">Reservas automáticas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Web</Badge>
                        <span className="text-sm">Sitio web integrado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Móvil</Badge>
                        <span className="text-sm">App responsive</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="size-5 text-primary" />
                      {t.notifications}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{t.notificationsDesc}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">WhatsApp</Badge>
                        <span className="text-sm">Confirmaciones automáticas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">SMS</Badge>
                        <span className="text-sm">Recordatorios por SMS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Email</Badge>
                        <span className="text-sm">Notificaciones por email</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="size-5 text-primary" />
                      {t.calendar}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{t.calendarDesc}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Google Calendar</Badge>
                        <span className="text-sm">Sincronización automática</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Outlook</Badge>
                        <span className="text-sm">Soporte completo</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="size-5 text-primary" />
                      {t.analytics}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{t.analyticsDesc}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Dashboard</Badge>
                        <span className="text-sm">Reportes en tiempo real</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Export</Badge>
                        <span className="text-sm">CSV, PDF, Excel</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section id="issues" className="mb-16">
              <h2 className="text-2xl font-bold mb-6">{t.troubleshooting}</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="size-5 text-primary" />
                      {t.commonIssues}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="booking-error">
                        <AccordionTrigger>No puedo crear una reserva</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground mb-2">Verifica que todos los campos estén completos y que el horario esté disponible.</p>
                          <div className="bg-muted p-3 rounded-lg text-sm">
                            • Revisa la disponibilidad del barbero<br/>
                            • Confirma que el servicio esté configurado<br/>
                            • Verifica la información del cliente
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="notification-error">
                        <AccordionTrigger>No llegan las notificaciones</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground">Verifica la configuración de notificaciones en tu perfil.</p>
                          <div className="bg-muted p-3 rounded-lg text-sm">
                            • Revisa la configuración de WhatsApp<br/>
                            • Verifica el número de teléfono<br/>
                            • Confirma la configuración de SMS
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="payment-error">
                        <AccordionTrigger>Error en el procesamiento de pagos</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-sm text-muted-foreground">Verifica la configuración de tu pasarela de pagos.</p>
                          <div className="bg-muted p-3 rounded-lg text-sm">
                            • Revisa las credenciales de PayPal<br/>
                            • Verifica la configuración de Bancolombia<br/>
                            • Confirma que los métodos estén activos
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-primary-foreground/80 mb-8">{t.ctaSubtitle}</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="rounded-full"
              onClick={openWhatsApp}
            >
              {t.contactSupport}
              <MessageSquare className="ml-2 size-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 