---
layout: default
---

<div class="text-center">
    <h1 class="text-3xl font-bold text-indigo-800 mb-2">Multi-Agent Collaborative Consultation</h1>
    <p class="text-gray-600">DoctorAgents generate initial reviews</p>
</div>

<div class="grid grid-cols-2 gap-8 h-full">

  <div>
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
  </div>

  <!-- 右侧图表 -->
  <div class="relative">
    <!-- 折线图容器 -->
    <div class="bg-white p-3 rounded-xl shadow-md animate-slide-in-right">
      <line-chart f1="k" f2="albumin" f3="sbp" />
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