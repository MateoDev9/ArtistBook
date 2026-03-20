<script setup>
</script>

<template>
  <section id="about" class="py-24 relative bg-darkBg border-t border-white/5">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
      <!-- Image/Visual side -->
      <div class="flex-1 relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass-effect group border-gray-800">
        <!-- Overlay for dark mode vibes -->
        <div class="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/20 transition-colors duration-500"></div>
        <img src="../assets/about_artist.png" 
             alt="Jane Doe Tattooing" 
             class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
      </div>

      <!-- Text side -->
      <div class="flex-1 space-y-8 text-center md:text-left">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white">
          Sangre y <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-neonPink to-accent-neonPurple">Tinta</span>
        </h2>
        
        <div class="space-y-4 text-gray-400 font-light leading-relaxed">
          <p>
            Inspirada por la estética oscura, el manga y los neones del cyberpunk, mi arte cobra vida a través de las agujas. Cada tatuaje es una narrativa única, grabada permanentemente en la piel.
          </p>
          <p>
            Me especializo en Blackwork y trazos finos, buscando siempre traducir tus ideas en una obra visual impactante e irrepetible.
          </p>
        </div>

        <div class="pt-6 grid grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 class="text-3xl font-display text-accent-neonPink font-bold">7+</h3>
            <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">Años Exp.</p>
          </div>
          <div>
            <h3 class="text-3xl font-display text-accent-neonPurple font-bold">800+</h3>
            <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">Tatuajes</p>
          </div>
           <div>
            <h3 class="text-3xl font-display text-accent-neonGreen font-bold">15+</h3>
            <p class="text-xs text-gray-500 uppercase tracking-widest mt-1">Premios</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
