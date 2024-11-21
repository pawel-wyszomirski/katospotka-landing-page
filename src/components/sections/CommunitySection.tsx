import { Mail, Users, ExternalLink, ArrowRight } from 'lucide-react';

export const CommunitySection = () => (
  <section className="py-24 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-12">Dołącz do społeczności</h2>
      <div className="max-w-2xl mx-auto">
        <p className="text-xl mb-12 leading-relaxed">
          KatoSpotka to projekt społeczny tworzony dla mieszkańców przez mieszkańców. 
          Wspólnie budujemy aktywną mapę wydarzeń transformujących nasze miasto.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="mailto:katospotka@gmail.com" 
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            <Mail className="w-6 h-6" />
            Napisz do nas
            <ArrowRight className="w-6 h-6" />
          </a>
          <a 
            href="https://katospotka.features.vote/board"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-purple-500 transition-all transform hover:scale-105 shadow-lg"
          >
            <Users className="w-6 h-6" />
            Zgłoś pomysł
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);