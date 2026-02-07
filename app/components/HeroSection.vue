<template>
  <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <!-- Animated particles -->
    <div class="absolute inset-0">
      <div
        v-for="i in 20"
        :key="i"
        class="absolute w-1 h-1 bg-blue-600/30 rounded-full"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${10 + Math.random() * 20}s`
        }"
        style="animation: particleFloat linear infinite;"
      ></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 backdrop-blur-sm">
        <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
        <span class="text-sm text-slate-300">Open Source • MIT License</span>
      </div>

      <!-- Main headline -->
      <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
        <span class="block text-white">In Mathematics</span>
        <span class="block bg-gradient-to-r from-blue-400 via-orange-400 to-blue-600 bg-clip-text text-transparent">
          We Trust
        </span>
      </h1>

      <!-- Subheadline -->
      <p class="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        Cryptographically provably fair algorithms for transparent gaming and random number generation.
        <span class="text-blue-400">No trust required.</span>
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#verifier"
          class="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-blue-600/25 transition-all duration-300 hover:scale-105"
        >
          <Icon name="lucide:shield-check" class="w-5 h-5" />
          Try the Verifier
          <Icon name="lucide:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="https://github.com/openfairness"
          target="_blank"
          class="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
        >
          <Icon name="lucide:github" class="w-5 h-5" />
          View on GitHub
        </a>
      </div>

      <!-- Trust indicators -->
      <div class="mt-20 flex flex-wrap items-center justify-center gap-8 text-slate-500">
        <div class="flex items-center gap-2">
          <Icon name="lucide:check-circle-2" class="w-5 h-5 text-blue-600" />
          <span class="text-sm">SHA-256 Hashed</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:check-circle-2" class="w-5 h-5 text-blue-600" />
          <span class="text-sm">HMAC-SHA256</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:check-circle-2" class="w-5 h-5 text-blue-600" />
          <span class="text-sm">Client Seedable</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:check-circle-2" class="w-5 h-5 text-blue-600" />
          <span class="text-sm">Fully Auditable</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
      <Icon name="lucide:chevron-down" class="w-6 h-6 text-slate-500" />
    </div>
  </section>
</template>

<script setup lang="ts">
// Particle animation is handled by CSS
</script>

<style scoped>
@keyframes particleFloat {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(50px);
    opacity: 0;
  }
}
</style>
