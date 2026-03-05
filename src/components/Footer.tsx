export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      <div className="container-main">© {new Date().getFullYear()} AI Readiness Test</div>
    </footer>
  );
}
