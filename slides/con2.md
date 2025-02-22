---
layout: default
---

<div class="text-center -mt-8">
  <h1 class="text-3xl font-bold text-indigo-800 mb-2">Multi-Agent Collaborative Consultation</h1>
  <p class="text-gray-600">Multi-round discussions among DoctorAgents</p>
</div>

<div class="grid grid-cols-3 gap-1 max-w-4xl mx-auto -mt-2">
  <div class="relative bg-green-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-110%">
    <div class="absolute -top-6 left-1/2 -translate-x-1/2">
      <carbon:ai class="text-4xl text-emerald-600 bg-white rounded-full p-2 shadow-md" />
    </div>
    <h3 class="text-xl font-bold text-green-800 mb-4 mt-2">DoctorAgent 2</h3>
    <div class="space-y-2 text-sm leading-relaxed">
    <div class="flex justify-between mb-2">
      <span><carbon:warning class="flex-shrink-0 text-green-500 mr-2" /> Risk Level</span>
      <span>17%</span>
    </div>
    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div class="w-1/6 h-full bg-green-500 animate-progress"></div>
    </div>
    <div class="bg-white rounded-lg">
        <li>Her diastolic blood pressure of 85.0 mmHg is within the ESRD reference range (>70 mmHg) but is notably higher than the median value of deceased patients (70.0 mmHg), suggesting a potential protective effect against mortality.</li>
        <li>The patient's blood chlorine level of 98.0 mmol/L is within the normal range for ESRD patients and is slightly higher than the median value of deceased patients, further supporting a lower mortality risk.</li>
        <li>Her creatinine level is 768.0 μmol/L, which is lower than the typical ESRD reference range (>900 μmol/L), indicating some degree of renal function risk.</li>
    </div>
    </div>
  </div>

  <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48">
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
    <div class="relative bg-green-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-115% -ml-5">
      <div class="absolute -top-6 left-1/2 -translate-x-1/2">
        <carbon:ai class="text-4xl text-green-600 bg-white rounded-full p-2 shadow-md" />
      </div>
      <h3 class="text-xl font-bold text-green-800 mb-4 mt-2">Assessments</h3>
      <div class="space-y-2 text-sm leading-relaxed">
        <div class="bg-white rounded-lg">
          I agree with the synthesized report. The meta doctor's opinion highlights critical factors that were overlooked in my initial analysis. <br>
          Specifically, the presence of metabolic acidosis, hypoalbuminemia, and hypokalemia are significant indicators of a high mortality risk. <br>
          These key features collectively suggest a high mortality risk, aligning with the meta doctor's opinion.
        </div>
      </div>
    </div>
  </div>
</div>

<style>
li {
  line-height: 1.5;
}
</style>