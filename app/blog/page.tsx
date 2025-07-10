"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  Scissors,
  TrendingUp,
  Users,
  Lightbulb,
  Star,
  BarChart,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const translations = {
  es: {
    title: "Blog de BarberApp",
    subtitle: "Consejos, tendencias y estrategias para hacer crecer tu barbería",
    backToHome: "Volver al inicio",
    searchPlaceholder: "Buscar artículos...",
    filterByCategory: "Filtrar por categoría",
    allCategories: "Todas las categorías",
    business: "Negocio",
    trends: "Tendencias",
    marketing: "Marketing", 
    tips: "Consejos",
    technology: "Tecnología",
    readMore: "Leer más",
    minutesRead: "min de lectura",
    latestPosts: "Últimos Artículos",
    featuredPost: "Artículo Destacado",
    
    // Featured Post
    featuredTitle: "Cómo Aumentar las Ventas de tu Barbería en 2024",
    featuredExcerpt: "Descubre las estrategias más efectivas para incrementar los ingresos de tu barbería, desde la optimización del servicio al cliente hasta el uso de tecnología moderna.",
    featuredDate: "15 de Enero, 2024",
    featuredAuthor: "Carlos Rodríguez",
    featuredReadTime: "8",
    
    // Blog Posts
    posts: [
      {
        title: "10 Tendencias de Cortes Masculinos para 2024",
        excerpt: "Mantente al día con los cortes más populares del año y atrae más clientes a tu barbería.",
        date: "12 de Enero, 2024",
        author: "María González",
        readTime: "5",
        category: "Tendencias",
        image: "/placeholder.jpg"
      },
      {
        title: "Gestión Eficiente de Citas: Reduce las Cancelaciones",
        excerpt: "Estrategias probadas para minimizar las cancelaciones y optimizar tu agenda diaria.",
        date: "10 de Enero, 2024", 
        author: "Luis Martínez",
        readTime: "6",
        category: "Negocio",
        image: "/placeholder.jpg"
      },
      {
        title: "Marketing Digital para Barberías: Guía Completa",
        excerpt: "Aprende cómo usar las redes sociales y el marketing digital para hacer crecer tu negocio.",
        date: "8 de Enero, 2024",
        author: "Ana López",
        readTime: "12",
        category: "Marketing",
        image: "/placeholder.jpg"
      },
      {
        title: "5 Consejos para Mejorar la Experiencia del Cliente",
        excerpt: "Técnicas sencillas para que tus clientes siempre quieran volver a tu barbería.",
        date: "5 de Enero, 2024",
        author: "Pedro Hernández",
        readTime: "4",
        category: "Consejos",
        image: "/placeholder.jpg"
      },
      {
        title: "Tecnología en Barberías: Apps que Cambian el Juego",
        excerpt: "Descubre cómo la tecnología puede revolucionar la gestión de tu barbería.",
        date: "3 de Enero, 2024",
        author: "Roberto Silva",
        readTime: "7",
        category: "Tecnología", 
        image: "/placeholder.jpg"
      },
      {
        title: "Cómo Fidelizar Clientes en tu Barbería",
        excerpt: "Estrategias efectivas para convertir visitantes ocasionales en clientes leales.",
        date: "1 de Enero, 2024",
        author: "Diego Morales",
        readTime: "9",
        category: "Negocio",
        image: "/placeholder.jpg"
      }
    ],
    
    // Newsletter CTA
    ctaTitle: "¿Te Gustó Este Contenido?",
    ctaSubtitle: "Recibe los mejores consejos y estrategias directamente en tu WhatsApp",
    ctaButton: "Unirme al Newsletter",
  },
  en: {
    title: "BarberApp Blog",
    subtitle: "Tips, trends and strategies to grow your barbershop business",
    backToHome: "Back to home",
    searchPlaceholder: "Search articles...",
    filterByCategory: "Filter by category",
    allCategories: "All categories",
    business: "Business",
    trends: "Trends", 
    marketing: "Marketing",
    tips: "Tips",
    technology: "Technology",
    readMore: "Read more",
    minutesRead: "min read",
    latestPosts: "Latest Posts",
    featuredPost: "Featured Post",
    
    // Featured Post
    featuredTitle: "How to Increase Your Barbershop Sales in 2024",
    featuredExcerpt: "Discover the most effective strategies to boost your barbershop revenue, from optimizing customer service to using modern technology.",
    featuredDate: "January 15, 2024",
    featuredAuthor: "Carlos Rodriguez",
    featuredReadTime: "8",
    
    // Blog Posts
    posts: [
      {
        title: "10 Men's Haircut Trends for 2024",
        excerpt: "Stay up to date with the most popular cuts of the year and attract more clients to your barbershop.",
        date: "January 12, 2024",
        author: "Maria Gonzalez",
        readTime: "5",
        category: "Trends",
        image: "/placeholder.jpg"
      },
      {
        title: "Efficient Appointment Management: Reduce Cancellations", 
        excerpt: "Proven strategies to minimize cancellations and optimize your daily schedule.",
        date: "January 10, 2024",
        author: "Luis Martinez", 
        readTime: "6",
        category: "Business",
        image: "/placeholder.jpg"
      },
      {
        title: "Digital Marketing for Barbershops: Complete Guide",
        excerpt: "Learn how to use social media and digital marketing to grow your business.",
        date: "January 8, 2024",
        author: "Ana Lopez",
        readTime: "12", 
        category: "Marketing",
        image: "/placeholder.jpg"
      },
      {
        title: "5 Tips to Improve Customer Experience",
        excerpt: "Simple techniques to make your clients always want to return to your barbershop.",
        date: "January 5, 2024",
        author: "Pedro Hernandez",
        readTime: "4",
        category: "Tips",
        image: "/placeholder.jpg"
      },
      {
        title: "Technology in Barbershops: Game-Changing Apps",
        excerpt: "Discover how technology can revolutionize your barbershop management.",
        date: "January 3, 2024",
        author: "Roberto Silva", 
        readTime: "7",
        category: "Technology",
        image: "/placeholder.jpg"
      },
      {
        title: "How to Build Customer Loyalty in Your Barbershop",
        excerpt: "Effective strategies to turn occasional visitors into loyal customers.",
        date: "January 1, 2024",
        author: "Diego Morales",
        readTime: "9", 
        category: "Business",
        image: "/placeholder.jpg"
      }
    ],
    
    // Newsletter CTA
    ctaTitle: "Did You Like This Content?",
    ctaSubtitle: "Get the best tips and strategies directly to your WhatsApp",
    ctaButton: "Join Newsletter",
  },
}

export default function BlogPage() {
  const [language, setLanguage] = useState<"es" | "en">("es")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const t = translations[language]

  const categories = [
    { id: "all", name: t.allCategories, icon: <Filter className="size-4" /> },
    { id: "business", name: t.business, icon: <TrendingUp className="size-4" /> },
    { id: "trends", name: t.trends, icon: <Star className="size-4" /> },
    { id: "marketing", name: t.marketing, icon: <Target className="size-4" /> },
    { id: "tips", name: t.tips, icon: <Lightbulb className="size-4" /> },
    { id: "technology", name: t.technology, icon: <BarChart className="size-4" /> },
  ]

  const filteredPosts = t.posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || 
                           post.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const BlogCard = ({ post, index }: { post: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-105 group">
        <div className="relative overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="size-3" />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="size-3" />
                {post.date}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="size-3" />
              {post.readTime} {t.minutesRead}
            </div>
          </div>
          <Button variant="ghost" className="w-full group/button text-primary">
            {t.readMore}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover/button:translate-x-1" />
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
              <Tag className="size-4" />
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">{t.subtitle}</p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                <Input
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="whitespace-nowrap"
                  >
                    {category.icon}
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">{t.featuredPost}</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-primary shadow-xl bg-gradient-to-br from-primary/5 to-background">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src="/placeholder.jpg"
                      alt={t.featuredTitle}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {t.featuredPost}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.featuredTitle}</h3>
                    <p className="text-muted-foreground mb-6">{t.featuredExcerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="size-4" />
                        {t.featuredAuthor}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        {t.featuredDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-4" />
                        {t.featuredReadTime} {t.minutesRead}
                      </div>
                    </div>
                    <Button size="lg" className="w-fit">
                      {t.readMore}
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.latestPosts}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? `Mostrando ${filteredPosts.length} artículo${filteredPosts.length !== 1 ? 's' : ''}`
                : `Showing ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
              }
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <BlogCard key={index} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="size-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === "es" ? "No se encontraron artículos" : "No articles found"}
              </h3>
              <p className="text-muted-foreground">
                {language === "es" 
                  ? "Intenta con otros términos de búsqueda o categorías"
                  : "Try different search terms or categories"
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            >
              {t.ctaButton}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 