import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    title: "Generative AI Solutions",
    description: "Implement proven AI strategies that boost productivity, analyze datasets and maximize operational efficiency through reliable automation.",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    title: "Custom Software Development",
    description: "Build scalable, high-performance applications tailored to your unique business requirements with cutting-edge technologies.",
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    title: "Cloud Consulting & Services",
    description: "Optimize your cloud infrastructure for maximum efficiency, security, and cost-effectiveness across AWS, Azure, and GCP.",
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    title: "Mobile App Development",
    description: "Create stunning, user-centric mobile applications for iOS and Android that drive engagement and deliver results.",
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    title: "Security & Governance",
    description: "Protect your digital assets with comprehensive security audits, compliance solutions, and robust governance frameworks.",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    title: "Data Platform Advisory",
    description: "Transform raw data into actionable insights with modern data platforms, analytics pipelines, and visualization solutions.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group glass-card-hover rounded-2xl overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors relative w-fit">
          {service.title}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full" />
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 sm:mb-6">
          {service.description}
        </p>

      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 sm:mb-6">
            Our Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Engineering that{" "}
            <span className="text-gradient">Reimagines Tomorrow</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            We enrich organizations with talent that boosts scalability, drives growth,
            and brings disruptive ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
