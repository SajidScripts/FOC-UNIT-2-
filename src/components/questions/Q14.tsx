import StepBox from "@/components/StepBox";

const Q14 = () => (
  <>
    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [4 Marks]" icon="✏️">
      <h5 className="font-sans font-bold mt-2 mb-2">Working of LED:</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>LED is a <strong>forward-biased p-n junction</strong> device that converts electrical energy into light.</li>
        <li>Under forward bias, minority carrier injection occurs — electrons injected into p-side, holes into n-side.</li>
        <li>In the active region, <strong>radiative recombination</strong> releases photons with energy hν ≈ E<sub>g</sub>.</li>
        <li>Direct bandgap materials ensure efficient photon emission (<strong>electroluminescence</strong>).</li>
      </ul>

      <h5 className="font-sans font-bold mt-4 mb-2">Characteristics:</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li><strong>I-V Characteristic:</strong> Follows the diode equation — low forward voltage drop (~1.5–2.5V). Knee voltage depends on material.</li>
        <li><strong>I-P Characteristic:</strong> Approximately linear — optical power increases proportionally with current. Slight saturation at high currents due to heating.</li>
      </ul>
      <p className="mt-2 text-muted-foreground italic text-xs">[Diagram Description]: Draw I-P graph — straight line from origin, gentle curve/flattening at high I. Also draw I-V: standard forward-biased diode curve with labeled knee voltage.</p>

      <h5 className="font-sans font-bold mt-4 mb-2">Advantages:</h5>
      <ol className="list-decimal ml-5 space-y-1">
        <li>Simple construction — no threshold current, easier to drive.</li>
        <li>Long lifetime ({">"}10⁵ hours) and high reliability.</li>
        <li>Low cost — economical for short-haul links.</li>
        <li>Linear I-P — good for analog modulation.</li>
        <li>Wide operating temperature range.</li>
      </ol>

      <h5 className="font-sans font-bold mt-4 mb-2">Disadvantages:</h5>
      <ol className="list-decimal ml-5 space-y-1">
        <li>Low output power (few mW) compared to LASER.</li>
        <li>Wide spectral width (30–60 nm) → high chromatic dispersion.</li>
        <li>Low modulation bandwidth (max ~250 MHz) → limited to low bit-rate systems.</li>
        <li>Low coupling efficiency into single-mode fibers.</li>
        <li>Incoherent output — not suitable for coherent detection schemes.</li>
      </ol>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"LED: Simple, Cheap, Slow, Wide — Good for short distances; LASER beats it for long haul."</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students write "LED has no disadvantages for fiber communication" — it DOES. The <strong>wide spectral width causing chromatic dispersion</strong> is a significant limitation for high-speed/long-distance links.</p>
    </StepBox>
  </>
);

export default Q14;
