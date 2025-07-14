<script setup lang="ts">
import WebFooter from '@/components/layput/WebFooter.vue'
</script>

<template>
  <div class="web">
    <el-container>
      <router-view />
      <el-footer>
        <web-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.web {
  .el-footer {
    height: auto;
    border: 1px solid #dcdfe6;
  }
}
</style>
