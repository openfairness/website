<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <a
      v-for="repo in repositories"
      :key="repo.name"
      :href="repo.url"
      target="_blank"
      rel="noopener noreferrer"
      class="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
    >
      <!-- Hover gradient -->
      <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div class="relative z-10">
        <!-- Icon -->
        <div
          class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          :class="repo.iconBg"
        >
          <Icon :name="repo.icon" class="w-6 h-6" :class="repo.iconColor" />
        </div>

        <!-- Name -->
        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {{ repo.name }}
        </h3>

        <!-- Description -->
        <p class="text-slate-400 text-sm mb-4 leading-relaxed">
          {{ repo.description }}
        </p>

        <!-- Language and stars -->
        <div class="flex items-center gap-4 text-sm">
          <span
            class="flex items-center gap-1.5"
            :style="{ color: repo.languageColor }"
          >
            <span class="w-2.5 h-2.5 rounded-full" :style="{ backgroundColor: repo.languageColor }"></span>
            {{ repo.language }}
          </span>
          <span class="flex items-center gap-1 text-slate-500">
            <Icon name="lucide:star" class="w-4 h-4" />
            {{ repo.stars }}
          </span>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
interface Repository {
  name: string
  description: string
  url: string
  icon: string
  iconBg: string
  iconColor: string
  language: string
  languageColor: string
  stars?: string
}

const repositories: Repository[] = [
  {
    name: 'fairness-sdk',
    description: 'Java SDK for provably fair gaming systems. Core cryptographic algorithms including SHA-256 hashing, HMAC verification, and seed generation utilities.',
    url: 'https://github.com/openfairness/openfairness-sdk',
    icon: 'lucide:shield',
    iconBg: 'bg-blue-600/10',
    iconColor: 'text-blue-600',
    language: 'Java',
    languageColor: '#b07219',
  },
  {
    name: 'website',
    description: 'Official website built with Nuxt 4. Features real-time hash verification tool, protocol documentation, and interactive demos.',
    url: 'https://github.com/openfairness/openfairness-website',
    icon: 'lucide:check-circle',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-500',
    language: 'Vue',
    languageColor: '#41b883',
  },
]
</script>
