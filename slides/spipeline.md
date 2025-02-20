---
layout: default
---
# Multi-Agent Collaborative Consultation

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
      <span class="font-bold">Initial Reviews</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>DoctorAgents generate EHR analysis</li>
      <li>Analysis of dynamic characteristics</li>
    </ul>
  </div>

  <!-- 第二步 -->
  <div class="border-l-4 border-green-500 pl-4">
    <div class="flex items-center gap-2 text-green-500">
      <carbon:report class="text-xl"/>
      <span class="font-bold">Synthesized Preliminary Report</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>MetaAgent consolidates inputs from multiple DoctorAgents</li>
      <li>Generation of preliminary diagnostic report</li>
    </ul>
  </div>

  <!-- 第三步 -->
  <div class="border-l-4 border-purple-500 pl-4">
    <div class="flex items-center gap-2 text-purple-500">
      <carbon:group class="text-xl"/>
      <span class="font-bold">Collaborative Consultation Process</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>Multi-round discussions to refine solutions</li>
      <li>Final report upon consensus</li>
    </ul>
  </div>
</div>

</v-clicks>

<style>
ul li::marker {
  color: #64748b;
}
</style>