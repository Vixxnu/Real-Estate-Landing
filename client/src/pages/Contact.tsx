import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="bg-slate-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have questions about a property? Ready to schedule a visit? We're here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-display mb-6">Contact Information</h2>
              <div className="grid gap-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Office</h3>
                    <p className="text-muted-foreground">123 Business Avenue, Tech Park,<br />Kochi, Kerala 682001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@primeestates.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#25D366]/10 rounded-xl border border-[#25D366]/20">
              <h3 className="font-bold text-[#075E54] text-lg mb-2">Chat on WhatsApp</h3>
              <p className="text-[#075E54]/80 mb-4">Get instant answers to your queries.</p>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noreferrer"
              >
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat Now
                </Button>
              </a>
            </div>

            {/* Google Maps Placeholder */}
            <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-medium border border-gray-300">
              Google Maps Integration
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold font-display mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
