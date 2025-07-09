"use client"
import React from "react"
import { motion } from "framer-motion"

const testimonialsData = {
  es: [
    {
      text: "BarberApp ha transformado completamente mi barbería. El sistema de citas automatizado ha reducido las cancelaciones en un 70%.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Carlos Mendoza",
      role: "Propietario de Barbería",
    },
    {
      text: "La gestión de clientes es increíble. Ahora puedo recordar las preferencias de cada cliente y brindar un servicio personalizado.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "María González",
      role: "Barbera Profesional",
    },
    {
      text: "El soporte al cliente es excepcional. Siempre están disponibles para ayudar y resolver cualquier duda que tengamos.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Roberto Silva",
      role: "Gerente de Barbería",
    },
    {
      text: "Hemos probado varias aplicaciones, pero ninguna se compara con la facilidad de uso y las características de BarberApp.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Ana Rodríguez",
      role: "Propietaria",
    },
    {
      text: "Las herramientas de análisis nos han dado una visibilidad increíble sobre nuestro negocio. Ahora tomamos decisiones basadas en datos.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Luis Martínez",
      role: "Barbero Senior",
    },
    {
      text: "La implementación fue perfecta y el ROI fue casi inmediato. Hemos reducido nuestros costos operativos en un 30%.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Carmen López",
      role: "Administradora",
    },
    {
      text: "La escalabilidad de la plataforma ha crecido con nuestro negocio. Lo que comenzó como una solución para una barbería ahora soporta toda nuestra cadena.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Diego Herrera",
      role: "Director Regional",
    },
    {
      text: "Las capacidades de integración de BarberApp son sobresalientes. Se conectó perfectamente con todas nuestras herramientas existentes.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Patricia Morales",
      role: "Coordinadora de Sistemas",
    },
    {
      text: "Los reportes nos han dado una visibilidad sobre nuestras operaciones que nunca habíamos tenido. Ha transformado nuestro proceso de toma de decisiones.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Fernando Castro",
      role: "Analista de Negocio",
    },
  ],
  en: [
    {
      text: "BarberApp has completely transformed my barbershop. The automated appointment system has reduced cancellations by 70%.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Carlos Mendoza",
      role: "Barbershop Owner",
    },
    {
      text: "The client management is incredible. Now I can remember each client's preferences and provide personalized service.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "María González",
      role: "Professional Barber",
    },
    {
      text: "Customer support is exceptional. They're always available to help and resolve any questions we have.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Roberto Silva",
      role: "Barbershop Manager",
    },
    {
      text: "We've tried several applications, but none compare to the ease of use and features of BarberApp.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Ana Rodríguez",
      role: "Owner",
    },
    {
      text: "The analytics tools have given us incredible visibility into our business. Now we make data-driven decisions.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Luis Martínez",
      role: "Senior Barber",
    },
    {
      text: "Implementation was seamless and ROI was almost immediate. We've reduced our operational costs by 30%.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Carmen López",
      role: "Administrator",
    },
    {
      text: "The platform's scalability has grown with our business. What started as a solution for one barbershop now supports our entire chain.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Diego Herrera",
      role: "Regional Director",
    },
    {
      text: "BarberApp's integration capabilities are outstanding. It connected seamlessly with all our existing tools.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Patricia Morales",
      role: "Systems Coordinator",
    },
    {
      text: "The reports have given us visibility into our operations that we never had before. It's transformed our decision-making process.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Fernando Castro",
      role: "Business Analyst",
    },
  ],
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonialsData.es
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 rounded-xl border border-border/40 shadow-lg shadow-primary/10 max-w-xs w-full bg-gradient-to-b from-background to-muted/10 backdrop-blur"
                  key={i}
                >
                  <div className="text-sm leading-relaxed mb-4">{text}</div>
                  <div className="flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-sm">{name}</div>
                      <div className="leading-5 text-muted-foreground tracking-tight text-xs">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

const Testimonials = ({ language = "es" }: { language?: "es" | "en" }) => {
  const testimonials = testimonialsData[language]
  const firstColumn = testimonials.slice(0, 3)
  const secondColumn = testimonials.slice(3, 6)
  const thirdColumn = testimonials.slice(6, 9)

  const titles = {
    es: {
      badge: "Testimonios",
      title: "Amado por Barberías en Todo el Mundo",
      subtitle: "No solo tomes nuestra palabra. Mira lo que nuestros clientes tienen que decir sobre su experiencia.",
    },
    en: {
      badge: "Testimonials",
      title: "Loved by Barbershops Worldwide",
      subtitle: "Don't just take our word for it. See what our customers have to say about their experience.",
    },
  }

  const t = titles[language]

  return (
    <section className="bg-background py-20 md:py-32 relative">
      <div className="container z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-border/40 py-1.5 px-4 rounded-full text-sm font-medium bg-gradient-to-b from-background to-muted/10 backdrop-blur">
              {t.badge}
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-6">{t.title}</h2>
          <p className="text-center text-muted-foreground md:text-lg">{t.subtitle}</p>
        </motion.div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
