---
layout: default
class: text-gray-800
---

<div class="grid grid-rows-[auto_1fr_auto] gap-8 h-full max-w-4xl mx-auto">

  <div class="text-center -mt-5">
    <h1 class="text-3xl font-bold text-indigo-800 mb-2">多医疗智能体协作会诊流程</h1>
    <p class="text-gray-600">专家智能体的多轮协作讨论</p>
  </div>

  <!-- 中央核心报告 -->
  <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64">
    <div class="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
      <h3 class="font-bold text-indigo-800 text-center text-sm mb-2">综合报告</h3>
      <div class="text-xs text-gray-600 leading-tight">
        <li>高风险状态</li>
        <li>代谢性酸中毒</li>
        <li>低蛋白血症</li>
        <li>营养代谢矛盾</li>
      </div>
    </div>
  </div>

  <!-- 三位医生观点气泡 -->
  <div class="absolute top-20 left-15 w-60">
    <div class="relative bg-red-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
      <div class="absolute -top-6 left-1/2 -translate-x-1/2">
        <carbon:ai class="text-4xl text-red-600 bg-white rounded-full p-2 shadow-md" />
      </div>
      <h3 class="text-xl font-bold text-red-800 mb-4 mt-2">专家智能体 1</h3>
      <div class="space-y-2 text-sm leading-relaxed">
        <div class="bg-white rounded-lg">
          MetaAgent的报告中提及了代谢性酸中毒、低白蛋白血症及低钾血症的关键发现，这些指标是终末期肾病预后不良的重要标志。<br>
          我既往分析未能充分强调此类电解质紊乱的严重性及其对心血管系统的协同损害效应。<br>
          MetaAgent将低钾血症纳入评估具有重要临床意义，因其直接关联心血管事件风险及全身代谢稳态——此二者在ESRD管理中至关重要。
        </div>
      </div>
    </div>
  </div>

  <div class="absolute top-20 right-15 w-60">
    <div class="relative bg-green-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2">
            <carbon:ai class="text-4xl text-emerald-600 bg-white rounded-full p-2 shadow-md" />
        </div>
        <h3 class="text-xl font-bold text-green-800 mb-4 mt-2">专家智能体 2</h3>
        <div class="space-y-4 text-sm leading-relaxed">
            <div class="bg-white rounded-lg">
              MetaAgent的观点揭示了我初始分析中未充分评估的高危因素：代谢性酸中毒、低白蛋白血症及低钾血症，这些是终末期肾病患者死亡风险升高的重要标志。
              <br>
              这些关键病理特征的综合作用支持MetaAgent关于高死亡风险的结论，需通过纠正代谢紊乱、营养支持及电解质管理进行多靶点干预。
            </div>
        </div>
    </div>
  </div>

  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 w-60">
    <div class="relative bg-purple-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
      <div class="absolute -top-6 left-1/2 -translate-x-1/2">
        <carbon:ai class="text-4xl text-purple-600 bg-white rounded-full p-2 shadow-md" />
      </div>
      <h3 class="text-xl font-bold text-purple-800 mb-4 mt-2">专家智能体 3</h3>
      <div class="space-y-2 text-sm leading-relaxed">
        <div class="bg-white rounded-lg">
          MetaAgent的综合报告精准反映了影响患者预后的核心问题。患者的低钾血症、低白蛋白血症及代谢性酸中毒是终末期肾病预后不良的关键标志。
        </div>
      </div>
    </div>
  </div>

  <div v-click=1 class="absolute bottom-15 right-10 -translate-x-1/2 w-40 h-30 rounded-2xl p-3 text-center transition-all duration-300">
    <h3 class="text-xl font-bold mb-4 text-red-800">达成共识！</h3>
  </div>
</div>
