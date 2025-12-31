import { motion } from "framer-motion";
import { Shield, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            About PrimeEstates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We are more than just a real estate agency. We are your partners in finding a place 
            where memories are made and futures are built.
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
                alt="Our Team" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-display">Our Journey</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2010, PrimeEstates began with a simple mission: to bring transparency 
                and trust to the real estate market. What started as a small local agency has grown 
                into a premier real estate partner, helping thousands of families find their dream homes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every property has a story, and our job is to find the perfect 
                character to live it. Our team of dedicated professionals works tirelessly to 
                understand your needs and deliver results that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display mb-4">Core Values</h2>
            <p className="text-slate-400">The principles that guide everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: "Integrity", 
                desc: "We conduct our business with the highest standards of professional behavior and ethics." 
              },
              { 
                icon: Target, 
                title: "Excellence", 
                desc: "We strive to deliver the highest quality service and results for our clients." 
              },
              { 
                icon: Heart, 
                title: "Client Focus", 
                desc: "Your success is our success. We put your needs at the center of everything we do." 
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="p-3 bg-primary rounded-lg w-fit mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
