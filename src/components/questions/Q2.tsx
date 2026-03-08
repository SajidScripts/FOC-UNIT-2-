import Math from "@/components/Math";
import StepBox from "@/components/StepBox";

const Q2 = () => (
  <>
    <StepBox type="cloud" title="STEP 1 — FUNDAMENTAL CLOUD" icon="☁️">
      <p className="mb-2">Think of an LED like a radio station:</p>
      <ul className="list-disc ml-5 space-y-1">
        <li><strong>Spectral Width</strong> = how wide a frequency range the station broadcasts on (narrow is better for fiber).</li>
        <li><strong>Modulation Bandwidth</strong> = how fast you can change the signal (music) on/off.</li>
        <li><strong>I-P Characteristics</strong> = how the brightness (power) changes as you increase the volume knob (current).</li>
      </ul>
    </StepBox>

    <StepBox type="concept" title="STEP 2 — KEY CONCEPTS TO REMEMBER" icon="🔑">
      <ul className="list-disc ml-5 space-y-1">
        <li>Spectral Width (Δλ) = FWHM of the emission spectrum; LED typically 30–60 nm</li>
        <li>Modulation Bandwidth formula:</li>
      </ul>
      <div className="formula-box">
        <Math tex="f_{3dB} = \frac{\sqrt{3}}{2\pi\tau}" display />
        <p className="text-xs mt-1 text-muted-foreground">where τ = minority carrier lifetime</p>
      </div>
      <p>I-P curve: Linear above threshold current; slope = responsivity</p>
    </StepBox>

    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [6 Marks]" icon="✏️">
      <h5 className="font-sans font-bold mt-2 mb-2">i) Spectral Width</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>The spectral width of an LED is the range of wavelengths present in its emitted light, measured at the half-power points (<strong>FWHM — Full Width at Half Maximum</strong>).</li>
        <li>LEDs have a broad spectral width of approximately <strong>30–60 nm</strong> (surface emitting) and <strong>25–40 nm</strong> (edge emitting).</li>
        <li>Broader spectral width → more chromatic dispersion in fiber → limits bandwidth-distance product.</li>
        <li>Spectral width is inversely related to coherence length — broader spectrum = less coherent light.</li>
      </ul>
      <p className="mt-2 text-muted-foreground italic text-xs">[Diagram Description]: Draw a bell-shaped curve of optical power vs wavelength. Mark the peak power P₀. Draw a horizontal line at P₀/2. The width between the two intersection points is Δλ (FWHM).</p>

      <h5 className="font-sans font-bold mt-4 mb-2">ii) Modulation Bandwidth</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>Modulation bandwidth defines the maximum frequency at which the LED output can be modulated (switched on/off).</li>
        <li>It is limited by the <strong>minority carrier lifetime (τ)</strong> in the active region.</li>
        <li>The 3-dB electrical modulation bandwidth is:</li>
      </ul>
      <div className="formula-box">
        <Math tex="f_{3dB} = \frac{\sqrt{3}}{2\pi\tau}" display />
      </div>
      <ul className="list-disc ml-5 space-y-1">
        <li>Shorter carrier lifetime → Higher bandwidth → Higher data rate.</li>
        <li>Typical LED modulation bandwidth: <strong>Up to 250 MHz</strong> (limited compared to LASERs).</li>
      </ul>

      <h5 className="font-sans font-bold mt-4 mb-2">iii) I-P Characteristics (Current–Power Characteristics)</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>The I-P characteristic shows the relationship between drive current (I) on the x-axis and optical output power (P) on the y-axis.</li>
        <li>For LEDs, the I-P curve is <strong>fairly linear</strong> over a wide range of currents — this makes LEDs suitable for analog modulation.</li>
        <li>Below a minimum threshold current, output power is negligible.</li>
        <li>At very high currents, the curve saturates due to junction heating and increased non-radiative recombination.</li>
        <li>The slope of the I-P curve represents the LED conversion efficiency (mW/mA).</li>
      </ul>
      <p className="mt-2 text-muted-foreground italic text-xs">[Diagram Description]: Draw a graph with I on x-axis and P on y-axis. Show a straight line rising from origin (linear region), then a slight curve/flattening at high current (saturation region). Compare with LASER — LASER has a sharp threshold kink; LED doesn't.</p>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"Spectral = How wide? | Bandwidth = How fast? | I-P = How bright per ampere?"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students confuse <strong>3-dB optical bandwidth</strong> and <strong>3-dB electrical bandwidth</strong> — the formula above is for electrical bandwidth. Also, students forget that I-P for LED is <strong>linear (no threshold)</strong>, unlike LASER.</p>
    </StepBox>
  </>
);

export default Q2;
