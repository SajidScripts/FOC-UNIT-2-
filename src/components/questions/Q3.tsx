import Math from "@/components/Math";
import StepBox from "@/components/StepBox";

const Q3 = () => (
  <>
    <StepBox type="cloud" title="STEP 1 — FUNDAMENTAL CLOUD" icon="☁️">
      <p className="mb-2">Energy and wavelength of light are inversely related. Higher bandgap energy → shorter wavelength (UV/blue light). Lower bandgap energy → longer wavelength (red/infrared).</p>
      <p>The bridge formula is:</p>
      <div className="formula-box">
        <Math tex="E = \frac{hc}{\lambda} \quad \Rightarrow \quad \lambda = \frac{hc}{E}" display />
      </div>
      <p>A shortcut for semiconductors: <Math tex="\lambda(\mu m) = \frac{1.24}{E_g(eV)}" /></p>
    </StepBox>

    <StepBox type="concept" title="STEP 2 — KEY CONCEPTS TO REMEMBER" icon="🔑">
      <div className="formula-box">
        <Math tex="\lambda(\mu m) = \frac{1.24}{E_g(eV)}" display />
      </div>
      <ul className="list-disc ml-5 space-y-1">
        <li>h = 6.626 × 10⁻³⁴ J·s</li>
        <li>c = 3 × 10⁸ m/s</li>
        <li>1 eV = 1.6 × 10⁻¹⁹ J</li>
      </ul>
    </StepBox>

    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [3 Marks]" icon="✏️">
      <p><strong>Given:</strong> Energy bandgap, E<sub>g</sub> = 3 eV</p>
      <p className="mt-2"><strong>Formula:</strong></p>
      <div className="formula-box">
        <Math tex="\lambda = \frac{1.24}{E_g} \, \mu m" display />
      </div>
      <p><strong>Calculation:</strong></p>
      <div className="formula-box">
        <Math tex="\lambda = \frac{1.24}{3} = 0.4133 \, \mu m" display />
        <Math tex="\boxed{\lambda = 413.3 \, nm \approx 414 \, nm}" display />
      </div>
      <p className="mt-2"><strong>Interpretation:</strong> This wavelength lies in the <strong>violet/near-UV region</strong> of the visible spectrum, which corresponds to materials like <strong>GaN (Gallium Nitride)</strong>.</p>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"1.24 divided by Energy in eV = Wavelength in micrometers — always!"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students forget to convert the final answer from <strong>micrometers (μm) to nanometers (nm)</strong>. Multiply by 1000: 0.4133 μm × 1000 = 413.3 nm.</p>
    </StepBox>
  </>
);

export default Q3;
