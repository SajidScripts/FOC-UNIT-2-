import StepBox from "@/components/StepBox";
import StudyTable from "@/components/StudyTable";

const Q9 = () => (
  <>
    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [4 Marks]" icon="✏️">
      <p className="mb-2">The choice of semiconductor material determines the emission wavelength of the optical source:</p>
      <StudyTable
        headers={["Material", "Wavelength Range", "Application"]}
        rows={[
          ["GaAs / AlGaAs", "800 – 900 nm", "First fiber window; short-haul multimode fiber"],
          ["InGaAsP / InP", "1100 – 1650 nm", "Second window (1310 nm) & third window (1550 nm); long-haul SM fiber"],
          ["GaN / InGaN", "400 – 520 nm", "Blue/green LEDs, visible light communication"],
          ["GaAlAs", "780 – 850 nm", "CD/DVD readers, short-haul fiber"],
          ["GaP", "550 – 700 nm", "Green/red LEDs (indirect bandgap — low efficiency)"],
        ]}
      />

      <p className="font-bold mt-3">Key Points:</p>
      <ul className="list-disc ml-5 space-y-1 mt-1">
        <li><strong>Direct bandgap materials</strong> (GaAs, InP, InGaAsP) are preferred for optical sources because they allow efficient radiative recombination.</li>
        <li><strong>InGaAsP lattice-matched to InP</strong> is the most widely used material system for telecom wavelengths (1310 nm and 1550 nm).</li>
        <li>The bandgap (and hence wavelength) can be tuned by varying the alloy composition.</li>
      </ul>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"GaAs = 850 nm (short), InGaAsP = 1310/1550 nm (long), GaN = blue"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students forget that wavelength can be engineered by changing alloy composition (e.g., varying In:Ga:As:P ratios in InGaAsP changes emission wavelength). This is called <strong>bandgap engineering</strong>.</p>
    </StepBox>
  </>
);

export default Q9;
