import { Map, Calendar, Mail, Code } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';

export const FeaturesSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Co nas wyróżnia?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          icon={<Map className="w-8 h-8" />}
          title="Wszystko na mapie"
          description="Koniec z przeszukiwaniem wielu stron - wszystkie wydarzenia w jednym miejscu"
        />
        <FeatureCard 
          icon={<Calendar className="w-8 h-8" />}
          title="Prosta obsługa"
          description="Intuicyjna mapa i czytelny kalendarz wydarzeń"
        />
        <FeatureCard 
          icon={<Mail className="w-8 h-8" />}
          title="Szybkie dodawanie"
          description="Wyślij maila i Twoje wydarzenie pojawi się na mapie"
        />
        <FeatureCard 
          icon={<Code className="w-8 h-8" />}
          title="Łatwa integracja"
          description="Możesz umieścić mapę na swojej stronie internetowej"
        />
      </div>
    </div>
  </section>
);