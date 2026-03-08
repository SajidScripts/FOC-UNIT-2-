import StepBox from "@/components/StepBox";

const Q10 = () => (
  <>
    <StepBox type="cloud" title="STEP 1 — FUNDAMENTAL CLOUD" icon="☁️">
      <p className="mb-2">Three fundamental light-matter interactions occur in semiconductors:</p>
      <ul className="list-disc ml-5 space-y-1">
        <li><strong>Absorption</strong> = Light goes IN, electron jumps UP (input).</li>
        <li><strong>Spontaneous Emission</strong> = Electron falls DOWN randomly, light comes OUT (random).</li>
        <li><strong>Stimulated Emission</strong> = One photon IN triggers electron DOWN, TWO photons OUT (amplification).</li>
      </ul>
      <p className="mt-2">Think: Absorb → Spontaneous → Stimulated = Learning → Speaking randomly → Teaching (multiplying knowledge).</p>
    </StepBox>

    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [5 Marks]" icon="✏️">
      <h5 className="font-sans font-bold mt-2 mb-2">i) Absorption:</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>When a photon of energy hν ≥ E<sub>g</sub> is incident on a semiconductor, it is absorbed.</li>
        <li>The photon energy excites an electron from the valence band (VB) to the conduction band (CB), creating an <strong>electron-hole pair</strong>.</li>
        <li>Condition: hν ≥ E<sub>g</sub></li>
        <li>This is the reverse process of emission and is responsible for attenuation of light in materials.</li>
        <li>In photodetectors, absorption is the desired mechanism.</li>
      </ul>

      <h5 className="font-sans font-bold mt-4 mb-2">ii) Spontaneous Emission:</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>An excited electron in the CB spontaneously recombines with a hole in the VB, emitting a photon of energy hν = E<sub>g</sub>.</li>
        <li>This process is <strong>random</strong> — the emitted photon has random phase, direction, and polarization.</li>
        <li>Output is <strong>incoherent and non-directional</strong>.</li>
        <li>Rate: R<sub>sp</sub> ∝ n·p (carrier concentrations)</li>
        <li>Used in <strong>LED operation</strong>.</li>
        <li>Results in broad spectral emission.</li>
      </ul>

      <h5 className="font-sans font-bold mt-4 mb-2">iii) Stimulated Emission:</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>An incident photon of energy hν = E<sub>g</sub> interacts with an excited electron and <strong>stimulates it to recombine</strong> with a hole.</li>
        <li>This produces a second photon that is <strong>identical</strong> to the incident photon in terms of: frequency, phase, direction, and polarization.</li>
        <li>Output is <strong>coherent and directional</strong>.</li>
        <li>Requires <strong>population inversion</strong> — more electrons in CB than VB.</li>
        <li>Used in <strong>LASER operation</strong>.</li>
        <li>The stimulated photon can trigger further stimulated emissions → <strong>optical amplification (gain)</strong>.</li>
      </ul>

      <p className="mt-3 text-muted-foreground italic text-xs">[Diagram Description]: Three vertical energy-level diagrams: Absorption: Arrow from VB→CB (upward), photon hν going in. Spontaneous Emission: Arrow from CB→VB (downward), one photon emitting randomly (wavy arrow outward). Stimulated Emission: One photon IN (→), one photon OUT (+) the new one = two identical photons coming out in same direction.</p>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"Absorb UP ↑ | Spontaneous DOWN ↓ random | Stimulated = 1 IN → 2 OUT (clone)"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>In stimulated emission, students forget that the two output photons are <strong>IDENTICAL</strong> (same phase, direction, frequency) — this is what makes laser light coherent. Also, always mention <strong>population inversion</strong> as the necessary condition for stimulated emission to dominate.</p>
    </StepBox>
  </>
);

export default Q10;
