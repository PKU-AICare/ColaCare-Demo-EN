---
layout: default
---
# Overall Architecture of ColaCare Framework

<div class="w-full h-3/5 flex justify-center items-center mb-4">
  <img src="/figures/colacare_pipeline.png" class="w-full h-full object-contain" />
</div>

<v-clicks>

<div class="grid grid-cols-3 gap-2 mt-4">
  <div class="border-l-4 border-blue-500 pl-2">
    <div class="flex items-center gap-2 text-blue-500">
      <carbon:data-base class="text-xl"/> 
      <span class="font-bold">Data Input Layer</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>Structured EHR Information Extraction</li>
      <li>Feature Importance Analysis</li>
    </ul>
  </div>

  <div class="border-l-4 border-green-500 pl-2 -ml-3">
    <div class="flex items-center gap-2 text-green-500">
      <carbon:group class="text-xl"/>
      <span class="font-bold">Collaborative Decision Layer</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>DoctorAgent Collaboration</li>
      <li>MetaAgent Organizing Debates</li>
    </ul>
  </div>

  <div class="border-l-4 border-purple-500 pl-2">
    <div class="flex items-center gap-2 text-purple-500">
      <carbon:ai-results class="text-xl"/>
      <span class="font-bold">Clinical Decision Layer</span>
    </div>
    <ul class="text-sm pl-6 list-disc mt-2">
      <li>Multimodal Fusion</li>
      <li>Prognosis Prediction</li>
    </ul>
  </div>
</div>

</v-clicks>

<style>
ul li::marker {
  color: #64748b;
}
</style>