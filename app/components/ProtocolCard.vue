<template>
  <div
    class="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    :class="{
      'hover:glow-blue': color === 'blue',
      'hover:glow-orange': color === 'orange',
      'hover:glow-slate': color === 'slate'
    }"
  >
    <!-- Background gradient -->
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      :class="{
        'bg-gradient-to-br from-blue-600/10 to-transparent': color === 'blue',
        'bg-gradient-to-br from-orange-500/10 to-transparent': color === 'orange',
        'bg-gradient-to-br from-slate-500/10 to-transparent': color === 'slate'
      }"
    ></div>

    <div class="relative z-10">
      <!-- Step number -->
      <div
        class="text-6xl font-bold mb-4"
        :class="{
          'text-blue-600/20': color === 'blue',
          'text-orange-500/20': color === 'orange',
          'text-slate-500/20': color === 'slate'
        }"
      >
        {{ step }}
      </div>

      <!-- Icon -->
      <div
        class="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
        :class="{
          'bg-blue-600/10 text-blue-600': color === 'blue',
          'bg-orange-500/10 text-orange-500': color === 'orange',
          'bg-slate-500/10 text-slate-400': color === 'slate'
        }"
      >
        <Icon :name="icon" class="w-7 h-7" />
      </div>

      <!-- Title -->
      <h3 class="text-2xl font-bold mb-3 text-white">{{ title }}</h3>

      <!-- Description -->
      <p class="text-slate-400 leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  step: string
  title: string
  description: string
  icon: string
  color: 'blue' | 'orange' | 'slate'
}

defineProps<Props>()
</script>
