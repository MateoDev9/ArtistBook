<script setup>
</script>

<template>
  <section id="contact" class="py-24 relative overflow-hidden">
    <!-- Background element -->
    <div class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent-neonGreen/10 to-transparent"></div>

    <div class="max-w-5xl mx-auto px-6 relative z-10">
      <div class="glass-effect rounded-3xl p-8 md:p-14 border border-white/10 flex flex-col md:flex-row gap-16">
        
        <!-- Info Socials -->
        <div class="flex-1 space-y-8">
          <div>
            <h2 class="text-4xl font-display font-bold mb-4">¿Hacemos <span class="text-accent-neonPink">Magia</span>?</h2>
            <p class="text-gray-400 font-light text-lg">
              Cuéntame tu idea para un tatuaje, un proyecto de video o una sesión de fotos.
            </p>
          </div>
          
          <div class="space-y-4">
            <a href="mailto:hello@artistbook.com" class="block text-xl hover:text-accent-neonPurple transition-colors">
              hello@artistbook.com
            </a>
            <div class="flex gap-4">
              <a href="#" class="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-accent-neonPink hover:border-accent-neonPink transition-all duration-300 text-xl shadow-[0_0_0_rgba(236,72,153,0)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                <span class="sr-only">Instagram</span>
                IG
              </a>
              <a href="#" class="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-accent-neonGreen hover:border-accent-neonGreen transition-all duration-300 text-xl shadow-[0_0_0_rgba(34,197,94,0)] hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                <span class="sr-only">TikTok</span>
                TK
              </a>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="flex-1">
          <form action="mailto:tuemail@artistbook.com" method="POST" enctype="text/plain" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2">Nombre / Alias</label>
              <input type="text" class="w-full bg-darkBg/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-neonPurple focus:ring-1 focus:ring-accent-neonPurple transition-colors" placeholder="V tu nombre aquí">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input type="email" class="w-full bg-darkBg/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-neonPink focus:ring-1 focus:ring-accent-neonPink transition-colors" placeholder="email@dominio.com">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2">Idea / Proyecto</label>
              <textarea rows="4" class="w-full bg-darkBg/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-neonGreen focus:ring-1 focus:ring-accent-neonGreen transition-colors" placeholder="Descríbeme qué tienes en mente..."></textarea>
            </div>

            <button type="submit" class="w-full py-4 bg-white text-darkBg font-bold rounded-xl hover:bg-gray-200 transition-colors">
              Enviar Mensaje →
            </button>
          </form>
        </div>
        
      </div>
    </div>
  </section>
</template>
