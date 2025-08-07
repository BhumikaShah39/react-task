import parisImg from './assets/Paris.png';
import londonImg from './assets/London.png';
import barcelonaImg from './assets/Barcelona.png';
import pragueImg from './assets/Prague.png';
import Card from './Card';

function App() {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Cities to Visit in Europe</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
        <Card
          image={parisImg}
          title="Paris"
          country="France"
          description="Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas."
        />
        <Card
          image={londonImg}
          title="London"
          country="United Kingdom"
          description="When exploring London, you will come across lots of excitement by chance, so try to take everything in rather than just rushing around to all of the major tourist haunts."
        />
        <Card
          image={barcelonaImg}
          title="Barcelona"
          country="Spain"
          description="Overlooking the Mediterranean Sea, and famous for Gaudi and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities."
        />
        <Card
          image={pragueImg}
          title="Prague"
          country="Czech Republic"
          description="Old-world charm meets modern vibrancy in Europe's capital of stunning architecture, with the iconic Charles Bridge and a captivating cultural scene."
        />
      </div>
    </div>
  );
}

export default App;