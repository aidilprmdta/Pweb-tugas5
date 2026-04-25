import React, { useState } from 'react';

export default function MainContent() {
  const [password, setPassword] = useState("");

  const checkStrength = (pass) => {
    let score = 0;
    if (pass.length > 0) score++;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass) && /[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const score = checkStrength(password);
  const labels = ["", "Sangat Lemah", "Lemah", "Sedang", "Sangat Kuat"];
  const colors = ["bg-gray-200", "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"];

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
      <label className="block text-slate-700 font-semibold mb-2">Masukkan Password</label>
      <input 
        type="text" // Bisa diubah ke password, tapi untuk demo 'text' memudahkan visual
        className="w-full border-2 border-slate-200 rounded-lg p-3 focus:border-cyan-500 outline-none transition-all"
        placeholder="Ketik password di sini..."
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Visual Indicator */}
      <div className="mt-4">
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-500 ${colors[score]}`}
            style={{ width: `${(score / 4) * 100}%` }}
          ></div>
        </div>
        <p className={`text-sm mt-2 font-medium text-slate-600`}>
          Kekuatan: <span className="italic">{labels[score]}</span>
        </p>
      </div>
    </div>
  );
}