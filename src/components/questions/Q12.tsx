import Math from "@/components/Math";
import StepBox from "@/components/StepBox";

const Q12 = () => (
  <>
    <StepBox type="cloud" title="STEP 1 — FUNDAMENTAL CLOUD" icon="☁️">
      <p>A laser cavity is like a music hall with two mirrors at both ends. Sound (light) bounces back and forth, and only certain frequencies (modes) "fit" perfectly (standing waves). The spacing between these allowed frequencies is the <strong>mode spacing</strong>.</p>
    </StepBox>

    <StepBox type="concept" title="STEP 2 — KEY CONCEPTS TO REMEMBER" icon="🔑">
      <div className="formula-box">
        <Math tex="\Delta f = \frac{c}{2nL} \quad \text{(Frequency spacing)}" display />
      </div>
      <div className="formula-box">
        <Math tex="\Delta\lambda = \frac{\lambda^2}{2nL} \quad \text{(Wavelength spacing)}" display />
      </div>
      <div className="formula-box">
        <Math tex="m = \frac{2nL}{\lambda} \quad \text{(Total number of longitudinal modes)}" display />
      </div>
    </StepBox>

    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [5 Marks]" icon="✏️">
      <p className="mb-2"><strong>Given:</strong></p>
      <ul className="list-disc ml-5 space-y-1 mb-3">
        <li>Operating wavelength: λ = 900 nm = 900 × 10⁻⁹ m</li>
        <li>Cavity length: L = 300 μm = 300 × 10⁻⁶ m</li>
        <li>Refractive index: n = 4.3</li>
      </ul>

      <h5 className="font-sans font-bold mt-3 mb-2">(i) Frequency Spacing (Δf):</h5>
      <div className="formula-box">
        <Math tex="\Delta f = \frac{c}{2nL} = \frac{3 \times 10^8}{2 \times 4.3 \times 300 \times 10^{-6}}" display />
        <Math tex="\Delta f = \frac{3 \times 10^8}{2.58 \times 10^{-3}}" display />
        <Math tex="\boxed{\Delta f = 1.163 \times 10^{11} \text{ Hz} = 116.3 \text{ GHz}}" display />
      </div>

      <h5 className="font-sans font-bold mt-3 mb-2">(ii) Wavelength Spacing (Δλ):</h5>
      <div className="formula-box">
        <Math tex="\Delta\lambda = \frac{\lambda^2}{2nL} = \frac{(900 \times 10^{-9})^2}{2 \times 4.3 \times 300 \times 10^{-6}}" display />
        <Math tex="\Delta\lambda = \frac{8.1 \times 10^{-13}}{2.58 \times 10^{-3}}" display />
        <Math tex="\boxed{\Delta\lambda = 3.14 \times 10^{-10} \text{ m} = 0.314 \text{ nm}}" display />
      </div>

      <h5 className="font-sans font-bold mt-3 mb-2">(iii) Number of Longitudinal Modes (m):</h5>
      <div className="formula-box">
        <Math tex="m = \frac{2nL}{\lambda} = \frac{2 \times 4.3 \times 300 \times 10^{-6}}{900 \times 10^{-9}}" display />
        <Math tex="m = \frac{2.58 \times 10^{-3}}{9 \times 10^{-7}}" display />
        <Math tex="\boxed{m = 2867 \text{ modes}}" display />
      </div>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"Δf = c/2nL | Δλ = λ²/2nL | m = 2nL/λ — same denominator 2nL for all three!"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students forget to convert L from μm to meters and λ from nm to meters before substituting. <strong>Always use SI units</strong> throughout the calculation.</p>
    </StepBox>
  </>
);

export default Q12;
