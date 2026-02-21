import { motion } from 'motion/react';
import { Utensils, Coffee, Leaf, Plus, Star } from 'lucide-react';

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
            {item.description && (
              <p className="text-gray-300 font-light text-sm leading-relaxed max-w-2xl">{item.description}</p>
            )}
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
      name: "Pozole Rojo Grande",
      price: "120",
      description: "Elige tu proteína: Maciza, Surtida o Pollo. Incluye: crema, lechuga, rábano, cebolla, tostadas, limón y orégano.",
      tag: "Tradicional"
    },
    {
      name: "Pozole Rojo Chico",
      price: "90",
      description: "Elige tu proteína: Maciza, Surtida o Pollo. Incluye: crema, lechuga, rábano, cebolla, tostadas, limón y orégano.",
    },
    {
      name: "Pozole Blanco Grande",
      price: "120",
      description: "Elige tu proteína: Maciza, Surtida o Pollo. Incluye: crema, lechuga, rábano, cebolla, tostadas, limón y orégano.",
    },
    {
      name: "Pozole Blanco Chico",
      price: "90",
      description: "Elige tu proteína: Maciza, Surtida o Pollo. Incluye: crema, lechuga, rábano, cebolla, tostadas, limón y orégano.",
    }
  ];

  const tostadas = [
    {
      name: "Tinga NIXTA",
      price: "40",
      description: "Servida con: base de frijol, crema, queso y lechuga."
    },
    {
      name: "Picadillo",
      price: "40",
      description: "Servida con: base de frijol, crema, queso y lechuga."
    },
    {
      name: "Pata",
      price: "40",
      description: "Servida con: base de frijol, crema, queso y lechuga."
    }
  ];

  const extras = [
    { name: "Crema extra", price: "10" },
    { name: "Aguacate", price: "25" },
    { name: "Chicharrón (Individual)", price: "39" },
    { name: "Chicharrón (Familiar)", price: "79" },
    { name: "Suero (Vaso con sal y limón)", price: "15" },
  ];

  const bebidas = [
    { name: "Café de olla", price: "30" },
    { name: "Americano", price: "30" },
    { name: "Té", price: "25" },
    { name: "Coca Cola", price: "30" },
    { name: "Fanta", price: "30" },
    { name: "Manzanita", price: "30" },
    { name: "Agua mineral", price: "30" },
    { name: "Agua de Jamaica ½ litro", price: "25" },
    { name: "Agua de Jamaica 1 litro", price: "40" },
  ];

  const postres = [
    { name: "Carlota de limón", price: "55" },
    { name: "Carlota de oreo", price: "60" },
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
            El pozole como debe ser. Sin pretensiones, pero con la raíz bien puesta.
          </p>
        </motion.div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <MenuSection title="Pozoles" icon={Utensils} items={pozoles} />
        <MenuSection title="Tostadas" icon={Leaf} items={tostadas} />
        <MenuSection title="Extras" icon={Plus} items={extras} />
        <MenuSection title="Postres" icon={Star} items={postres} />
        <MenuSection title="Bebidas" icon={Coffee} items={bebidas} />

        <div className="text-center mt-24 pt-12 border-t border-white/5">
          <p className="text-bone/40 text-xs uppercase tracking-widest">
            Precios en MXN. Todos nuestros pozoles incluyen: crema, lechuga, rábano, cebolla, tostadas, limón y orégano.
          </p>
        </div>
      </div>
    </div>
  );
}
