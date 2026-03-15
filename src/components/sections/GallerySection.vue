<template>
  <section id="gallery" class="section">
    <v-container>
      <RevealBlock>
        <SectionHeading
          eyebrow="Галерея / наши работы"
          title="Фото завершённых объектов"
          text="В демо используются placeholder-изображения. Замените ссылки на реальные фото вашей техники, процесса бурения и готовых скважин."
        />
      </RevealBlock>

      <v-row dense class="mt-6">
        <v-col
          v-for="(item, index) in galleryItems"
          :key="item.title"
          cols="12"
          :md="item.md"
          :lg="item.lg"
        >
          <RevealBlock :delay="index * 100">
            <v-card class="gallery-card" rounded="xl" variant="flat">
              <v-img :src="item.src" :height="item.height" cover>
                <div class="gallery-card__overlay">
                  <div>
                    <strong>{{ item.title }}</strong>
                    <span>{{ item.subtitle }}</span>
                  </div>
                </div>
              </v-img>
            </v-card>
          </RevealBlock>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import RevealBlock from '../common/RevealBlock.vue'
import SectionHeading from '../common/SectionHeading.vue'
import { galleryItems } from '../../data/landing'
</script>

<style scoped>
.gallery-card {
  overflow: hidden;
  background: var(--surface-card-solid);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-1);
}

.gallery-card__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 22px;
  background: linear-gradient(180deg, rgba(11, 16, 32, 0) 36%, rgba(11, 16, 32, 0.72) 100%);
}

.gallery-card__overlay strong {
  display: block;
  color: #fff;
  font-size: 1.15rem;
  margin-bottom: 6px;
}

.gallery-card__overlay span {
  color: rgba(255, 255, 255, 0.8);
}

.gallery-card :deep(.v-img__img) {
  transition: transform 0.75s ease;
}

.gallery-card:hover :deep(.v-img__img) {
  transform: scale(1.08);
}
</style>