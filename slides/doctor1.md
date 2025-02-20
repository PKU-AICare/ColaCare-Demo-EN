---
layout: default
---

<div class="text-center">
    <h1 class="text-3xl font-bold text-indigo-800 mb-2">多医疗智能体协作会诊流程</h1>
    <p class="text-gray-600">专家智能体做出初步判断</p>
</div>

<div class="grid grid-cols-2 gap-8 h-full">

  <div>
    <div class="relative bg-red-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2">
        <carbon:ai class="text-4xl text-red-600 bg-white rounded-full p-2 shadow-md" />
        </div>
        <h3 class="text-xl font-bold text-red-800 mb-4 mt-2">专家智能体 1</h3>
        <div class="space-y-2 text-sm leading-relaxed">
        <div class="flex justify-between text-xs -mt-3">
            <span><carbon:warning class="flex-shrink-0 text-red-500 mr-2" /> 风险等级</span>
            <span>55%</span>
        </div>
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="w-55/100 h-full bg-red-600 animate-progress"></div>
        </div>
        <div class="bg-white rounded-lg">
            <li>二氧化碳结合力 18.7 mmol/L，显著低于ESRD患者参考范围（>25 mmol/L），提示存在代谢性酸中毒，可能导致肌肉消耗及肾病进展加速</li>
            <li>白蛋白 30.2 g/L，低于ESRD患者参考范围 （>32 g/L），提示低蛋白血症，可能增加感染风险及营养不良相关并发症</li>
            <li>高营养摄入 3495.67 g，可能掩盖实际存在的营养吸收不良或代谢需求增加</li>
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