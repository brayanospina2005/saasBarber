"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Dynamic import para evitar SSR issues - ESTO SOLUCIONA LA HIDRATACIÓN
const DynamicSparkles = dynamic(() => Promise.resolve(SparklesComponent), {
  ssr: false,
});

export default function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle>Tecnología de Barbería Avanzada</CardTitle>
      <CardDescription>
        Todas las herramientas que necesitas para gestionar tu barbería de forma 
        profesional en una sola plataforma integrada.
      </CardDescription>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <ReactLogo className="h-4 w-4" />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <FirebaseLogo className="h-6 w-6" />
        </Container>
        <Container className="circle-3">
          <NextjsLogo className="h-8 w-8" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <VercelLogo className="h-6 w-6" />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <ResendLogo className="h-4 w-4" />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <DynamicSparkles />
        </div>
      </div>
    </div>
  );
};

// Componente separado para las sparkles que solo se renderiza en el cliente
const SparklesComponent = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => {
        // Valores fijos para evitar problemas de hidratación
        const positions = [
          { top: 20, left: 15 },
          { top: 45, left: 85 },
          { top: 70, left: 25 },
          { top: 15, left: 75 },
          { top: 85, left: 45 },
          { top: 35, left: 10 },
          { top: 60, left: 90 },
          { top: 80, left: 65 },
          { top: 25, left: 40 },
          { top: 55, left: 20 },
          { top: 10, left: 55 },
          { top: 90, left: 80 },
        ];
        
        const position = positions[i] || { top: 50, left: 50 };
        
        return (
          <motion.span
            key={`star-${i}`}
            initial={{
              top: `${position.top}%`,
              left: `${position.left}%`,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              top: `calc(${position.top}% + ${Math.sin(i) * 10}px)`,
              left: `calc(${position.left}% + ${Math.cos(i) * 10}px)`,
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
            style={{
              position: "absolute",
              width: `2px`,
              height: `2px`,
              borderRadius: "50%",
              zIndex: 1,
            }}
            className="inline-block bg-black dark:bg-white"
          />
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

// LOGOS OFICIALES REALES

export const NextjsLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 394 79"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"/>
      <path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V0.0330722H149.052Z"/>
      <path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"/>
      <path d="M201.6 56.7148L192.679 45.6229L165.455 79.4312L183.32 79.4312L201.6 56.7148Z"/>
      <circle cx="39.6" cy="39.6" r="39.6" fill="currentColor"/>
      <path d="M36.67 29.6977H42.5938V49.3023H36.67V29.6977Z" fill="white"/>
      <path d="M29.6977 36.67H49.3023V42.5938H29.6977V36.67Z" fill="white"/>
    </svg>
  );
};

export const FirebaseLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M3.89 15.672L6.255.956A.5.5 0 017.16.956l2.257 4.286 2.637-5.007a.5.5 0 01.906 0l8.043 15.263-8.6 4.874a1 1 0 01-.906 0l-8.6-4.874z"
        fill="#FFC400"
      />
      <path
        d="L6.255.956A.5.5 0 017.16.956L12.054 5.242 3.89 15.672z"
        fill="#FF9100"
      />
      <path
        d="L20.103 15.672L17.847 10.407A.5.5 0 0017.063 10.407L12.054 5.242 3.89 15.672 12.054 20.546 20.103 15.672z"
        fill="#DD2C00"
      />
      <path
        d="M12.054 5.242L9.417.236A.5.5 0 008.511.236L6.255.956 12.054 5.242z"
        fill="#FF9100"
      />
    </svg>
  );
};

export const ResendLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M186 447.471V154H318.062C336.788 154 353.697 158.053 368.79 166.158C384.163 174.263 396.181 185.443 404.845 199.698C413.51 213.672 417.842 229.604 417.842 247.491C417.842 265.938 413.51 282.568 404.845 297.381C396.181 311.915 384.302 323.375 369.209 331.759C354.117 340.144 337.067 344.337 318.062 344.337H253.917V447.471H186ZM348.667 447.471L274.041 314.99L346.99 304.509L430 447.471H348.667ZM253.917 289.835H311.773C319.04 289.835 325.329 288.298 330.639 285.223C336.229 281.869 340.421 277.258 343.216 271.388C346.291 265.519 347.828 258.811 347.828 251.265C347.828 243.718 346.151 237.15 342.797 231.56C339.443 225.691 334.552 221.219 328.124 218.144C321.975 215.07 314.428 213.533 305.484 213.533H253.917V289.835Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const VercelLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 256 222"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      fill="currentColor"
    >
      <path d="m128 0 128 221.705H0z"/>
    </svg>
  );
};

export const ReactLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="-11.5 -10.23174 23 20.46348"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}; 