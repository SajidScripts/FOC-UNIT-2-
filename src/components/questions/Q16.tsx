import Math from "@/components/Math";
import StepBox from "@/components/StepBox";

const Q16 = () => (
  <>
    <StepBox type="cloud" title="STEP 1 — FUNDAMENTAL CLOUD" icon="☁️">
      <p>Most light generated inside an LED is trapped inside the semiconductor because of <strong>Total Internal Reflection (TIR)</strong>. Only light hitting the surface at an angle smaller than the critical angle can escape. This is why external efficiency is much lower than internal efficiency.</p>
    </StepBox>

    <StepBox type="concept" title="STEP 2 — KEY CONCEPTS TO REMEMBER" icon="🔑">
      <div className="formula-box">
        <p className="text-xs text-muted-foreground mb-1">Critical angle:</p>
        <Math tex="\theta_c = \sin^{-1}\left(\frac{1}{n}\right)" display />
      </div>
      <div className="formula-box">
        <p className="text-xs text-muted-foreground mb-1">External quantum efficiency (for planar LED):</p>
        <Math tex="\eta_{ext} \approx \frac{\eta_i}{4n^2}" display />
      </div>
      <div className="formula-box">
        <p className="text-xs text-muted-foreground mb-1">External power:</p>
        <Math tex="P_{ext} = \eta_{ext} \cdot \frac{hc}{e\lambda} \cdot I" display />
      </div>
    </StepBox>

    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [6 Marks]" icon="✏️">
      <h5 className="font-sans font-bold mt-2 mb-2">External Quantum Efficiency (η<sub>ext</sub>):</h5>
      <p className="mb-2"><strong>Definition:</strong> External quantum efficiency is the ratio of photons emitted from the device surface to the total number of electrons injected into the device.</p>
      <div className="formula-box">
        <Math tex="\eta_{ext} = \frac{\text{Photons emitted externally per second}}{\text{Electrons injected per second}}" display />
      </div>

      <p className="font-bold mt-3">Why is η<sub>ext</sub> {"<<"} η<sub>i</sub>?</p>
      <p>Several loss mechanisms reduce external efficiency:</p>
      <ol className="list-decimal ml-5 space-y-2 mt-2">
        <li>
          <strong>Total Internal Reflection (TIR):</strong> Light hitting the semiconductor-air interface at an angle greater than the critical angle θ<sub>c</sub> is totally internally reflected and cannot escape.
          <div className="formula-box mt-2">
            <Math tex="\theta_c = \sin^{-1}\left(\frac{n_2}{n_1}\right) \approx \sin^{-1}\left(\frac{1}{n}\right)" display />
          </div>
          <p>For GaAs (n ≈ 3.6): θ<sub>c</sub> ≈ 16° — only light within a small cone escapes.</p>
        </li>
        <li>
          <strong>Fresnel Reflection Loss:</strong> Even for light within the critical angle, partial reflection occurs at the interface.
          <div className="formula-box mt-2">
            <Math tex="R = \left(\frac{n-1}{n+1}\right)^2" display />
          </div>
        </li>
        <li><strong>Reabsorption:</strong> Photons generated deep inside the active region may be reabsorbed before reaching the surface.</li>
      </ol>

      <p className="font-bold mt-3">Formula for planar LED:</p>
      <div className="formula-box">
        <Math tex="\eta_{ext} = \frac{\eta_i}{4n^2}" display />
      </div>
      <p>For GaAs: η<sub>ext</sub> = η<sub>i</sub>/52 → only ~2% of internal photons escape! This is why dome-shaped LED structures and antireflection coatings are used to improve η<sub>ext</sub>.</p>

      <h5 className="font-sans font-bold mt-4 mb-2">External Power Generated (P<sub>ext</sub>):</h5>
      <div className="formula-box">
        <Math tex="P_{ext} = \eta_{ext} \cdot \frac{hc}{e\lambda} \cdot I" display />
      </div>
      <p className="mt-2">Or equivalently:</p>
      <div className="formula-box">
        <Math tex="P_{ext} = \eta_{ext} \cdot E_g(eV) \cdot I(A) \quad \text{[Watts]}" display />
      </div>
      <p className="mt-2">The external power is always a small fraction of the internal power:</p>
      <div className="formula-box">
        <Math tex="P_{ext} = \frac{\eta_{ext}}{\eta_i} \cdot P_{int} = \frac{1}{4n^2} \cdot P_{int}" display />
      </div>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"TIR is the thief — steals 98% of your photons. External efficiency = Internal / 4n²"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students often calculate P<sub>ext</sub> = η<sub>ext</sub> × P<sub>int</sub> directly, but use wrong η<sub>ext</sub>. Remember: <strong>η<sub>ext</sub> = η<sub>i</sub>/(4n²)</strong> for planar LED. The factor of 4n² comes from geometric solid angle calculation of the escape cone.</p>
    </StepBox>
  </>
);

export default Q16;
