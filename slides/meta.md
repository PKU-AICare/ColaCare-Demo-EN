---
layout: default
class: text-gray-800
---

<div class="grid grid-rows-[auto_1fr_auto] gap-8 h-full max-w-4xl mx-auto">

  <div class="text-center -mt-5">
    <h1 class="text-3xl font-bold text-indigo-800 mb-2">多医疗智能体协作会诊流程</h1>
    <p class="text-gray-600">协调智能体基于专家智能体意见生成综合报告</p>
  </div>

  <div class="grid grid-cols-3 gap-8 items-start -mt-5">
    <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
      <div class="flex items-center mb-4">
        <carbon:ai class="text-2xl text-red-500 mr-2" />
        <h3 class="font-semibold text-red-800">专家智能体 1</h3>
      </div>
      <div class="flex justify-between text-xs -mt-3">
        <span><carbon:warning class="flex-shrink-0 text-red-500 mr-2" /> 风险等级</span>
        <span>55%</span>
      </div>
      <div class="h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
        <div class="w-55/100 h-full bg-red-600 animate-progress"></div>
      </div>
    </div>
    <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
      <div class="flex items-center mb-4">
        <carbon:ai class="text-2xl text-green-500 mr-2" />
        <h3 class="font-semibold text-green-800">专家智能体 2</h3>
      </div>
      <div class="flex justify-between text-xs -mt-3">
        <span><carbon:warning class="flex-shrink-0 text-green-500 mr-2" /> 风险等级</span>
        <span>17%</span>
      </div>
      <div class="h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
        <div class="w-1/6 h-full bg-green-500 animate-progress"></div>
      </div>
    </div>
    <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
      <div class="flex items-center mb-4">
        <carbon:ai class="text-2xl text-purple-500 mr-2" />
        <h3 class="font-semibold text-purple-800">专家智能体 3</h3>
      </div>
      <div class="flex justify-between text-xs -mt-3">
        <span><carbon:warning class="flex-shrink-0 text-red-800 mr-2" /> 风险等级</span>
        <span>69%</span>
      </div>
      <div class="h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
        <div class="w-7/10 h-full bg-red-800 animate-progress"></div>
      </div>
    </div>
  </div>

  <!-- MetaAgent综合报告 -->
  <div class="bg-white rounded-xl shadow-md p-3 border-t-4 border-yellow-500">
    <div class="flex items-center mb-2">
      <carbon:light class="text-lg text-yellow-500 mr-2" />
      <h3 class="font-semibold text-yellow-600 text-base">协调智能体综合报告</h3>
    </div>
    <!-- 风险等级 -->
    <div class="mb-3 p-2 bg-red-50 rounded-md">
      <div class="flex items-center text-red-700 space-x-1">
        <carbon:warning class="text-base" />
        <span class="font-medium text-sm">风险等级：高风险</span>
      </div>
    </div>
    <!-- 核心证据链 -->
    <div class="space-y-2">
      <h4 class="font-semibold text-gray-700 text-sm mb-1">核心证据链：</h4>
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-gray-50 p-2 rounded-md">
          <p class="font-medium text-gray-800 text-sm mb-1">1. 代谢性酸中毒</p>
          <p class="text-xs text-gray-600 leading-tight">
            二氧化碳结合力显著降低，加速肾病进展
          </p>
        </div>
        <div class="bg-gray-50 p-2 rounded-md">
          <p class="font-medium text-gray-800 text-sm mb-1">2. 低白蛋白血症与低血钾</p>
          <p class="text-xs text-gray-600 leading-tight">
            协同增加感染风险，增加营养不良和增加心血管事件风险
          </p>
        </div>
        <div class="bg-gray-50 p-2 rounded-md">
          <p class="font-medium text-gray-800 text-sm mb-1">3. 高营养摄入与低蛋白血症的矛盾现象</p>
          <p class="text-xs text-gray-600 leading-tight">
            提示可能存在营养吸收不良，代谢需求增加，需警惕液体超负荷
          </p>
        </div>
      </div>
    </div>
  </div>
</div>