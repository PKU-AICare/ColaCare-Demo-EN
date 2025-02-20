---
layout: default
---
# 多医疗智能体协作会诊流程

<!-- 图片组件 -->
<div class="w-full h-3/5 flex justify-center items-center mb-4">
  <img src="/figures/consultation.png" class="w-full h-full object-contain" />
</div>

<v-clicks>

<!-- 三个核心步骤 -->
<div class="grid grid-cols-3 gap-8 mt-10">
  <!-- 第一步 -->
  <div class="border-l-4 border-blue-500 pl-4">
    <div class="flex items-center gap-2 text-blue-500">
      <carbon:document class="text-xl"/> 
      <span class="font-bold">初步分析</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>专家智能体生成病历分析</li>
      <li>分析患者动态特征信息</li>
    </ul>
  </div>

  <!-- 第二步 -->
  <div class="border-l-4 border-green-500 pl-4">
    <div class="flex items-center gap-2 text-green-500">
      <carbon:report class="text-xl"/>
      <span class="font-bold">报告整合</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>协调智能体整合多方意见</li>
      <li>生成初步诊断报告</li>
    </ul>
  </div>

  <!-- 第三步 -->
  <div class="border-l-4 border-purple-500 pl-4">
    <div class="flex items-center gap-2 text-purple-500">
      <carbon:group class="text-xl"/>
      <span class="font-bold">协作决策</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>多轮专家讨论优化方案</li>
      <li>达成共识后生成最终报告</li>
    </ul>
  </div>
</div>

<!-- 系统优势 -->
<!-- <div class="grid grid-cols-2 gap-8 mt-8">
  <div class="border-l-4 border-orange-500 pl-4">
    <div class="flex items-center gap-2 text-orange-500">
      <carbon:renew class="text-xl"/>
      <span class="font-bold">智能迭代</span>
    </div>
    <p class="text-sm mt-2">自动进行多轮讨论优化<br>确保建议的全面性</p>
  </div>

  <div class="border-l-4 border-pink-500 pl-4">
    <div class="flex items-center gap-2 text-pink-500">
      <carbon:decision-tree class="text-xl"/>
      <span class="font-bold">透明决策</span>
    </div>
    <p class="text-sm mt-2">完整记录讨论过程<br>每一步都可追溯</p>
  </div>
</div> -->

</v-clicks>

<style>
ul li::marker {
  color: #64748b;
}
</style>