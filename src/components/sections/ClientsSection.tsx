import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They delivered a robust WooCommerce website for our Ayurvedic products. The platform is seamless, easy to manage, and has significantly boosted our online sales.",
    author: "Nidish Kashyap",
    role: "Founder",
    company: "Swadhayu.in",
    logo: "/swadhayu-logo.png",
  },
  {
    quote: "Building a quick commerce platform for rural marketing was a challenge they tackled with expertise. Krushi Gaadi is now empowering villages with seamless access to essentials.",
    author: "Sandeep Yadiyal",
    role: "Founder",
    company: "Krushi Gaadi",
    logo: "/krushigaadi-logo.png",
  },
  {
    quote: "The authentication system developed for our business involves complex workflows, and the implementation is both secure and seamless for our users.",
    author: "Nikhil",
    role: "Technical Lead",
    company: "Manyathy Business",
    logo: "/manyathy-logo.png",
  },

];

const partners = [
  { name: "Microsoft", logo: "/microsoft-logo.png" },
  { name: "AWS", logo: "/aws-logo.png" },
  { name: "Google Cloud", logo: "https://unpkg.com/simple-icons@v13/icons/googlecloud.svg" },
  { name: "Databricks", logo: "https://unpkg.com/simple-icons@v13/icons/databricks.svg" },
  { name: "Snowflake", logo: "https://unpkg.com/simple-icons@v13/icons/snowflake.svg" },
  { name: "MongoDB", logo: "https://unpkg.com/simple-icons@v13/icons/mongodb.svg" },
  { name: "Confluent", logo: "/confluent-logo.png" },
  { name: "HashiCorp", logo: "https://unpkg.com/simple-icons@v13/icons/hashicorp.svg" },
];

export const ClientsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="py-16 sm:py-20 lg:py-24 relative section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 sm:mb-6">
            Trusted Partners
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Hear from Our{" "}
            <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            Scale-ups, unicorns and modern enterprises around the globe trust our development teams.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-hover rounded-2xl p-5 sm:p-6 lg:p-8 relative"
            >
              {testimonial.logo ? (
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} Logo`}
                  className="w-auto h-12 mb-4 object-contain"
                />
              ) : (
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/30 mb-4 sm:mb-6" />
              )}

              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border/50 pt-3 sm:pt-4">
                <div className="font-semibold text-foreground text-sm sm:text-base">
                  {testimonial.author}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-xs sm:text-sm text-primary mt-1">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            Our Technology Partnerships
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col items-center gap-3"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-110 invert opacity-70 group-hover:opacity-100"
                />
                <span className="text-teal-500 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
