import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Brain, Linkedin, Cloud, Server, BookOpen, GraduationCap, CheckCircle } from "lucide-react";

const tracks = [
    {
        icon: Code,
        title: "Web & Mobile Development",
        description: "Master full-stack development with a structured 90-day plan covering HTML/CSS, React, Node.js, and a capstone project.",
        duration: "90 days",
        phases: [
            {
                title: "Days 1–30 (Foundations)",
                details: "HTML, CSS, JavaScript basics; Git & GitHub workflow.",
                shadowProject: "Recreate a responsive landing page and a basic portfolio site."
            },
            {
                title: "Days 31–60 (Frontend & APIs)",
                details: "React or similar framework, REST APIs, JSON, form handling and validation.",
                shadowProject: "SPA for task management consuming a public API (e.g., weather/news)."
            },
            {
                title: "Days 61–90 (Full Stack & Deployment)",
                details: "Backend (Node.js/Express), database (MySQL/MongoDB), authentication.",
                shadowProject: "Capstone: Full-stack app (e.g., gym management) deployed with custom domain."
            }
        ],
        extras: "Resume building session focusing on projects and GitHub."
    },
    {
        icon: Database,
        title: "Data Science",
        description: "Dive into Python, data analysis, and machine learning models with hands-on projects and public datasets.",
        duration: "90 days",
        phases: [
            {
                title: "Days 1–30 (Python & Data Handling)",
                details: "Python, NumPy, Pandas, data cleaning, EDA, visualization.",
                shadowProject: "Analyze a public dataset (sales, weather, or Kaggle mini‑dataset)."
            },
            {
                title: "Days 31–60 (ML Basics)",
                details: "Supervised/unsupervised learning, train–test split, model evaluation.",
                shadowProject: "Build models for prediction (e.g., student performance, house prices)."
            },
            {
                title: "Days 61–90 (End-to-End DS Project)",
                details: "Feature engineering, model tuning, simple dashboards.",
                shadowProject: "Capstone: End-to-end data science project with EDA, models, and report."
            }
        ],
        extras: "Guidance to attempt free/low‑cost data certificates."
    },
    {
        icon: Brain,
        title: "AI / Machine Learning",
        description: "Explore the frontiers of AI with a curriculum focused on deep learning, NLP, and practical model deployment.",
        duration: "90 days",
        phases: [
            {
                title: "Days 1–30 (ML Core)",
                details: "Refresher on Python, regression, classification, overfitting, metrics.",
                shadowProject: "Binary classifier (spam detection/churn prediction)."
            },
            {
                title: "Days 31–60 (Deep Learning / CV / NLP)",
                details: "Neural network basics, simple CNNs or basic NLP pipelines.",
                shadowProject: "Image classifier or sentiment analysis using public datasets."
            },
            {
                title: "Days 61–90 (Applied AI Project)",
                details: "Deploying models (API/notebook), model documentation.",
                shadowProject: "Capstone: AI project aligned with real‑world use case."
            }
        ],
        extras: "Guidance to complete a recognized free virtual AI/ML internship/certificate."
    },
    {
        icon: Linkedin, // Using Shield if available, else Lock or similar. Using Linkedin as placeholder, will switch to Shield below.
        title: "Cybersecurity",
        description: "Learn to secure digital assets through practical labs on scanning, vulnerability analysis, and cloud security.",
        duration: "90 days",
        phases: [
            {
                title: "Days 1–30 (Security Fundamentals)",
                details: "Networking basics, OS, Linux, security principles, OWASP overview.",
                shadowProject: "Lab-based exercises in scanning, hardening, and log analysis."
            },
            {
                title: "Days 31–60 (Practical Security Labs)",
                details: "Web app security, vulnerability analysis, intro to SIEM.",
                shadowProject: "Simulated web app assessment with reporting."
            },
            {
                title: "Days 61–90 (Applied Cyber / Cloud Security)",
                details: "Cloud security basics, IAM, secure deployment patterns.",
                shadowProject: "Capstone: Design and document a secure architecture."
            }
        ],
        extras: "Support to attempt free virtual cybersecurity internships/certificates."
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps",
        description: "Build scalable infrastructure with Linux, Docker, Kubernetes, and CI/CD pipelines on major cloud platforms.",
        duration: "90 days",
        phases: [
            {
                title: "Days 1–30 (Linux, Git, Cloud Basics)",
                details: "Linux commands, Git/GitHub, intro to AWS/Azure.",
                shadowProject: "Launch and manage basic VM and storage buckets."
            },
            {
                title: "Days 31–60 (Containers & CI/CD)",
                details: "Docker, Kubernetes basics, CI/CD (GitHub Actions/Jenkins).",
                shadowProject: "Containerize a sample app and set up simple CI pipeline."
            },
            {
                title: "Days 61–90 (Cloud Infra + Web Server)",
                details: "Nginx/Apache, reverse proxy, SSL, DNS mapping.",
                shadowProject: "Capstone: Host portfolio on cloud infra with custom domain & HTTPS."
            }
        ],
        extras: "Resume line items focused on DevOps pipelines and cloud infra ownership."
    },
];

const commonFeatures = [
    { icon: BookOpen, title: "Shadow Projects", description: "Real-style problems mirroring industry tasks." },
    { icon: GraduationCap, title: "Certifications", description: "Guidance to free/recognized certificates." },
    { icon: Linkedin, title: "Resume & LinkedIn", description: "Sessions on impact wording and skills structuring." },
    { icon: CheckCircle, title: "Reporting & Reviews", description: "Weekly reporting, mid-term review, and final presentation." },
];

export const InternshipSection = () => {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

    return (
        <section id="internships" className="py-16 sm:py-20 lg:py-24 relative bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        Career Growth
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Internship <span className="text-gradient">Opportunities</span>
                    </h2>
                    <p className="text-muted-foreground text-lg px-4">
                        Structured, project-centric 90-day tracks designed to launch your career. Offered by Manyathy Business Solutions.
                    </p>
                </motion.div>

                {/* Tracks Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {tracks.map((track, index) => {
                        const Icon = track.icon;
                        return (
                            <motion.div
                                key={track.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col h-full"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{track.title}</h3>
                                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{track.duration}</span>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm mb-6">{track.description}</p>

                                <div className="flex-grow space-y-4 mb-6">
                                    {track.phases.map((phase, i) => (
                                        <div key={i} className="bg-background/40 p-3 rounded-lg border border-white/5">
                                            <h4 className="text-sm font-semibold text-primary mb-1">{phase.title}</h4>
                                            <p className="text-xs text-muted-foreground mb-2">{phase.details}</p>
                                            <p className="text-xs text-foreground/80 italic border-l-2 border-primary/30 pl-2">
                                                Project: {phase.shadowProject}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-white/10">
                                    <p className="text-xs text-muted-foreground"><span className="text-primary font-semibold">Extras:</span> {track.extras}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Common Features */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-center mb-10">Common Internship <span className="text-primary">Features</span></h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {commonFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card-hover p-6 rounded-xl text-center"
                                >
                                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="text-center max-w-3xl mx-auto glass-card p-6 rounded-xl border-l-4 border-l-primary/50">
                    <p className="text-sm text-muted-foreground">
                        All internships mentioned are <span className="text-orange-500 font-bold uppercase">free and unpaid</span>, offered through or in collaboration with <span className="text-foreground font-semibold">Manyathy Business Solutions</span>. They may be aligned with recognized external certification programs where possible.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">
                        <span className="text-primary font-semibold">Note:</span> Charges will be applied for Domains, servers, API calls, and other third-party services.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 opacity-70">Terms and conditions apply.</p>
                </div>
            </div>
        </section>
    );
};
