import { CheckCircle, Calendar, Users } from 'lucide-react';

export const HowToSection = () => (
  <section id="how-to" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Jak dodać wydarzenie?</h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <p className="text-lg mb-4">
            To proste! Wyślij maila na adres: 
            <span className="font-mono bg-white px-2 py-1 rounded ml-2">
              katospotka@gmail.com
            </span>
          </p>
          <h3 className="font-semibold mb-4">W treści maila zawrzyj:</h3>
          <ul className="space-y-2">
            {[
              'Nazwę wydarzenia',
              'Datę i godzinę',
              'Miejsce (adres lub informację, że wydarzenie jest online)',
              'Krótki opis',
              'Link do rejestracji (jeśli jest wymagana)',
              'Nazwę organizatora'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-4">Przykład:</h3>
          <pre className="bg-white p-4 rounded-lg text-sm overflow-x-auto">
{`Warsztaty "Zielone Katowice"
5 grudnia 2024, 17:00-19:00
Centrum Organizacji Pozarządowych, ul. Młyńska 5, Katowice
Warsztaty o zazielenianiu miasta i tworzeniu ogrodów społecznych.
Zapisy: www.przyklad.pl/zapisy
Organizator: Fundacja Zielone Miasto`}
          </pre>
        </div>

        <div className="space-y-6">
          <div className="bg-yellow-50 rounded-lg p-6">
            <p className="flex items-start">
              <span className="text-2xl mr-2">💡</span>
              <span>
                <strong>Wskazówka:</strong> Możesz też skopiować i przesłać tekst z wydarzenia na Facebooku - 
                nasz system jest sprytny i wyciągnie potrzebne informacje!
              </span>
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-green-600" />
              Automatyczne dodawanie wydarzeń
            </h3>
            <div className="space-y-4">
              <p>
                Jesteś organizatorem regularnych wydarzeń? Możesz zautomatyzować dodawanie ich na mapę!
              </p>
              <div className="pl-4 border-l-4 border-green-200">
                <p className="text-green-800">
                  Dodaj adres <span className="font-mono bg-white px-2 py-1 rounded">katospotka@gmail.com</span> do:
                </p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    swojej listy mailingowej
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    newslettera z wydarzeniami
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    automatycznych powiadomień
                  </li>
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                * Pamiętaj, że Twój adres email musi zostać najpierw zatwierdzony przez administratora.
                Napisz do nas, aby uzyskać dostęp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);