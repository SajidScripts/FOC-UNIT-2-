import StepBox from "@/components/StepBox";
import StudyTable from "@/components/StudyTable";

const Q4 = () => (
  <>
    <StepBox type="cloud" title="STEP 1 — FUNDAMENTAL CLOUD" icon="☁️">
      <p className="mb-2">Imagine two scenarios when an excited electron wants to fall back down:</p>
      <p className="mb-2"><strong>Spontaneous Emission</strong> = The electron falls down on its OWN, randomly, like a ball rolling off a table by itself — emits light in any random direction. This is what <strong>LEDs</strong> use.</p>
      <p><strong>Stimulated Emission</strong> = An incoming photon NUDGES the excited electron down — and two identical photons come out (the original + the new one). Like one domino knocking down another. This is what <strong>LASERs</strong> use.</p>
    </StepBox>

    <StepBox type="concept" title="STEP 2 — KEY CONCEPTS TO REMEMBER" icon="🔑">
      <StudyTable
        headers={["Property", "Spontaneous Emission", "Stimulated Emission"]}
        rows={[
          ["Trigger", "Random, no external photon needed", "Requires incident photon of energy hν = Eg"],
          ["Output photons", "Incoherent, random phase/direction", "Coherent — same phase, frequency, direction"],
          ["Used in", "LED", "LASER"],
          ["Rate depends on", "Electron population in CB", "Both population AND incident photon density"],
          ["Light quality", "Broad spectrum, divergent", "Narrow spectrum, directional"],
        ]}
      />
    </StepBox>

    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [5 Marks]" icon="✏️">
      <h5 className="font-sans font-bold mt-2 mb-2">Spontaneous Emission:</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>Occurs when an excited electron in the conduction band <strong>spontaneously recombines</strong> with a hole in the valence band without any external triggering.</li>
        <li>The emitted photon has <strong>random phase, random direction, and random polarization</strong> → incoherent light.</li>
        <li>The rate of spontaneous emission depends only on the electron population in the conduction band.</li>
        <li>Energy of emitted photon: hν = E<sub>g</sub> (bandgap energy)</li>
        <li>This is the fundamental mechanism behind <strong>LED operation</strong>.</li>
        <li>Results in <strong>broad spectral width</strong> output.</li>
      </ul>

      <h5 className="font-sans font-bold mt-4 mb-2">Stimulated Emission:</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>Occurs when an incident photon of energy hν = E<sub>g</sub> interacts with an excited electron and <strong>stimulates it to recombine</strong> with a hole.</li>
        <li>This produces a second photon that is <strong>identical</strong> to the incident photon — same frequency, phase, direction, and polarization → <strong>coherent light</strong>.</li>
        <li>Rate of stimulated emission depends on both the <strong>population inversion AND the incident photon density</strong>.</li>
        <li><strong>Population inversion</strong> (more electrons in CB than VB) is the essential condition for stimulated emission to dominate.</li>
        <li>This is the fundamental mechanism behind <strong>LASER operation</strong>.</li>
        <li>Results in very <strong>narrow spectral width</strong> and highly directional output.</li>
      </ul>

      <p className="mt-3 text-muted-foreground italic text-xs">[Diagram Description]: Draw three energy level diagrams: Absorption — arrow pointing UP, photon absorbed. Spontaneous Emission — electron falls DOWN randomly, one photon out. Stimulated Emission — one photon IN → two identical photons OUT.</p>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"Spontaneous = Solo fall = Incoherent = LED; Stimulated = Triggered by photon = Coherent = LASER"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students often say stimulated emission requires "any photon" — it must be a photon with energy <strong>exactly equal to hν = E<sub>g</sub></strong> (the bandgap energy). Also, <strong>population inversion</strong> is a prerequisite — don't forget to mention it.</p>
    </StepBox>
  </>
);

export default Q4;
