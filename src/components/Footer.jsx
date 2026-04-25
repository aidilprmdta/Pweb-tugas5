
export default function Footer() {
  const tips = [
    "Gunakan minimal 12 karakter untuk keamanan ekstra.",
    "Jangan gunakan tanggal lahir atau nama hewan peliharaan.",
    "Gunakan kombinasi simbol seperti @, #, atau $.",
    "Ganti password secara berkala setiap 3-6 bulan."
  ];

  return (
    <footer className="max-w-md mx-auto p-6 bg-cyan-50 rounded-lg border border-cyan-100">
      <h3 className="text-cyan-800 font-bold mb-3 underline">Tips Keamanan:</h3>
      <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
        {tips.map((tip, index) => <li key={index}>{tip}</li>)}
      </ul>
    </footer>
  );
}