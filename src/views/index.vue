<script setup lang="ts"></script>
<template>
  <div>
    Hello Mobile Web Cli
    <router-view v-slot="{ Component }">
      <keep-alive :include="['List']">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss" scoped></style>
