---
layout: default
---
# 整体架构图

<!-- 图片组件 -->
<div class="w-full h-3/5 flex justify-center items-center mb-4">
  <img src="/figures/colacare_pipeline.png" class="w-full h-full object-contain" />
</div>

<v-clicks>

<!-- 第一行：三个架构说明 -->
<div class="grid grid-cols-3 gap-2 mt-4">
  <div class="border-l-4 border-blue-500 pl-2">
    <div class="flex items-center gap-2 text-blue-500">
      <carbon:data-base class="text-xl"/> 
      <span class="font-bold">数据输入层</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>结构化EHR时序数据处理</li>
      <li>特征重要性分析</li>
    </ul>
  </div>

  <div class="border-l-4 border-green-500 pl-2 -ml-3">
    <div class="flex items-center gap-2 text-green-500">
      <carbon:group class="text-xl"/>
      <span class="font-bold">协作决策层</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>领域专家智能体 (DoctorAgent) 协作</li>
      <li>协调智能体 (MetaAgent) 组织辩论</li>
    </ul>
  </div>

  <div class="border-l-4 border-purple-500 pl-2">
    <div class="flex items-center gap-2 text-purple-500">
      <carbon:ai-results class="text-xl"/>
      <span class="font-bold">决策输出层</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>多模态特征融合</li>
      <li>动态风险预测</li>
    </ul>
  </div>
</div>

<!-- 第二行：两个创新亮点 -->
<!-- <div class="grid grid-cols-2 gap-8 mt-8">
  <div class="border-l-4 border-orange-500 pl-4">
    <div class="flex items-center gap-2 text-orange-500">
      <carbon:lightning class="text-xl"/>
      <span class="font-bold">RAG增强模块</span>
    </div>
    <p class="text-sm mt-2">实时检索医疗指南<br>确保决策依据时效性</p>
  </div>

  <div class="border-l-4 border-pink-500 pl-4">
    <div class="flex items-center gap-2 text-pink-500">
      <carbon:chat class="text-xl"/>
      <span class="font-bold">动态辩论机制</span>
    </div>
    <p class="text-sm mt-2">多轮证据驱动辩论<br>共识达成决策模式</p>
  </div>
</div> -->

</v-clicks>

<style>
ul li::marker {
  color: #64748b;
}
</style>