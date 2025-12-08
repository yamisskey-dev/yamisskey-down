<template>
  <div class="maintenance-container" style="background-image: url('https://raw.githubusercontent.com/yamisskey-dev/yamisskey-assets/main/yami.ski/yami-wallpaper.jpg')">
    <div class="background-overlay" />

    <div class="maintenance-card">
      <div class="glass-effect" />

      <div class="icon-container">
        <div class="icon-wrapper">
          <div class="maintenance-icon">
            <NuxtImg src="https://raw.githubusercontent.com/yamisskey-dev/yamisskey-assets/main/yami.ski/yami-logo-85x85.png" alt="Maintenance Icon" class="favicon-icon" width="64" height="64" format="webp" quality="80" />
          </div>
        </div>
      </div>

      <h1>{{ state.title }}</h1>

      <div class="mascot-container">
        <NuxtImg src="https://raw.githubusercontent.com/yamisskey-dev/yamisskey-assets/main/yui/yui-128x128.png" alt="yui" class="mascot-image" width="128" height="128" />
      </div>

      <div class="status-badge">
        <div class="pulse" />
        <span>サーバーがダウンしています</span>
      </div>

      <div class="message">
        <p v-for="(line, index) in state.message.split('\n')" :key="index">
          {{ line }}
        </p>
      </div>

      <div class="auto-notice">
        <p>このページは自動的に表示されています。</p>
      </div>

      <div class="links-container">
        <a v-for="(link, index) in state.links" :key="index" :href="link.url" target="_blank" rel="noopener noreferrer" class="link-button">
          {{ link.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface MaintenanceState {
  title: string;
  message: string;
  links: Array<{
    text: string;
    url: string;
  }>;
}

const state = ref<MaintenanceState>({
  title: '✝闇落ち✝',
  message: 'ご不便をおかけして申し訳ございません。',
  links: [
    { text: 'ステータス', url: 'https://status.yami.ski/' },
    { text: 'お問い合わせフォーム', url: 'https://pad.yami.ski/form/#/2/form/view/jtE97t4MO49M3LGf8Vs5uEkxkljD0X097UIoyqbmx3s/' },
    { text: 'やみはぶ', url: 'https://hub.yami.ski/' },
  ],
});
</script>

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
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
}

.maintenance-card {
  background: rgba(15, 10, 34, 0.9);
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 500px;
  width: 90%;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(82, 61, 216, 0.18);
  margin-top: 50px;
}

.glass-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(156, 72, 163, 0.05), rgba(112, 93, 216, 0.05), rgba(72, 61, 139, 0.05));
  border-radius: 24px;
  z-index: -1;
}

.icon-container {
  position: absolute;
  width: 100px;
  height: 100px;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  overflow: visible;
}

.icon-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.maintenance-icon {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(82, 61, 216, 0.08);
  position: relative;
}

.maintenance-icon::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #705dd8;
  border-right-color: #705dd8;
  animation: spinner 6s linear infinite;
}

.favicon-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  animation: slow-spin 6s linear infinite;
}

.mascot-container {
  margin: 1rem 0;
}

.mascot-image {
  width: 128px;
  height: 128px;
  object-fit: contain;
}

.status-badge {
  background: rgba(82, 61, 216, 0.08);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  color: rgba(168, 177, 194, 0.85);
}

.pulse {
  width: 8px;
  height: 8px;
  background-color: #705dd8;
  border-radius: 50%;
  animation: pulse-dot 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}

h1 {
  color: #a8b1c2;
  font-size: 2rem;
  margin: 1.5rem 0;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.message {
  color: rgba(168, 177, 194, 0.85);
  margin: 1.5rem 0;
  line-height: 1.8;
  font-size: 1.1rem;
}

.auto-notice {
  color: rgba(168, 177, 194, 0.85);
  margin: 1.5rem 0;
  font-size: 0.9rem;
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.link-button {
  background: rgba(82, 61, 216, 0.08);
  color: #705dd8;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  font-weight: 500;
}

.link-button:hover {
  background: rgba(82, 61, 216, 0.15);
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
}

@keyframes slow-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(0.95);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.95);
    opacity: 1;
  }
}

@media (max-width: 640px) {
  .maintenance-card {
    padding: 1.5rem;
    margin: 1rem;
    margin-top: 50px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .icon-container {
    width: 80px;
    height: 80px;
    top: -40px;
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
  }

  .maintenance-icon {
    width: 80px;
    height: 80px;
  }

  .favicon-icon {
    width: 48px;
    height: 48px;
  }

  .mascot-image {
    width: 96px;
    height: 96px;
  }

  .links-container {
    gap: 0.5rem;
  }

  .link-button {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }
}
</style>

