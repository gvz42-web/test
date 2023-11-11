<script setup lang="ts">
import type { PropType } from 'vue'
import type { UserData } from '@/types/data'

const props = defineProps({
  info: {
    type: Object as PropType<UserData>,
    required: true
  }
})
</script>

<template>
  <div class="content">
    <div v-for="(value, key) in props.info" v-bind:key="key">{{ key }}: {{ value }}</div>
    <div class="json">JSON: {{ JSON.stringify(props.info) }}</div>
  </div>
</template>

<style scoped>
.content {
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  font-size: 20px;
}

.json {
  font-size: 16px;
  margin-top: 80px;
}
</style>
