---
layout: default
---

<div class="text-center -mt-5">
  <h1 class="text-3xl font-bold text-indigo-800 mb-2">多医疗智能体协作会诊流程</h1>
  <p class="text-gray-600">过程总览</p>
</div>

<div class="relative h-32 mb-12 -mt-10">
  <v-clicks>
    <div class="absolute top-1/2 left-0 right-0 h-1 bg-gray-200"></div>
  </v-clicks>

  <!-- 时间节点 -->
  <div class="absolute top-1/2 left-0 right-0 flex justify-between">
    <div v-click="2" class="w-24 text-center">
      <div class="w-6 h-6 bg-blue-500 rounded-full mx-auto -mt-3 ring-4 ring-white"></div>
      <span class="text-sm">初始阶段</span>
    </div>
    <div v-click="3" class="w-24 text-center">
      <div class="w-6 h-6 bg-orange-500 rounded-full mx-auto -mt-3 ring-4 ring-white"></div>
      <span class="text-sm">第一轮辩论</span>
    </div>
    <div v-click="4" class="w-24 text-center">
      <div class="w-6 h-6 bg-green-500 rounded-full mx-auto -mt-3 ring-4 ring-white"></div>
      <span class="text-sm">最终报告</span>
    </div>
  </div>
</div>

<!-- 详情卡片容器 -->
<div class="grid gap-4 grid-cols-3 h-80 -mt-10">
  <!-- 初始报告卡片 -->
  <div v-click="2" class="col-span-1">
    <div class="card-animation bg-blue-50 p-4 h-full rounded-lg shadow-md">
      <h3 class="text-sm font-bold mb-2">初始阶段</h3>
      <div class="text-xs space-y-2 text-gray-600">
        <div class="mt-4">
          <div class="mb-2">
            <h5 class="text-xl font-bold">专家智能体 1</h5>
            <div class="flex justify-between text-xs mb-2">
              <span><carbon:warning class="flex-shrink-0 text-red-500 mr-2" /> 风险等级</span>
              <span>55%</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="w-55/100 h-full bg-red-600 animate-progress"></div>
            </div>
          </div>
          <div class="mb-2">
            <h5 class="text-xl font-bold">专家智能体 2</h5>
            <div class="flex justify-between text-xs mb-2">
              <span><carbon:warning class="flex-shrink-0 text-green-500 mr-2" /> 风险等级</span>
              <span>17%</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="w-1/6 h-full bg-green-500 animate-progress"></div>
            </div>
          </div>
          <div class="mb-2">
            <h5 class="text-xl font-bold">专家智能体 3</h5>
            <div class="flex justify-between text-xs mb-2">
              <span><carbon:warning class="flex-shrink-0 text-red-800 mr-2" /> 风险等级</span>
              <span>69%</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div class="w-7/10 h-full bg-red-800 animate-progress"></div>
            </div>
          </div>
          <div>
            <h5 class="text-xl font-bold">协调智能体</h5>
            <span class="font-medium text-sm">风险等级：高风险</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 第1轮辩论卡片 -->
  <div v-click="3" class="col-span-1">
    <div class="card-animation bg-orange-50 p-4 h-full rounded-lg shadow-md">
      <h3 class="text-sm font-bold mb-2">第一轮辩论</h3>
      <div class="text-xs text-gray-600">
        <div class="mt-4 mb-6">
          <h5 class="text-xl font-bold">专家智能体 1</h5>
          <div class="flex justify-between text-xs">
            <span> 赞成综合报告</span>
          </div>
        </div>
        <div class="mt-4 mb-6">
          <h5 class="text-xl font-bold">专家智能体 2</h5>
          <div class="flex justify-between text-xs mb-2">
            <span> 赞成综合报告</span>
          </div>
        </div>
        <div class="mt-4 mb-6">
          <h5 class="text-xl font-bold">专家智能体 3</h5>
          <div class="flex justify-between text-xs mb-2">
            <span> 赞成综合报告</span>
          </div>
        </div>
        <div class="mt-4 mb-6">
          <h5 class="text-xl font-bold">协调智能体</h5>
          <div class="flex justify-between text-xs mb-2">
            <span> 达成共识，终止讨论，生成最终报告</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 最终报告卡片 -->
  <div v-click="4" class="col-span-1">
    <div class="card-animation bg-green-50 p-4 h-full rounded-lg shadow-md">
      <h3 class="text-sm font-bold mb-2">最终共识</h3>
      <div class="text-xs space-y-2 text-gray-600">
        <h5 class="text-xl font-bold">诊断结论</h5>
        <p>患者属ESRD死亡高风险人群</p>
        <h5 class="text-xl font-bold">核心依据</h5>
        1. 代谢性酸中毒，加速肾病进展<br>
        2. 低白蛋白血症与低钾血症共同导致营养不良，心血管恶性循环<br>
        3. 高营养摄入与低蛋白血症的矛盾现象提示需调整肠内营养方案，避免液体超负荷
        <h5 class="text-xl font-bold">干预建议</h5>
        1. 紧急纠正低钾血症（目标>4 mmol/L）<br>
        2. 优化酸中毒管理（碳酸氢钠补充）<br>
        3. 制定个体化低蛋白-高热量营养计划
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