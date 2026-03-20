<script setup>
</script>

<template>
  <section id="about" class="py-24 relative bg-darkBg border-t border-white/5">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
      <!-- Image/Visual side -->
      <div class="flex-1 relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass-effect group">
        <!-- Overlay for dark mode vibes -->
        <div class="absolute inset-0 bg-accent-neonPurple/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
        <img src="https://images.unsplash.com/photo-1629824203875-a8c6aa0f2cb2?q=80&w=2070&auto=format&fit=crop" 
             alt="Jane Doe Tattoo Artist" 
             class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
      </div>

      <!-- Text side -->
      <div class="flex-1 space-y-8 text-center md:text-left">
        <h2 class="text-4xl md:text-5xl font-display font-bold">
          Detrás de la <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-neonGreen to-accent-neonPurple">Tinta y Lente</span>
        </h2>
        
        <div class="space-y-4 text-gray-400 font-light leading-relaxed">
          <p>
            Inspirada por la estética anime y los neones del cyberpunk, mi arte fluye entre agujas y fotogramas. Cada proyecto es una narrativa única, grabada en piel o capturada en video.
          </p>
          <p>
            Tanto si diseño un tatuaje personalizado como si dirijo una pieza audiovisual, mi objetivo es traducir tu esencia en una obra visual impactante.
          </p>
        </div>

        <div class="pt-6 grid grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 class="text-3xl font-display text-accent-neonPink font-bold">7+</h3>
            <p class="text-xs text-gray-400 uppercase tracking-widest mt-1">Años Exp.</p>
          </div>
          <div>
            <h3 class="text-3xl font-display text-accent-neonPurple font-bold">500+</h3>
            <p class="text-xs text-gray-400 uppercase tracking-widest mt-1">Tatuajes</p>
          </div>
           <div>
            <h3 class="text-3xl font-display text-accent-neonGreen font-bold">120</h3>
            <p class="text-xs text-gray-400 uppercase tracking-widest mt-1">Videos</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
