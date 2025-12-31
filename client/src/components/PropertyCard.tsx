import { Link } from "wouter";
import { type Property } from "@shared/schema";
import { MapPin, Bed, Bath, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300">
      <CardHeader className="p-0 relative aspect-[4/3] overflow-hidden">
        {/* Descriptive alt text for SEO */}
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge variant={property.status === 'Available' ? 'default' : 'secondary'} className="shadow-sm">
            {property.status}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white/90 backdrop-blur text-foreground border-transparent shadow-sm">
            {property.type}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
          <p className="text-white font-bold text-xl">{property.price}</p>
        </div>
      </CardHeader>
      
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-display font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
        </div>
        
        <div className="flex items-center text-muted-foreground text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 text-primary" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-t border-dashed">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Bed className="w-4 h-4" />
            <span>3 Beds</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Bath className="w-4 h-4" />
            <span>2 Baths</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Link href="/contact" className="w-full">
          <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline">
            Enquire Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
