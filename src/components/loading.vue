<template>
    <div class="absloute-center">
      <mu-circular-progress :size="60" color="red"/>
    </div>
</template>

<script>
export default {
  name: "loading"
};
</script>

<style scoped>
.absloute-center {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
