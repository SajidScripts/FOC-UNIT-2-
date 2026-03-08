import Math from "@/components/Math";
import StepBox from "@/components/StepBox";

const Q5 = () => (
  <>
    <StepBox type="cloud" title="STEP 1 — FUNDAMENTAL CLOUD" icon="☁️">
      <p className="mb-2">Imagine you're baking and put in 100 ingredients (electrons).</p>
      <p className="mb-2"><strong>Internal Quantum Efficiency</strong> = Out of 100 ingredients, how many actually turned into useful cake (photons) inside the oven (device).</p>
      <p><strong>External Quantum Efficiency</strong> = Out of all that cake made inside, how much actually comes out of the oven door (device surface) for you to eat (use). The external is always less because some cake gets stuck inside!</p>
    </StepBox>

    <StepBox type="concept" title="STEP 2 — KEY CONCEPTS TO REMEMBER" icon="🔑">
      <div className="formula-box">
        <Math tex="\eta_i = \frac{\tau_{nr}}{\tau_r + \tau_{nr}} = \frac{\tau}{\tau_r}" display />
      </div>
      <div className="formula-box">
        <Math tex="\eta_{ext} \approx \frac{\eta_i}{4n^2} \quad \text{(for planar LED)}" display />
      </div>
      <p className="mt-2">Where: τ<sub>r</sub> = radiative recombination lifetime, τ<sub>nr</sub> = non-radiative recombination lifetime, n = refractive index of semiconductor</p>
    </StepBox>

    <StepBox type="answer" title="STEP 3 — EXAM ANSWER [4 Marks]" icon="✏️">
      <h5 className="font-sans font-bold mt-2 mb-2">Internal Quantum Efficiency (η<sub>i</sub>):</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>Defined as the ratio of radiative recombination rate to the total recombination rate (radiative + non-radiative).</li>
      </ul>
      <div className="formula-box">
        <Math tex="\eta_i = \frac{R_r}{R_r + R_{nr}} = \frac{\tau_{nr}}{\tau_r + \tau_{nr}}" display />
      </div>
      <ul className="list-disc ml-5 space-y-1">
        <li>Alternatively: <Math tex="\eta_i = \frac{\tau}{\tau_r}" /> where τ is the bulk recombination lifetime.</li>
        <li>A high η<sub>i</sub> means most carriers recombine to produce light rather than heat.</li>
        <li>Improved by using <strong>double heterojunction structures</strong> that confine carriers.</li>
      </ul>

      <h5 className="font-sans font-bold mt-4 mb-2">External Quantum Efficiency (η<sub>ext</sub>):</h5>
      <ul className="list-disc ml-5 space-y-1">
        <li>Defined as the ratio of photons emitted from the device to the total number of electrons injected.</li>
        <li>It is always <strong>less than η<sub>i</sub></strong> due to:
          <ul className="list-disc ml-5 mt-1">
            <li><strong>Total Internal Reflection (TIR)</strong> — photons generated at steep angles are trapped inside.</li>
            <li><strong>Fresnel Reflection Loss</strong> — at the semiconductor-air interface.</li>
            <li><strong>Absorption</strong> within the semiconductor material itself.</li>
          </ul>
        </li>
      </ul>
      <div className="formula-box">
        <Math tex="\eta_{ext} \approx \frac{\eta_i}{4n^2}" display />
      </div>
      <p>For GaAs (n ≈ 3.6): η<sub>ext</sub> ≈ η<sub>i</sub>/52 — only ~2% of internally generated photons escape!</p>
    </StepBox>

    <StepBox type="memory" title="STEP 4 — ONE LINE MEMORY TRICK" icon="💡">
      <p className="font-bold italic text-base">"Internal = Inside the device; External = What actually escapes — TIR steals most of it!"</p>
    </StepBox>

    <StepBox type="mistake" title="STEP 5 — COMMON MISTAKE" icon="⚠️">
      <p>Students confuse the two formulas. <strong>η<sub>i</sub> uses lifetimes (τ)</strong> while <strong>η<sub>ext</sub> uses refractive index (n)</strong>. Don't mix them up. Also, η<sub>ext</sub> {"<"} η<sub>i</sub> always.</p>
    </StepBox>
  </>
);

export default Q5;
