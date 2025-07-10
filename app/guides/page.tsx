"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Users,
  Settings,
  BarChart,
  Lightbulb,
  CheckCircle,
  Clock,
  Smartphone,
  CreditCard,
  Shield,
  Scissors,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GuideModal from "@/components/GuideModal"

const translations = {
  es: {
    title: "Guías de BarberApp",
    subtitle: "Todo lo que necesitas para aprovechar al máximo tu aplicación de barbería",
    backToHome: "Volver al inicio",
    gettingStarted: "Primeros Pasos",
    features: "Funcionalidades",
    advanced: "Avanzado",
    support: "Soporte",
    
    // Getting Started Guides
    setupTitle: "Configuración Inicial",
    setupDesc: "Aprende a configurar tu barbería desde cero",
    setupTime: "10 min",
    
    firstBookingTitle: "Tu Primera Reserva",
    firstBookingDesc: "Cómo gestionar y confirmar tu primera cita",
    firstBookingTime: "5 min",
    
    profileTitle: "Personalizar Perfil",
    profileDesc: "Configura tu perfil de barbería y servicios",
    profileTime: "15 min",
    
    // Feature Guides
    calendarTitle: "Gestión de Calendario",
    calendarDesc: "Domina el calendario y la programación de citas",
    calendarTime: "12 min",
    
    clientsTitle: "Gestión de Clientes",
    clientsDesc: "Organiza y mantén registro de tus clientes",
    clientsTime: "8 min",
    
    paymentsTitle: "Configurar Pagos",
    paymentsDesc: "Integra métodos de pago seguros",
    paymentsTime: "20 min",
    
    // Advanced Guides
    analyticsTitle: "Reportes y Análisis",
    analyticsDesc: "Interpreta tus métricas de negocio",
    analyticsTime: "18 min",
    
    marketingTitle: "Marketing Digital",
    marketingDesc: "Estrategias para atraer más clientes",
    marketingTime: "25 min",
    
    automationTitle: "Automatización",
    automationDesc: "Automatiza recordatorios y confirmaciones",
    automationTime: "15 min",
    
    // Support Guides
    troubleshootTitle: "Solución de Problemas",
    troubleshootDesc: "Resuelve problemas comunes rápidamente",
    troubleshootTime: "Variable",
    
    backupTitle: "Respaldo de Datos",
    backupDesc: "Mantén tus datos seguros y respaldados",
    backupTime: "10 min",
    
    updatesTitle: "Actualizaciones",
    updatesDesc: "Cómo actualizar y nuevas funcionalidades",
    updatesTime: "5 min",
  },
  en: {
    title: "BarberApp Guides",
    subtitle: "Everything you need to make the most of your barbershop app",
    backToHome: "Back to home",
    gettingStarted: "Getting Started",
    features: "Features",
    advanced: "Advanced",
    support: "Support",
    
    // Getting Started Guides
    setupTitle: "Initial Setup",
    setupDesc: "Learn to configure your barbershop from scratch",
    setupTime: "10 min",
    
    firstBookingTitle: "Your First Booking",
    firstBookingDesc: "How to manage and confirm your first appointment",
    firstBookingTime: "5 min",
    
    profileTitle: "Customize Profile",
    profileDesc: "Set up your barbershop profile and services",
    profileTime: "15 min",
    
    // Feature Guides
    calendarTitle: "Calendar Management",
    calendarDesc: "Master the calendar and appointment scheduling",
    calendarTime: "12 min",
    
    clientsTitle: "Client Management",
    clientsDesc: "Organize and keep track of your clients",
    clientsTime: "8 min",
    
    paymentsTitle: "Setup Payments",
    paymentsDesc: "Integrate secure payment methods",
    paymentsTime: "20 min",
    
    // Advanced Guides
    analyticsTitle: "Reports and Analytics",
    analyticsDesc: "Interpret your business metrics",
    analyticsTime: "18 min",
    
    marketingTitle: "Digital Marketing",
    marketingDesc: "Strategies to attract more clients",
    marketingTime: "25 min",
    
    automationTitle: "Automation",
    automationDesc: "Automate reminders and confirmations",
    automationTime: "15 min",
    
    // Support Guides
    troubleshootTitle: "Troubleshooting",
    troubleshootDesc: "Solve common problems quickly",
    troubleshootTime: "Variable",
    
    backupTitle: "Data Backup",
    backupDesc: "Keep your data safe and backed up",
    backupTime: "10 min",
    
    updatesTitle: "Updates",
    updatesDesc: "How to update and new features",
    updatesTime: "5 min",
  },
}

export default function GuidesPage() {
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const t = translations[language]

  const openGuide = (guideId: string) => {
    setSelectedGuide(guideId)
    setIsModalOpen(true)
  }

  const closeGuide = () => {
    setIsModalOpen(false)
    setSelectedGuide(null)
  }

  const gettingStartedGuides = [
    {
      id: "configuracion-inicial",
      title: t.setupTitle,
      description: t.setupDesc,
      time: t.setupTime,
      icon: <Settings className="size-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "tu-primera-reserva",
      title: t.firstBookingTitle,
      description: t.firstBookingDesc,
      time: t.firstBookingTime,
      icon: <Calendar className="size-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      id: "configurar-perfil",
      title: t.profileTitle,
      description: t.profileDesc,
      time: t.profileTime,
      icon: <Users className="size-6" />,
      color: "from-purple-500 to-purple-600",
    },
  ]

  const featureGuides = [
    {
      id: "gestion-calendario",
      title: t.calendarTitle,
      description: t.calendarDesc,
      time: t.calendarTime,
      icon: <Calendar className="size-6" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: "gestion-clientes",
      title: t.clientsTitle,
      description: t.clientsDesc,
      time: t.clientsTime,
      icon: <Users className="size-6" />,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "configurar-pagos",
      title: t.paymentsTitle,
      description: t.paymentsDesc,
      time: t.paymentsTime,
      icon: <CreditCard className="size-6" />,
      color: "from-emerald-500 to-emerald-600",
    },
  ]

  const advancedGuides = [
    {
      id: "reportes-analytics",
      title: t.analyticsTitle,
      description: t.analyticsDesc,
      time: t.analyticsTime,
      icon: <BarChart className="size-6" />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: "marketing-digital",
      title: t.marketingTitle,
      description: t.marketingDesc,
      time: t.marketingTime,
      icon: <Lightbulb className="size-6" />,
      color: "from-pink-500 to-pink-600",
    },
    {
      id: "automatizacion",
      title: t.automationTitle,
      description: t.automationDesc,
      time: t.automationTime,
      icon: <Smartphone className="size-6" />,
      color: "from-amber-500 to-amber-600",
    },
  ]

  const supportGuides = [
    {
      id: "solucion-problemas",
      title: t.troubleshootTitle,
      description: t.troubleshootDesc,
      time: t.troubleshootTime,
      icon: <Settings className="size-6" />,
      color: "from-red-500 to-red-600",
    },
    {
      id: "respaldo-datos",
      title: t.backupTitle,
      description: t.backupDesc,
      time: t.backupTime,
      icon: <Shield className="size-6" />,
      color: "from-teal-500 to-teal-600",
    },
    {
      id: "actualizaciones",
      title: t.updatesTitle,
      description: t.updatesDesc,
      time: t.updatesTime,
      icon: <CheckCircle className="size-6" />,
      color: "from-violet-500 to-violet-600",
    },
  ]

  const GuideCard = ({ guide, index }: { guide: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-105">
        <CardHeader className="pb-4">
          <div className={`size-12 rounded-xl bg-gradient-to-br ${guide.color} flex items-center justify-center text-white mb-4`}>
            {guide.icon}
          </div>
          <CardTitle className="text-lg">{guide.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-4">{guide.description}</p>
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Clock className="size-3" />
              {guide.time}
            </Badge>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-primary"
              onClick={() => openGuide(guide.id)}
            >
              {language === "es" ? "Leer Guía" : "Read Guide"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="size-4" />
                {t.backToHome}
              </Button>
            </Link>
            <div className="flex items-center gap-2 font-bold">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                <Scissors className="size-4" />
              </div>
              <span>BarberApp</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium flex items-center gap-2 w-fit mx-auto" variant="secondary">
              <BookOpen className="size-4" />
              {language === "es" ? "Centro de Guías" : "Guide Center"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.gettingStarted}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Comienza tu viaje con BarberApp con estas guías esenciales" 
                : "Start your BarberApp journey with these essential guides"}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gettingStartedGuides.map((guide, index) => (
              <GuideCard key={index} guide={guide} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.features}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Domina las funcionalidades principales de tu aplicación" 
                : "Master the main features of your application"}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureGuides.map((guide, index) => (
              <GuideCard key={index} guide={guide} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Section */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.advanced}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Lleva tu barbería al siguiente nivel con estrategias avanzadas" 
                : "Take your barbershop to the next level with advanced strategies"}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advancedGuides.map((guide, index) => (
              <GuideCard key={index} guide={guide} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.support}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Soporte técnico y mantenimiento de tu aplicación" 
                : "Technical support and maintenance for your application"}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportGuides.map((guide, index) => (
              <GuideCard key={index} guide={guide} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "es" ? "¿Necesitas Más Ayuda?" : "Need More Help?"}
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              {language === "es" 
                ? "Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta" 
                : "Our support team is here to help you with any questions"}
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="rounded-full"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              {language === "es" ? "Contactar Soporte" : "Contact Support"}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Guide Modal */}
      {selectedGuide && (
        <GuideModal
          isOpen={isModalOpen}
          onClose={closeGuide}
          guideId={selectedGuide}
          language={language}
        />
      )}
    </div>
  )
} 