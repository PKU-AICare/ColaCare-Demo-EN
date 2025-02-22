---
layout: default
---

<div class="text-center">
  <h1 class="text-3xl font-bold text-indigo-800 mb-2">Multi-Agent Collaborative Consultation</h1>
  <p class="text-gray-600">DoctorAgents generate initial reviews</p>
</div>

<div class="grid grid-cols-2 gap-8 h-full">

  <div>
    <div class="relative bg-green-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
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
  </div>

  <!-- 右侧图表 -->
  <div class="relative">
    <!-- 折线图容器 -->
    <div class="bg-white p-3 rounded-xl shadow-md animate-slide-in-right">
      <line-chart f1="dbp" f2="cl" f3="scr" />
    </div>
  </div>
</div>

<style>
.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInLeft {
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

[v-click] {
  --v-click-delay-enter: 0.3s;
}
</style>