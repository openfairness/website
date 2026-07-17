<template>
  <div class="md:hidden">
    <!-- Mobile menu button -->
    <button
      @click="isOpen = !isOpen"
      class="relative z-[70] p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
      :aria-expanded="isOpen"
    >
      <Icon
        :name="isOpen ? 'lucide:x' : 'lucide:menu'"
        class="w-6 h-6 text-white"
      />
    </button>

    <!-- Mobile menu overlay -->
    <Teleport to="body">
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
          class="fixed inset-0 z-[100] min-h-screen bg-slate-950 text-white md:hidden"
          @click="isOpen = false"
        >
          <button
            type="button"
            class="absolute right-6 top-4 z-[110] p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            aria-label="Close menu"
            @click="isOpen = false"
          >
            <Icon name="lucide:x" class="w-6 h-6 text-white" />
          </button>

          <div class="flex flex-col items-center justify-center min-h-screen gap-8 p-6 bg-slate-950">
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
              href="https://static.openfairness.com/ext/openfairness-ext.zip"
              @click="isOpen = false"
              class="inline-flex items-center gap-2 px-6 py-3 text-lg bg-blue-600/90 hover:bg-blue-500 rounded-xl transition-colors"
            >
              <Icon name="lucide:download" class="w-5 h-5" />
              Extension
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
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

watch(isOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})

const menuItems = [
  { label: 'Protocol', href: '#protocol' },
  { label: 'Verifier', href: '#verifier' },
  { label: 'Repositories', href: '#repositories' }
]
</script>
