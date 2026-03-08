import Math from "@/components/Math";
import StepBox from "@/components/StepBox";

const Q6 = () => (
  <>
    <StepBox type="cloud" title="STEP 1 — FUNDAMENTAL CLOUD" icon="☁️">
      <p className="mb-2">This is a 3-part numerical:</p>
      <ul className="list-disc ml-5 space-y-1">
        <li><strong>Bulk lifetime</strong> = combined effect of both radiative and non-radiative recombinations (like two pipes draining a tank together — total drain rate = sum of both).</li>
        <li><strong>Internal quantum efficiency</strong> = fraction of recombinations that produce light.</li>
        <li><strong>Internal power</strong> = how much optical power is generated inside the LED.</li>
      </ul>
    </StepBox>

    <StepBox type="concept" title="STEP 2 — KEY CONCEPTS TO REMEMBER" icon="🔑">
      <div className="formula-box">
        <Math tex="\frac{1}{\tau} = \frac{1}{\tau_r} + \frac{1}{\tau_{nr}}" display />
      </div>
      <div className="formula-box">
        <Math tex="\eta_i = \frac{\tau_{nr}}{\tau_r + \tau_{nr}} = \frac{\tau}{\tau_r}" display />
      </div>
      <div className="formula-box">
        <Math tex="P_{int} = \eta_i \cdot \frac{hc}{e\lambda} \cdot I = \eta_i \cdot E_g(eV) \cdot I(A) \quad \text{[in Watts]}" display />
      </div>
    </StepBox>

    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [6 Marks]" icon="✏️">
      <p className="mb-2"><strong>Given:</strong></p>
      <ul className="list-disc ml-5 space-y-1 mb-3">
        <li>Peak wavelength: λ = 1310 nm = 1310 × 10⁻⁹ m</li>
        <li>Radiative recombination time: τ<sub>r</sub> = 30 ns</li>
        <li>Non-radiative recombination time: τ<sub>nr</sub> = 100 ns</li>
        <li>Drive current: I = 40 mA = 0.04 A</li>
      </ul>

      <h5 className="font-sans font-bold mt-3 mb-2">(i) Bulk Recombination Lifetime (τ):</h5>
      <div className="formula-box">
        <Math tex="\frac{1}{\tau} = \frac{1}{\tau_r} + \frac{1}{\tau_{nr}} = \frac{1}{30} + \frac{1}{100}" display />
        <Math tex="\frac{1}{\tau} = \frac{100 + 30}{3000} = \frac{130}{3000}" display />
        <Math tex="\boxed{\tau = \frac{3000}{130} \approx 23.08 \text{ ns}}" display />
      </div>

      <h5 className="font-sans font-bold mt-3 mb-2">(ii) Internal Quantum Efficiency (η<sub>i</sub>):</h5>
      <div className="formula-box">
        <Math tex="\eta_i = \frac{\tau_{nr}}{\tau_r + \tau_{nr}} = \frac{100}{30 + 100} = \frac{100}{130}" display />
        <Math tex="\boxed{\eta_i = 0.769 = 76.9\%}" display />
      </div>
      <p className="text-xs text-muted-foreground">(Verification: η<sub>i</sub> = τ/τ<sub>r</sub> = 23.08/30 = 0.769 ✓)</p>

      <h5 className="font-sans font-bold mt-3 mb-2">(iii) Internal Power Level (P<sub>int</sub>):</h5>
      <p>First, find photon energy:</p>
      <div className="formula-box">
        <Math tex="E_g = \frac{1.24}{\lambda(\mu m)} = \frac{1.24}{1.310} = 0.9466 \text{ eV}" display />
        <Math tex="P_{int} = \eta_i \times E_g \times I = 0.769 \times 0.9466 \times 0.04" display />
        <Math tex="\boxed{P_{int} = 0.0291 \text{ W} \approx 29.1 \text{ mW}}" display />
      </div>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"1/τ = 1/τr + 1/τnr → η = τnr/(τr+τnr) → P = η × Eg × I"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students use τ<sub>r</sub> in the denominator instead of (τ<sub>r</sub> + τ<sub>nr</sub>) for η<sub>i</sub>. Remember: η<sub>i</sub> = τ<sub>nr</sub>/(τ<sub>r</sub> + τ<sub>nr</sub>), NOT τ<sub>nr</sub>/τ<sub>r</sub>. Also, don't forget to convert λ to μm before using the 1.24 formula.</p>
    </StepBox>
  </>
);

export default Q6;
