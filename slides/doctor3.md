---
layout: default
---

<div class="text-center">
    <h1 class="text-3xl font-bold text-indigo-800 mb-2">多医疗智能体协作会诊流程</h1>
    <p class="text-gray-600">专家智能体做出初步判断</p>
</div>

<div class="grid grid-cols-2 gap-8 h-full">

  <div>
    <div class="relative bg-purple-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2">
        <carbon:ai class="text-4xl text-purple-600 bg-white rounded-full p-2 shadow-md" />
        </div>
        <h3 class="text-xl font-bold text-purple-800 mb-4 mt-2">专家智能体 3</h3>
        <div class="space-y-2 text-sm leading-relaxed">
        <div class="flex justify-between mb-2">
          <span><carbon:warning class="flex-shrink-0 text-red-800 mr-2" /> 风险等级</span>
          <span>69%</span>
        </div>
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div class="w-7/10 h-full bg-red-800 animate-progress"></div>
        </div>
        <div class="bg-white rounded-lg">
            <li>血钾 3.11 mmol/L，显著低于ESRD患者参考范围 (>4 mmol/L)，提示低钾血症，可能导致心律失常及肌肉无力</li> 
            <li>白蛋白 30.2 g/L，与高营养摄入的矛盾现象，提示可能存在液体超负荷风险</li> 
            <li>收缩压 130 mmHg，提示持续存在心血管应激状态</li> 
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