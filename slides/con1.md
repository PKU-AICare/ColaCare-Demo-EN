---
layout: default
---

<div class="text-center -mt-8">
  <h1 class="text-3xl font-bold text-indigo-800 mb-2">Multi-Agent Collaborative Consultation</h1>
  <p class="text-gray-600">Multi-round discussions among DoctorAgents</p>
</div>

<div class="grid grid-cols-3 gap-1 max-w-4xl mx-auto -mt-2">
  <div class="relative bg-red-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-110%">
    <div class="absolute -top-6 left-1/2 -translate-x-1/2">
        <carbon:ai class="text-4xl text-red-600 bg-white rounded-full p-2 shadow-md" />
    </div>
    <h3 class="text-xl font-bold text-red-800 mb-4 mt-2">DoctorAgent 1</h3>
    <div class="space-y-2 text-sm leading-relaxed">
        <div class="flex justify-between text-xs -mt-3">
            <span><carbon:warning class="flex-shrink-0 text-red-500 mr-2" /> Risk Level</span>
            <span>55%</span>
        </div>
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="w-55/100 h-full bg-red-600 animate-progress"></div>
        </div>
        <div class="bg-white rounded-lg">
          <li>Carbon dioxide binding power is 18.7 mmol/L, significantly below the ESRD reference range of >25 mmol/L, indicating metabolic acidosis, a condition associated with muscle wasting and accelerated kidney disease progression.</li>
          <li>Albumin levels are 30.2 g/L, also below the ESRD reference range of >32 g/L, suggesting malnutrition and increased susceptibility to infections.</li>
          <li>Despite these low values, food intake is 3495.67 g, higher than both survival and deceased patient medians, which may indicate an attempt to compensate for poor nutrient absorption or increased metabolic demands.</li>
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
    <div class="relative bg-red-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 w-110% -ml-5">
      <div class="absolute -top-6 left-1/2 -translate-x-1/2">
        <carbon:ai class="text-4xl text-red-600 bg-white rounded-full p-2 shadow-md" />
      </div>
      <h3 class="text-xl font-bold text-red-800 mb-4 mt-2">Assessments</h3>
      <div class="space-y-2 text-sm leading-relaxed">
        <div class="bg-white rounded-lg">
          I agree with the synthesized report.<br>
          The meta doctor's opinion aligns with the critical findings of metabolic acidosis, hypoalbuminemia, and hypokalemia, which are significant indicators of poor prognosis in ESRD. <br>
          My previous analysis did not fully emphasize the severity of these electrolyte imbalances and their combined impact on cardiovascular health. The inclusion of hypokalemia in the meta doctor's assessment is crucial, as it directly relates to cardiovascular risks and overall metabolic stability, which are paramount in ESRD management.
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