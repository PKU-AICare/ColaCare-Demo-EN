---
layout: default
---

<div class="text-center -mt-5">
    <h1 class="text-3xl font-bold text-indigo-800 mb-2">多医疗智能体协作会诊流程</h1>
    <p class="text-gray-600">专家智能体的多轮协作讨论</p>
</div>

<div class="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
  <div class="relative bg-green-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
    <div class="absolute -top-6 left-1/2 -translate-x-1/2">
      <carbon:ai class="text-4xl text-emerald-600 bg-white rounded-full p-2 shadow-md" />
    </div>
    <h3 class="text-xl font-bold text-green-800 mb-4 mt-2">专家智能体 2</h3>
    <div class="space-y-2 text-sm leading-relaxed">
    <div class="flex justify-between mb-2">
      <span><carbon:warning class="flex-shrink-0 text-green-500 mr-2" /> 风险等级</span>
      <span>17%</span>
    </div>
    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
      <div class="w-1/6 h-full bg-green-500 animate-progress"></div>
    </div>
    <div class="bg-white rounded-lg">
        <li>舒张压 85.0 mmHg（高于死亡患者中位数70 mmHg），提示心血管系统尚能代偿</li>
        <li>血氯 98.0 mmol/L处于正常范围，提示电解质平衡相对稳定</li>
        <li>血肌酐 768.0 μmol/L呈下降趋势，未达到ESRD患者典型阈值（>900 μmol/L），提示肾功能尚未完全失代偿</li> 
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
    <div class="relative bg-green-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
      <div class="absolute -top-6 left-1/2 -translate-x-1/2">
        <carbon:ai class="text-4xl text-green-600 bg-white rounded-full p-2 shadow-md" />
      </div>
      <h3 class="text-xl font-bold text-green-800 mb-4 mt-2">讨论意见</h3>
      <div class="space-y-2 text-sm leading-relaxed">
        <div class="bg-white rounded-lg">
          我赞成这份综合报告。<br>
          综合报告揭示了我初始分析中未充分评估的高危因素：代谢性酸中毒、低白蛋白血症及低钾血症，这些是终末期肾病患者死亡风险升高的重要标志。
          <br>
          这些关键病理特征的综合作用支持综合报告中关于高死亡风险的结论，需通过纠正代谢紊乱、营养支持及电解质管理进行多靶点干预。
        </div>
      </div>
    </div>
  </div>
</div>