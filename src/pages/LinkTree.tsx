import { MapPin, Phone } from 'lucide-react';

export default function LinkTree() {
    return (
        <div className="min-h-screen bg-stone-texture flex flex-col relative overflow-hidden font-sans text-bone">

            {/* Header Image with heavy dark overlay */}
            <div className="w-full h-56 md:h-64 relative z-0">
                <img
                    src="/images/foto-pozole.png"
                    alt="Pozole Nixta"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-dark/50 via-stone-dark/80 to-stone-dark"></div>
            </div>

            {/* Logo Area */}
            <div className="relative z-10 flex flex-col items-center -mt-20 md:-mt-24">
                <div className="w-40 h-40 md:w-48 md:h-48 relative flex items-center justify-center drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                    {/* Plain logo without borders or rounded background */}
                    <img src="/images/Isologo-X.png" alt="Logo Nixta" className="w-full h-full object-contain drop-shadow-xl" onError={(e) => {
                        // Fallback if image is missing
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.innerHTML = '<div class="w-24 h-24 bg-stone-dark rotate-45 flex items-center justify-center shadow-lg border border-white/5"><span class="text-bronze font-display font-black text-5xl -rotate-45">X</span></div>';
                        }
                    }} />
                </div>

                <h1 className="mt-8 text-5xl md:text-6xl font-display font-black text-bone tracking-widest uppercase drop-shadow-lg">
                    NIXTA
                </h1>
                <p className="mt-2 text-xs md:text-sm tracking-[0.3em] uppercase font-bold text-bronze">
                    Cocina de Raíz
                </p>

                <p className="mt-8 text-center text-sm md:text-base font-light leading-relaxed text-bone/70 max-w-xs">
                    El pozole como debe ser. <br />
                    Sin pretensiones, pero con la raíz bien puesta.
                </p>
                <div className="w-12 h-[1px] bg-bronze/50 mt-6 mb-2"></div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-5 mt-8 px-6 relative z-10 w-full max-w-sm mx-auto">
                {[
                    { text: 'INSTAGRAM', url: '#' },
                    { text: 'FACEBOOK', url: '#' },
                    { text: 'PAGINA WEB', url: '/' },
                    { text: 'PROXIMAMENTE', url: '#' },
                ].map((btn, idx) => (
                    <a
                        key={idx}
                        href={btn.url}
                        className="btn-stone w-full py-4 px-6 flex items-center justify-center group"
                    >
                        <span className="font-display font-bold tracking-[0.2em] text-[13px] uppercase text-bone group-hover:text-bronze transition-colors duration-300">
                            {btn.text}
                        </span>
                    </a>
                ))}
            </div>

            {/* Footer Icons */}
            <div className="flex justify-center gap-8 mt-16 pb-16 relative z-10">
                <a href="tel:+" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-bone hover:text-stone-dark hover:bg-bronze hover:border-bronze transition-all duration-300 shadow-lg">
                    <Phone size={22} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-bone hover:text-stone-dark hover:bg-bronze hover:border-bronze transition-all duration-300 shadow-lg">
                    <MapPin size={22} strokeWidth={1.5} />
                </a>
            </div>

            {/* Subtle background element (replaces character) */}
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-bronze/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
    );
}
