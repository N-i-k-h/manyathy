import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videos = ["/manyathy1.mp4", "/manyathy2.mp4"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      {/* Background Videos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          key={videos[activeVideo]}
          autoPlay
          muted
          playsInline
          onEnded={() => setActiveVideo((prev) => (prev + 1) % videos.length)}
          className="w-full h-full object-cover scale-110"
        >
          <source src={videos[activeVideo]} type="video/mp4" />
        </video>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mr-auto text-left">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Pioneering the{" "}
            <span className="text-gradient glow-text">
              Future of Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 max-w-2xl mr-auto"
          >
            Empowering global enterprises with Generative AI, custom software development,
            and driven digital excellence that transforms businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="hero" size="xl" className="w-full">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>

          </motion.div>


        </div>
      </div>
    </section>
  );
};
