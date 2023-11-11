<script setup lang="ts">
import { ref } from 'vue'
import type { UserData } from '@/types/data'

const emit = defineEmits(['submit'])

const formData = ref<UserData>({
  name: '',
  lastname: '',
  country: '',
  city: '',
  hobby: ''
})

const submit = () => {
  emit('submit', formData)
}
</script>

<template>
  <div class="form">
    <div class="inputs">
      <input
        class="input"
        v-for="(_, key) in formData"
        v-bind:key="key"
        v-model="formData[key]"
        :placeholder="String(key)"
      />
    </div>
    <button class="button submit" @click="submit">Отправить</button>
  </div>
</template>

<style scoped>
.inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  margin-bottom: 40px;
}
</style>
