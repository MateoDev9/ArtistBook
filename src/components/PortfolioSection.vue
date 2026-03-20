<script setup>
import { ref, computed } from 'vue'

const filters = ['Todo', 'Blackwork', 'Anime', 'Realismo']
const activeFilter = ref('Todo')

const projects = [
  { id: 1, title: 'Cyber Demon', category: 'Blackwork', image: 'https://images.unsplash.com/photo-1590246814883-57832afa4e59?q=80&w=2070&auto=format&fit=crop', tall: true },
  { id: 2, title: 'Goku Manga Sleeve', category: 'Anime', image: 'https://images.unsplash.com/photo-1620224213824-00e9641477df?q=80&w=2072&auto=format&fit=crop', tall: false },
  { id: 3, title: 'Geisha Cyberpunk', category: 'Realismo', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop', tall: false },
  { id: 4, title: 'Dark Mandala', category: 'Blackwork', image: 'https://images.unsplash.com/photo-1563240619-44ce0ceeb0b0?q=80&w=1980&auto=format&fit=crop', tall: true },
  { id: 5, title: 'Evangelion Unit 01', category: 'Anime', image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2070&auto=format&fit=crop', tall: false },
  { id: 6, title: 'Lion Portrait', category: 'Realismo', image: 'https://images.unsplash.com/photo-1574343849132-70b138e65e68?q=80&w=1974&auto=format&fit=crop', tall: true },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todo') return projects
  return projects.filter(p => p.category === activeFilter.value)
})

</script>

<template>
  <section id="portfolio" class="py-24 relative bg-darkBg border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
          Mi <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-neonPink to-accent-neonPurple">Trabajo</span>
        </h2>
        
        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-3">
          <button 
            v-for="cat in filters" :key="cat"
            @click="activeFilter = cat"
            :class="[
              'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border',
              activeFilter === cat 
                ? 'bg-accent-neonPurple border-accent-neonPurple text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]' 
                : 'border-gray-800 bg-cardBg text-gray-400 hover:border-accent-neonPink hover:text-white'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Masonry Grid CSS approach -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 shadow-2xl bg-cardBg"
        >
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
            :class="project.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'"
            loading="lazy"
          />
          
          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span class="text-accent-neonGreen text-xs font-bold uppercase tracking-widest mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{{ project.category }}</span>
            <h3 class="text-2xl font-display font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">{{ project.title }}</h3>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
