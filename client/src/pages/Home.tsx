import { motion } from "framer-motion";
import { Link } from "wouter";
import { useFeaturedProperties } from "@/hooks/use-properties";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, Star, ArrowRight, Phone } from "lucide-react";

export default function Home() {
  const { data: properties, isLoading } = useFeaturedProperties();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash: modern luxury home exterior dusk */}
          <img 
            src="https://images.unsplash.com/photo-1600596542815-2250c38ae812?w=1920&q=80" 
            alt="Luxury Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Find Your <span className="text-primary">Dream Home</span><br />
              With Confidence
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover a curated selection of premium properties. 
              From modern apartments to luxury villas, we help you find the perfect match.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Browse Properties
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Badges */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Verified Listings", desc: "Every property thoroughly checked" },
              { icon: Users, title: "Local Experts", desc: "15+ Years of market experience" },
              { icon: Star, title: "Premium Service", desc: "Rated 4.9/5 by our clients" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100"
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                <p className="text-muted-foreground">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
              <p className="text-muted-foreground max-w-xl">
                Hand-picked selection of our finest properties available for sale.
              </p>
            </div>
            <Link href="/properties">
              <Button variant="ghost" className="group">
                View All Properties 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-[400px] rounded-2xl bg-gray-200 animate-pulse" />
              ))}
            </div>
          ) : (
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {properties.map((property) => (
                <motion.div key={property.id} variants={item}>
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Move In?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Your dream home is just a call away. Contact our expert team to schedule a visit today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-slate-900 hover:bg-white/90 font-bold shadow-xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
