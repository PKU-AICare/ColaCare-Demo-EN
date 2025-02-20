---
layout: default
---

<div class="text-center -mt-5">
  <h1 class="text-3xl font-bold text-indigo-800 mb-2">Multi-Agent Collaborative Consultation</h1>
  <p class="text-gray-600">Multi-round discussions among DoctorAgents</p>
</div>

<div class="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
  <div class="relative bg-purple-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
    <div class="absolute -top-6 left-1/2 -translate-x-1/2">
      <carbon:ai class="text-4xl text-purple-600 bg-white rounded-full p-2 shadow-md" />
    </div>
    <h3 class="text-xl font-bold text-purple-800 mb-4 mt-2">DoctorAgent 3</h3>
    <div class="space-y-2 text-sm leading-relaxed">
      <div class="flex justify-between mb-2">
        <span><carbon:warning class="flex-shrink-0 text-red-800 mr-2" /> Risk Level</span>
        <span>69%</span>
      </div>
      <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div class="w-7/10 h-full bg-red-800 animate-progress"></div>
      </div>
      <div class="bg-white rounded-lg">
        <li>Notably, her blood potassium level is 3.11 mmol/L, significantly below the reference range for ESRD patients (>4 mmol/L), indicating a potential risk for cardiac arrhythmias and muscle weakness.</li> 
        <li>Additionally, her albumin level is 30.2 g/L, which is lower than the reference range for ESRD patients (>32 g/L), suggesting malnutrition or inadequate protein intake.</li> 
        <li>The patient's systolic blood pressure (130 mmHg) is within the higher reference range for ESRD patients, suggesting ongoing cardiovascular stress.</li> 
      </div>
    </div>
  </div>

  <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64">
    <div class="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
      <h3 class="font-bold text-yellow-800 text-center text-sm mb-2">Synthesized Report</h3>
      <div class="text-xs text-gray-600 leading-tight">
        <li>High risk of mortality</li>
        <li>Metabolic acidosis</li>
        <li>Hypoalbuminemia</li>
        <li>Hypokalemia</li>
        <li>Nutritional metabolism contradiction</li>
      </div>
    </div>
    <div>
      <Arrow x1="0" y1="200" x2="280" y2="200" />
    </div>
  </div>

  <div class="relative">
    <div class="relative bg-purple-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
      <div class="absolute -top-6 left-1/2 -translate-x-1/2">
        <carbon:ai class="text-4xl text-purple-600 bg-white rounded-full p-2 shadow-md" />
      </div>
      <h3 class="text-xl font-bold text-purple-800 mb-4 mt-2">Assessments</h3>
      <div class="space-y-2 text-sm leading-relaxed">
        <div class="bg-white rounded-lg">
          I agree with the synthesized report. <br>
          The synthesized report accurately captures the critical issues affecting the patient's prognosis, which collectively contribute to a high mortality risk.
        </div>
      </div>
    </div>
  </div>
</div>