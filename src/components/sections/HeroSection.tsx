import { Map, Calendar } from 'lucide-react';
import { ScrollButton } from '../ScrollButton';

export const HeroSection = () => (
  <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative">
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          🗺️ KatoSpotka
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Twój przewodnik po wydarzeniach w Katowicach - wszystkie spotkania, warsztaty i inicjatywy w jednym miejscu
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <ScrollButton
            targetId="map-section"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
          >
            <Map className="w-5 h-5" />
            Zobacz mapę
          </ScrollButton>
          <ScrollButton
            targetId="how-to"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Dodaj wydarzenie
          </ScrollButton>
        </div>
      </div>
    </div>
  </header>
);