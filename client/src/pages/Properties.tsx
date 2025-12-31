import { motion } from "framer-motion";
import { useProperties } from "@/hooks/use-properties";
import { PropertyCard } from "@/components/PropertyCard";
import { Loader2 } from "lucide-react";

export default function Properties() {
  const { data: properties, isLoading, isError } = useProperties();

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
    <div className="min-h-screen pt-20 pb-12">
      <div className="bg-slate-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Properties</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Explore our diverse portfolio of properties in prime locations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : isError ? (
          <div className="text-center py-24">
            <p className="text-destructive font-medium">Failed to load properties. Please try again later.</p>
          </div>
        ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {properties?.map((property) => (
              <motion.div key={property.id} variants={item}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
