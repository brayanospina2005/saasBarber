"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Search,
  HelpCircle,
  BookOpen,
  Video,
  Download,
  Users,
  Settings,
  Smartphone,
  CreditCard,
  Shield,
  Scissors,
  ChevronRight,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const translations = {
  es: {
    title: "Centro de Soporte BarberApp",
    subtitle: "Estamos aquí para ayudarte. Encuentra respuestas rápidas o contacta con nuestro equipo.",
    backToHome: "Volver al inicio",
    searchPlaceholder: "Buscar en el centro de ayuda...",
    
    // Contact Methods
    contactUs: "Contáctanos",
    whatsappSupport: "Soporte por WhatsApp",
    whatsappDesc: "Respuesta inmediata para consultas urgentes",
    emailSupport: "Soporte por Email",
    emailDesc: "Para consultas detalladas y documentación",
    phoneSupport: "Soporte Telefónico", 
    phoneDesc: "Asistencia personalizada en horario comercial",
    
    // Quick Help
    quickHelp: "Ayuda Rápida",
    gettingStarted: "Primeros Pasos",
    gettingStartedDesc: "Aprende los conceptos básicos de BarberApp",
    tutorials: "Video Tutoriales",
    tutorialsDesc: "Guías paso a paso en video",
    documentation: "Documentación",
    documentationDesc: "Guías técnicas detalladas",
    
    // Support Hours
    supportHours: "Horarios de Atención",
    mondayToFriday: "Lunes a Viernes",
    saturday: "Sábados",
    sunday: "Domingos",
    businessHours: "9:00 AM - 6:00 PM",
    limitedHours: "10:00 AM - 2:00 PM",
    closed: "Cerrado",
    
    // FAQ Categories
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Encuentra respuestas a las consultas más comunes",
    generalQuestions: "Preguntas Generales",
    accountBilling: "Cuenta y Facturación",
    technicalIssues: "Problemas Técnicos",
    featureGuides: "Guías de Funcionalidades",
    
    // FAQ Content
    faqs: {
      general: [
        {
          question: "¿Qué es BarberApp?",
          answer: "BarberApp es una aplicación completa para barberías que incluye gestión de citas, clientes, pagos y una landing page personalizada. Todo en una sola solución."
        },
        {
          question: "¿Cómo empiezo a usar BarberApp?",
          answer: "Contáctanos a través de WhatsApp y nuestro equipo te guiará en la configuración inicial. Incluye personalización de tu perfil y capacitación básica."
        },
        {
          question: "¿Necesito conocimientos técnicos para usar la app?",
          answer: "No, BarberApp está diseñada para ser intuitiva. Proporcionamos capacitación completa y soporte técnico continuo."
        }
      ],
      billing: [
        {
          question: "¿Cómo funciona el pago único?",
          answer: "Con un solo pago obtienes acceso completo a BarberApp: landing page, módulo de reservas, panel de admin, soporte y actualizaciones gratuitas de por vida."
        },
        {
          question: "¿Hay costos ocultos o mensualidades?",
          answer: "No. El pago es único y no hay costos adicionales, mensualidades ni comisiones por transacciones. Una vez que pagas, es tuyo para siempre."
        },
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos transferencias bancarias, tarjetas de crédito/débito y pagos a través de plataformas digitales. Contacta con ventas para más detalles."
        }
      ],
      technical: [
        {
          question: "¿Qué hago si tengo problemas técnicos?",
          answer: "Contacta nuestro soporte técnico por WhatsApp o email. Nuestro equipo está preparado para resolver cualquier inconveniente rápidamente."
        },
        {
          question: "¿La app funciona en todos los dispositivos?",
          answer: "Sí, BarberApp es completamente responsive y funciona en computadoras, tablets y smartphones. También es compatible con todos los navegadores modernos."
        },
        {
          question: "¿Cómo hago backup de mi información?",
          answer: "Todos los datos se respaldan automáticamente en la nube. También puedes solicitar copias de seguridad manuales contactando al soporte."
        }
      ],
      features: [
        {
          question: "¿Cómo personalizo mi landing page?",
          answer: "Durante la configuración inicial, nuestro equipo personaliza tu landing page con tus colores, logo, servicios e información. Puedes solicitar cambios cuando lo necesites."
        },
        {
          question: "¿Cómo funcionan las reservas online?",
          answer: "Los clientes pueden reservar directamente desde tu landing page. El sistema gestiona horarios disponibles, confirmaciones y recordatorios automáticamente."
        },
        {
          question: "¿Puedo gestionar múltiples barberos?",
          answer: "Sí, el panel de administración permite gestionar varios barberos, sus horarios individuales y la asignación de citas específicas."
        }
      ]
    },
    
    // Resources
    resources: "Recursos Útiles",
    downloadApp: "Descargar App Móvil",
    communityForum: "Foro de Comunidad",
    videoTutorials: "Video Tutoriales",
    userGuide: "Guía de Usuario",
    
    // Contact CTA
    ctaTitle: "¿No Encontraste lo que Buscabas?",
    ctaSubtitle: "Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta específica",
    contactSupport: "Contactar Soporte",
  },
  en: {
    title: "BarberApp Support Center", 
    subtitle: "We're here to help. Find quick answers or contact our team.",
    backToHome: "Back to home",
    searchPlaceholder: "Search help center...",
    
    // Contact Methods
    contactUs: "Contact Us",
    whatsappSupport: "WhatsApp Support",
    whatsappDesc: "Immediate response for urgent queries",
    emailSupport: "Email Support", 
    emailDesc: "For detailed queries and documentation",
    phoneSupport: "Phone Support",
    phoneDesc: "Personalized assistance during business hours",
    
    // Quick Help
    quickHelp: "Quick Help",
    gettingStarted: "Getting Started",
    gettingStartedDesc: "Learn BarberApp basics",
    tutorials: "Video Tutorials",
    tutorialsDesc: "Step-by-step video guides",
    documentation: "Documentation",
    documentationDesc: "Detailed technical guides",
    
    // Support Hours
    supportHours: "Support Hours",
    mondayToFriday: "Monday to Friday",
    saturday: "Saturdays",
    sunday: "Sundays", 
    businessHours: "9:00 AM - 6:00 PM",
    limitedHours: "10:00 AM - 2:00 PM",
    closed: "Closed",
    
    // FAQ Categories
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find answers to the most common questions",
    generalQuestions: "General Questions",
    accountBilling: "Account & Billing",
    technicalIssues: "Technical Issues",
    featureGuides: "Feature Guides",
    
    // FAQ Content
    faqs: {
      general: [
        {
          question: "What is BarberApp?",
          answer: "BarberApp is a complete barbershop application that includes appointment management, clients, payments and a personalized landing page. All in one solution."
        },
        {
          question: "How do I start using BarberApp?",
          answer: "Contact us through WhatsApp and our team will guide you through the initial setup. Includes profile customization and basic training."
        },
        {
          question: "Do I need technical knowledge to use the app?",
          answer: "No, BarberApp is designed to be intuitive. We provide complete training and ongoing technical support."
        }
      ],
      billing: [
        {
          question: "How does the one-time payment work?",
          answer: "With a single payment you get complete access to BarberApp: landing page, booking module, admin panel, support and free lifetime updates."
        },
        {
          question: "Are there hidden costs or monthly fees?",
          answer: "No. The payment is one-time and there are no additional costs, monthly fees or transaction commissions. Once you pay, it's yours forever."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers, credit/debit cards and payments through digital platforms. Contact sales for more details."
        }
      ],
      technical: [
        {
          question: "What do I do if I have technical problems?",
          answer: "Contact our technical support via WhatsApp or email. Our team is prepared to resolve any issue quickly."
        },
        {
          question: "Does the app work on all devices?",
          answer: "Yes, BarberApp is completely responsive and works on computers, tablets and smartphones. It's also compatible with all modern browsers."
        },
        {
          question: "How do I backup my information?",
          answer: "All data is automatically backed up to the cloud. You can also request manual backups by contacting support."
        }
      ],
      features: [
        {
          question: "How do I customize my landing page?",
          answer: "During initial setup, our team customizes your landing page with your colors, logo, services and information. You can request changes whenever needed."
        },
        {
          question: "How do online bookings work?",
          answer: "Clients can book directly from your landing page. The system automatically manages available schedules, confirmations and reminders."
        },
        {
          question: "Can I manage multiple barbers?",
          answer: "Yes, the admin panel allows you to manage multiple barbers, their individual schedules and specific appointment assignments."
        }
      ]
    },
    
    // Resources
    resources: "Useful Resources",
    downloadApp: "Download Mobile App",
    communityForum: "Community Forum", 
    videoTutorials: "Video Tutorials",
    userGuide: "User Guide",
    
    // Contact CTA
    ctaTitle: "Didn't Find What You Were Looking For?",
    ctaSubtitle: "Our support team is ready to help you with any specific questions",
    contactSupport: "Contact Support",
  },
}

export default function SupportPage() {
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFaqCategory, setSelectedFaqCategory] = useState("general")

  const t = translations[language]

  const openWhatsApp = () => {
    const message = language === "es" 
      ? "¡Hola! Necesito ayuda con BarberApp. ¿Podrían asistirme?"
      : "Hello! I need help with BarberApp. Could you assist me?"
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank")
  }

  const faqCategories = [
    { id: "general", name: t.generalQuestions, icon: <HelpCircle className="size-4" /> },
    { id: "billing", name: t.accountBilling, icon: <CreditCard className="size-4" /> },
    { id: "technical", name: t.technicalIssues, icon: <Settings className="size-4" /> },
    { id: "features", name: t.featureGuides, icon: <Smartphone className="size-4" /> },
  ]

  const filteredFaqs = t.faqs[selectedFaqCategory as keyof typeof t.faqs].filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
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
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium flex items-center gap-2 w-fit mx-auto" variant="secondary">
              <HelpCircle className="size-4" />
              {language === "es" ? "Centro de Soporte" : "Support Center"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{t.subtitle}</p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
              <Input
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.contactUs}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Elige el método de contacto que prefieras para recibir ayuda personalizada"
                : "Choose your preferred contact method to receive personalized help"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* WhatsApp Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-green-200 bg-gradient-to-br from-green-50 to-background hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <MessageCircle className="size-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">{t.whatsappSupport}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{t.whatsappDesc}</p>
                  <Button onClick={openWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 size-4" />
                    {language === "es" ? "Abrir WhatsApp" : "Open WhatsApp"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Email Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-blue-200 bg-gradient-to-br from-blue-50 to-background hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="size-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{t.emailSupport}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{t.emailDesc}</p>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Mail className="mr-2 size-4" />
                    soporte@barberapp.com
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phone Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full border-purple-200 bg-gradient-to-br from-purple-50 to-background hover:shadow-lg transition-all">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                    <Phone className="size-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{t.phoneSupport}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">{t.phoneDesc}</p>
                  <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                    <Phone className="mr-2 size-4" />
                    +1 (555) 123-4567
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Support Hours */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="size-5" />
                {t.supportHours}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <h4 className="font-semibold mb-2">{t.mondayToFriday}</h4>
                  <p className="text-muted-foreground">{t.businessHours}</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <h4 className="font-semibold mb-2">{t.saturday}</h4>
                  <p className="text-muted-foreground">{t.limitedHours}</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/30">
                  <h4 className="font-semibold mb-2">{t.sunday}</h4>
                  <p className="text-muted-foreground">{t.closed}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Help */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.quickHelp}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Accede rápidamente a los recursos más útiles"
                : "Quickly access the most useful resources"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: t.gettingStarted,
                description: t.gettingStartedDesc,
                icon: <BookOpen className="size-6" />,
                link: "/guides",
                color: "from-emerald-500 to-emerald-600"
              },
              {
                title: t.tutorials,
                description: t.tutorialsDesc,
                icon: <Video className="size-6" />,
                link: "#",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: t.documentation,
                description: t.documentationDesc,
                icon: <Download className="size-6" />,
                link: "#",
                color: "from-purple-500 to-purple-600"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all group cursor-pointer">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}>
                      {item.icon}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <Button variant="ghost" className="group-hover:bg-primary/10 transition-colors">
                      {language === "es" ? "Acceder" : "Access"}
                      <ChevronRight className="ml-2 size-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.faqTitle}</h2>
            <p className="text-muted-foreground">{t.faqSubtitle}</p>
          </div>

          {/* FAQ Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedFaqCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFaqCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Search className="size-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {language === "es" ? "No se encontraron preguntas" : "No questions found"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "es" 
                    ? "Intenta con otros términos de búsqueda"
                    : "Try different search terms"
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.resources}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Recursos adicionales para aprovechar al máximo BarberApp"
                : "Additional resources to get the most out of BarberApp"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.downloadApp, icon: <Download className="size-5" />, link: "#" },
              { title: t.communityForum, icon: <Users className="size-5" />, link: "#" },
              { title: t.videoTutorials, icon: <Video className="size-5" />, link: "#" },
              { title: t.userGuide, icon: <BookOpen className="size-5" />, link: "/guides" },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {resource.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{resource.title}</h3>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="mr-2 size-4" />
                      {language === "es" ? "Acceder" : "Access"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
              <MessageCircle className="ml-2 size-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 