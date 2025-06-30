import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animation des lettres du titre
      const title = textRef.current?.querySelector(".title");
      const tl = gsap.timeline();

      // Animation du titre
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Animation séparée pour les éléments technologiques
      gsap.fromTo(
        ".tech-item",
        {
          y: 30,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
          delay: 1, // Délai pour commencer après le titre et sous-titre
        }
      );

      if (title) {
        const chars = title.textContent?.split("") || [];
        title.innerHTML = chars
          .map(char =>
            char === " " ? " " : `<span class="char">${char}</span>`
          )
          .join("");

        gsap.fromTo(
          ".char",
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.05,
            ease: "back.out(1.7)",
          }
        );
      }

      // Animation des particules flottantes
      const floatingElements = floatingElementsRef.current?.children;
      if (floatingElements) {
        gsap.set(floatingElements, { opacity: 0, scale: 0 });

        gsap.to(floatingElements, {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
          ease: "back.out(1.7)",
        });

        // Animation continue des éléments flottants
        gsap.to(floatingElements, {
          y: -20,
          rotation: 360,
          duration: 3,
          stagger: 0.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Animation du background au scroll
      gsap.to(containerRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animation des particules au scroll
      gsap.to(particlesRef.current, {
        y: -100,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 bg-[length:400%_400%]"
    >
      {/* Particules de fond */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Éléments flottants décoratifs */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400/30 rounded-full blur-sm" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400/40 rounded-full blur-sm" />
        <div className="absolute bottom-32 left-32 w-3 h-3 bg-pink-400/50 rounded-full blur-sm" />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-indigo-400/30 rounded-full blur-sm" />
        <div className="absolute top-1/2 left-16 w-2 h-2 bg-white/40 rounded-full blur-sm" />
        <div className="absolute top-1/3 right-16 w-4 h-4 bg-cyan-400/35 rounded-full blur-sm" />
      </div>

      {/* Contenu principal */}
      <div
        ref={textRef}
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <h1
          ref={titleRef}
          className="title text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
        >
          Template Vite + React
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto"
        >
          Un template moderne avec TypeScript, Tailwind CSS et GSAP
        </p>

        {/* Technologies */}
        <div ref={techRef} className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-item bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            ⚡ Vite
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-item bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            ⚛️ React
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-item bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            📘 TypeScript
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-item bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            🎨 Tailwind CSS
          </a>
          <a
            href="https://greensock.com/gsap/"
            target="_blank"
            rel="noopener noreferrer"
            className="tech-item bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            ✨ GSAP
          </a>
        </div>

        <button
          onClick={() => {
            window.open("https://github.com/Tmauc/react-velocity", "_blank");
          }}
          className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Commencer un projet
        </button>
      </div>

      {/* Overlay pour l'effet de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
    </div>
  );
}
