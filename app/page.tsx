"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Shield,
  Users,
  BarChart,
  Calendar,
  Scissors,
  Clock,
  Languages,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useTheme } from "next-themes"
import Testimonials from "@/components/ui/testimonials"
import GlobeDemo from "@/components/globe-demo"
import BrandCarousel from "@/components/brand-carousel"

const translations = {
  es: {
    // Header
    features: "Características",
    testimonials: "Testimonios",
    pricing: "Precios",
    faq: "Preguntas",
    contactMe: "Contáctame",

    // Hero
    launchingSoon: "Disponible Ahora",
    heroTitle: "Revoluciona tu Barbería con BarberApp",
    heroSubtitle:
      "La aplicación todo-en-uno que ayuda a las barberías a gestionar citas, clientes y pagos. Simplifica tus procesos y enfócate en lo que más importa: tus clientes.",
    startFreeTrial: "Obtener BarberApp",
    bookDemo: "Ver Demo",
    noCreditCard: "Sin tarjetas de crédito",
    oneTimePaymentHero: "Único pago",
    personalizedAdvice: "Asesoría personalizada",

    // Logos
    trustedBy: "Confiado por barberías innovadoras en todo el mundo",

    // Features
    featuresTitle: "Todo lo que Necesitas para Triunfar",
    featuresSubtitle:
      "Nuestra plataforma integral proporciona todas las herramientas que necesitas para optimizar tu barbería, aumentar la productividad y hacer crecer tu negocio.",

    // Features list
    smartBooking: "Reservas Inteligentes",
    smartBookingDesc: "Sistema de citas automatizado que reduce cancelaciones y optimiza tu agenda.",
    clientManagement: "Gestión de Clientes",
    clientManagementDesc: "Mantén un registro completo de tus clientes y sus preferencias de corte.",
    teamCollaboration: "Colaboración en Equipo",
    teamCollaborationDesc: "Coordina con tu equipo de barberos de manera fluida y eficiente.",
    paymentSecurity: "Pagos Seguros",
    paymentSecurityDesc: "Procesa pagos de forma segura con encriptación de extremo a extremo.",
    analytics: "Análisis Avanzados",
    analyticsDesc: "Obtén insights valiosos sobre tu negocio con reportes en tiempo real.",
    support: "Soporte 24/7",
    supportDesc: "Obtén ayuda cuando la necesites con nuestro equipo de soporte dedicado.",

    // How it works
    howItWorks: "Cómo Funciona",
    howItWorksTitle: "Proceso Simple, Resultados Poderosos",
    howItWorksSubtitle: "Comienza en minutos y ve la diferencia que nuestra aplicación puede hacer para tu barbería.",

    step1Title: "Comunícate con Nosotros",
    step1Desc: "Ponte en contacto con nuestro equipo para conocer más sobre BarberApp y cómo puede transformar tu barbería.",
    step2Title: "Configura tu Barbería",
    step2Desc: "Personaliza tu perfil para que coincida con los servicios únicos de tu barbería.",
    step3Title: "Aumenta tus Ventas",
    step3Desc: "Comienza a usar nuestras potentes funciones para optimizar procesos y alcanzar tus objetivos.",

    // Testimonials
    testimonialsTitle: "Amado por Barberías en Todo el Mundo",
    testimonialsSubtitle:
      "No solo tomes nuestra palabra. Mira lo que nuestros clientes tienen que decir sobre su experiencia.",

    // Pricing
    pricingTitle: "Todo lo que Necesitas en un Solo Pago",
    pricingSubtitle:
      "Obtén acceso completo a todas las funcionalidades de BarberApp con un pago único. Sin mensualidades, sin sorpresas.",

    // Single Plan
    completePlan: "BarberApp Completo",
    completeDesc: "Todo lo que necesitas para revolucionar tu barbería.",
    oneTimePayment: "Pago Único",
    completeFeatures: [
      "Landing page personalizada",
      "Módulo de reservas completo",
      "Panel de admin avanzado",
      "Soporte técnico incluido",
      "Actualizaciones gratuitas"
    ],
    
    // Admin panel tooltip
    adminPanelTooltip: "Calendario integrado, gestión completa de reservas, reportes de rendimiento, configuración de servicios, y mucho más.",

    getApp: "Comunícate con Nosotros",
    contactSales: "Contactar Ventas",
    mostPopular: "Más Popular",

    // FAQ
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Encuentra respuestas a preguntas comunes sobre nuestra aplicación.",

    // CTA
    ctaTitle: "¿Listo para Transformar tu Barbería?",
    ctaSubtitle:
      "Únete a miles de barberos satisfechos que han optimizado sus procesos y aumentado su productividad con nuestra aplicación.",
    scheduleDemo: "Agendar Demo",
    ctaNote: "Sin tarjeta de crédito requerida. Prueba gratuita de 14 días. Cancela en cualquier momento.",

    // Footer
    footerDesc:
      "Optimiza tu barbería con nuestra aplicación todo-en-uno. Aumenta la productividad y haz crecer tu negocio.",
    product: "Producto",
    integrations: "Integraciones",
    api: "API",
    resources: "Recursos",
    documentation: "Documentación",
    guides: "Guías",
    blog: "Blog",
    supportFooter: "Soporte",
    company: "Empresa",
    about: "Acerca de",
    careers: "Carreras",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    cookiePolicy: "Política de Cookies",
    allRightsReserved: "Todos los derechos reservados.",
  },
  en: {
    // Header
    features: "Features",
    testimonials: "Testimonials",
    pricing: "Pricing",
    faq: "FAQ",
    contactMe: "Contact Us",

    // Hero
    launchingSoon: "Available Now",
    heroTitle: "Revolutionize Your Barbershop with BarberApp",
    heroSubtitle:
      "The all-in-one app that helps barbershops manage appointments, clients, and payments. Streamline your processes and focus on what matters most: your clients.",
    startFreeTrial: "Get BarberApp",
    bookDemo: "Book Demo",
    noCreditCard: "No credit cards",
    oneTimePaymentHero: "One-time payment",
    personalizedAdvice: "Personalized consulting",

    // Logos
    trustedBy: "Trusted by innovative barbershops worldwide",

    // Features
    featuresTitle: "Everything You Need to Succeed",
    featuresSubtitle:
      "Our comprehensive platform provides all the tools you need to streamline your barbershop, boost productivity, and grow your business.",

    // Features list
    smartBooking: "Smart Booking",
    smartBookingDesc: "Automated appointment system that reduces cancellations and optimizes your schedule.",
    clientManagement: "Client Management",
    clientManagementDesc: "Keep a complete record of your clients and their haircut preferences.",
    teamCollaboration: "Team Collaboration",
    teamCollaborationDesc: "Coordinate with your barber team smoothly and efficiently.",
    paymentSecurity: "Secure Payments",
    paymentSecurityDesc: "Process payments securely with end-to-end encryption.",
    analytics: "Advanced Analytics",
    analyticsDesc: "Get valuable insights about your business with real-time reports.",
    support: "24/7 Support",
    supportDesc: "Get help when you need it with our dedicated support team.",

    // How it works
    howItWorks: "How It Works",
    howItWorksTitle: "Simple Process, Powerful Results",
    howItWorksSubtitle: "Get started in minutes and see the difference our app can make for your barbershop.",

    step1Title: "Contact Us",
    step1Desc: "Get in touch with our team to learn more about BarberApp and how it can transform your barbershop.",
    step2Title: "Setup Barbershop",
    step2Desc: "Customize your profile to match your barbershop's unique services.",
    step3Title: "Boost Sales",
    step3Desc: "Start using our powerful features to streamline processes and achieve your goals.",

    // Testimonials
    testimonialsTitle: "Loved by Barbershops Worldwide",
    testimonialsSubtitle: "Don't just take our word for it. See what our customers have to say about their experience.",

    // Pricing
    pricingTitle: "Everything You Need in One Payment",
    pricingSubtitle: "Get complete access to all BarberApp features with a one-time payment. No monthly fees, no surprises.",

    // Single Plan
    completePlan: "Complete BarberApp",
    completeDesc: "Everything you need to revolutionize your barbershop.",
    oneTimePayment: "One-Time Payment",
    completeFeatures: [
      "Custom landing page",
      "Complete booking module", 
      "Advanced admin panel",
      "Technical support included",
      "Free updates"
    ],
    
    // Admin panel tooltip
    adminPanelTooltip: "Integrated calendar, complete booking management, performance reports, service configuration, and much more.",

    getApp: "Contact Us",
    contactSales: "Contact Sales",
    mostPopular: "Most Popular",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to common questions about our app.",

    // CTA
    ctaTitle: "Ready to Transform Your Barbershop?",
    ctaSubtitle:
      "Join thousands of satisfied barbers who have streamlined their processes and boosted productivity with our app.",
    scheduleDemo: "Schedule Demo",
    ctaNote: "No credit card required. 14-day free trial. Cancel anytime.",

    // Footer
    footerDesc: "Streamline your barbershop with our all-in-one app. Boost productivity and grow your business.",
    product: "Product",
    integrations: "Integrations",
    api: "API",
    resources: "Resources",
    documentation: "Documentation",
    guides: "Guides",
    blog: "Blog",
    supportFooter: "Support",
    company: "Company",
    about: "About",
    careers: "Careers",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    allRightsReserved: "All rights reserved.",
  },
}

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [language, setLanguage] = useState<"es" | "en">("es")

  const t = translations[language]

  const dashboardImages = [
    {
      src: "/images/dashboard-comisiones.png",
      alt:
        language === "es"
          ? "Dashboard de Comisiones - Estadísticas y ganancias por comisión"
          : "Commission Dashboard - Statistics and commission earnings",
      title: language === "es" ? "Dashboard de Comisiones" : "Commission Dashboard",
    },
    {
      src: "/images/dashboard-principal.png",
      alt:
        language === "es"
          ? "Dashboard Principal - Resumen de actividad y rendimiento"
          : "Main Dashboard - Activity summary and performance",
      title: language === "es" ? "Dashboard Principal" : "Main Dashboard",
    },
    {
      src: "/images/calendario-barberia.png",
      alt:
        language === "es"
          ? "Calendario de Barbería - Gestión de citas y horarios"
          : "Barbershop Calendar - Appointment and schedule management",
      title: language === "es" ? "Calendario de Barbería" : "Barbershop Calendar",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dashboardImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dashboardImages.length) % dashboardImages.length)
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"))
  }

  const openWhatsApp = () => {
    const message =
      language === "es"
        ? "¡Hola! Me interesa BarberApp para mi barbería. ¿Podrían darme más información?"
        : "Hello! I'm interested in BarberApp for my barbershop. Could you give me more information?"
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Mostrar botón "volver arriba" después de hacer scroll considerable
      if (window.scrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: t.smartBooking,
      description: t.smartBookingDesc,
      icon: <Calendar className="size-5" />,
    },
    {
      title: t.clientManagement,
      description: t.clientManagementDesc,
      icon: <Users className="size-5" />,
    },
    {
      title: t.teamCollaboration,
      description: t.teamCollaborationDesc,
      icon: <Scissors className="size-5" />,
    },
    {
      title: t.paymentSecurity,
      description: t.paymentSecurityDesc,
      icon: <Shield className="size-5" />,
    },
    {
      title: t.analytics,
      description: t.analyticsDesc,
      icon: <BarChart className="size-5" />,
    },
    {
      title: t.support,
      description: t.supportDesc,
      icon: <Clock className="size-5" />,
    },
  ]

  const faqData =
    language === "es"
      ? [
          {
            question: "¿Qué incluye exactamente BarberApp?",
            answer:
              "BarberApp incluye todo lo que necesitas: una landing page personalizada para tu barbería, un módulo completo de reservas online, y un panel de administración avanzado con calendario, gestión de clientes, reportes y mucho más. Todo en un solo pago.",
          },
          {
            question: "¿Es realmente un pago único? ¿No hay costos ocultos?",
            answer:
              "Sí, es completamente un pago único. No hay mensualidades, suscripciones ni costos ocultos. Una vez que adquieres BarberApp, es tuyo para siempre, incluyendo actualizaciones gratuitas y soporte técnico.",
          },
          {
            question: "¿Puedo personalizar la landing page para mi barbería?",
            answer:
              "Absolutamente. La landing page se personaliza completamente con los colores, logo, servicios y información de tu barbería. También incluye fotos de tu trabajo y toda la información que tus clientes necesitan.",
          },
          {
            question: "¿Cómo funciona el módulo de reservas?",
            answer:
              "Tus clientes pueden reservar citas directamente desde tu landing page. El sistema gestiona automáticamente horarios disponibles, confirmaciones, recordatorios y cancelaciones. Todo se sincroniza con tu panel de administración.",
          },
          {
            question: "¿Qué tan segura está mi información y la de mis clientes?",
            answer:
              "Tomamos la seguridad muy en serio. Todos los datos están encriptados tanto en tránsito como en reposo. Utilizamos prácticas de seguridad estándar de la industria y realizamos auditorías de seguridad regularmente.",
          },
          {
            question: "¿Ofrecen soporte técnico después de la compra?",
            answer:
              "Sí, el soporte técnico está incluido sin costo adicional. Te ayudamos con la configuración inicial, resolución de dudas y cualquier problema técnico que puedas tener con la plataforma.",
          },
        ]
      : [
          {
            question: "What exactly does BarberApp include?",
            answer:
              "BarberApp includes everything you need: a custom landing page for your barbershop, a complete online booking module, and an advanced admin panel with calendar, client management, reports and much more. All in one payment.",
          },
          {
            question: "Is it really a one-time payment? Are there no hidden costs?",
            answer:
              "Yes, it's completely a one-time payment. There are no monthly fees, subscriptions or hidden costs. Once you acquire BarberApp, it's yours forever, including free updates and technical support.",
          },
          {
            question: "Can I customize the landing page for my barbershop?",
            answer:
              "Absolutely. The landing page is fully customized with your barbershop's colors, logo, services and information. It also includes photos of your work and all the information your clients need.",
          },
          {
            question: "How does the booking module work?",
            answer:
              "Your clients can book appointments directly from your landing page. The system automatically manages available schedules, confirmations, reminders and cancellations. Everything syncs with your admin panel.",
          },
          {
            question: "How secure is my information and my clients' data?",
            answer:
              "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits.",
          },
          {
            question: "Do you offer technical support after purchase?",
            answer:
              "Yes, technical support is included at no additional cost. We help you with initial setup, resolving questions and any technical issues you may have with the platform.",
          },
        ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              <Scissors className="size-4" />
            </div>
            <span>BarberApp</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.features}
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.testimonials}
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.pricing}
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.faq}
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="rounded-full">
              <Languages className="size-[18px]" />
              <span className="sr-only">Cambiar idioma</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button className="rounded-full" onClick={openWhatsApp}>
              {t.contactMe}
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="rounded-full">
              <Languages className="size-[18px]" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t.features}
              </Link>
              <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t.testimonials}
              </Link>
              <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t.pricing}
              </Link>
              <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t.faq}
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Button className="rounded-full" onClick={openWhatsApp}>
                  {t.contactMe}
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium flex items-center gap-2" variant="secondary">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-green"></div>
                {t.launchingSoon}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                {t.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t.heroSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base" onClick={openWhatsApp}>
                  {t.startFreeTrial}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent"
                  onClick={openWhatsApp}
                >
                  {t.bookDemo}
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>{t.noCreditCard}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>{t.oneTimePaymentHero}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>{t.personalizedAdvice}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              {/* Slider de imágenes del dashboard */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                  <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                    {dashboardImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={image.src || "/placeholder.svg"}
                          width={1280}
                          height={720}
                          alt={image.alt}
                          className="w-full h-full object-cover object-top"
                          priority={index === 0}
                        />
                      </div>
                    ))}

                    {/* Botones de navegación */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border/40 rounded-full p-2 hover:bg-background/90 transition-all duration-200 shadow-lg"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="size-5" />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border/40 rounded-full p-2 hover:bg-background/90 transition-all duration-200 shadow-lg"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight className="size-5" />
                    </button>

                    {/* Indicadores de puntos */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {dashboardImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentSlide ? "bg-primary w-6" : "bg-background/60 hover:bg-background/80"
                          }`}
                          aria-label={`Ir a imagen ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Título de la imagen actual */}
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm border border-border/40 rounded-lg px-3 py-1.5">
                      <p className="text-sm font-medium">{dashboardImages[currentSlide].title}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none"></div>
                </div>
              </div>

              {/* Efectos de fondo decorativos */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-50"></div>
            </motion.div>
          </div>
        </section>

        {/* Brand Carousel Section */}
        <BrandCarousel trustedBy={t.trustedBy} />

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                {t.features}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.featuresTitle}</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">{t.featuresSubtitle}</p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                {t.howItWorks}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.howItWorksTitle}</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">{t.howItWorksSubtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: t.step1Title,
                  description: t.step1Desc,
                },
                {
                  step: "02",
                  title: t.step2Title,
                  description: t.step2Desc,
                },
                {
                  step: "03",
                  title: t.step3Title,
                  description: t.step3Desc,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Globe Section - Conectividad Global */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-center">
              <div className="relative">
                <GlobeDemo />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Nuevo componente de pasarela */}
        <section id="testimonials">
          <Testimonials language={language} />
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                {t.pricing}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.pricingTitle}</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">{t.pricingSubtitle}</p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-md"
                >
                  <Card className="relative overflow-hidden h-full border-primary shadow-lg bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                      {t.mostPopular}
                    </div>
                    <CardContent className="p-8 flex flex-col h-full text-center">
                      <h3 className="text-3xl font-bold mb-2">{t.completePlan}</h3>
                      <div className="flex items-center justify-center mt-4 mb-2">
                        <span className="text-4xl font-bold text-primary">{t.oneTimePayment}</span>
                      </div>
                      <p className="text-muted-foreground mb-6">{t.completeDesc}</p>
                      <TooltipProvider>
                        <ul className="space-y-4 my-8 flex-grow text-left">
                          {t.completeFeatures.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-3 size-5 text-primary flex-shrink-0" />
                              <span className="text-base">
                                {feature.includes("Panel de admin") || feature.includes("admin panel") ? (
                                  <span className="flex items-center gap-2">
                                    {feature}
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <HelpCircle className="size-4 text-muted-foreground hover:text-primary cursor-help transition-colors" />
                                      </TooltipTrigger>
                                      <TooltipContent className="max-w-xs">
                                        <p className="text-sm">{t.adminPanelTooltip}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </span>
                                ) : (
                                  feature
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </TooltipProvider>
                      <Button
                        size="lg"
                        className="w-full mt-auto rounded-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold"
                        onClick={openWhatsApp}
                      >
                        {t.getApp}
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                {t.faq}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.faqTitle}</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">{t.faqSubtitle}</p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{t.ctaTitle}</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">{t.ctaSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-12 px-8 text-base"
                  onClick={openWhatsApp}
                >
                  {t.startFreeTrial}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                  onClick={openWhatsApp}
                >
                  {t.scheduleDemo}
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">{t.ctaNote}</p>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  <Scissors className="size-4" />
                </div>
                <span>BarberApp</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.footerDesc}</p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">{t.product}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.features}
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.pricing}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.integrations}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.api}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">{t.resources}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.documentation}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.guides}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.blog}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.supportFooter}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">{t.company}</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.about}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.careers}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.termsOfService}
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.cookiePolicy}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} BarberApp. {t.allRightsReserved}
            </p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {t.privacyPolicy}
              </Link>
              <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {t.termsOfService}
              </Link>
              <Link href="/cookie-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {t.cookiePolicy}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label={language === "es" ? "Volver arriba" : "Back to top"}
        >
          <ChevronUp className="size-5" />
        </motion.button>
      )}
    </div>
  )
}
