export default function ProblemSection() {
  return (
    <section className="section-space">
      <div className="container-main rounded-2xl bg-white p-6 shadow-sm md:p-10">
        <h2 className="text-2xl font-bold md:text-3xl">Mnohé firmy dnes:</h2>
        <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-700">
          <li>robia reporty ručne v tabuľkách</li>
          <li>pripravujú ponuky od nuly</li>
          <li>hľadajú informácie v emailoch a dokumentoch</li>
          <li>kopírujú údaje medzi systémami</li>
        </ul>
        <p className="mt-5 text-slate-700">AI dokáže tieto úlohy výrazne zrýchliť.</p>
        <p className="mt-2 text-lg font-semibold">Najväčšia otázka je: Kde začať?</p>
      </div>
    </section>
  );
}
