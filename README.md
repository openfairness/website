# Open Fairness Website

> In Mathematics We Trust • Open Source • MIT License

The official website for Open Fairness - an open-source initiative promoting cryptographically provably fair algorithms for transparent gaming and random number generation.

## 🌐 Live Site

Visit [openfairness.com](https://openfairness.com) to learn more about provably fair gaming systems.

## ✨ Features

### Interactive Protocol Demonstration
- **Three-Step Commitment Scheme**: Visual explanation of the commit-reveal-verify protocol
- **Educational Content**: Learn how cryptographic hashing ensures transparency in gaming systems

### Live Hash Verifier
- **Real-time Verification**: Verify game outcomes using our browser-based cryptographic tools
- **SHA-256 Hashing**: Server seeds are committed using SHA-256 hash before games begin
- **HMAC-SHA256**: Generate random numbers using HMAC-SHA256 with combined seeds
- **Full Auditability**: Anyone can verify the integrity of any game outcome

### Technical Highlights
- **Client Seedable**: Users provide their own client seed for additional randomness
- **Transparent Process**: All cryptographic operations performed client-side using Web Crypto API
- **No Trust Required**: Mathematical proof of fairness, not just promises

## 🛠️ Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com) - The Full-Stack Vue Framework
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework for rapid UI development
- **Icons**: [Lucide Vue](https://lucide.dev) - Beautiful & consistent icon toolkit
- **Utilities**: [VueUse](https://vueuse.org) - Composition utility library.
- **Cryptography**: Web Crypto API (native browser API)
- **TypeScript**: Full type safety throughout the application

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🏗️ Project Structure

```
openfairness-website/
├── app/
│   ├── components/
│   │   ├── HeroSection.vue       # Landing hero with animated particles
│   │   ├── ProtocolCard.vue      # Protocol explanation cards
│   │   ├── HashVerifier.vue      # Interactive hash verification tool
│   │   ├── RepositoriesGrid.vue  # GitHub repository showcase
│   │   └── MobileNav.vue         # Mobile navigation menu
│   └── app.vue                   # Main application layout
├── public/
│   └── images/                   # Static assets
├── nuxt.config.ts                # Nuxt configuration
└── package.json
```

## 🔐 Cryptographic Algorithm

The verifier implements the following algorithm:

1. **Commit Phase**:
   - Server generates a random seed
   - Server publishes `SHA-256(server_seed)` hash
   - Client provides their own seed

2. **Game Phase**:
   - Combined seed = `${server_seed}-${client_seed}-${nonce}`
   - Random number = `HMAC-SHA256(combined_seed, "")` scaled to game range

3. **Verify Phase**:
   - Server reveals the original server_seed
   - Anyone can verify `SHA-256(server_seed) === published_hash`
   - Anyone can recalculate the game outcome

## 📚 Core Repositories

### [fairness-sdk](https://github.com/openfairness/openfairness-sdk)
Java SDK for provably fair gaming systems. Core cryptographic algorithms including SHA-256 hashing, HMAC verification, and seed generation utilities.

### [website](https://github.com/openfairness/openfairness-website)
This repository - The official website built with Nuxt 4, featuring real-time hash verification tools and interactive protocol demonstrations.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Organization](https://github.com/openfairness)
- [Documentation](https://github.com/openfairness/openfairness-sdk)
- [Issues](https://github.com/openfairness/openfairness-website/issues)

---

Made with ❤️ by the Open Fairness community
