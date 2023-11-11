<script setup lang="ts">
import ContentView from '@/components/ContentView.vue'
import FormControl from '@/components/FormControl.vue'
import PopupWindow from '@/components/PopupWindow.vue'
import type { UserData } from '@/types/data'
import { ref } from 'vue'
import type { Ref } from 'vue'

const showContent = ref(false)
const showPopup = ref(false)

const data = ref<UserData>({
  name: '',
  lastname: '',
  country: '',
  city: '',
  hobby: ''
})

const togglePopup = () => {
  showPopup.value = !showPopup.value
  if (showContent.value) {
    toggleContent()
  }
}

const toggleContent = () => {
  showContent.value = !showContent.value
}

const showData = (newData: Ref<UserData>) => {
  data.value = newData.value
  togglePopup()
  toggleContent()
}
</script>

<template>
  <main>
    <ContentView :info="data" v-if="showContent" />
    <button class="button" @click="togglePopup">Начать</button>
    <PopupWindow v-if="showPopup">
      <FormControl @submit="showData" />
    </PopupWindow>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
</style>
