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
    
    // Privacy Policy
    privacyTitle: "Política de Privacidad",
    privacySubtitle: "Tu privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos tu información.",
    lastUpdated: "Última actualización: 15 de enero de 2025",
    
    // Sections
    dataCollection: "Recopilación de Información",
    dataCollectionContent: "Recopilamos información que nos proporcionas directamente cuando te registras en nuestro servicio, nos contactas o utilizas nuestras funcionalidades. Esto incluye tu nombre, dirección de email, información de tu barbería y preferencias de servicio.",
    
    useOfData: "Uso de la Información",
    useOfDataContent: "Utilizamos tu información para proporcionarte nuestros servicios, personalizar tu experiencia, comunicarnos contigo sobre actualizaciones del servicio, y mejorar nuestras funcionalidades. Nunca vendemos tu información personal a terceros.",
    
    dataProtection: "Protección de Datos",
    dataProtectionContent: "Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos encriptación SSL y almacenamos datos en servidores seguros.",
    
    cookies: "Cookies y Tecnologías Similares",
    cookiesContent: "Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestra aplicación, analizar el uso y personalizar el contenido. Puedes controlar el uso de cookies a través de la configuración de tu navegador.",
    
    thirdParty: "Servicios de Terceros",
    thirdPartyContent: "Podemos integrar servicios de terceros para mejorar nuestras funcionalidades, como procesadores de pago, servicios de análisis y proveedores de comunicación. Estos proveedores tienen sus propias políticas de privacidad.",
    
    dataRetention: "Retención de Datos",
    dataRetentionContent: "Conservamos tu información personal durante el tiempo necesario para proporcionarte nuestros servicios y cumplir con nuestras obligaciones legales. Puedes solicitar la eliminación de tu cuenta y datos en cualquier momento.",
    
    userRights: "Tus Derechos",
    userRightsContent: "Tienes derecho a acceder, corregir, actualizar o solicitar la eliminación de tu información personal. También puedes objetar el procesamiento de tus datos o solicitar la portabilidad de los mismos.",
    
    minors: "Menores de Edad",
    minorsContent: "Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos conscientemente información personal de menores. Si descubres que un menor ha proporcionado información, contáctanos para que podamos eliminarla.",
    
    changes: "Cambios a esta Política",
    changesContent: "Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos por email o a través de un aviso en nuestra aplicación antes de que los cambios entren en vigor.",
    
    contact: "Contacto",
    contactContent: "Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información, puedes contactarnos a través de WhatsApp o por email a privacy@barberapp.com.",
    
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
    
    // Privacy Policy
    privacyTitle: "Privacy Policy",
    privacySubtitle: "Your privacy is important to us. This policy explains how we collect, use, and protect your information.",
    lastUpdated: "Last updated: January 15, 2025",
    
    // Sections
    dataCollection: "Information Collection",
    dataCollectionContent: "We collect information you provide directly when you register for our service, contact us, or use our features. This includes your name, email address, barbershop information, and service preferences.",
    
    useOfData: "Use of Information",
    useOfDataContent: "We use your information to provide our services, personalize your experience, communicate with you about service updates, and improve our features. We never sell your personal information to third parties.",
    
    dataProtection: "Data Protection",
    dataProtectionContent: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use SSL encryption and store data on secure servers.",
    
    cookies: "Cookies and Similar Technologies",
    cookiesContent: "We use cookies and similar technologies to improve your experience on our application, analyze usage, and personalize content. You can control cookie usage through your browser settings.",
    
    thirdParty: "Third-Party Services",
    thirdPartyContent: "We may integrate third-party services to enhance our features, such as payment processors, analytics services, and communication providers. These providers have their own privacy policies.",
    
    dataRetention: "Data Retention",
    dataRetentionContent: "We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. You can request deletion of your account and data at any time.",
    
    userRights: "Your Rights",
    userRightsContent: "You have the right to access, correct, update, or request deletion of your personal information. You can also object to processing of your data or request data portability.",
    
    minors: "Minors",
    minorsContent: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors. If you discover that a minor has provided information, contact us so we can delete it.",
    
    changes: "Changes to This Policy",
    changesContent: "We may update this privacy policy occasionally. We will notify you of significant changes by email or through a notice in our application before the changes take effect.",
    
    contact: "Contact",
    contactContent: "If you have questions about this privacy policy or how we handle your information, you can contact us through WhatsApp or by email at privacy@barberapp.com.",
    
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

export default function PrivacyPolicyPage() {
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
    const whatsappUrl = `https://wa.me/573102566276?text=${encodeURIComponent(message)}`
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

  const privacySections = [
    {
      title: t.dataCollection,
      content: t.dataCollectionContent,
    },
    {
      title: t.useOfData,
      content: t.useOfDataContent,
    },
    {
      title: t.dataProtection,
      content: t.dataProtectionContent,
    },
    {
      title: t.cookies,
      content: t.cookiesContent,
    },
    {
      title: t.thirdParty,
      content: t.thirdPartyContent,
    },
    {
      title: t.dataRetention,
      content: t.dataRetentionContent,
    },
    {
      title: t.userRights,
      content: t.userRightsContent,
    },
    {
      title: t.minors,
      content: t.minorsContent,
    },
    {
      title: t.changes,
      content: t.changesContent,
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
                {t.privacyTitle}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
                {t.privacySubtitle}
              </p>
              <p className="text-sm text-muted-foreground">
                {t.lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {privacySections.map((section, index) => (
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
                  {language === "es" ? "¿Tienes dudas sobre tu privacidad?" : "Questions about your privacy?"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === "es" 
                    ? "Estamos aquí para ayudarte. Contáctanos si tienes alguna pregunta sobre cómo protegemos tu información."
                    : "We're here to help. Contact us if you have any questions about how we protect your information."
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