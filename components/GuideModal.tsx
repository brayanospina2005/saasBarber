"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  Play,
  Clock,
  User,
  Settings,
  Calendar,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Users,
  CreditCard,
  BarChart,
  Lightbulb,
  Smartphone,
  Shield,
  CheckCircle,
  Headphones,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface GuideStep {
  id: number
  title: string
  description: string
  image: string
  tips?: string[]
  duration?: string
}

interface GuideData {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  totalTime: string
  steps: GuideStep[]
}

const guidesData: { [key: string]: GuideData } = {
  "configuracion-inicial": {
    id: "configuracion-inicial",
    title: "Configuración Inicial",
    description: "Configura tu barbería paso a paso para empezar a recibir reservas",
    icon: <Settings className="size-6" />,
    totalTime: "10 min",
    steps: [
              {
          id: 1,
          title: "Información del Negocio",
          description: "Completa los datos básicos de tu barbería como nombre, teléfono, email, dirección y horarios de atención.",
          image: "/images/guides/configuracion-inicial/paso-1-informacion-negocio.jpeg",
          tips: [
            "Usa un nombre atractivo y fácil de recordar",
            "Asegúrate de que el teléfono esté correcto para recibir llamadas",
            "Los horarios deben reflejar tu disponibilidad real"
          ],
          duration: "3 min"
        },
        {
          id: 2,
          title: "Agregar Usuarios",
          description: "Crea cuentas para tu equipo de trabajo. Puedes agregar barberos, recepcionistas y administradores con diferentes permisos.",
          image: "/images/guides/configuracion-inicial/paso-2-agregar-usuarios.png.jpeg",
          tips: [
            "Define roles claros para cada usuario",
            "Usa emails reales para notificaciones",
            "Las contraseñas deben ser seguras"
          ],
          duration: "2 min"
        },
        {
          id: 3,
          title: "Redes Sociales",
          description: "Conecta tus redes sociales para mostrar tu trabajo y facilitar el contacto con clientes. Instagram, Facebook, WhatsApp y TikTok.",
          image: "/images/guides/configuracion-inicial/paso-3-redes-sociales.jpeg",
          tips: [
            "Instagram es clave para mostrar tu trabajo",
            "WhatsApp facilita la comunicación directa",
            "Mantén tus perfiles actualizados"
          ],
          duration: "3 min"
        },
        {
          id: 4,
          title: "Configuración del Sistema",
          description: "Personaliza las funcionalidades según tus necesidades: comisiones, recordatorios, horarios especiales y políticas de reserva.",
          image: "/images/guides/configuracion-inicial/paso-4-configuracion-sistema.jpeg",
          tips: [
            "Configura el tiempo límite de reservas según tu flujo de trabajo",
            "Activa recordatorios para reducir ausencias",
            "Define si trabajas domingos y horarios especiales"
          ],
          duration: "2 min"
        }
    ]
  },
  "tu-primera-reserva": {
    id: "tu-primera-reserva",
    title: "Tu Primera Reserva",
    description: "Aprende a crear una reserva paso a paso desde la selección del servicio hasta la confirmación",
    icon: <Calendar className="size-6" />,
    totalTime: "5 min",
    steps: [
      {
        id: 1,
        title: "Elegir Servicio",
        description: "Comienza seleccionando el tipo de servicio que el cliente desea. Puedes ver todos los servicios disponibles con sus precios y duración.",
        image: "/images/guides/tu-primera-reserva/paso-1-elegir-servicio.jpeg",
        tips: [
          "Revisa que los precios estén actualizados",
          "Considera el tiempo de cada servicio",
          "Algunos servicios pueden combinarse"
        ],
        duration: "1 min"
      },
      {
        id: 2,
        title: "Elegir Barbero",
        description: "Selecciona el barbero que realizará el servicio. Cada barbero puede tener especialidades diferentes.",
        image: "/images/guides/tu-primera-reserva/paso-2-elegir-barbero.jpeg",
        tips: [
          "Considera las especialidades de cada barbero",
          "Verifica la disponibilidad del barbero",
          "Algunos clientes tienen preferencias específicas"
        ],
        duration: "1 min"
      },
      {
        id: 3,
        title: "Elegir Fecha y Hora",
        description: "Selecciona la fecha y hora conveniente para la cita. Solo aparecerán los horarios disponibles del barbero elegido.",
        image: "/images/guides/tu-primera-reserva/paso-3-elegir-fecha.jpeg",
        tips: [
          "Los horarios mostrados ya consideran la duración del servicio",
          "Evita horarios muy ajustados entre citas",
          "Considera el tiempo de preparación"
        ],
        duration: "1 min"
      },
      {
        id: 4,
        title: "Confirmar Reserva",
        description: "Revisa todos los detalles de la reserva: servicio, barbero, fecha, hora y precio. Confirma para completar la reserva.",
        image: "/images/guides/tu-primera-reserva/paso-4-confirmar.reserva.jpeg",
        tips: [
          "Verifica todos los datos antes de confirmar",
          "El cliente recibirá una notificación automática",
          "Puedes agregar notas especiales si es necesario"
        ],
        duration: "2 min"
      }
    ]
  },
  "configurar-perfil": {
    id: "configurar-perfil",
    title: "Configurar tu Perfil",
    description: "Personaliza tu perfil de barbero con información personal, especialidades y portfolio de trabajo",
    icon: <User className="size-6" />,
    totalTime: "8 min",
    steps: [
      {
        id: 1,
        title: "Información Personal y Foto",
        description: "Completa tu información personal: nombre, foto de perfil, descripción profesional y datos de contacto para que los clientes te conozcan.",
        image: "/images/guides/configurar-perfil/paso-1.jpeg",
        tips: [
          "Usa una foto profesional de buena calidad",
          "Escribe una descripción que destaque tu experiencia",
          "Mantén tus datos de contacto actualizados",
          "La primera impresión es clave para ganar confianza"
        ],
        duration: "4 min"
      },
      {
        id: 2,
        title: "Especialidades y Servicios",
        description: "Define tus especialidades, servicios que ofreces, precios y tiempo de duración. Esto ayuda a los clientes a elegir el servicio adecuado.",
        image: "/images/guides/configurar-perfil/paso-2.jpeg",
        tips: [
          "Sé específico con tus especialidades (fade, beard, vintage, etc.)",
          "Establece precios competitivos según tu experiencia",
          "Calcula bien el tiempo real que toma cada servicio",
          "Actualiza precios regularmente según el mercado"
        ],
        duration: "3 min"
      },
      {
        id: 3,
        title: "Portfolio de Trabajos",
        description: "Sube fotos de tu mejor trabajo para mostrar tu estilo y calidad. Un buen portfolio es la mejor forma de atraer nuevos clientes.",
        image: "/images/guides/configurar-perfil/paso-3.jpeg",
        tips: [
          "Usa fotos de alta calidad con buena iluminación",
          "Muestra variedad de estilos y técnicas",
          "Actualiza tu portfolio regularmente con trabajos nuevos",
          "Pide permiso a los clientes antes de fotografiar",
          "Incluye antes y después para mostrar tu transformación"
        ],
        duration: "1 min"
      }
    ]
  },
  "gestion-calendario": {
    id: "gestion-calendario",
    title: "Gestión de Calendario",
    description: "Explora las funcionalidades del calendario para organizar citas, optimizar horarios y gestionar tu agenda profesionalmente",
    icon: <Calendar className="size-6" />,
    totalTime: "10 min",
    steps: [
      {
        id: 1,
        title: "Interfaz Principal del Calendario",
        description: "Conoce la interfaz principal del calendario donde puedes ver todas tus citas programadas, navegar entre fechas y obtener una vista general de tu agenda diaria y semanal.",
        image: "/images/guides/calendario-funcionalidad/diseno-1.jpeg",
        tips: [
          "La vista principal muestra todas las citas del día de forma organizada",
          "Puedes navegar fácilmente entre diferentes fechas",
          "Los colores te ayudan a identificar tipos de servicios rápidamente",
          "La información de cada cita es clara y accesible"
        ],
        duration: "4 min"
      },
      {
        id: 2,
        title: "Programación y Gestión de Citas",
        description: "Descubre cómo programar nuevas citas, gestionar las existentes y optimizar tu agenda para maximizar la productividad de tu barbería.",
        image: "/images/guides/calendario-funcionalidad/diseno-2.jpeg",
        tips: [
          "Programa citas de manera eficiente evitando conflictos de horario",
          "Gestiona la información completa de cada cliente y servicio",
          "Utiliza las herramientas de programación para optimizar tu tiempo",
          "Mantén siempre actualizada la información de contacto"
        ],
        duration: "4 min"
      },
      {
        id: 3,
        title: "Vista Detallada y Configuraciones",
        description: "Explora las opciones avanzadas del calendario, configuraciones personalizadas y herramientas adicionales para una gestión completa de tu agenda.",
        image: "/images/guides/calendario-funcionalidad/diseno-3.jpeg",
        tips: [
          "Personaliza la vista del calendario según tus necesidades",
          "Configura recordatorios automáticos para citas importantes",
          "Utiliza filtros para encontrar citas específicas rápidamente",
          "Aprovecha las herramientas de análisis para mejorar tu programación"
        ],
        duration: "2 min"
      }
    ]
  },
  "gestion-clientes": {
    id: "gestion-clientes",
    title: "Gestión de Clientes",
    description: "Organiza tu base de datos de clientes, analiza estadísticas y automatiza la comunicación para fidelizar y hacer crecer tu negocio",
    icon: <Users className="size-6" />,
    totalTime: "9 min",
    steps: [
      {
        id: 1,
        title: "Base de Datos de Clientes",
        description: "Explora cómo organizar y gestionar tu base de datos completa de clientes con toda su información personal, historial de servicios y preferencias.",
        image: "/images/guides/gestion-clientes/clientes-db.jpeg",
        tips: [
          "Mantén perfiles completos con información de contacto actualizada",
          "Registra preferencias de servicios y estilos de cada cliente",
          "Anota observaciones importantes y consideraciones especiales",
          "Organiza a tus clientes por frecuencia de visita y valor"
        ],
        duration: "4 min"
      },
      {
        id: 2,
        title: "Estadísticas y Análisis de Email",
        description: "Analiza las métricas de comunicación por email con tus clientes para mejorar tus estrategias de marketing y retención.",
        image: "/images/guides/gestion-clientes/email-stats.jpeg",
        tips: [
          "Revisa las tasas de apertura de tus emails promocionales",
          "Analiza qué tipo de contenido genera más engagement",
          "Identifica los mejores horarios para enviar comunicaciones",
          "Segmenta tu lista según el comportamiento de apertura"
        ],
        duration: "3 min"
      },
      {
        id: 3,
        title: "Comunicación Personalizada - Cumpleaños",
        description: "Implementa estrategias automáticas para felicitar a tus clientes en fechas especiales y mantener una relación cercana y personalizada.",
        image: "/images/guides/gestion-clientes/birthday.jpeg",
        tips: [
          "Configura mensajes automáticos de cumpleaños con ofertas especiales",
          "Personaliza cada mensaje con el nombre del cliente",
          "Ofrece descuentos exclusivos en su mes de cumpleaños",
          "Aprovecha estas fechas para reactivar clientes inactivos"
        ],
        duration: "2 min"
      }
    ]
  },
  "configurar-pagos": {
    id: "configurar-pagos",
    title: "Métodos de Pago BarberApp",
    description: "Descubre las opciones de pago flexibles y económicas para adquirir tu licencia de BarberApp",
    icon: <CreditCard className="size-6" />,
    totalTime: "5 min",
    steps: [
      {
        id: 1,
        title: "Métodos de Pago Disponibles",
        description: "Elige la opción que mejor se adapte a ti. Ofrecemos múltiples métodos de pago seguros y convenientes, con precios personalizados más económicos que la competencia.",
        image: "payment-methods",
        tips: [
          "💳 PayPal - Pago seguro internacional con tarjetas o saldo PayPal",
          "🏦 Transferencia Bancolombia - Sin comisiones, activación inmediata",
          "💵 Efectivo - Encuentros presenciales o consignaciones bancarias", 
          "🎯 Precios Personalizados - Hasta 50% más económico que la competencia",
          "📱 Planes adaptados al tamaño de tu barbería (1-20+ barberos)",
          "💰 Sin costos ocultos - precio fijo mensual o anual",
          "🎁 Descuentos especiales por pago anual anticipado",
          "📞 Solicita cotización personalizada sin compromiso"
        ],
        duration: "5 min"
      }
    ]
  },
  "reportes-analytics": {
    id: "reportes-analytics",
    title: "Reportes y Análisis",
    description: "Interpreta métricas clave de tu negocio para tomar decisiones informadas y crecer estratégicamente",
    icon: <BarChart className="size-6" />,
    totalTime: "18 min",
    steps: [
      {
        id: 1,
        title: "Métricas Financieras",
        description: "Analiza ingresos, gastos, rentabilidad por servicio y tendencias financieras para optimizar tu negocio.",
        image: "/placeholder.svg",
        tips: [
          "Revisa ingresos diarios, semanales y mensuales",
          "Identifica tus servicios más rentables",
          "Compara períodos para detectar tendencias"
        ],
        duration: "5 min"
      },
      {
        id: 2,
        title: "Análisis de Clientes",
        description: "Estudia patrones de comportamiento, frecuencia de visitas y preferencias para mejorar la retención.",
        image: "/placeholder.svg",
        tips: [
          "Identifica clientes más valiosos (VIP)",
          "Analiza frecuencia promedio de visitas",
          "Detecta clientes en riesgo de abandono"
        ],
        duration: "4 min"
      },
      {
        id: 3,
        title: "Rendimiento del Equipo",
        description: "Evalúa la productividad de cada barbero, servicios más solicitados y eficiencia operativa.",
        image: "/placeholder.svg",
        tips: [
          "Compara rendimiento entre barberos",
          "Identifica horarios de mayor demanda",
          "Mide tiempo promedio por servicio"
        ],
        duration: "4 min"
      },
      {
        id: 4,
        title: "Planificación Estratégica",
        description: "Usa los datos para planificar expansión, nuevos servicios, horarios optimizados y estrategias de marketing.",
        image: "/placeholder.svg",
        tips: [
          "Establece metas basadas en datos históricos",
          "Planifica inventario según demanda",
          "Ajusta precios basándote en análisis de mercado"
        ],
        duration: "5 min"
      }
    ]
  },
  "marketing-digital": {
    id: "marketing-digital",
    title: "Marketing Digital",
    description: "Desarrolla estrategias efectivas para atraer nuevos clientes y fidelizar los existentes usando herramientas digitales",
    icon: <Lightbulb className="size-6" />,
    totalTime: "25 min",
    steps: [
      {
        id: 1,
        title: "Presencia en Redes Sociales",
        description: "Crea contenido atractivo para Instagram, Facebook y TikTok mostrando tu trabajo y personalidad profesional.",
        image: "/placeholder.svg",
        tips: [
          "Publica contenido consistentemente",
          "Usa hashtags relevantes para barberías",
          "Muestra el proceso de transformación (antes/después)",
          "Interactúa genuinamente con seguidores"
        ],
        duration: "8 min"
      },
      {
        id: 2,
        title: "Google My Business",
        description: "Optimiza tu perfil de Google para aparecer en búsquedas locales y atraer clientes de tu zona.",
        image: "/placeholder.svg",
        tips: [
          "Mantén información actualizada (horarios, teléfono)",
          "Sube fotos de calidad regularmente",
          "Responde a todas las reseñas profesionalmente",
          "Publica actualizaciones y promociones"
        ],
        duration: "6 min"
      },
      {
        id: 3,
        title: "Email Marketing",
        description: "Construye una lista de emails y envía campañas para promociones, recordatorios y contenido de valor.",
        image: "/placeholder.svg",
        tips: [
          "Segmenta tu lista por tipo de cliente",
          "Envía emails de cumpleaños con descuentos",
          "Comparte tips de cuidado del cabello",
          "Promociona nuevos servicios o productos"
        ],
        duration: "5 min"
      },
      {
        id: 4,
        title: "Programa de Referidos",
        description: "Implementa un sistema de referencias que incentive a tus clientes a recomendar tus servicios.",
        image: "/placeholder.svg",
        tips: [
          "Ofrece descuentos tanto al referidor como al referido",
          "Facilita el proceso de referencia con códigos únicos",
          "Trackea las referencias exitosas",
          "Agradece públicamente las referencias"
        ],
        duration: "6 min"
      }
    ]
  },
  "automatizacion": {
    id: "automatizacion",
    title: "Automatización",
    description: "Automatiza procesos repetitivos para ahorrar tiempo y mejorar la experiencia del cliente",
    icon: <Smartphone className="size-6" />,
    totalTime: "15 min",
    steps: [
      {
        id: 1,
        title: "Recordatorios Automáticos",
        description: "Configura mensajes automáticos para recordar citas, confirmaciones y seguimientos post-servicio.",
        image: "/placeholder.svg",
        tips: [
          "Envía recordatorios 24 horas antes",
          "Solicita confirmación 2 horas antes",
          "Programa mensajes de agradecimiento post-servicio"
        ],
        duration: "4 min"
      },
      {
        id: 2,
        title: "Respuestas Automáticas",
        description: "Establece respuestas automáticas para preguntas frecuentes en WhatsApp, Instagram y otras plataformas.",
        image: "/placeholder.svg",
        tips: [
          "Crea respuestas para horarios y precios",
          "Automatiza información sobre servicios",
          "Incluye enlaces para reservar citas directamente"
        ],
        duration: "5 min"
      },
      {
        id: 3,
        title: "Marketing Automatizado",
        description: "Configura campañas automáticas para cumpleaños, clientes inactivos y promociones estacionales.",
        image: "/placeholder.svg",
        tips: [
          "Felicita automáticamente en cumpleaños con ofertas",
          "Reactiva clientes inactivos con descuentos",
          "Programa promociones para fechas especiales"
        ],
        duration: "4 min"
      },
      {
        id: 4,
        title: "Integración de Herramientas",
        description: "Conecta diferentes plataformas para que trabajen en conjunto sin intervención manual.",
        image: "/placeholder.svg",
        tips: [
          "Sincroniza calendario con Google Calendar",
          "Conecta WhatsApp Business con tu sistema de citas",
          "Integra redes sociales para publicación cruzada"
        ],
        duration: "2 min"
      }
    ]
  },
  "solucion-problemas": {
    id: "solucion-problemas",
    title: "Solución de Problemas",
    description: "Resuelve los problemas más comunes de manera rápida y eficiente para mantener tu operación funcionando",
    icon: <Settings className="size-6" />,
    totalTime: "Variable",
    steps: [
      {
        id: 1,
        title: "Problemas de Conexión",
        description: "Soluciona problemas de internet, sincronización y acceso a la aplicación. Verifica tu conexión WiFi o datos móviles, reinicia la aplicación si no responde correctamente, y asegúrate de tener la versión más reciente instalada.",
        image: "no-image",
        tips: [
          "Verifica tu conexión a internet",
          "Reinicia la aplicación si no responde",
          "Actualiza la app a la versión más reciente",
          "Contacta soporte si persiste el problema"
        ],
        duration: "5 min"
      },
      {
        id: 2,
        title: "Errores en Reservas",
        description: "Maneja conflictos de horarios, dobles reservas y problemas con la programación de citas. Siempre revisa la disponibilidad antes de confirmar una cita y comunica cualquier cambio inmediatamente al cliente.",
        image: "no-image",
        tips: [
          "Revisa disponibilidad antes de confirmar",
          "Comunica cambios inmediatamente al cliente",
          "Mantén registro de todas las modificaciones",
          "Ofrece alternativas cuando sea necesario"
        ],
        duration: "Variable"
      },
      {
        id: 3,
        title: "Problemas de Pago",
        description: "Resuelve inconvenientes con procesamiento de pagos, reembolsos y facturación. Mantén configurados múltiples métodos de pago y documenta todos los errores para un seguimiento adecuado.",
        image: "no-image",
        tips: [
          "Verifica configuración de métodos de pago",
          "Documenta todos los errores de transacción",
          "Contacta al proveedor de pagos si es necesario",
          "Mantén métodos de pago alternativos disponibles"
        ],
        duration: "Variable"
      },
      {
        id: 4,
        title: "Soporte Técnico",
        description: "Cuándo y cómo contactar al equipo de soporte técnico para problemas más complejos. Proporciona siempre información detallada del problema, capturas de pantalla y los pasos que ya intentaste.",
        image: "no-image",
        tips: [
          "Describe el problema con detalles específicos",
          "Incluye capturas de pantalla si es posible",
          "Menciona pasos previos que intentaste",
          "Proporciona información del dispositivo y sistema"
        ],
        duration: "Variable"
      }
    ]
  },
  "respaldo-datos": {
    id: "respaldo-datos",
    title: "Respaldo de Datos",
    description: "Mantén tus datos seguros con estrategias de respaldo automático y recuperación ante desastres",
    icon: <Shield className="size-6" />,
    totalTime: "10 min",
    steps: [
      {
        id: 1,
        title: "Configuración de Respaldos",
        description: "Activa y configura respaldos automáticos en la nube para proteger información crítica de tu barbería. Es fundamental establecer una rutina de respaldos que se ejecute sin intervención manual para garantizar la seguridad de tus datos.",
        image: "no-image",
        tips: [
          "Activa respaldos automáticos diarios",
          "Verifica que incluya todos los datos importantes",
          "Configura múltiples ubicaciones de respaldo",
          "Prueba la restauración periódicamente"
        ],
        duration: "4 min"
      },
      {
        id: 2,
        title: "Tipos de Datos Críticos",
        description: "Identifica qué información es más importante respaldar: clientes, citas, finanzas y configuraciones. No todos los datos tienen la misma importancia, por eso es crucial priorizar la información que realmente afectaría tu negocio si se perdiera.",
        image: "no-image",
        tips: [
          "Prioriza datos de clientes y historial",
          "Respalda configuraciones del sistema",
          "Guarda registros financieros y facturas",
          "Incluye fotos del portfolio en el respaldo"
        ],
        duration: "3 min"
      },
      {
        id: 3,
        title: "Recuperación de Datos",
        description: "Aprende cómo restaurar información en caso de pérdida de datos o cambio de dispositivo. Tener un respaldo es solo la mitad del trabajo; saber cómo recuperar tus datos rápidamente es igual de importante.",
        image: "no-image",
        tips: [
          "Conoce el proceso de restauración paso a paso",
          "Mantén credenciales de acceso seguras",
          "Practica el proceso de recuperación regularmente",
          "Ten un plan B para emergencias"
        ],
        duration: "3 min"
      }
    ]
  },
  "actualizaciones": {
    id: "actualizaciones",
    title: "Actualizaciones",
    description: "Mantente al día con nuevas funcionalidades y mejoras del sistema para aprovechar al máximo la plataforma",
    icon: <CheckCircle className="size-6" />,
    totalTime: "5 min",
    steps: [
      {
        id: 1,
        title: "Actualizaciones Automáticas",
        description: "Configura tu sistema para recibir e instalar actualizaciones automáticamente. Las actualizaciones incluyen mejoras de seguridad, nuevas funcionalidades y correcciones que mantienen tu sistema funcionando óptimamente.",
        image: "no-image",
        tips: [
          "Activa notificaciones de nuevas versiones",
          "Programa actualizaciones en horarios de baja actividad",
          "Haz respaldo antes de actualizaciones importantes",
          "Lee las notas de versión antes de actualizar"
        ],
        duration: "2 min"
      },
      {
        id: 2,
        title: "Nuevas Funcionalidades",
        description: "Explora y aprende a usar las nuevas características que se agreguen a la plataforma. Cada actualización puede incluir herramientas que mejoren tu productividad y la experiencia de tus clientes.",
        image: "no-image",
        tips: [
          "Revisa el changelog de cada actualización",
          "Prueba nuevas funciones en horarios tranquilos",
          "Capacita a tu equipo sobre cambios importantes",
          "Proporciona feedback sobre nuevas características"
        ],
        duration: "2 min"
      },
      {
        id: 3,
        title: "Solución de Problemas Post-Actualización",
        description: "Qué hacer si experimentas problemas después de una actualización del sistema. Aunque las actualizaciones mejoran el sistema, ocasionalmente pueden surgir inconvenientes que requieren atención.",
        image: "no-image",
        tips: [
          "Reinicia la aplicación después de actualizar",
          "Verifica que todas las funciones trabajen correctamente",
          "Contacta soporte si encuentras errores",
          "Restaura respaldo si es necesario"
        ],
        duration: "1 min"
      }
    ]
  },
  "soporte-24-7": {
    id: "soporte-24-7",
    title: "Soporte 24/7",
    description: "Accede a nuestro sistema de soporte técnico disponible las 24 horas para resolver cualquier problema",
    icon: <Headphones className="size-6" />,
    totalTime: "Disponible siempre",
    steps: [
      {
        id: 1,
        title: "Canales de Contacto",
        description: "Conoce todos los canales disponibles para contactar a nuestro equipo de soporte técnico. Ofrecemos múltiples vías de comunicación para asegurar que siempre puedas obtener ayuda cuando la necesites.",
        image: "no-image",
        tips: [
          "📱 WhatsApp Business: +57 310 256 6276",
          "📧 Email: soporte@barberapp.com",
          "💬 Chat en vivo desde la aplicación",
          "📞 Línea telefónica: +57 310 256 6276"
        ],
        duration: "Inmediato"
      },
      {
        id: 2,
        title: "Tipos de Soporte",
        description: "Entiende qué tipo de asistencia podemos brindarte según tu necesidad específica. Nuestro equipo está capacitado para manejar desde consultas básicas hasta problemas técnicos complejos.",
        image: "no-image",
        tips: [
          "🚨 Soporte urgente: Problemas críticos que afectan tu operación",
          "⚙️ Soporte técnico: Configuración, instalación y troubleshooting",
          "❓ Consultas generales: Preguntas sobre funcionalidades",
          "📚 Capacitación: Entrenamiento para ti y tu equipo"
        ],
        duration: "Variable"
      },
      {
        id: 3,
        title: "Tiempo de Respuesta",
        description: "Conoce los tiempos de respuesta según el tipo de consulta y canal utilizado. Priorizamos los casos urgentes que afectan directamente la operación de tu barbería.",
        image: "no-image",
        tips: [
          "🔴 Urgente: Respuesta inmediata (0-15 minutos)",
          "🟡 Normal: Respuesta rápida (15-60 minutos)",
          "🟢 Consulta: Respuesta estándar (1-4 horas)",
          "📋 Seguimiento: Verificación en 24 horas"
        ],
        duration: "Variable"
      },
      {
        id: 4,
        title: "Preparación para el Contacto",
        description: "Optimiza tu experiencia de soporte teniendo lista la información necesaria antes de contactarnos. Esto nos permite resolver tu consulta de manera más eficiente y rápida.",
        image: "no-image",
        tips: [
          "📱 Ten a mano el dispositivo con el problema",
          "📋 Anota los pasos exactos que causaron el error",
          "📷 Toma capturas de pantalla si es posible",
          "💼 Información de tu cuenta y barbería lista"
        ],
        duration: "5 min"
      }
    ]
  }
}

interface GuideModalProps {
  isOpen: boolean
  onClose: () => void
  guideId: string
  language?: "es" | "en"
}

export default function GuideModal({ isOpen, onClose, guideId, language = "es" }: GuideModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const [zoomImage, setZoomImage] = useState({ src: "", alt: "" })
  const [zoomLevel, setZoomLevel] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const guide = guidesData[guideId]

  if (!guide) return null

  const progress = ((currentStep + 1) / guide.steps.length) * 100

  const nextStep = () => {
    if (currentStep < guide.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex)
  }

  const openZoom = (src: string, alt: string) => {
    setZoomImage({ src, alt })
    setZoomLevel(1)
    setPosition({ x: 0, y: 0 })
    setIsZoomOpen(true)
  }

  const closeZoom = () => {
    setIsZoomOpen(false)
    setZoomLevel(1)
    setPosition({ x: 0, y: 0 })
    setIsDragging(false)
  }

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5))
    if (zoomLevel <= 1) {
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const resetZoom = () => {
    setZoomLevel(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.2 : 0.2
    const newZoom = Math.min(Math.max(zoomLevel + delta, 0.5), 3)
    setZoomLevel(newZoom)
    
    if (newZoom <= 1) {
      setPosition({ x: 0, y: 0 })
    }
  }

  // Handle keyboard shortcuts for zoom modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isZoomOpen) return

      switch (e.key) {
        case "Escape":
          closeZoom()
          break
        case "+":
        case "=":
          if (zoomLevel < 3) handleZoomIn()
          break
        case "-":
          if (zoomLevel > 0.5) handleZoomOut()
          break
        case "0":
          resetZoom()
          break
      }
    }

    if (isZoomOpen) {
      document.addEventListener("keydown", handleKeyDown)
      // Prevent body scroll when zoom is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isZoomOpen, zoomLevel])

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="guide-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={onClose}
          >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  {guide.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{guide.title}</h2>
                  <p className="text-muted-foreground">{guide.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {guide.totalTime}
                </Badge>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="size-5" />
                </Button>
              </div>
            </div>

            <div className="flex h-[calc(90vh-120px)]">
              {/* Sidebar - Lista de Pasos */}
              <div className="w-80 border-r bg-muted/20 overflow-y-auto">
                <div className="p-4">
                  <div className="mb-4">
                    <Progress value={progress} className="mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Paso {currentStep + 1} de {guide.steps.length}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {guide.steps.map((step, index) => (
                      <button
                        key={step.id}
                        onClick={() => goToStep(index)}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          index === currentStep
                            ? "bg-primary text-primary-foreground"
                            : index < currentStep
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-background hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            index === currentStep
                              ? "bg-primary-foreground text-primary"
                              : index < currentStep
                              ? "bg-green-600 text-white"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {index < currentStep ? <Check className="size-3" /> : index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{step.title}</p>
                            <p className="text-xs opacity-75">{step.duration}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-6">
                        <Badge variant="outline" className="mb-2">
                          Paso {currentStep + 1}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2">{guide.steps[currentStep].title}</h3>
                        <p className="text-muted-foreground text-lg">
                          {guide.steps[currentStep].description}
                        </p>
                      </div>

                      {/* Image or Payment Methods or Support Content */}
                      {guide.steps[currentStep].image === "payment-methods" ? (
                        <div className="mb-6 p-6 rounded-xl border bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                          <h4 className="text-xl font-semibold text-center mb-6 text-slate-800 dark:text-slate-200">Métodos de Pago Disponibles</h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* PayPal */}
                            <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                              <div className="flex items-center justify-center mb-4">
                                <Image
                                  src="/images/paypal.svg"
                                  alt="PayPal Logo"
                                  width={120}
                                  height={120}
                                  className="w-auto h-20"
                                />
                              </div>
                              <h5 className="font-semibold text-center mb-2">PayPal</h5>
                              <p className="text-sm text-muted-foreground text-center">
                                Pago seguro internacional con tarjetas o saldo PayPal
                              </p>
                            </div>

                            {/* Bancolombia */}
                            <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                              <div className="flex items-center justify-center mb-4">
                                <Image
                                  src="/images/bancolombia.svg"
                                  alt="Bancolombia Logo"
                                  width={140}
                                  height={40}
                                  className="w-auto h-12"
                                />
                              </div>
                              <h5 className="font-semibold text-center mb-2">Bancolombia</h5>
                              <p className="text-sm text-muted-foreground text-center">
                                Transferencia bancaria sin comisiones
                              </p>
                            </div>

                            {/* Efectivo */}
                            <div className="bg-white dark:bg-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                              <div className="flex items-center justify-center mb-4">
                                <div className="bg-green-100 dark:bg-green-900 rounded-lg p-4">
                                  <svg width="48" height="32" viewBox="0 0 48 32" className="text-green-600 dark:text-green-400">
                                    <rect x="0" y="4" width="48" height="24" rx="3" fill="currentColor"/>
                                    <rect x="4" y="8" width="40" height="16" rx="2" fill="white"/>
                                    <circle cx="24" cy="16" r="4" fill="currentColor"/>
                                    <text x="24" y="19" fontSize="6" fontWeight="bold" fill="white" textAnchor="middle">$</text>
                                  </svg>
                                </div>
                              </div>
                              <h5 className="font-semibold text-center mb-2">Efectivo</h5>
                              <p className="text-sm text-muted-foreground text-center">
                                Encuentros presenciales o consignaciones
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : ["solucion-problemas", "respaldo-datos", "actualizaciones", "soporte-24-7"].includes(guide.id) ? (
                        <div className="mb-6">
                          <Card>
                            <CardContent className="p-6">
                              <div className="prose prose-slate dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed">
                                  {guide.steps[currentStep].description}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      ) : (
                        <div className="mb-6 rounded-xl overflow-hidden border relative group cursor-pointer" 
                             onClick={() => openZoom(guide.steps[currentStep].image, guide.steps[currentStep].title)}>
                          <Image
                            src={guide.steps[currentStep].image}
                            alt={guide.steps[currentStep].title}
                            width={1200}
                            height={800}
                            className="w-full h-auto transition-transform group-hover:scale-105"
                            priority
                          />
                          {/* Zoom overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                              <ZoomIn className="size-6 text-gray-700" />
                            </div>
                          </div>
                          {/* Zoom hint */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm text-gray-700 shadow-lg">
                              Click para ampliar
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tips */}
                      {guide.steps[currentStep].tips && (
                        <Card className="mb-6">
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              💡 Consejos Útiles
                            </h4>
                            <ul className="space-y-2">
                              {guide.steps[currentStep].tips?.map((tip, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Footer - Navigation */}
            <div className="flex items-center justify-between p-6 border-t bg-muted/20">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="size-4" />
                Anterior
              </Button>

              <div className="flex items-center gap-2">
                {guide.steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentStep
                        ? "bg-primary w-8"
                        : index < currentStep
                        ? "bg-green-500"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {currentStep === guide.steps.length - 1 ? (
                <Button onClick={onClose} className="flex items-center gap-2">
                  <Check className="size-4" />
                  Completar
                </Button>
              ) : (
                <Button onClick={nextStep} className="flex items-center gap-2">
                  Siguiente
                  <ChevronRight className="size-4" />
                </Button>
              )}
            </div>
          </motion.div>
                  </motion.div>
        )}
      </AnimatePresence>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            key="zoom-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
            onClick={closeZoom}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Top Controls */}
              <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-background/90 hover:bg-background border shadow-lg backdrop-blur-sm"
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.5}
                  >
                    <ZoomOut className="size-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-background/90 hover:bg-background border shadow-lg backdrop-blur-sm"
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                  >
                    <ZoomIn className="size-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-background/90 hover:bg-background border shadow-lg backdrop-blur-sm"
                    onClick={resetZoom}
                  >
                    <RotateCcw className="size-5" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm text-foreground border shadow-lg">
                    {Math.round(zoomLevel * 100)}%
                  </div>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-background/90 hover:bg-background border shadow-lg backdrop-blur-sm"
                    onClick={closeZoom}
                  >
                    <X className="size-5" />
                  </Button>
                </div>
              </div>

              {/* Image Container */}
              <div 
                className="relative flex items-center justify-center w-full h-full"
                style={{ 
                  cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
                }}
                onWheel={handleWheel}
              >
                <Image
                  src={zoomImage.src}
                  alt={zoomImage.alt}
                  width={1600}
                  height={1200}
                  className="max-w-none transition-transform duration-200 select-none"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                    maxWidth: zoomLevel === 1 ? '95vw' : 'none',
                    maxHeight: zoomLevel === 1 ? '95vh' : 'none',
                    width: zoomLevel === 1 ? 'auto' : '100vw',
                    height: zoomLevel === 1 ? 'auto' : '100vh',
                    objectFit: zoomLevel === 1 ? 'contain' : 'cover'
                  }}
                  onMouseDown={handleMouseDown}
                  draggable={false}
                  priority
                />
              </div>
              
              {/* Bottom Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border">
                  <p className="text-foreground font-medium text-center">{zoomImage.alt}</p>
                  <div className="text-muted-foreground text-xs text-center mt-1 space-y-1">
                    {zoomLevel > 1 && (
                      <p>Arrastra para mover • Rueda del mouse para zoom</p>
                    )}
                    <p>Atajos: + (zoom in) • - (zoom out) • 0 (reset) • Esc (cerrar)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 