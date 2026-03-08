import StepBox from "@/components/StepBox";
import StudyTable from "@/components/StudyTable";

const Q11 = () => (
  <>
    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [5 Marks]" icon="✏️">
      <StudyTable
        headers={["Parameter", "LED", "LASER"]}
        rows={[
          ["Output Power", "Low — typically 1–10 mW", "High — typically 10–100 mW"],
          ["Spectral Width", "Wide: 30–60 nm (incoherent)", "Narrow: 0.1–5 nm (coherent)"],
          ["Coupled Power into Fiber", "Low — large emission area, Lambertian pattern", "High — small emitting area, directional beam"],
          ["E/O Efficiency", "Low — 1–5%", "Higher — 10–40%"],
          ["Speed (Modulation BW)", "Slow — up to ~250 MHz", "Fast — GHz range (1–10 GHz)"],
          ["Coherence", "Incoherent", "Coherent"],
          ["Threshold Current", "No threshold needed", "Requires threshold current"],
          ["Cost", "Low", "High"],
          ["Linearity", "Better (linear I-P)", "Non-linear around threshold"],
          ["Applications", "Short-haul, low bit-rate", "Long-haul, high bit-rate"],
        ]}
      />
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"LED = Cheap, Slow, Wide, Low Power; LASER = Expensive, Fast, Narrow, High Power"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students confuse "spectral width" direction — <strong>narrow spectral width = better for fiber</strong> (less dispersion). LASER's narrow spectrum is an ADVANTAGE, not a disadvantage.</p>
    </StepBox>
  </>
);

export default Q11;
