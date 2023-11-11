<script setup lang="ts"></script>

<template>
  <div class="popup-wrapper open" id="popup">
    <div class="popup">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.popup-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #0000005a;
  display: none;
}

.popup-wrapper.open {
  display: flex;
  animation: slide 0.4s ease;
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateY(-1000px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.popup {
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
