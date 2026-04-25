import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    // flex flex-col dan min-h-screen adalah kunci agar susunannya atas-tengah-bawah
    <div className="min-h-screen w-full flex flex-col bg-slate-50 font-sans">
      <Header />
      
      {/* flex-grow mendorong header ke atas dan footer ke bawah */}
      {/* justify-center menaruh MainContent persis di tengah */}
      <main className="flex-grow flex flex-col justify-center items-center w-full px-4 py-8">
        <MainContent />
      </main>

      <Footer />
    </div>
  );
}

export default App;