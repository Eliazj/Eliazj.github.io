import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-stone-dark border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-bone/20 flex items-center justify-center text-bone font-display font-black text-sm">
                N
              </div>
              <span className="font-display font-black text-2xl tracking-[0.2em] text-bone">
                NIXTA
              </span>
            </div>
            <p className="text-bone/40 text-sm font-light leading-relaxed max-w-sm">
              Cocina de raíz. Un tributo a la tierra, al maíz y al tiempo.
              <br/>Roma Norte, Ciudad de México.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-xs text-bronze uppercase tracking-[0.2em]">Contacto</h3>
            <div className="space-y-4 text-bone/60 font-light text-sm">
              <p>Av. Siempre Viva 123, Roma Norte</p>
              <p>+52 (55) 1234 5678</p>
              <p>hola@nixta.mx</p>
            </div>
          </div>

          {/* Social / Hours */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-xs text-bronze uppercase tracking-[0.2em]">Horarios</h3>
            <div className="space-y-2 text-bone/60 font-light text-sm">
              <p>Mar - Sáb: 13:00 - 23:00</p>
              <p>Dom: 12:00 - 18:00</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-bone/40 hover:text-bronze transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-bone/40 hover:text-bronze transition-colors">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-bone/20 text-[10px] uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} NIXTA.</p>
          <p>Diseñado con propósito.</p>
        </div>
      </div>
    </footer>
  );
}
