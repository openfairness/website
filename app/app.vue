<template>
  <div class="min-h-screen bg-slate-950 text-white antialiased">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,122,215,0.15),transparent)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(255,102,0,0.1),transparent)]"></div>

      <!-- Animated particles/grid -->
      <div class="crypto-grid"></div>
    </div>

    <!-- Navigation -->
    <nav class="relative z-10 border-b border-slate-800/50 backdrop-blur-xl bg-slate-950/70">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 flex items-center justify-center bg-white p-1.5 rounded-md">
               <img src="/images/logo.png" alt="Open Fairness Logo" class="w-full h-full object-contain rounded-md">
            </div>
            <span class="text-xl font-bold tracking-tight">Open Fairness</span>
          </div>
          <div class="hidden md:flex items-center gap-8">
            <a href="#protocol" class="text-sm text-slate-400 hover:text-white transition-colors">Protocol</a>
            <a href="#verifier" class="text-sm text-slate-400 hover:text-white transition-colors">Verifier</a>
            <a href="#repositories" class="text-sm text-slate-400 hover:text-white transition-colors">Repositories</a>
            <a href="https://github.com/openfairness" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Icon name="lucide:github" class="w-4 h-4" />
              GitHub
            </a>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="relative z-10">
      <!-- Hero Section -->
      <HeroSection />

      <!-- Protocol Section -->
      <section id="protocol" class="py-32 relative">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span class="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p class="text-xl text-slate-400 max-w-2xl mx-auto">
              Our three-step commitment scheme ensures complete transparency and mathematical proof of fairness
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <ProtocolCard
              step="01"
              title="Commit"
              description="Server generates a random seed and commits to its SHA-256 hash before the game begins"
              icon="lucide:lock"
              color="blue"
            />
            <ProtocolCard
              step="02"
              title="Reveal"
              description="After the game concludes, the server reveals the original seed, allowing verification"
              icon="lucide:unlock"
              color="orange"
            />
            <ProtocolCard
              step="03"
              title="Verify"
              description="Anyone can verify that the hash matches and the outcome was truly random"
              icon="lucide:check-circle"
              color="slate"
            />
          </div>
        </div>
      </section>

      <!-- Interactive Verifier -->
      <section id="verifier" class="py-32 relative">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div class="max-w-7xl mx-auto px-6 relative">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span class="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Live Verifier
              </span>
            </h2>
            <p class="text-xl text-slate-400 max-w-2xl mx-auto">
              Verify the integrity of any game outcome in real-time using our cryptographic tools
            </p>
          </div>

          <HashVerifier />
        </div>
      </section>

      <!-- GitHub Repositories -->
      <section id="repositories" class="py-32 relative">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span class="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                Core Repositories
              </span>
            </h2>
            <p class="text-xl text-slate-400 max-w-2xl mx-auto">
              Open-source implementations of provably fair algorithms across multiple platforms
            </p>
          </div>

          <RepositoriesGrid />
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 border-t border-slate-800/50 py-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 flex items-center justify-center p-1 bg-white rounded-md">
               <img src="/images/logo.png" alt="Open Fairness Logo" class="w-full h-full object-contain rounded-md">
            </div>
            <span class="text-sm text-slate-400">Open Fairness</span>
          </div>
          <p class="text-sm text-slate-500">
            In Mathematics We Trust • Open Source • MIT License
          </p>
          <div class="flex items-center gap-4">
            <a href="https://github.com/openfairness" target="_blank" class="text-slate-400 hover:text-white transition-colors">
              <Icon name="lucide:github" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
