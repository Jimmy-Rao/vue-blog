<!--
 * @Author: Ayan
 * @Date: 2023-09-28 11:30:47
 * @LastEditors: Ayan
 * @LastEditTime: 2023-09-28 11:36:17
 * @Description: file not
-->
<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const count = ref<number>(0)
  const increment = () => {
    count.value += 1
  }
</script>
