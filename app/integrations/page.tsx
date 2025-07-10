"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Zap,
  Check,
  ArrowRight,
  Smartphone,
  Globe,
  CreditCard,
  Calendar,
  MessageSquare,
  Mail,
  BarChart,
  Shield,
  Cloud,
  Users,
  Scissors,
  ExternalLink,
  Star,
} from "lucide-react"

// SVG Icons oficiales
const StripeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04.9-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-8.78.06c0 .44.19.62.44.62.33 0 .82-.19.82-.19V9.72c-.21-.04-.46-.09-.77-.09-1.21 0-1.5.68-1.5 1.24v5.15c0 .07 0 .14.01.21zm6.01-1.83V14.91a8.38 8.38 0 0 0-4.73 1.34c-.21-.58-.33-1.25-.33-2.04 0-2.07 1.22-3.22 3.76-3.22 1.2 0 1.3.05 1.3.05zM59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04.9-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58z"/>
  </svg>
)

const PayPalIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.424.424 0 0 0-.419.36l-.814 5.15h2.76a.641.641 0 0 0 .633-.74L12.567 13.29h1.604c3.784 0 6.741-1.543 7.598-6.005.285-1.48.093-2.66-.547-3.368z"/>
  </svg>
)

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const HotjarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M21.055 7.814C17.512 1.404 7.118 3.009 6.711 10.848c-.61 8.658 8.577 8.658 8.577 8.658s4.535-.854 5.767-11.692zM2.945 16.186C6.488 22.596 16.882 20.991 17.289 13.152c.61-8.658-8.577-8.658-8.577-8.658S4.177 5.348 2.945 16.186z"/>
  </svg>
)

const SlackIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.523 2.521h-2.521V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.523v-2.521h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
  </svg>
)

const TwilioIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 18a2 2 0 1 1 .001-4.001A2 2 0 0 1 10 18zm0-6a2 2 0 1 1 .001-4.001A2 2 0 0 1 10 12zm4 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 14 18zm0-6a2 2 0 1 1 .001-4.001A2 2 0 0 1 14 12z"/>
  </svg>
)

const MailchimpIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.988-5.366 11.988-11.99C23.971 5.367 18.641.001 12.017.001zM8.431 19.987c-.84 0-1.524-.684-1.524-1.524s.684-1.524 1.524-1.524 1.524.684 1.524 1.524-.684 1.524-1.524 1.524zm.001-4.025c-.84 0-1.524-.684-1.524-1.524s.684-1.524 1.524-1.524 1.524.684 1.524 1.524-.684 1.524-1.524 1.524zm.001-4.025c-.84 0-1.524-.684-1.524-1.524s.684-1.524 1.524-1.524 1.524.684 1.524 1.524-.684 1.524-1.524 1.524zm.001-4.025c-.84 0-1.524-.684-1.524-1.524s.684-1.524 1.524-1.524 1.524.684 1.524 1.524-.684 1.524-1.524 1.524zm7.158 16.098c-.84 0-1.524-.684-1.524-1.524s.684-1.524 1.524-1.524 1.524.684 1.524 1.524-.684 1.524-1.524 1.524zm0-4.025c-.84 0-1.524-.684-1.524-1.524s.684-1.524 1.524-1.524 1.524.684 1.524 1.524-.684 1.524-1.524 1.524zm0-4.025c-.84 0-1.524-.684-1.524-1.524s.684-1.524 1.524-1.524 1.524.684 1.524 1.524-.684 1.524-1.524 1.524zm0-4.025c-.84 0-1.524-.684-1.524-1.524s.684-1.524 1.524-1.524 1.524.684 1.524 1.524-.684 1.524-1.524 1.524z"/>
  </svg>
)

const MercadoPagoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 17.568H6.432V6.432h11.136v11.136z"/>
  </svg>
)

const AutomationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
    <circle cx="12" cy="12" r="1.5"/>
  </svg>
)

const SecurityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SyncIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8z"/>
    <path d="M12 18c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
  </svg>
)

const CustomerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
    <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    <path d="M19 12l-1.4 1.4L20.2 16H15v2h5.2l-2.6 2.6L19 22l5-5-5-5z"/>
  </svg>
)

const MarketingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    <path d="M9 7h6v2H9V7zm0 4h6v2H9v-2zm0 4h4v2H9v-2z" fill="white"/>
    <circle cx="20" cy="4" r="3" fill="#ff4444"/>
    <path d="M18.5 3l1 1-1 1-1-1z" fill="white"/>
  </svg>
)

const DataIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    <path d="M7 12h2v5H7v-5zm4-6h2v11h-2V6zm4 3h2v8h-2V9z" fill="white"/>
  </svg>
)
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CardDemo from "@/components/cards-demo-3"

const translations = {
  es: {
    title: "Integraciones de BarberApp",
    subtitle: "Conecta BarberApp con las mejores herramientas y servicios para maximizar tu productividad",
    backToHome: "Volver al inicio",
    
    // Tech Stack
    techStack: "Stack Tecnológico",
    techStackDesc: "Construido con las tecnologías más modernas y confiables",
    
    // Categories
    paymentIntegrations: "Integraciones de Pago",
    marketingTools: "Herramientas de Marketing",
    analyticsReporting: "Análisis y Reportes",
    communicationTools: "Herramientas de Comunicación",
    
    // Payment Integrations
    stripeTitle: "Stripe",
    stripeDesc: "Procesamiento de pagos seguro y confiable",
    paypalTitle: "PayPal",
    paypalDesc: "Acepta pagos de clientes en todo el mundo",
    mercadopagoTitle: "MercadoPago",
    mercadopagoDesc: "Pagos fáciles para América Latina",
    
    // Marketing Tools
    whatsappTitle: "WhatsApp Business",
    whatsappDesc: "Comunícate directamente con tus clientes",
    instagramTitle: "Instagram",
    instagramDesc: "Conecta tu perfil para mostrar tu trabajo",
    googleMybusinessTitle: "Google My Business",
    googleMybusinessDesc: "Mejora tu presencia local en Google",
    
    // Analytics
    googleAnalyticsTitle: "Google Analytics",
    googleAnalyticsDesc: "Analiza el comportamiento de tus visitantes",
    facebookPixelTitle: "Facebook Pixel",
    facebookPixelDesc: "Optimiza tus campañas publicitarias",
    hotjarTitle: "Hotjar",
    hotjarDesc: "Entiende cómo interactúan los usuarios",
    
    // Communication
    emailMarketingTitle: "Email Marketing",
    emailMarketingDesc: "Campañas automatizadas para tus clientes",
    slackTitle: "Notificaciones Slack",
    slackDesc: "Recibe alertas en tiempo real",
    smsTitle: "SMS Notifications",
    smsDesc: "Recordatorios automáticos por mensaje",
    
    // Benefits
    benefitsTitle: "Beneficios de las Integraciones",
    benefitsSubtitle: "Descubre cómo estas integraciones pueden transformar tu barbería",
    
    benefit1Title: "Automatización Completa",
    benefit1Desc: "Reduce el trabajo manual con procesos automatizados",
    
    benefit2Title: "Mejor Experiencia del Cliente",
    benefit2Desc: "Ofrece múltiples formas de pago y comunicación",
    
    benefit3Title: "Datos en Tiempo Real",
    benefit3Desc: "Toma decisiones informadas con análisis detallados",
    
    benefit4Title: "Marketing Efectivo",
    benefit4Desc: "Atrae más clientes con herramientas profesionales",
    
    // Features
    features: "Características",
    easySetup: "Configuración Fácil",
    easySetupDesc: "Nuestro equipo configura todas las integraciones por ti",
    secureData: "Datos Seguros",
    secureDataDesc: "Todas las conexiones están encriptadas y protegidas",
    realTimeSync: "Sincronización en Tiempo Real",
    realTimeSyncDesc: "Los datos se actualizan automáticamente",
    support247: "Soporte 24/7",
    support247Desc: "Ayuda técnica cuando la necesites",
    
    // CTA
    ctaTitle: "¿Listo para Conectar tu Barbería?",
    ctaSubtitle: "Nuestro equipo configurará todas las integraciones que necesites sin costo adicional",
    contactUs: "Contáctanos",
    
    // Status
    available: "Disponible",
    comingSoon: "Próximamente",
    popular: "Popular",
  },
  en: {
    title: "BarberApp Integrations",
    subtitle: "Connect BarberApp with the best tools and services to maximize your productivity",
    backToHome: "Back to home",
    
    // Tech Stack
    techStack: "Tech Stack",
    techStackDesc: "Built with the most modern and reliable technologies",
    
    // Categories
    paymentIntegrations: "Payment Integrations",
    marketingTools: "Marketing Tools", 
    analyticsReporting: "Analytics & Reporting",
    communicationTools: "Communication Tools",
    
    // Payment Integrations
    stripeTitle: "Stripe",
    stripeDesc: "Secure and reliable payment processing",
    paypalTitle: "PayPal",
    paypalDesc: "Accept payments from clients worldwide",
    mercadopagoTitle: "MercadoPago",
    mercadopagoDesc: "Easy payments for Latin America",
    
    // Marketing Tools
    whatsappTitle: "WhatsApp Business",
    whatsappDesc: "Communicate directly with your clients",
    instagramTitle: "Instagram",
    instagramDesc: "Connect your profile to showcase your work",
    googleMybusinessTitle: "Google My Business",
    googleMybusinessDesc: "Improve your local presence on Google",
    
    // Analytics
    googleAnalyticsTitle: "Google Analytics",
    googleAnalyticsDesc: "Analyze your visitors' behavior",
    facebookPixelTitle: "Facebook Pixel",
    facebookPixelDesc: "Optimize your advertising campaigns",
    hotjarTitle: "Hotjar",
    hotjarDesc: "Understand how users interact",
    
    // Communication
    emailMarketingTitle: "Email Marketing",
    emailMarketingDesc: "Automated campaigns for your clients",
    slackTitle: "Slack Notifications",
    slackDesc: "Receive real-time alerts",
    smsTitle: "SMS Notifications",
    smsDesc: "Automatic reminders via message",
    
    // Benefits
    benefitsTitle: "Integration Benefits",
    benefitsSubtitle: "Discover how these integrations can transform your barbershop",
    
    benefit1Title: "Complete Automation",
    benefit1Desc: "Reduce manual work with automated processes",
    
    benefit2Title: "Better Customer Experience",
    benefit2Desc: "Offer multiple payment and communication options",
    
    benefit3Title: "Real-Time Data",
    benefit3Desc: "Make informed decisions with detailed analytics",
    
    benefit4Title: "Effective Marketing",
    benefit4Desc: "Attract more clients with professional tools",
    
    // Features
    features: "Features",
    easySetup: "Easy Setup",
    easySetupDesc: "Our team configures all integrations for you",
    secureData: "Secure Data",
    secureDataDesc: "All connections are encrypted and protected",
    realTimeSync: "Real-Time Sync",
    realTimeSyncDesc: "Data updates automatically",
    support247: "24/7 Support",
    support247Desc: "Technical help when you need it",
    
    // CTA
    ctaTitle: "Ready to Connect Your Barbershop?",
    ctaSubtitle: "Our team will configure all the integrations you need at no additional cost",
    contactUs: "Contact Us",
    
    // Status
    available: "Available",
    comingSoon: "Coming Soon",
    popular: "Popular",
  },
}

export default function IntegrationsPage() {
  const [language, setLanguage] = useState<"es" | "en">("es")

  const t = translations[language]

  const openWhatsApp = () => {
    const message = language === "es" 
      ? "¡Hola! Me interesa conocer más sobre las integraciones de BarberApp. ¿Podrían darme más información?"
      : "Hello! I'm interested in learning more about BarberApp integrations. Could you give me more information?"
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank")
  }

  const paymentIntegrations = [
    {
      title: t.stripeTitle,
      description: t.stripeDesc,
      icon: <StripeIcon className="size-6" />,
      status: t.available,
      statusColor: "bg-green-100 text-green-800",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: t.paypalTitle,
      description: t.paypalDesc,
      icon: <PayPalIcon className="size-6" />,
      status: t.available,
      statusColor: "bg-green-100 text-green-800",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: t.mercadopagoTitle,
      description: t.mercadopagoDesc,
      icon: <MercadoPagoIcon className="size-6" />,
      status: t.comingSoon,
      statusColor: "bg-yellow-100 text-yellow-800",
      color: "from-cyan-500 to-cyan-600"
    },
  ]

  const marketingIntegrations = [
    {
      title: t.whatsappTitle,
      description: t.whatsappDesc,
      icon: <WhatsAppIcon className="size-6" />,
      status: t.popular,
      statusColor: "bg-purple-100 text-purple-800",
      color: "from-green-500 to-green-600"
    },
    {
      title: t.instagramTitle,
      description: t.instagramDesc,
      icon: <InstagramIcon className="size-6" />,
      status: t.available,
      statusColor: "bg-green-100 text-green-800",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: t.googleMybusinessTitle,
      description: t.googleMybusinessDesc,
      icon: <GoogleIcon className="size-6" />,
      status: t.available,
      statusColor: "bg-green-100 text-green-800",
      color: "from-red-500 to-red-600"
    },
  ]

  const analyticsIntegrations = [
    {
      title: t.googleAnalyticsTitle,
      description: t.googleAnalyticsDesc,
      icon: <GoogleIcon className="size-6" />,
      status: t.available,
      statusColor: "bg-green-100 text-green-800",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: t.facebookPixelTitle,
      description: t.facebookPixelDesc,
      icon: <FacebookIcon className="size-6" />,
      status: t.available,
      statusColor: "bg-green-100 text-green-800",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: t.hotjarTitle,
      description: t.hotjarDesc,
      icon: <HotjarIcon className="size-6" />,
      status: t.comingSoon,
      statusColor: "bg-yellow-100 text-yellow-800",
      color: "from-red-500 to-red-600"
    },
  ]

  const communicationIntegrations = [
    {
      title: t.emailMarketingTitle,
      description: t.emailMarketingDesc,
      icon: <MailchimpIcon className="size-6" />,
      status: t.available,
      statusColor: "bg-green-100 text-green-800",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: t.slackTitle,
      description: t.slackDesc,
      icon: <SlackIcon className="size-6" />,
      status: t.comingSoon,
      statusColor: "bg-yellow-100 text-yellow-800",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: t.smsTitle,
      description: t.smsDesc,
      icon: <TwilioIcon className="size-6" />,
      status: t.available,
      statusColor: "bg-green-100 text-green-800",
      color: "from-teal-500 to-teal-600"
    },
  ]

  const IntegrationCard = ({ integration, index }: { integration: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-105">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className={`size-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center text-white`}>
              {integration.icon}
            </div>
            <Badge className={integration.statusColor} variant="secondary">
              {integration.status}
            </Badge>
          </div>
          <CardTitle className="text-lg">{integration.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-4">{integration.description}</p>
          <Button variant="ghost" size="sm" className="w-full text-primary">
            {language === "es" ? "Ver Detalles" : "View Details"}
            <ExternalLink className="ml-2 size-4" />
          </Button>
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
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium flex items-center gap-2 w-fit mx-auto" variant="secondary">
              <Zap className="size-4" />
              {language === "es" ? "Integraciones" : "Integrations"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.techStack}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.techStackDesc}</p>
          </div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Integrations */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.paymentIntegrations}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Acepta pagos de forma segura con múltiples métodos de pago"
                : "Accept payments securely with multiple payment methods"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentIntegrations.map((integration, index) => (
              <IntegrationCard key={index} integration={integration} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Tools */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.marketingTools}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Herramientas para promocionar tu barbería y atraer más clientes"
                : "Tools to promote your barbershop and attract more clients"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingIntegrations.map((integration, index) => (
              <IntegrationCard key={index} integration={integration} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.analyticsReporting}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Analiza el rendimiento de tu barbería con datos en tiempo real"
                : "Analyze your barbershop's performance with real-time data"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticsIntegrations.map((integration, index) => (
              <IntegrationCard key={index} integration={integration} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Communication Tools */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.communicationTools}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Mantén comunicación efectiva con tus clientes"
                : "Maintain effective communication with your clients"
              }
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communicationIntegrations.map((integration, index) => (
              <IntegrationCard key={index} integration={integration} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.benefitsTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.benefitsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t.benefit1Title,
                description: t.benefit1Desc,
                icon: <AutomationIcon className="size-8" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: t.benefit2Title,
                description: t.benefit2Desc,
                icon: <CustomerIcon className="size-8" />,
                color: "from-green-500 to-green-600"
              },
              {
                title: t.benefit3Title,
                description: t.benefit3Desc,
                icon: <DataIcon className="size-8" />,
                color: "from-purple-500 to-purple-600"
              },
              {
                title: t.benefit4Title,
                description: t.benefit4Desc,
                icon: <MarketingIcon className="size-8" />,
                color: "from-orange-500 to-orange-600"
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.features}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Todo lo que necesitas para una integración perfecta"
                : "Everything you need for perfect integration"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t.easySetup,
                description: t.easySetupDesc,
                icon: <Zap className="size-6" />,
              },
              {
                title: t.secureData,
                description: t.secureDataDesc,
                icon: <SecurityIcon className="size-6" />,
              },
              {
                title: t.realTimeSync,
                description: t.realTimeSyncDesc,
                icon: <SyncIcon className="size-6" />,
              },
              {
                title: t.support247,
                description: t.support247Desc,
                icon: <MessageSquare className="size-6" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-primary-foreground/80 mb-8">{t.ctaSubtitle}</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="rounded-full"
              onClick={openWhatsApp}
            >
              {t.contactUs}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 