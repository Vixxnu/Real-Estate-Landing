import { useQuery } from "@tanstack/react-query";
import { type Property } from "@shared/schema";

// Fallback data as specified in implementation notes
const FALLBACK_PROPERTIES: Property[] = [
  { id: 1, title: "Luxury 3BHK Apartment", price: "₹85 Lakhs", location: "Kochi", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", type: "Apartment", status: "Available" },
  { id: 2, title: "Modern Villa", price: "₹2.5 Cr", location: "Bangalore", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", type: "Villa", status: "Sold" },
  { id: 3, title: "Cozy Cottage", price: "₹45 Lakhs", location: "Munnar", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80", type: "Cottage", status: "Available" },
  { id: 4, title: "Seaside Retreat", price: "₹1.2 Cr", location: "Goa", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80", type: "Villa", status: "Available" },
  { id: 5, title: "Urban Loft", price: "₹65 Lakhs", location: "Mumbai", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", type: "Apartment", status: "Available" },
  { id: 6, title: "Hilltop Mansion", price: "₹5.5 Cr", location: "Ooty", image: "https://images.unsplash.com/photo-1600596542815-2250c38ae812?w=800&q=80", type: "Villa", status: "Available" }
];

// Mock Sheet URL - typically you would put this in env variables
const SHEET_URL = 'https://opensheet.elk.sh/YOUR_SPREADSHEET_ID/Sheet1';

export function useProperties() {
  return useQuery({
    queryKey: ['properties'],
    queryFn: async (): Promise<Property[]> => {
      try {
        const res = await fetch(SHEET_URL);
        if (!res.ok) throw new Error('Failed to fetch from sheet');
        const data = await res.json();
        
        // Basic validation to ensure data structure matches
        if (Array.isArray(data) && data.length > 0 && data[0].title) {
          return data;
        }
        return FALLBACK_PROPERTIES;
      } catch (e) {
        console.warn('Using fallback property data due to fetch error:', e);
        return FALLBACK_PROPERTIES;
      }
    },
    // Don't refetch too often for static data
    staleTime: 1000 * 60 * 5, 
  });
}

export function useFeaturedProperties() {
  const { data, ...rest } = useProperties();
  return {
    data: data?.slice(0, 3) || [],
    ...rest
  };
}
