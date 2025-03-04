---
layout: default
---

<div class="text-center">
  <h1 class="text-3xl font-bold text-indigo-800 mb-2">Deepseek's Collaborative Consultation Process</h1>
</div>

<div class="grid grid-cols-2 gap-4">
  <div class="flex flex-col space-y-3">
    <div class="bg-white p-6 rounded-xl shadow-md animate-slide-in-left">
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="flex items-center">
          <i-carbon-gender-female class="text-pink-500 mr-2 w-5 h-5" />
          <span>Gender: Female</span>
        </div>
        <div class="flex items-center">
          <i-carbon-calendar class="text-blue-500 mr-2 w-5 h-5" />
          <span>Age: 46</span>
        </div>
        <div class="flex items-center">
          <i-carbon-height class="text-green-500 mr-2 w-5 h-5" />
          <span>Height: 159.4 cm</span>
        </div>
        <div class="flex items-center">
          <i-carbon-weight class="text-purple-500 mr-2 w-5 h-5" />
          <span>Weight: 68.5 kg</span>
        </div>
        <div class="col-span-2 flex items-start">
          <i-carbon-warning class="text-red-500 mr-2 w-5 h-5 flex-shrink-0" />
          <span>Original: Chronic Glomerulonephritis</span>
        </div>
      </div>
    </div>
    <div class="bg-white p-3 rounded-xl shadow-md animate-slide-in-right">
      <line-chart />
    </div>
  </div>

  <div class="relative">
    <div v-click=1 class="text-center">
      <h1 class="text-2xl text-indigo-800 mb-2">Agent Team</h1>
    </div>
    <div v-click=1 class="triangle-container">
      <div class="triangle-row mb-8 mt-8">
        <div class="relative bg-red-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="absolute -top-6 left-1/2 -translate-x-1/2">
            <carbon:ai class="text-4xl text-red-600 bg-white rounded-full p-2 shadow-md" />
          </div>
          <h3 class="text-xl font-bold text-red-800 mb-4 mt-2">DoctorAgent 1</h3>
        </div>
        <div class="relative bg-green-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="absolute -top-6 left-1/2 -translate-x-1/2">
            <carbon:ai class="text-4xl text-emerald-600 bg-white rounded-full p-2 shadow-md" />
          </div>
          <h3 class="text-xl font-bold text-green-800 mb-4 mt-2">DoctorAgent 2</h3>
        </div>
      </div>
      <div class="triangle-row mb-8">
        <div class="relative bg-yellow-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="absolute -top-6 left-1/2 -translate-x-1/2">
            <carbon:light class="text-4xl text-yellow-500 bg-white rounded-full p-2 shadow-md" />
          </div>
          <h3 class="text-xl font-bold text-yellow-500 mb-4 mt-2">MetaAgent</h3>
        </div>
      </div>
      <div class="triangle-row">
        <div class="relative bg-purple-50 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300">
          <div class="absolute -top-6 left-1/2 -translate-x-1/2">
            <carbon:ai class="text-4xl text-purple-600 bg-white rounded-full p-2 shadow-md" />
          </div>
          <h3 class="text-xl font-bold text-purple-800 mb-4 mt-2">DoctorAgent 3</h3>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInLeft {
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

[v-click] {
  --v-click-delay-enter: 0.3s;
}

.triangle-container {
  flex-direction: column;
  align-items: center;
}

.triangle-row {
  display: flex;
  justify-content: center;
  gap: 20px; /* 调整图片之间的间距 */
}
</style>