import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Driven by Tech",
    description: "We stay at the forefront of technological innovation, constantly exploring and implementing cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Empowered by People",
    description: "Our greatest asset is our team. We invest in talent, foster collaboration, and celebrate diverse perspectives.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We challenge conventions and embrace creative thinking to deliver solutions that exceed expectations.",
  },
  {
    icon: Rocket,
    title: "Results Oriented",
    description: "Every project is measured by the tangible value it creates for our clients and their customers.",
  },
];

export const PhilosophySection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 sm:mb-6">
              Our Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Driven by Tech,{" "}
              <span className="text-gradient">Empowered by People</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Our software development teams, based throughout Europe and the Americas, 
              ramp up engineering capacity to accelerate digital transformations and business growth. 
              We believe that the best technology solutions emerge from the intersection of 
              cutting-edge innovation and human insight.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {[
                { value: "1600+", label: "Talented Experts" },
                { value: "25+", label: "Years of Innovation" },
                { value: "350+", label: "Trusted Clients" },
                { value: "15+", label: "Global Offices" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-3 sm:p-4"
                >
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card-hover rounded-2xl p-4 sm:p-5 lg:p-6"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
