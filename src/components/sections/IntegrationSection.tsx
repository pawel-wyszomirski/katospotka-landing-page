export const IntegrationSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Chcesz umieścić mapę na swojej stronie?
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <p className="mb-4">To także jest proste! Dodaj ten kod do swojej strony:</p>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm mb-4 overflow-x-auto">
{`<iframe
  src="https://mapa.katospotka.pl/"
  style="width: 100%; height: 600px; border: none;"
  title="Mapa wydarzeń w Katowicach"
></iframe>`}
          </pre>
          <p className="text-gray-600">
            Mapa automatycznie dostosuje się do rozmiaru kontenera i będzie działać 
            na wszystkich urządzeniach.
          </p>
        </div>
      </div>
    </div>
  </section>
);