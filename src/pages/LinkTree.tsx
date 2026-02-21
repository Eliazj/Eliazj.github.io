import { MapPin, Phone } from 'lucide-react';

export default function LinkTree() {
    return (
        <div className="min-h-screen bg-[#000000] flex flex-col relative overflow-hidden font-sans text-[#1a1a1a]">

            {/* Header Image */}
            <div className="w-full h-56 md:h-64 relative z-0">
                <img
                    src="https://images.unsplash.com/photo-1548811218-4ebbcbe16dcd?auto=format&fit=crop&q=80&w=800&h=400"
                    alt="Nixta Pozole"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Logo Area */}
            <div className="relative z-10 flex flex-col items-center -mt-16 md:-mt-20">
                <div className="w-32 h-32 md:w-40 md:h-40 relative flex items-center justify-center">
                    {/* Logo Image */}
                    <div className="absolute w-32 h-32 flex items-center justify-center drop-shadow-xl hover:scale-105 transition-transform duration-300">
                        <img src="/images/Isologo-X.png" alt="Logo Nixta" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-display font-black text-[#1a1a1a] tracking-widest uppercase italic pr-2">
                NIXTA
            </h1>
            <p className="mt-2 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold text-[#1a1a1a]">
                Cocina de Raíz
            </p>

            <p className="mt-8 text-center text-sm md:text-base italic max-w-xs font-medium leading-relaxed text-[#1a1a1a]">
                El pozole como debe ser. <br />
                Sin pretensiones, pero con la raiz bien puesta.
            </p>
        </div>

            {/* Buttons */ }
    <div className="flex flex-col items-center gap-4 mt-10 px-4 relative z-10">
        {[
            { text: 'INSTAGRAM', url: '#' },
            { text: 'FACEBOOK', url: '#' },
            { text: 'PAGINA WEB', url: '/' },
            { text: 'PROXIMAMENTE', url: '#' },
        ].map((btn, idx) => (
            <a
                key={idx}
                href={btn.url}
                className="group relative w-full max-w-[280px] h-14 flex items-center justify-center overflow-hidden bg-[#e5e5e5] shadow-sm transition-transform hover:scale-105"
            >
                {/* Texture overlay for buttons - using CSS noise to simulate stone/paper texture */}
                <div className="absolute inset-0 opacity-[0.15]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                </div>
                {/* Subtle inner shadow/border for the 3D cut effect */}
                <div className="absolute inset-0 border border-black/5"></div>
                <span className="relative z-10 font-bold tracking-widest text-[13px] uppercase text-black drop-shadow-sm">
                    {btn.text}
                </span>
            </a>
        ))}
    </div>

    {/* Footer Icons */ }
    <div className="flex justify-center gap-6 mt-12 pb-12 relative z-10">
        <a href="tel:+" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-stone-800 transition-transform hover:scale-110">
            <Phone size={20} strokeWidth={2.5} />
        </a>
        <a href="#" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-stone-800 transition-transform hover:scale-110">
            <MapPin size={20} strokeWidth={2.5} />
        </a>
    </div>

    {/* Character Image Placeholder (Bottom Right) */ }
    <div className="absolute bottom-0 right-0 w-64 md:w-80 opacity-90 pointer-events-none translate-x-10 translate-y-10">
        {/* We use an SVG path or a generated image placeholder, user can replace this later with the real mascot */}
        <div className="w-full h-64 bg-contain bg-no-repeat bg-bottom opacity-10"
            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23000"/></svg>')` }}>
        </div>
    </div>
        </div >
    );
}
