import Math from "@/components/Math";
import StepBox from "@/components/StepBox";
import StudyTable from "@/components/StudyTable";

const Q1 = () => (
  <>
    <StepBox type="cloud" title="STEP 1 — FUNDAMENTAL CLOUD" icon="☁️">
      <p className="mb-2">Imagine a stadium (semiconductor) where electrons (players) sit in seats at two different levels — a lower level (Valence Band) and an upper level (Conduction Band).</p>
      <p className="mb-2"><strong>In a Direct Bandgap material:</strong> The lower and upper seats are directly above each other — so a player can jump straight up and come straight down, releasing energy (light) easily.</p>
      <p className="mb-2"><strong>In an Indirect Bandgap material:</strong> The lower and upper seats are offset — so the player must move sideways AND jump, needing help from a third party (called a <em>phonon = lattice vibration</em>). This extra step wastes energy as heat, not light.</p>
      <p>This is why <strong>Direct Bandgap = efficient light emitters; Indirect Bandgap = poor light emitters.</strong></p>
    </StepBox>

    <StepBox type="concept" title="STEP 2 — KEY CONCEPTS TO REMEMBER" icon="🔑">
      <StudyTable
        headers={["Feature", "Direct Bandgap", "Indirect Bandgap"]}
        rows={[
          ["Band alignment", "VB max & CB min at same k-value", "VB max & CB min at different k-values"],
          ["Recombination", "Radiative (photon emitted)", "Non-radiative (phonon involved)"],
          ["Light emission", "Efficient ✅", "Inefficient ❌"],
          ["Examples", "GaAs, InP, InGaAsP", "Si, Ge, GaP"],
          ["Used in", "LEDs, LASERs", "Transistors, ICs"],
        ]}
      />
      <div className="formula-box">
        <p className="text-xs text-muted-foreground mb-1">Photon energy at emission = Bandgap energy</p>
        <Math tex="E = h\nu = \frac{hc}{\lambda} \approx \frac{1.24}{\lambda(\mu m)} \text{ eV}" display />
      </div>
    </StepBox>

    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [6 Marks]" icon="✏️">
      <h5 className="font-sans font-bold mt-2 mb-2">Part A: Direct vs Indirect Bandgap Semiconductors</h5>
      
      <p className="font-bold mt-3">Direct Bandgap Semiconductor:</p>
      <ul className="list-disc ml-5 space-y-1 mt-1">
        <li>The maximum of the valence band (VB) and minimum of the conduction band (CB) occur at the <strong>same wave vector (k-value)</strong> in the energy-momentum (E-k) diagram.</li>
        <li>When an electron recombines with a hole, the transition is direct — a <strong>photon is emitted</strong> without any change in momentum.</li>
        <li>Recombination is <strong>radiative → efficient light emitter.</strong></li>
        <li>Examples: GaAs, InP, InGaAsP, GaAlAs</li>
      </ul>

      <p className="font-bold mt-3">Indirect Bandgap Semiconductor:</p>
      <ul className="list-disc ml-5 space-y-1 mt-1">
        <li>The maximum of VB and minimum of CB occur at <strong>different k-values.</strong></li>
        <li>For recombination, a change in momentum is required, assisted by a <strong>phonon (lattice vibration).</strong></li>
        <li>Recombination is mostly <strong>non-radiative → energy released as heat, not light.</strong></li>
        <li>Examples: Silicon (Si), Germanium (Ge), GaP</li>
      </ul>

      <p className="mt-3 text-muted-foreground italic text-xs">[Diagram Description]: Draw two E-k diagrams side by side. Left (Direct): Parabola peaks of VB and CB aligned vertically — vertical arrow = photon emission. Right (Indirect): CB minimum shifted to the right — angled arrow needing phonon assistance.</p>

      <h5 className="font-sans font-bold mt-4 mb-2">Part B: Major Requirements of Good Optical Sources</h5>
      <p>A good optical source for fiber optic communication must satisfy:</p>
      <ol className="list-decimal ml-5 space-y-1 mt-2">
        <li><strong>Appropriate Emission Wavelength</strong> — Should emit at 850 nm, 1310 nm, or 1550 nm (low-loss fiber windows).</li>
        <li><strong>High Radiance (Brightness)</strong> — Sufficient optical power in a small emitting area to couple efficiently into fiber.</li>
        <li><strong>High Quantum Efficiency</strong> — Both internal and external quantum efficiency should be high.</li>
        <li><strong>High Modulation Speed</strong> — Must support high-frequency direct modulation (GHz range for LASERs).</li>
        <li><strong>Stable Output Wavelength</strong> — Wavelength should not drift with temperature or current.</li>
        <li><strong>Linear I-P Characteristics</strong> — Required for analog systems to avoid distortion.</li>
        <li><strong>Long Operational Lifetime</strong> — Should operate reliably for years ({">"}10⁵ hours).</li>
        <li><strong>Small Emitting Area</strong> — Compatible with fiber core dimensions for efficient coupling.</li>
        <li><strong>Low Cost & Easy Fabrication</strong> — For practical deployment.</li>
      </ol>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"Direct = Same k = Straight Down = Shines Bright; Indirect = Shifted k = Sideways Jump = Heat, not Light"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students often confuse "direct" with "higher energy" — Direct and Indirect refer to <strong>momentum alignment (k-value)</strong>, NOT energy level. Also, students forget to mention <strong>phonon involvement</strong> in indirect bandgap.</p>
    </StepBox>
  </>
);

export default Q1;
