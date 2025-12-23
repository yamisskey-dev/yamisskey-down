<template>
  <div class="maintenance-container" style="background-image: url('https://angelkawaii.com/wp-content/uploads/2024/01/33.png')">
    <div class="background-overlay" />

    <a href="https://github.com/yamisskey-dev/yamisskey-down" target="_blank" rel="noopener noreferrer" class="github-corner" aria-label="View source on GitHub">
      <svg width="80" height="80" viewBox="0 0 250 250" style="fill: rgba(16, 11, 34, 0.86); color: #C2CBE0; position: fixed; z-index: 10; top: 0; border: 0; right: 0;" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm" />
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body" />
      </svg>
    </a>

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

      <div class="status-badge">
        <div class="pulse" />
        <span>サーバーがダウンしています</span>
      </div>

      <div class="auto-notice">
        <p>このページは自動的に表示されています。</p>
      </div>

      <div class="mascot-container">
        <NuxtImg src="https://raw.githubusercontent.com/yamisskey-dev/yamisskey-assets/main/yui/yui-128x128.png" alt="yui" class="mascot-image" width="128" height="128" />
      </div>

      <div class="message">
        <p v-for="(line, index) in state.message.split('\n')" :key="index">
          {{ line }}
        </p>
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
  title: '✝闇堕ち✝',
  message: '鯖が落ちちゃった...\n復旧まで待っててね...',
  links: [
    { text: 'サービス一覧', url: 'https://hub.yami.ski/' },
    { text: 'ステータス', url: 'https://status.yami.ski/' },
    { text: 'お問い合わせ', url: 'https://pad.yami.ski/form/#/2/form/view/jtE97t4MO49M3LGf8Vs5uEkxkljD0X097UIoyqbmx3s/' },
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
  background: rgba(0, 0, 0, 0.25);
  z-index: 1;
}

.maintenance-card {
  background: rgba(16, 11, 34, 0.86);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 400px;
  width: 90%;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(163, 116, 255, 0.25);
  margin-top: 50px;
}

.glass-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(179, 45, 182, 0.05), rgba(150, 107, 255, 0.05), rgba(75, 56, 165, 0.05));
  border-radius: 12px;
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
  background: rgba(163, 116, 255, 0.15);
  position: relative;
}

.maintenance-icon::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #A374FF;
  border-right-color: #A374FF;
  animation: spinner 6s linear infinite;
}

.favicon-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
  animation: slow-spin 6s linear infinite;
}

.mascot-container {
  margin: 0 0 0.25rem 0;
}

.mascot-image {
  width: 128px;
  height: 128px;
  object-fit: contain;
}

.status-badge {
  background: rgba(163, 116, 255, 0.15);
  border: 1px solid rgba(163, 116, 255, 0.3);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0.25rem 0;
  color: #C2CBE0;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.pulse {
  width: 10px;
  height: 10px;
  background-color: #A374FF;
  border-radius: 50%;
  animation: pulse-dot 1.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  box-shadow: 0 0 8px rgba(163, 116, 255, 0.5);
}

h1 {
  color: #C2CBE0;
  font-size: 2.2rem;
  margin: 1.5rem 0 0.25rem 0;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.5px;
}

.message {
  color: rgba(194, 203, 224, 0.88);
  margin: 0 0 1rem 0;
  line-height: 1.6;
  font-size: 1rem;
}

.auto-notice {
  color: rgba(194, 203, 224, 0.55);
  margin: 0.25rem 0 1rem 0;
  font-size: 0.85rem;
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
}

.link-button {
  background: rgba(163, 116, 255, 0.2);
  color: #A374FF;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  font-weight: 500;
}

.link-button:hover {
  background: rgba(163, 116, 255, 0.3);
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
    border-radius: 12px;
  }

  h1 {
    font-size: 1.8rem;
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

<style>
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%, 100% { transform: rotate(0); }
  20%, 60% { transform: rotate(-25deg); }
  40%, 80% { transform: rotate(10deg); }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>

