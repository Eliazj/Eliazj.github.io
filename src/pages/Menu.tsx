import { motion } from 'motion/react';
import { Utensils, Coffee, Leaf } from 'lucide-react';

const MenuSection = ({ title, icon: Icon, items }: { title: string, icon: any, items: any[] }) => (
  <div className="mb-24">
    <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-6">
      <Icon size={28} className="text-bronze" strokeWidth={1} />
      <h2 className="text-3xl md:text-5xl font-display font-black text-bone uppercase tracking-tighter">{title}</h2>
    </div>
    
    <div className="grid grid-cols-1 gap-12">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-baseline"
        >
          <div className="order-2 md:order-1">
            <div className="flex items-baseline gap-4 mb-2">
              <h3 className="text-xl font-display font-bold text-bone group-hover:text-bronze transition-colors uppercase tracking-wide">{item.name}</h3>
              {item.tag && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-dark bg-bronze px-2 py-0.5">
                  {item.tag}
                </span>
              )}
            </div>
            <p className="text-gray-300 font-light text-sm leading-relaxed max-w-2xl">{item.description}</p>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xl font-display font-bold text-bronze">${item.price}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Menu() {
  const pozoles = [
    {
      name: "Rojo Tradicional",
      price: "145",
      description: "Nuestro clásico. Caldo rojo de chiles secos, carne de cerdo maciza, maíz cacahuazintle y rábano fresco.",
      tag: "Icono"
    },
    {
      name: "Verde Guerrero",
      price: "155",
      description: "Mole verde de pepita, tomatillo y hierbas frescas. Servido con chicharrón, aguacate y sardina (opcional).",
      tag: "Picante"
    },
    {
      name: "Blanco Estilo Jalisco",
      price: "140",
      description: "El sabor puro del maíz y la carne. Caldo claro y ligero, perfecto para personalizar con nuestra salsa macha.",
    },
    {
      name: "Vegano de Setas",
      price: "135",
      description: "Caldo rojo de chiles, mezcla de setas y hongos silvestres, flor de calabaza y maíz.",
      tag: "Vegano"
    }
  ];

  const antojitos = [
    {
      name: "Tostada de Pata",
      price: "65",
      description: "Pata de res en escabeche casero, frijoles refritos, lechuga, crema y queso cotija."
    },
    {
      name: "Tostada de Tinga",
      price: "60",
      description: "Pollo deshebrado en salsa de chipotle y cebolla caramelizada."
    },
    {
      name: "Quesadilla de Maíz Azul",
      price: "45",
      description: "Hecha a mano al momento. Rellena de queso Oaxaca y epazote."
    },
    {
      name: "Guacamole NIXTA",
      price: "95",
      description: "Con chapulines, granada (en temporada) y totopos de la casa."
    }
  ];

  const bebidas = [
    {
      name: "Agua de Jamaica y Romero",
      price: "45",
      description: "Infusión fría de flor de jamaica con un toque de romero fresco."
    },
    {
      name: "Horchata de Coco",
      price: "50",
      description: "Arroz, coco natural, canela y leche. Cremosa y refrescante."
    },
    {
      name: "Mezcal Espadín",
      price: "120",
      description: "Artesanal de Oaxaca. Notas ahumadas y cítricas. Acompañado de sal de gusano y naranja."
    },
    {
      name: "Cerveza Artesanal",
      price: "90",
      description: "Pregunta por nuestra selección de cervecerías locales."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-stone-texture text-bone">
      {/* Header */}
      <div className="py-24 px-4 text-center relative overflow-hidden border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="text-bronze font-display font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Carta de Alimentos</span>
          <h1 className="text-5xl md:text-8xl font-display font-black mb-8 text-bone uppercase tracking-tighter">
            Menú <span className="text-stone-600">Nixta</span>
          </h1>
          <p className="text-lg text-bone/60 font-light max-w-2xl mx-auto">
            Una selección curada de sabores ancestrales. Sin atajos.
          </p>
        </motion.div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <MenuSection title="Pozoles" icon={Utensils} items={pozoles} />
        <MenuSection title="Antojitos" icon={Leaf} items={antojitos} />
        <MenuSection title="Bebidas" icon={Coffee} items={bebidas} />
        
        <div className="text-center mt-24 pt-12 border-t border-white/5">
          <p className="text-bone/40 text-xs uppercase tracking-widest">
            Precios en MXN. Incluyen IVA.
          </p>
        </div>
      </div>
    </div>
  );
}
