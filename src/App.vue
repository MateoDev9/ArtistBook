<script setup>
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <main class="min-h-screen font-sans selection:bg-accent-neonPink selection:text-white">
    <!-- Navbar / Header simple -->
    <header class="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" class="text-2xl font-display font-bold tracking-tighter">
          ARTIST<span class="text-accent-neonPurple">BOOK</span>.
        </a>
        <nav class="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" class="hover:text-white transition-colors">About</a>
          <a href="#portfolio" class="hover:text-accent-neonGreen transition-colors">Portfolio</a>
          <a href="#contact" class="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>

    <HeroSection />
    <AboutSection />
    <PortfolioSection />
    <ContactSection />
    
    <footer class="py-8 text-center text-sm text-gray-500 border-t border-white/5">
      <p>&copy; {{ new Date().getFullYear() }} ArtistBook. Designed with Vue 3 & Tailwind.</p>
    </footer>
  </main>
</template>
