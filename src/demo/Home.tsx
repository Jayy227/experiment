import { ArrowRightIcon, StarIcon, SparklesIcon, ZapIcon, RocketIcon } from "@/assets/icons"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  const features = [
    { icon: <ZapIcon />, title: "Lightning Fast", description: "Optimized for performance with instant page loads" },
    { icon: <SparklesIcon />, title: "Magical UX", description: "Smooth animations that delight users" },
    { icon: <StarIcon />, title: "Star Quality", description: "Designed with attention to every detail" },
    { icon: <RocketIcon />, title: "Ready to Launch", description: "Deploy in minutes with zero config" },
  ]

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-secondary/20" />
      
      {/* Hero Section */}
      <section className="relative container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Build Faster with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Hermes
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern React application template with TypeScript, Tailwind CSS, and beautiful shadcn/ui components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
              Get Started <ArrowRightIcon />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6">
              View on GitHub
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="relative container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Beautiful Designs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="/abstract-art.svg" 
              alt="Abstract Art" 
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="/landscape.svg" 
              alt="Landscape" 
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="/gradient-bg.svg" 
              alt="Gradient Background" 
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <img 
              src="/hero-bg.svg" 
              alt="Hero Background" 
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
