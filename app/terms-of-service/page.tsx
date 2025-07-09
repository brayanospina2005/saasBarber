"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronRight,
  ChevronUp,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Scissors,
  Languages,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const translations = {
  es: {
    // Header
    features: "Características",
    testimonials: "Testimonios", 
    pricing: "Precios",
    faq: "Preguntas",
    contactMe: "Contáctame",
    home: "Inicio",
    
    // Terms of Service
    termsTitle: "Términos de Servicio",
    termsSubtitle: "Estos términos rigen el uso de BarberApp y definen los derechos y responsabilidades de ambas partes.",
    lastUpdated: "Última actualización: 15 de enero de 2025",
    
    // Sections
    acceptance: "Aceptación de los Términos",
    acceptanceContent: "Al acceder y utilizar BarberApp, aceptas estar sujeto a estos términos de servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro servicio.",
    
    serviceDescription: "Descripción del Servicio",
    serviceDescriptionContent: "BarberApp es una aplicación todo-en-uno para barberías que incluye gestión de citas, clientes, pagos, landing page personalizada y panel de administración. Ofrecemos el servicio mediante un pago único sin suscripciones mensuales.",
    
    userAccounts: "Cuentas de Usuario",
    userAccountsContent: "Para utilizar BarberApp, debes crear una cuenta proporcionando información precisa y completa. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y de todas las actividades que ocurran bajo tu cuenta.",
    
    userResponsibilities: "Responsabilidades del Usuario",
    userResponsibilitiesContent: "Te comprometes a utilizar BarberApp de manera legal y responsable. No debes usar el servicio para actividades ilegales, enviar spam, o interferir con el funcionamiento del sistema. Eres responsable del contenido que publiques en tu landing page.",
    
    intellectualProperty: "Propiedad Intelectual",
    intellectualPropertyContent: "BarberApp y todo su contenido, características y funcionalidades son propiedad exclusiva nuestra y están protegidos por derechos de autor, marcas registradas y otras leyes de propiedad intelectual.",
    
    paymentTerms: "Términos de Pago",
    paymentTermsContent: "BarberApp se ofrece mediante un pago único. Los precios están sujetos a cambios, pero no afectarán a usuarios que ya hayan realizado el pago. No ofrecemos reembolsos salvo en casos excepcionales determinados a nuestra discreción.",
    
    serviceAvailability: "Disponibilidad del Servicio",
    serviceAvailabilityContent: "Nos esforzamos por mantener BarberApp disponible 24/7, pero no garantizamos un tiempo de actividad del 100%. Podemos realizar mantenimiento programado que pueda afectar temporalmente la disponibilidad del servicio.",
    
    dataAndPrivacy: "Datos y Privacidad",
    dataAndPrivacyContent: "El manejo de tus datos personales se rige por nuestra Política de Privacidad. Al utilizar BarberApp, también aceptas nuestras prácticas de privacidad como se describe en dicha política.",
    
    termination: "Terminación",
    terminationContent: "Puedes dejar de usar BarberApp en cualquier momento. Nos reservamos el derecho de suspender o terminar tu acceso si violas estos términos. En caso de terminación, tus datos pueden ser eliminados según nuestra política de retención.",
    
    limitation: "Limitación de Responsabilidad",
    limitationContent: "BarberApp se proporciona 'tal como es'. No seremos responsables de daños indirectos, incidentales o consecuentes que puedan surgir del uso de nuestro servicio. Nuestra responsabilidad total está limitada al monto que hayas pagado por el servicio.",
    
    changes: "Modificaciones a los Términos",
    changesContent: "Podemos actualizar estos términos ocasionalmente. Te notificaremos sobre cambios significativos por email o mediante un aviso en la aplicación. El uso continuado del servicio después de los cambios constituye tu aceptación de los nuevos términos.",
    
    governing: "Ley Aplicable",
    governingContent: "Estos términos se rigen por las leyes del país donde operamos. Cualquier disputa relacionada con estos términos se resolverá mediante arbitraje o en los tribunales competentes de nuestra jurisdicción.",
    
    contact: "Contacto",
    contactContent: "Si tienes preguntas sobre estos términos de servicio, puedes contactarnos a través de WhatsApp o por email a legal@barberapp.com.",
    
    // Footer
    footerDesc: "Optimiza tu barbería con nuestra aplicación todo-en-uno. Aumenta la productividad y haz crecer tu negocio.",
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
    home: "Home",
    
    // Terms of Service
    termsTitle: "Terms of Service",
    termsSubtitle: "These terms govern the use of BarberApp and define the rights and responsibilities of both parties.",
    lastUpdated: "Last updated: January 15, 2025",
    
    // Sections
    acceptance: "Acceptance of Terms",
    acceptanceContent: "By accessing and using BarberApp, you agree to be bound by these terms of service. If you disagree with any part of these terms, you should not use our service.",
    
    serviceDescription: "Service Description",
    serviceDescriptionContent: "BarberApp is an all-in-one application for barbershops that includes appointment management, client management, payments, custom landing page, and admin panel. We offer the service through a one-time payment without monthly subscriptions.",
    
    userAccounts: "User Accounts",
    userAccountsContent: "To use BarberApp, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account and password, and for all activities that occur under your account.",
    
    userResponsibilities: "User Responsibilities",
    userResponsibilitiesContent: "You agree to use BarberApp legally and responsibly. You must not use the service for illegal activities, send spam, or interfere with the system's operation. You are responsible for the content you publish on your landing page.",
    
    intellectualProperty: "Intellectual Property",
    intellectualPropertyContent: "BarberApp and all its content, features, and functionality are our exclusive property and are protected by copyright, trademarks, and other intellectual property laws.",
    
    paymentTerms: "Payment Terms",
    paymentTermsContent: "BarberApp is offered through a one-time payment. Prices are subject to change but will not affect users who have already made payment. We do not offer refunds except in exceptional cases determined at our discretion.",
    
    serviceAvailability: "Service Availability",
    serviceAvailabilityContent: "We strive to keep BarberApp available 24/7, but we do not guarantee 100% uptime. We may perform scheduled maintenance that could temporarily affect service availability.",
    
    dataAndPrivacy: "Data and Privacy",
    dataAndPrivacyContent: "The handling of your personal data is governed by our Privacy Policy. By using BarberApp, you also accept our privacy practices as described in that policy.",
    
    termination: "Termination",
    terminationContent: "You may stop using BarberApp at any time. We reserve the right to suspend or terminate your access if you violate these terms. In case of termination, your data may be deleted according to our retention policy.",
    
    limitation: "Limitation of Liability",
    limitationContent: "BarberApp is provided 'as is'. We will not be liable for indirect, incidental, or consequential damages that may arise from using our service. Our total liability is limited to the amount you have paid for the service.",
    
    changes: "Changes to Terms",
    changesContent: "We may update these terms occasionally. We will notify you of significant changes by email or through a notice in the application. Continued use of the service after changes constitutes your acceptance of the new terms.",
    
    governing: "Governing Law",
    governingContent: "These terms are governed by the laws of the country where we operate. Any disputes related to these terms will be resolved through arbitration or in the competent courts of our jurisdiction.",
    
    contact: "Contact",
    contactContent: "If you have questions about these terms of service, you can contact us through WhatsApp or by email at legal@barberapp.com.",
    
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

export default function TermsOfServicePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState<"es" | "en">("es")

  const t = translations[language]

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

  const termsSections = [
    {
      title: t.acceptance,
      content: t.acceptanceContent,
    },
    {
      title: t.serviceDescription,
      content: t.serviceDescriptionContent,
    },
    {
      title: t.userAccounts,
      content: t.userAccountsContent,
    },
    {
      title: t.userResponsibilities,
      content: t.userResponsibilitiesContent,
    },
    {
      title: t.intellectualProperty,
      content: t.intellectualPropertyContent,
    },
    {
      title: t.paymentTerms,
      content: t.paymentTermsContent,
    },
    {
      title: t.serviceAvailability,
      content: t.serviceAvailabilityContent,
    },
    {
      title: t.dataAndPrivacy,
      content: t.dataAndPrivacyContent,
    },
    {
      title: t.termination,
      content: t.terminationContent,
    },
    {
      title: t.limitation,
      content: t.limitationContent,
    },
    {
      title: t.changes,
      content: t.changesContent,
    },
    {
      title: t.governing,
      content: t.governingContent,
    },
    {
      title: t.contact,
      content: t.contactContent,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              <Scissors className="size-4" />
            </div>
            <span>BarberApp</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.home}
            </Link>
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.features}
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.testimonials}
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.pricing}
            </Link>
            <Link
              href="/#faq"
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
              <Link href="/" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t.home}
              </Link>
              <Link href="/#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t.features}
              </Link>
              <Link href="/#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t.testimonials}
              </Link>
              <Link href="/#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                {t.pricing}
              </Link>
              <Link href="/#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
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
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                {t.termsTitle}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                {t.termsSubtitle}
              </p>
              <p className="text-sm text-muted-foreground">
                {t.lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {termsSections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-16 p-8 bg-muted/50 rounded-xl border text-center"
              >
                <h3 className="text-xl font-bold mb-4">
                  {language === "es" ? "¿Tienes dudas sobre los términos?" : "Questions about the terms?"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === "es" 
                    ? "Estamos aquí para ayudarte. Contáctanos si tienes alguna pregunta sobre nuestros términos de servicio."
                    : "We're here to help. Contact us if you have any questions about our terms of service."
                  }
                </p>
                <Button onClick={openWhatsApp} className="rounded-full">
                  {t.contactMe}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  <Scissors className="size-4" />
                </div>
                <span>BarberApp</span>
              </Link>
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
                  <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.features}
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
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