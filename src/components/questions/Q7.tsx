import Math from "@/components/Math";
import StepBox from "@/components/StepBox";

const Q7 = () => (
  <>
    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [6 Marks]" icon="✏️">
      <p className="mb-2"><strong>Given:</strong></p>
      <ul className="list-disc ml-5 space-y-1 mb-3">
        <li>Radiative recombination lifetime: τ<sub>r</sub> = 60 ns</li>
        <li>Non-radiative recombination lifetime: τ<sub>nr</sub> = 100 ns</li>
        <li>Peak emission wavelength: λ = 0.87 μm</li>
        <li>Drive current: I = 40 mA = 0.04 A</li>
      </ul>

      <h5 className="font-sans font-bold mt-3 mb-2">(i) Total Carrier Recombination Lifetime (τ):</h5>
      <div className="formula-box">
        <Math tex="\frac{1}{\tau} = \frac{1}{\tau_r} + \frac{1}{\tau_{nr}} = \frac{1}{60} + \frac{1}{100}" display />
        <Math tex="\frac{1}{\tau} = \frac{100 + 60}{6000} = \frac{160}{6000}" display />
        <Math tex="\boxed{\tau = \frac{6000}{160} = 37.5 \text{ ns}}" display />
      </div>

      <h5 className="font-sans font-bold mt-3 mb-2">(ii) Internal Quantum Efficiency (η<sub>i</sub>):</h5>
      <div className="formula-box">
        <Math tex="\eta_i = \frac{\tau_{nr}}{\tau_r + \tau_{nr}} = \frac{100}{60 + 100} = \frac{100}{160}" display />
        <Math tex="\boxed{\eta_i = 0.625 = 62.5\%}" display />
      </div>

      <h5 className="font-sans font-bold mt-3 mb-2">(iii) Internal Power Generated (P<sub>int</sub>):</h5>
      <p>Photon energy:</p>
      <div className="formula-box">
        <Math tex="E_g = \frac{1.24}{0.87} = 1.4253 \text{ eV}" display />
        <Math tex="P_{int} = \eta_i \times E_g \times I = 0.625 \times 1.4253 \times 0.04" display />
        <Math tex="\boxed{P_{int} = 0.03563 \text{ W} \approx 35.6 \text{ mW}}" display />
      </div>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">Same formula as Q6 — just different numbers. Practice once, get both right!</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>λ = 0.87 μm is already in micrometers — <strong>don't convert it to nm</strong> before using the 1.24 formula. Use λ in μm directly.</p>
    </StepBox>
  </>
);

export default Q7;
