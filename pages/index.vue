<template>
  <div class="max-w-6xl mx-auto space-y-16 px-4">
    <HeroSection />
    <AiWorkflowSection />
    <ExperienceTimeline />
    <ProjectsShowcase />
    <ContactPanel />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import AiWorkflowSection from '~/components/sections/AiWorkflowSection.vue'
import ExperienceTimeline from '~/components/sections/ExperienceTimeline.vue'
import ProjectsShowcase from '~/components/sections/ProjectsShowcase.vue'
import ContactPanel from '~/components/sections/ContactPanel.vue'
</script>
