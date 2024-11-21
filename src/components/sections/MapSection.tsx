import { ArrowRight } from 'lucide-react';
import { ScrollButton } from '../ScrollButton';

export const MapSection = () => (
  <section id="map-section" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Zobacz co się dzieje w mieście</h2>
      <div className="relative aspect-[16/9] max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://mapa.katospotka.pl/"
          className="absolute inset-0 w-full h-full border-0"
          title="Mapa wydarzeń w Katowicach"
        />
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Na mapie znajdziesz wszystkie aktualne wydarzenia w Katowicach. 
          Kliknij w znacznik, aby zobaczyć szczegóły wydarzenia.
        </p>
        <ScrollButton 
          targetId="how-to"
          className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mx-auto"
        >
          Chcesz dodać swoje wydarzenie?
          <ArrowRight className="w-5 h-5" />
        </ScrollButton>
      </div>
    </div>
  </section>
);