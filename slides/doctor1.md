---
layout: default
---

<div class="text-center">
  <h1 class="text-3xl font-bold text-indigo-800 mb-2">Multi-Agent Collaborative Consultation</h1>
  <p class="text-gray-600">DoctorAgents generate initial reviews</p>
</div>

<div class="grid grid-cols-2 gap-8 h-full">

  <div>
    <div class="relative bg-red-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
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
  </div>

  <!-- 右侧图表 -->
  <div class="relative">
    <!-- 折线图容器 -->
    <div class="bg-white p-3 rounded-xl shadow-md animate-slide-in-right">
      <line-chart f1="co2cp" f2="albumin" f3="appetite" />
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