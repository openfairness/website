<template>
  <div class="md:hidden">
    <!-- Mobile menu button -->
    <button
      @click="isOpen = !isOpen"
      class="relative z-50 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
      :aria-expanded="isOpen"
    >
      <Icon
        :name="isOpen ? 'lucide:x' : 'lucide:menu'"
        class="w-6 h-6 text-white"
      />
    </button>

    <!-- Mobile menu overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl"
        @click="isOpen = false"
      >
        <div class="flex flex-col items-center justify-center min-h-screen gap-8 p-6">
          <a
            v-for="item in menuItems"
            :key="item.href"
            :href="item.href"
            @click="isOpen = false"
            class="text-2xl font-semibold text-slate-300 hover:text-white transition-colors"
          >
            {{ item.label }}
          </a>
          <a
            href="https://github.com/openfairness"
            target="_blank"
            class="inline-flex items-center gap-2 px-6 py-3 text-lg bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            <Icon name="lucide:github" class="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const menuItems = [
  { label: 'Protocol', href: '#protocol' },
  { label: 'Verifier', href: '#verifier' },
  { label: 'Repositories', href: '#repositories' }
]
</script>
