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

                      {/* Image */}
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