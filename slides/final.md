---
layout: default
---

<div class="text-center -mt-5">
  <h1 class="text-3xl font-bold text-indigo-800 mb-2">Multi-Agent Collaborative Consultation</h1>
  <p class="text-gray-600">Final overview</p>
</div>

<div class="relative h-32 mb-12 -mt-10">
  <div class="absolute top-1/2 left-0 right-0 h-1 bg-gray-200"></div>

  <!-- 时间节点 -->
  <div class="absolute top-1/2 left-0 right-0 flex justify-between">
    <div class="w-24 text-center">
      <div class="w-6 h-6 bg-blue-500 rounded-full mx-auto -mt-3 ring-4 ring-white"></div>
      <span class="text-sm">Initial Reviews</span>
    </div>
    <div class="w-24 text-center">
      <div class="w-6 h-6 bg-orange-500 rounded-full mx-auto -mt-3 ring-4 ring-white"></div>
      <span class="text-sm">First Debate</span>
    </div>
    <div class="w-24 text-center">
      <div class="w-6 h-6 bg-green-500 rounded-full mx-auto -mt-3 ring-4 ring-white"></div>
      <span class="text-sm">Final Report</span>
    </div>
  </div>
</div>

<!-- 详情卡片容器 -->
<div class="grid gap-4 grid-cols-3 h-80 -mt-10">
  <!-- 初始报告卡片 -->
  <div v-click="1" class="col-span-1">
    <div class="card-animation bg-blue-50 p-4 h-full rounded-lg shadow-md">
      <h3 class="text-sm font-bold mb-2">Initial Reviews</h3>
      <div class="text-xs space-y-2 text-gray-600">
        <div class="mt-4">
          <div class="mb-2">
            <h5 class="text-xl font-bold">DoctorAgent 1</h5>
            <div class="flex justify-between text-xs mb-2">
              <span><carbon:warning class="flex-shrink-0 text-red-500 mr-2" /> Risk Level</span>
              <span>55%</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="w-55/100 h-full bg-red-600 animate-progress"></div>
            </div>
          </div>
          <div class="mb-2">
            <h5 class="text-xl font-bold">DoctorAgent 2</h5>
            <div class="flex justify-between text-xs mb-2">
              <span><carbon:warning class="flex-shrink-0 text-green-500 mr-2" /> Risk Level</span>
              <span>17%</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="w-1/6 h-full bg-green-500 animate-progress"></div>
            </div>
          </div>
          <div class="mb-2">
            <h5 class="text-xl font-bold">DoctorAgent 3</h5>
            <div class="flex justify-between text-xs mb-2">
              <span><carbon:warning class="flex-shrink-0 text-red-800 mr-2" /> Risk Level</span>
              <span>69%</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="w-7/10 h-full bg-red-800 animate-progress"></div>
            </div>
          </div>
          <div>
            <h5 class="text-xl font-bold">MetaAgent</h5>
            <span class="font-medium text-sm">Risk Level: High risk of mortality</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 第1轮辩论卡片 -->
  <div v-click="2" class="col-span-1">
    <div class="card-animation bg-orange-50 p-4 h-full rounded-lg shadow-md">
      <h3 class="text-sm font-bold mb-2">First Debate</h3>
      <div class="text-xs text-gray-600">
        <div class="mt-4 mb-6">
          <h5 class="text-xl font-bold">DoctorAgent 1</h5>
          <div class="flex justify-between text-xs">
            <span> Agreement</span>
          </div>
        </div>
        <div class="mt-4 mb-6">
          <h5 class="text-xl font-bold">DoctorAgent 2</h5>
          <div class="flex justify-between text-xs mb-2">
            <span> Agreement</span>
          </div>
        </div>
        <div class="mt-4 mb-6">
          <h5 class="text-xl font-bold">DoctorAgent 3</h5>
          <div class="flex justify-between text-xs mb-2">
            <span> Agreement</span>
          </div>
        </div>
        <div class="mt-4 mb-6">
          <h5 class="text-xl font-bold">MetaAgent</h5>
          <div class="flex justify-between text-xs mb-2">
            <span> Consensus achieved</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 最终报告卡片 -->
  <div v-click="3" class="col-span-1">
    <div class="card-animation bg-green-50 p-4 h-full rounded-lg shadow-md">
      <h3 class="text-sm font-bold mb-2">Final Report</h3>
      <div class="text-xs space-y-2 text-gray-600">
        <h5 class="text-xl font-bold">Diagnostic Conclusion</h5>
        Patient identified as high-risk for ESRD.
        <h5 class="text-xl font-bold">Key Findings</h5>
        1. Metabolic acidosis accelerating renal disease progression<br>
        2. Hypoalbuminemia and hypokalemia leading to malnutrition and cardiovascular complications<br>
        3. High nutritional intake with hypoalbuminemia indicates need for enteral nutrition adjustment
        <!-- <h5 class="text-xl font-bold">Intervention Recommendations</h5>
        1. Immediate correction of hypokalemia (target >4 mmol/L)<br>
        2. Optimized acidosis management (sodium bicarbonate supplementation)<br>
        3. Development of individualized low-protein, high-calorie nutrition plan -->
      </div>
    </div>
  </div>
</div>

<style>
/* 卡片入场动画 */
.card-animation {
  animation: cardSlide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes cardSlide {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 进度条动画 */
.animate-progress {
  animation: progressBar 1.5s ease-out forwards;
}

@keyframes progressBar {
  from { width: 0; }
}

/* 数字递增动画 */
.animate-count-up {
  display: inline-block;
  animation: countUp 1.5s forwards;
  background-image: linear-gradient(90deg, #3B82F6, #10B981);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@keyframes countUp {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>