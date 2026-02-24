import { motion } from 'motion/react';
import { ArrowRight, Wheat, Flame, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full bg-stone-texture text-bone selection:bg-bronze selection:text-stone-dark">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Heavy Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/foto-pozole.png"
            alt="Textura de maíz oscuro"
            className="w-full h-full object-cover opacity-60 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-dark/80 via-stone-dark/40 to-stone-dark" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-bone mb-8 leading-[0.9] tracking-tighter uppercase drop-shadow-2xl">
              El sabor que nace <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bone via-stone-400 to-stone-600">
                de la raíz
              </span>
            </h1>

            <div className="w-24 h-1 bg-bronze mx-auto mb-8"></div>

            <p className="text-lg md:text-2xl text-bone/80 font-light max-w-2xl mx-auto mb-12 tracking-wide">
              Cocina de origen en el corazón del barrio.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/menu"
                className="btn-stone px-10 py-5 text-bone font-display font-bold text-sm uppercase tracking-[0.2em] hover:text-bronze flex items-center gap-3 group"
              >
                Ver Menú
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-bronze" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-bone/40">Descubre</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-bone/0 via-bone/40 to-bone/0"></div>
        </motion.div>
      </section>

      {/* "El Origen" Section - Lighter Stone Texture */}
      <section id="origen" className="py-32 bg-stone-light-texture relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-bronze"></div>
                <span className="text-bronze font-display font-bold uppercase tracking-[0.2em] text-sm">El Origen</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-display font-black text-bone leading-none uppercase">
                Nuestra cocina <br />
                <span className="text-stone-500">de raíz</span>
              </h2>

              <div className="space-y-6 text-bone/60 text-lg font-light leading-relaxed text-justify">
                <p>
                  Bienvenidos a nuestra mesa. NIXTA es el resultado de un proyecto en pareja donde la fe y la tradición se encuentran
                  para crear algo auténtico.
                </p>
                <p>
                  Para nosotros, Cocina de Raíz significa construir comunidad a través de los sabores que nos unen y nos dan identidad.
                  Esperamos que disfrutes este momento tanto como nosotros disfrutamos prepararlo para ti.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="font-display font-bold text-2xl text-bone mb-2">Caldo de cocción lenta</h4>
                  <p className="text-sm text-bone/40 uppercase tracking-wider">Por varias horas</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl text-bone mb-2"></h4>
                  <p className="text-sm text-bone/40 uppercase tracking-wider"></p>
                </div>
              </div>
            </motion.div>

            {/* Image Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full"
            >
              <div className="absolute inset-0 bg-stone-dark transform rotate-3 border border-white/5 z-0"></div>
              <img
                src="/images/pozole-manos.png.png"
                alt="Textura de piedra volcánica y maíz"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-stone-dark border border-white/10 z-20 p-8 flex items-center justify-center">
                <Wheat className="w-16 h-16 text-bronze opacity-80" strokeWidth={1} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* "El Menú" Preview - Dark Cards */}
      <section className="py-32 bg-stone-texture border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-bronze font-display font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Nuestra Oferta</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-bone uppercase tracking-tight">
              Esenciales <span className="text-stone-600">Nixta</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Pozole Rojo", desc: "Nuestra especialidad con caldo de chiles rojos. Elige tu proteína: Maciza, Surtida o Pollo.", icon: Flame },
              { title: "Pozole Blanco", desc: "El sabor puro del maíz cacahuazintle. Elige tu proteína: Maciza, Surtida o Pollo.", icon: Wheat },
              { title: "Antojitos", desc: "Tostadas caseras de Pata, Tinga NIXTA o Picadillo con base de frijol y queso.", icon: UtensilsCrossed }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative bg-stone-light/30 border border-white/5 p-10 hover:bg-stone-light/50 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:text-bronze transition-all duration-500">
                  <item.icon size={40} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-display font-bold text-bone mb-4 uppercase tracking-wider group-hover:text-bronze transition-colors">{item.title}</h3>
                <p className="text-gray-300 font-light leading-relaxed mb-8">{item.desc}</p>
                <Link to="/menu" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-bone/40 group-hover:text-bone transition-colors">
                  Detalles <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/menu"
              className="btn-stone px-12 py-4 text-bone font-display font-bold text-xs uppercase tracking-[0.25em] hover:text-bronze inline-block"
            >
              Explorar Menú Completo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
