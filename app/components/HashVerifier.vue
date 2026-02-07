<template>
  <div class="max-w-4xl mx-auto">
    <div class="relative p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl glow-blue">
      <!-- Input fields -->
      <div class="space-y-5">
        <!-- Client Seed -->
        <div>
          <label class="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Icon name="lucide:user" class="w-4 h-4" />
            Client Seed
            <span class="text-slate-500">(your input)</span>
          </label>
          <input
            v-model="clientSeed"
            type="text"
            placeholder="Enter client seed"
            class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-mono text-sm"
          />
        </div>

        <!-- Unboxing Round (Nonce) -->
        <div>
          <label class="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Icon name="lucide:hash" class="w-4 h-4" />
            Nonce
            <span class="text-slate-500">(incremental counter)</span>
          </label>
          <input
            v-model.number="nonce"
            type="number"
            min="0"
            placeholder="0"
            class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-mono text-sm"
          />
        </div>

        <!-- Server Seed -->
        <div>
          <label class="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Icon name="lucide:server" class="w-4 h-4" />
            Server Seed
            <span class="text-slate-500">(revealed)</span>
          </label>
          <input
            v-model="serverSeed"
            type="text"
            placeholder="Enter server seed"
            class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-mono text-sm"
          />
        </div>

        <!-- Server Seed (Hashed) -->
        <div>
          <label class="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Icon name="lucide:lock" class="w-4 h-4" />
            Server Seed (Hashed)
            <span class="text-slate-500">(SHA-256)</span>
          </label>
          <input
            v-model="serverSeedHashed"
            type="text"
            placeholder="Enter hashed server seed for verification"
            class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-mono text-sm"
          />
        </div>

        <!-- Outcome -->
        <div>
          <label class="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
            <Icon name="lucide:target" class="w-4 h-4" />
            Outcome
            <span class="text-slate-500">(result to verify)</span>
          </label>
          <input
            v-model.number="outcome"
            type="number"
            min="1"
            max="100000000"
            placeholder="Enter outcome value"
            class="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-mono text-sm"
          />
        </div>
      </div>

      <!-- Verify Button -->
      <div class="mt-6">
        <button
          @click="verify"
          :disabled="!canVerify"
          class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:text-slate-500 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2"
        >
          <Icon name="lucide:shield-check" class="w-5 h-5" />
          Verify Result
        </button>
      </div>

      <!-- Verification Results -->
      <div v-if="verificationResult" class="mt-8 space-y-4">
        <!-- Server Seed Hash Verification -->
        <div class="p-4 rounded-xl" :class="hashVerificationClass">
          <div class="flex items-start gap-3">
            <Icon :name="hashVerificationIcon" class="w-5 h-5 mt-0.5 flex-shrink-0" />
            <div class="text-sm">
              <p class="font-medium mb-1">Server Seed Hash Verification</p>
              <p class="opacity-80">{{ hashVerificationMessage }}</p>
            </div>
          </div>
        </div>

        <!-- Calculated Roll Value -->
        <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-400 mb-1">Calculated Roll Value</p>
              <p class="text-2xl font-bold text-blue-400 font-mono">{{ calculatedRollValue }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-slate-400 mb-1">Expected Outcome</p>
              <p class="text-2xl font-bold text-slate-300 font-mono">{{ outcome }}</p>
            </div>
          </div>
        </div>

        <!-- Final Result -->
        <div class="p-6 rounded-xl" :class="finalResultClass">
          <div class="flex items-center gap-4">
            <Icon :name="finalResultIcon" class="w-10 h-10" />
            <div>
              <p class="text-lg font-bold">{{ finalResultTitle }}</p>
              <p class="text-sm opacity-80">{{ finalResultMessage }}</p>
            </div>
          </div>
        </div>

        <!-- Seed Used -->
        <div class="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <p class="text-xs text-slate-500 mb-1">Combined Seed</p>
          <p class="font-mono text-sm text-slate-400 break-all">{{ combinedSeed }}</p>
        </div>
      </div>

      <!-- Quick example -->
      <div class="mt-6 pt-6 border-t border-slate-800">
        <button
          @click="loadExample"
          class="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <Icon name="lucide:lightbulb" class="w-4 h-4" />
          Load example data
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Input refs
const clientSeed = ref('')
const nonce = ref(0)
const serverSeed = ref('')
const serverSeedHashed = ref('')
const outcome = ref<number | null>(null)

// Result refs
const verificationResult = ref(false)
const calculatedRollValue = ref(0)
const combinedSeed = ref('')
const hashMatchResult = ref(false)

const canVerify = computed(() => {
  return clientSeed.value &&
         nonce.value !== null &&
         serverSeed.value &&
         serverSeedHashed.value &&
         outcome.value !== null
})

const hashVerificationClass = computed(() => {
  return hashMatchResult.value
    ? 'bg-emerald-600/10 border border-emerald-600/20 text-emerald-400'
    : 'bg-red-600/10 border border-red-600/20 text-red-400'
})

const hashVerificationIcon = computed(() => {
  return hashMatchResult.value ? 'lucide:check-circle' : 'lucide:x-circle'
})

const hashVerificationMessage = computed(() => {
  return hashMatchResult.value
    ? 'Server seed hash verification passed! The SHA-256 hash of the server seed matches the provided hash.'
    : 'Server seed hash verification failed! The SHA-256 hash does not match the provided hash.'
})

const finalResultClass = computed(() => {
  const isVerified = hashMatchResult.value && calculatedRollValue.value === outcome.value
  return isVerified
    ? 'bg-emerald-600/10 border border-emerald-600/20 text-emerald-400'
    : 'bg-red-600/10 border border-red-600/20 text-red-400'
})

const finalResultIcon = computed(() => {
  const isVerified = hashMatchResult.value && calculatedRollValue.value === outcome.value
  return isVerified ? 'lucide:shield-check' : 'lucide:shield-x'
})

const finalResultTitle = computed(() => {
  const isVerified = hashMatchResult.value && calculatedRollValue.value === outcome.value
  return isVerified ? 'Verification Passed!' : 'Verification Failed!'
})

const finalResultMessage = computed(() => {
  const isVerified = hashMatchResult.value && calculatedRollValue.value === outcome.value
  if (isVerified) {
    return 'The outcome matches the calculated roll value and the server seed hash is valid.'
  } else if (!hashMatchResult.value) {
    return 'The server seed hash does not match. Verification cannot pass.'
  } else {
    return `The outcome (${outcome.value}) does not match the calculated roll value (${calculatedRollValue.value}).`
  }
})

// Convert ArrayBuffer to hex string
function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

// SHA-256 hash using Web Crypto API
async function sha256Hash(message: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return bufferToHex(hashBuffer)
}

// HMAC-SHA256 using Web Crypto API
async function hmacSha256(key: string, message: string): Promise<string> {
  const encoder = new TextEncoder()
  const keyData = encoder.encode(key)
  const messageData = encoder.encode(message)

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, messageData)
  return bufferToHex(signature)
}

// Verify server seed to server seed hashed
async function verifyServerSeedToServerSeedHashed(serverSeed: string, serverSeedHashed: string): Promise<boolean> {
  const hashed = await sha256Hash(serverSeed)
  return hashed === serverSeedHashed
}

// Get combined seed
function getCombinedSeed(serverSeed: string, clientSeed: string, nonce: number): string {
  return `${serverSeed}-${clientSeed}-${nonce}`
}

// Handle integer overflow (simulate 32-bit signed integer)
function handleIntOverflow(num: number): number {
  const MAX_INT = 2147483647
  const MIN_INT = -2147483648
  num = num % Math.pow(2, 32)
  if (num > MAX_INT) {
    num = num - Math.pow(2, 32)
  } else if (num < MIN_INT) {
    num = num + Math.pow(2, 32)
  }
  return num
}

// Get random int using HMAC-SHA256
async function getRandomInt(seed: string): Promise<number> {
  const hashHex = await hmacSha256(seed, '')

  // Take first 8 characters (4 bytes)
  const subHash = hashHex.slice(0, 8)
  const valueFromHash = Number.parseInt(subHash, 16)

  // Handle integer overflow
  const result = handleIntOverflow(valueFromHash)

  // Calculate final result
  const max = 1e8
  const min = 1
  const maxNumber = max - min
  return (Math.abs(result) % maxNumber) + min
}

// Main verification function
async function verify() {
  if (!canVerify.value) return

  // Verify server seed hash
  hashMatchResult.value = await verifyServerSeedToServerSeedHashed(serverSeed.value, serverSeedHashed.value)

  // Get combined seed
  combinedSeed.value = getCombinedSeed(serverSeed.value, clientSeed.value, nonce.value)

  // Get random roll value
  calculatedRollValue.value = await getRandomInt(combinedSeed.value)

  verificationResult.value = true
}

// Load example data
function loadExample() {
  clientSeed.value = '0r85l5fdrid6ifd2'
  nonce.value = 2142
  serverSeed.value = '067m9nyoxelubwxj3yofqy794zcnhta35g95ys99o5qpqsu6o9a8cjr31ns5plb9'
  serverSeedHashed.value = '9b0641a92f366411d8c2694ef301525331d8524064b3fb1378a4fc7b2c90d9b2'
  outcome.value = 24810162
  verificationResult.value = false
}
</script>
