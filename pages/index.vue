<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface MaintenanceState {
  title: string;
  message: string;
  endTime: Date;
  startTime: Date;
}

const state = ref<MaintenanceState>({
  title: 'メンテナンス中',
  message: '現在システムメンテナンスを実施しています。\nご不便をおかけして申し訳ございません。',
  startTime: new Date(), // 現在時刻
  endTime: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), // 2時間後
});

const progress = ref(0);
const timeRemaining = ref('');

const updateProgress = () => {
  const now = new Date();
  const total = state.value.endTime.getTime() - state.value.startTime.getTime();
  const elapsed = now.getTime() - state.value.startTime.getTime();
  progress.value = Math.min(100, (elapsed / total) * 100);

  const remaining = state.value.endTime.getTime() - now.getTime();
  if (remaining > 0) {
    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    timeRemaining.value = `${hours}時間${minutes}分`;
  } else {
    timeRemaining.value = '間もなく復旧予定';
  }
};

onMounted(() => {
  updateProgress();
  setInterval(updateProgress, 1000);
});

const formatDateTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};


</script>

<template>
  <div class="maintenance-container" style="background-image: url('/wallpaper.jpg')">}">
    <div class="background-overlay" />

    <div class="maintenance-card">
      <div class="glass-effect" />

      <div class="icon-wrapper">
        <div class="maintenance-icon">
          <NuxtImg
            src="/favicon.ico"
            alt="Maintenance Icon"
            class="favicon-icon"
            width="64"
            height="64"
            format="webp"
            quality="80"
          />
        </div>
      </div>

      <h1>{{ state.title }}</h1>

      <div class="status-badge">
        <div class="pulse" />
        <span>システムアップデート中</span>
      </div>

      <div class="message">
        <p v-for="(line, index) in state.message.split('\n')" :key="index">
          {{ line }}
        </p>
      </div>

      <div class="progress-bar">
        <div class="progress" :style="{ width: `${progress}%` }" />
      </div>

      <div class="estimated-time">
        <div class="time-details">
          <p>復旧予定時刻: {{ formatDateTime(state.endTime) }}</p>
          <p class="remaining-time">残り時間: {{ timeRemaining }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.maintenance-container {
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  font-family: 'Arial', sans-serif;
  position: relative;
  overflow: hidden;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35); /* wallpaperOverlay */
  z-index: 1;
}

.maintenance-card {
  background: rgba(15, 10, 34, 0.9); /* panel */
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5); /* shadow */
  text-align: center;
  max-width: 500px;
  width: 90%;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(82, 61, 216, 0.18); /* panelBorder */
}

.glass-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(156, 72, 163, 0.05), rgba(112, 93, 216, 0.05), rgba(72, 61, 139, 0.05)); /* bgGradient with low opacity */
  border-radius: 24px;
  z-index: -1;
}

.maintenance-icon {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: transparent;
  border-radius: 50%;
  padding: 1rem;
  position: relative;
}

.maintenance-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #705DD8; /* accent */
  border-right-color: #705DD8; /* accent */
  animation: spinner 2s linear infinite;
}

.favicon-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  animation: spin 3s linear infinite;
}

.status-badge {
  background: rgba(82, 61, 216, 0.08); /* buttonBg */
  border-radius: 20px;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.pulse {
  width: 8px;
  height: 8px;
  background-color: #705DD8; /* accent */
  border-radius: 50%;
  animation: pulse-dot 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}

h1 {
  color: #A8B1C2; /* fg */
  font-size: 2rem;
  margin: 1.5rem 0;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* shadow */
}

.message {
  color: rgba(168, 177, 194, 0.85); /* fgTransparent */
  margin: 1.5rem 0;
  line-height: 1.8;
  font-size: 1.1rem;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(82, 61, 216, 0.15); /* switchBg */
  border-radius: 3px;
  margin: 1.5rem 0;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(135deg, #9C48A3, #705DD8, #483D8B); /* buttonBgGradient */
  border-radius: 3px;
  transition: width 0.5s ease;
}

.time-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

.time-details p {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.remaining-time {
  color: #705DD8; /* accent color */
  font-weight: 500;
}

.estimated-time {
  background: rgba(82, 61, 216, 0.08);
  border-radius: 12px;
  padding: 1rem;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(168, 177, 194, 0.85);
}

/* progressバーのアニメーションをよりスムーズに */
.progress {
  transition: width 0.3s ease-in-out;
}

.estimated-time {
  background: rgba(82, 61, 216, 0.08); /* buttonBg */
  border-radius: 12px;
  padding: 1rem;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: rgba(168, 177, 194, 0.85); /* fgTransparent */
}

.time-icon {
  font-size: 1.2rem;
}

.loading {
  color: #705DD8; /* accent */
  font-size: 1rem;
  font-weight: 500;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
    border-width: 3px;
  }
  50% {
    border-width: 1px;
  }
  100% {
    transform: rotate(360deg);
    border-width: 3px;
  }
}

@keyframes pulse-dot {
  0% { 
    transform: scale(0.8); 
  }
  50% { 
    transform: scale(1); 
  }
  100% { 
    transform: scale(0.8); 
  }
}

@media (max-width: 640px) {
  .maintenance-card {
    padding: 1.5rem;
    margin: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .maintenance-icon {
    width: 80px;
    height: 80px;
  }

  .favicon-icon {
    width: 48px;
    height: 48px;
  }
}
</style>