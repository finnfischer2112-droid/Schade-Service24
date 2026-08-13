import { MapPin } from 'lucide-react';
import { config } from '@/config';

export function LocalSEOSection() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 text-white">
          <MapPin className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
          Ihr unabhängiger KFZ-Gutachter im Raum Kaiserslautern
        </h2>
        
        <p className="text-xl text-primary-foreground/90 leading-relaxed mb-12">
          {config.COMPANY_NAME} unterstützt Kunden im Raum Kaiserslautern und Umgebung bei der professionellen Begutachtung von Fahrzeugschäden und der weiteren Schadensabwicklung. Wir sind schnell bei Ihnen vor Ort, wenn Sie uns brauchen.
        </p>

        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
          <div className="text-left">
            <p className="text-sm text-primary-foreground/70 mb-1">Einsatzgebiet</p>
            <p className="font-bold text-lg">Raum Kaiserslautern</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20"></div>
          <div className="text-left">
            <p className="text-sm text-primary-foreground/70 mb-1">Unternehmenssitz</p>
            <p className="font-bold text-lg">{config.COMPANY_ADDRESS}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
