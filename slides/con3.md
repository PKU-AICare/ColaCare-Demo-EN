---
layout: default
---

<div class="text-center -mt-5">
    <h1 class="text-3xl font-bold text-indigo-800 mb-2">多医疗智能体协作会诊流程</h1>
    <p class="text-gray-600">专家智能体的多轮协作讨论</p>
</div>

<div class="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
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

  <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64">
    <div class="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
      <h3 class="font-bold text-yellow-800 text-center text-sm mb-2">综合报告</h3>
      <div class="text-xs text-gray-600 leading-tight">
        <li>高风险状态</li>
        <li>代谢性酸中毒</li>
        <li>低蛋白血症</li>
        <li>低钾血症</li>
        <li>营养代谢矛盾</li>
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
      <h3 class="text-xl font-bold text-purple-800 mb-4 mt-2">讨论意见</h3>
      <div class="space-y-2 text-sm leading-relaxed">
        <div class="bg-white rounded-lg">
          我赞成这份综合报告。<br>
          综合报告精准反映了影响患者预后的核心问题。患者的低钾血症、低白蛋白血症及代谢性酸中毒是终末期肾病预后不良的关键标志。
        </div>
      </div>
    </div>
  </div>
</div>