import { useState } from "react";
import Math from "@/components/Math";
import StudyTable from "@/components/StudyTable";
import QuestionCard from "@/components/QuestionCard";
import Q1 from "@/components/questions/Q1";
import Q2 from "@/components/questions/Q2";
import Q3 from "@/components/questions/Q3";
import Q4 from "@/components/questions/Q4";
import Q5 from "@/components/questions/Q5";
import Q6 from "@/components/questions/Q6";
import Q7 from "@/components/questions/Q7";
import Q8 from "@/components/questions/Q8";
import Q9 from "@/components/questions/Q9";
import Q10 from "@/components/questions/Q10";
import Q11 from "@/components/questions/Q11";
import Q12 from "@/components/questions/Q12";
import Q14 from "@/components/questions/Q14";
import Q16 from "@/components/questions/Q16";

const navItems = [
  { id: "tracker", label: "🔁 Repetition Tracker" },
  { id: "q1", label: "Q1/Q17b" },
  { id: "q2", label: "Q2" },
  { id: "q3", label: "Q3/Q18c" },
  { id: "q4", label: "Q4" },
  { id: "q5", label: "Q5" },
  { id: "q6", label: "Q6/Q15" },
  { id: "q7", label: "Q7" },
  { id: "q8", label: "Q8" },
  { id: "q9", label: "Q9" },
  { id: "q10", label: "Q10/Q13" },
  { id: "q11", label: "Q11" },
  { id: "q12", label: "Q12" },
  { id: "q14", label: "Q14" },
  { id: "q16", label: "Q16a" },
  { id: "summary", label: "📊 Summary" },
];

const Index = () => {
  const [expandAll, setExpandAll] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(215 80% 48%), hsl(260 60% 55%))" }}>
        <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-sans font-medium mb-4">
            📘 Complete Exam Preparation Guide
          </div>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-primary-foreground leading-tight mb-3">
            Fiber Optic Communication
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 font-serif max-w-2xl mx-auto mb-2">
            Optical Sources: LED & LASER
          </p>
          <p className="text-sm text-primary-foreground/60 font-sans">
            Previous Year Questions · Step-by-Step Solutions · Memory Tricks
          </p>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </header>

      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-2 flex gap-1 overflow-x-auto scrollbar-none">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="nav-link whitespace-nowrap font-sans"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="ml-auto nav-link whitespace-nowrap font-sans font-bold text-primary"
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Exam Alert */}
        <div className="exam-alert mb-8">
          ⭐ Questions appearing 2+ times are almost certain to appear in your exam. Memorize them perfectly.
        </div>

        {/* Repetition Tracker */}
        <section id="tracker" className="mb-10">
          <h2 className="font-sans text-2xl font-bold mb-4 flex items-center gap-2">
            <span>🔁</span> Repetition Tracker <span className="text-sm font-normal text-muted-foreground">(High Priority = High Probability)</span>
          </h2>
          <StudyTable
            headers={["Question", "Content", "Repeated", "Times"]}
            rows={[
              ["Q1 = Q17b", "Direct vs Indirect Bandgap + Optical Source Requirements", "✅ YES", "2 TIMES"],
              ["Q3 = Q18c", "Emission Wavelength Calculation (Eg = 3eV)", "✅ YES", "2 TIMES"],
              ["Q6 = Q15", "InGaAsP LED Numerical (τr=30ns, τnr=100ns, I=40mA)", "✅ YES", "2 TIMES"],
              ["Q10 ≈ Q13", "Absorption + Spontaneous + Stimulated Emission", "✅ SIMILAR", "2 TIMES"],
              ["Q4 ≈ Q10(ii,iii)", "Stimulated vs Spontaneous Emission", "✅ SIMILAR", "2 TIMES"],
            ]}
          />
        </section>

        {/* Questions */}
        <section className="space-y-2">
          <QuestionCardWrapper id="q1" title="Q1 / Q17b — Distinguish Direct & Indirect Bandgap + Requirements of Good Optical Sources" marks={6} repeated={2} expandAll={expandAll}>
            <Q1 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q2" title="Q2 — Spectral Width, Modulation Bandwidth, I-P Characteristics of LED" marks={6} expandAll={expandAll}>
            <Q2 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q3" title="Q3 / Q18c — Calculate Emission Wavelength for Eg = 3 eV" marks={3} repeated={2} expandAll={expandAll}>
            <Q3 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q4" title="Q4 — Differentiate Stimulated Emission and Spontaneous Emission" marks={5} repeated={2} expandAll={expandAll}>
            <Q4 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q5" title="Q5 — External Quantum Efficiency & Internal Quantum Efficiency of LED" marks={4} expandAll={expandAll}>
            <Q5 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q6" title="Q6 / Q15 — InGaAsP LED Numerical" marks={6} repeated={2} expandAll={expandAll}>
            <Q6 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q7" title="Q7 — LED Numerical: τr = 60 ns, τnr = 100 ns, λ = 0.87 μm, I = 40 mA" marks={6} expandAll={expandAll}>
            <Q7 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q8" title="Q8 — Mechanism of Light Emission from LED + Useful Properties" marks={5} expandAll={expandAll}>
            <Q8 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q9" title="Q9 — Semiconductor Materials for Optical Sources" marks={4} expandAll={expandAll}>
            <Q9 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q10" title="Q10 / Q13 — Absorption, Spontaneous Emission, Stimulated Emission" marks={5} repeated={2} expandAll={expandAll}>
            <Q10 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q11" title="Q11 — Compare LED vs LASER" marks={5} expandAll={expandAll}>
            <Q11 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q12" title="Q12 — GaAs Laser Numerical: λ=900nm, L=300μm, n=4.3" marks={5} expandAll={expandAll}>
            <Q12 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q14" title="Q14 — Working, Characteristics, Advantages & Disadvantages of LED" marks={4} expandAll={expandAll}>
            <Q14 />
          </QuestionCardWrapper>

          <QuestionCardWrapper id="q16" title="Q16a — External Quantum Efficiency & External Power in LED" marks={6} expandAll={expandAll}>
            <Q16 />
          </QuestionCardWrapper>
        </section>

        {/* Master Summary Table */}
        <section id="summary" className="mt-12 mb-8">
          <h2 className="font-sans text-2xl font-bold mb-4 flex items-center gap-2">
            <span>📊</span> Master Summary Table — Quick Revision Before Exam
          </h2>
          <div className="overflow-x-auto">
            <table className="study-table">
              <thead>
                <tr>
                  <th>Formula</th>
                  <th>Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["\\lambda(\\mu m) = 1.24 / E_g(eV)", "Emission wavelength from bandgap"],
                  ["1/\\tau = 1/\\tau_r + 1/\\tau_{nr}", "Bulk recombination lifetime"],
                  ["\\eta_i = \\tau_{nr}/(\\tau_r + \\tau_{nr}) = \\tau/\\tau_r", "Internal quantum efficiency"],
                  ["P_{int} = \\eta_i \\times E_g(eV) \\times I(A)", "Internal optical power [W]"],
                  ["\\eta_{ext} = \\eta_i / (4n^2)", "External quantum efficiency (planar LED)"],
                  ["\\Delta f = c / (2nL)", "Laser mode frequency spacing"],
                  ["\\Delta\\lambda = \\lambda^2 / (2nL)", "Laser mode wavelength spacing"],
                  ["m = 2nL / \\lambda", "Number of longitudinal modes"],
                  ["f_{3dB} = \\sqrt{3} / (2\\pi\\tau)", "LED modulation bandwidth"],
                ].map(([formula, use], i) => (
                  <tr key={i}>
                    <td><Math tex={formula} /></td>
                    <td>{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="exam-alert mt-6">
            ⭐ TOP 3 MOST IMPORTANT TOPICS (Appeared 2+ Times)
          </div>
          <ol className="list-decimal ml-5 space-y-2 mt-4 font-sans font-semibold">
            <li>Direct vs Indirect Bandgap + Source Requirements — Study this first!</li>
            <li>LED Numerical (bulk lifetime + η<sub>i</sub> + P<sub>int</sub>) — Practice both Q6 and Q7 numericals.</li>
            <li>Emission Wavelength Calculation — 1 line formula, 3 marks free!</li>
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground font-sans">
        Fiber Optic Communication — Exam Preparation Guide · Optical Sources: LED & LASER
      </footer>
    </div>
  );
};

/* Wrapper to support expandAll */
const QuestionCardWrapper = ({
  id,
  title,
  marks,
  repeated,
  expandAll,
  children,
}: {
  id: string;
  title: string;
  marks: number;
  repeated?: number;
  expandAll: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div id={id}>
      <QuestionCardControlled title={title} marks={marks} repeated={repeated} expandAll={expandAll}>
        {children}
      </QuestionCardControlled>
    </div>
  );
};

import { useEffect } from "react";

const QuestionCardControlled = ({
  title,
  marks,
  repeated,
  expandAll,
  children,
}: {
  title: string;
  marks: number;
  repeated?: number;
  expandAll: boolean;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(expandAll);
  }, [expandAll]);

  return (
    <div className="question-card animate-fade-in">
      <div className="flex items-start justify-between cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-sans font-bold text-lg text-foreground">{title}</h3>
            {repeated && repeated >= 2 && (
              <span className="repeated-badge">🔁 REPEATED {repeated}×</span>
            )}
          </div>
          <span className="text-xs font-sans font-semibold text-muted-foreground">[{marks} Marks]</span>
        </div>
        <button className="ml-4 mt-1 font-sans text-sm font-bold text-primary hover:underline shrink-0">
          {open ? "▲ Collapse" : "▼ Expand"}
        </button>
      </div>
      {open && <div className="mt-4 border-t border-border pt-4">{children}</div>}
    </div>
  );
};

export default Index;
