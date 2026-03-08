import StepBox from "@/components/StepBox";

const Q8 = () => (
  <>
    <StepBox type="cloud" title="STEP 1 — FUNDAMENTAL CLOUD" icon="☁️">
      <p>An LED is like a one-way bridge for electrons. When you apply forward bias (push electrons across the bridge), electrons and holes meet in the middle (active region) and release energy as light when they combine. This is called <strong>electroluminescence</strong>.</p>
    </StepBox>

    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [5 Marks]" icon="✏️">
      <h5 className="font-sans font-bold mt-2 mb-2">Mechanism of Light Emission from LED:</h5>
      <p className="mb-2"><strong>Principle:</strong> LED operates on the principle of <strong>electroluminescence</strong> — emission of light due to electrical excitation of a p-n junction.</p>
      
      <p className="font-bold mt-3">Working Steps:</p>
      <ol className="list-decimal ml-5 space-y-2 mt-1">
        <li><strong>Forward Bias Applied:</strong> When a forward voltage is applied across the p-n junction, the potential barrier is reduced.</li>
        <li><strong>Carrier Injection:</strong> Electrons from the n-region are injected into the p-region, and holes from the p-region are injected into the n-region.</li>
        <li><strong>Radiative Recombination:</strong> In the active (depletion) region, the injected minority carriers recombine with majority carriers. In direct bandgap materials, this recombination is radiative — a photon is emitted.</li>
        <li><strong>Photon Energy:</strong> The emitted photon has energy equal to the bandgap energy: hν ≈ E<sub>g</sub></li>
        <li><strong>Light Output:</strong> Photons generated inside the active region escape through the surface of the device.</li>
      </ol>

      <p className="mt-3 text-muted-foreground italic text-xs">[Diagram Description]: Draw a p-n junction under forward bias. Show: p-region (left) with holes (+), n-region (right) with electrons (−), depletion region in center labeled "active region." Draw arrows showing electron-hole recombination in center. Show wavy arrows going upward from active region = photons emitted. Label forward bias voltage V.</p>

      <h5 className="font-sans font-bold mt-4 mb-2">Useful Properties of LED for Optical Fiber Communication:</h5>
      <ol className="list-decimal ml-5 space-y-1">
        <li><strong>Small Size</strong> — Compatible with fiber core dimensions for efficient coupling.</li>
        <li><strong>Long Lifetime</strong> — Reliable operation exceeding 10⁵ hours.</li>
        <li><strong>Low Power Consumption</strong> — Operates at low drive currents (10–100 mA).</li>
        <li><strong>Direct Modulation</strong> — Output power can be directly modulated by varying drive current.</li>
        <li><strong>Linear I-P Characteristics</strong> — Suitable for analog signal transmission.</li>
        <li><strong>Wide Operating Temperature Range</strong> — Relatively stable output over temperature.</li>
        <li><strong>Low Cost</strong> — Simple fabrication and no threshold current needed (unlike LASER).</li>
      </ol>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"Forward bias → Electrons meet Holes → Direct bandgap → Photon born = LED!"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students forget to mention <strong>"direct bandgap"</strong> as a requirement for efficient LED operation. LEDs made of indirect bandgap materials (Si, Ge) do NOT emit light efficiently.</p>
    </StepBox>
  </>
);

export default Q8;
