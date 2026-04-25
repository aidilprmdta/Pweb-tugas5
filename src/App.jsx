import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50 font-sans">
      <Header />
      <main className="flex-grow flex flex-col justify-center items-center w-full px-4 py-8">
        <MainContent />
      </main>

      <Footer />
    </div>
  );
}

export default App;