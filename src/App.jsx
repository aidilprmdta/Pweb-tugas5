import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main className="container mx-auto px-4">
        <MainContent />
        <Footer />
      </main>
      <div className="text-center py-10 text-slate-400 text-xs">
        Built with React & Tailwind CSS for PWEB Assignment
      </div>
    </div>
  );
}

export default App
