<template>
  <div>
    <el-button type="primary">Test Varaibles Override</el-button>
  </div>
</template>


<script>
import { ref } from "vue";
export default {
  setup() {
    const value = ref("");
    return {
      value,
    };
  },
};
</script>
