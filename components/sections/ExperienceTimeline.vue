<template>
  <section id="work" class="py-16">
    <div class="mb-8">
      <p class="hero-chip">Impact log</p>
      <h2 class="section-heading mt-4">Shiprooms & learning loops</h2>
      <p class="section-subtitle mt-2">
        Every build starts with measurable constraints. Here are the projects that shaped my toolkit the most.
      </p>
    </div>
    <div class="timeline-grid">
      <article
        v-for="item in profile.experiences"
        :key="item.org"
        class="timeline-entry"
      >
        <div class="timeline-period">
          <div v-for="(period, index) in item.period.split('–')" :key="index">{{ period }}</div>
        </div>
        <SurfaceCard class="rounded-3xl p-6">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <p class="text-lg font-semibold">{{ item.role }}</p>
              <p class="text-sm text-soft">{{ item.org }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="hero-chip text-[0.65rem]"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          <p class="text-sm leading-relaxed text-soft">{{ item.impact }}</p>
        </SurfaceCard>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'
import SurfaceCard from '~/components/ui/SurfaceCard.vue'
</script>

<style scoped>
.timeline-grid {
  position: relative;
  margin-left: clamp(0px, 2vw, 32px);
  padding-left: 28px;
}

.timeline-grid::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  width: 2px;
  background: linear-gradient(180deg, rgba(124, 84, 255, 0.3), rgba(36, 225, 193, 0.35));
}

.timeline-entry {
  position: relative;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 24px;
}

.timeline-entry::before {
  content: '';
  position: absolute;
  top: 18px;
  left: 12px;
  width: 12px;
  height: 12px;
  background: #24e1c1;
  border-radius: 50%;
  border: 2px solid #050812;
  box-shadow: 0 0 18px rgba(36, 225, 193, 0.7);
}

.timeline-period {
  text-align: right;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding-right: 12px;
}

@media (max-width: 960px) {
  .timeline-entry {
    grid-template-columns: 1fr;
    padding-left: 12px;
  }

  .timeline-period {
    text-align: left;
    padding-bottom: 4px;
  }

  .timeline-grid::before {
    left: 2px;
  }

  .timeline-entry::before {
    left: 2px;
  }
}
</style>
