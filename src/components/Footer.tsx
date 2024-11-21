export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 relative">
    <div className="container mx-auto px-4">
      {/* Main Content */}
      <div className="text-center mb-16">
        <p className="text-2xl font-semibold mb-4">
          KatoSpotka - Bo w Katowicach zawsze się coś dzieje! 🌟
        </p>
        <p className="text-gray-400 text-lg">
          Kontakt: katospotka@gmail.com
        </p>
      </div>

      {/* Partners Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-center text-lg font-semibold mb-8">Partnerzy projektu</h3>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <a 
            href="https://www.mostkatowice.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src="https://res.cloudinary.com/dfg7x7ihk/image/upload/v1732202911/most_t6i5n8.png"
              alt="MOST Katowice"
              className="h-20 w-auto"
            />
          </a>
          <a 
            href="https://www.katowice.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img 
              src="https://res.cloudinary.com/dfg7x7ihk/image/upload/v1732202912/logo-katowice-kolor-pion_yoxep2.png"
              alt="Miasto Katowice"
              className="h-24 w-auto"
            />
          </a>
        </div>
      </div>

      {/* EU Funding Info */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-400 leading-relaxed">
            "Społeczna transformacja Katowic" to projekt dofinansowany ze środków Unii Europejskiej 
            w ramach Fundusze Europejskie dla Śląskiego 2021-2027. Działanie 10.24 Włączenie społeczne - 
            wzmocnienie procesu sprawiedliwej transformacji.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg">
          <img 
            src="https://res.cloudinary.com/dfg7x7ihk/image/upload/v1732202016/FE-SL-kolor-poziom-br2_cvz4cg.jpg"
            alt="Fundusze Europejskie dla Śląskiego 2021-2027"
            className="max-w-full h-auto mx-auto"
            style={{ maxHeight: '80px' }}
          />
        </div>
      </div>

      {/* Credit Link */}
      <div className="absolute bottom-2 right-4">
        <a 
          href="https://lifeai.guru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
        >
          Dla Katowic od lifeAI.guru
        </a>
      </div>
    </div>
  </footer>
);