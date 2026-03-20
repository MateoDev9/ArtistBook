<script setup>
// Hero Section Component
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-darkBg">
    <!-- Background element (placeholder for video/illustration) -->
    <div class="absolute inset-0 z-0 opacity-10 bg-[url('../assets/bg_hero.png')] bg-cover bg-center bg-no-repeat grayscale"></div>
    
    <!-- Cyberpunk/Anime neon glow accents -->
    <div class="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-neonPurple rounded-full blur-[120px] opacity-10 animate-pulse"></div>
    <div class="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent-neonPink rounded-full blur-[100px] opacity-10"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <h1 class="text-6xl md:text-8xl font-display font-extrabold uppercase tracking-tight mb-6">
        <span class="block text-white">Jane Doe</span>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-neonPurple via-accent-neonPink to-accent-neonGreen animate-gradient drop-shadow-lg">
          Tattoo Artist
        </span>
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-400 font-light mb-10 max-w-2xl mx-auto">
        Blackwork Specialist <span class="text-accent-neonPink mx-2">|</span> Anime Ink <span class="text-accent-neonPurple mx-2">|</span> Dark Art
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a href="#portfolio" class="px-8 py-4 bg-white text-darkBg font-bold rounded-full hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Ver mi trabajo
        </a>
        <a href="#contact" class="px-8 py-4 glass-effect font-bold rounded-full hover:bg-white/10 hover:border-accent-neonPurple transition-all duration-300 group">
          Agendar Cita
          <span class="inline-block group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-gradient {
  background-size: 200% auto;
  animation: gradient 3s linear infinite;
}
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
