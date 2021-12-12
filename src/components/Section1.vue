<template>
  <section class="relative bg-claro">
    <video
      id="background-video2"
      autoplay
      loop
      muted
      poster=""
      class="img-fluid relative"
    >
      <source
        src="../assets/textura-white.mp4"
        type="video/mp4"
        class="img-fluid"
      />
    </video>
    <div
      class="face1"
      v-rellax="{
        speed: 2,
      }"
    >
      <img src="../assets//CARA_1.png" alt="" class="face1" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#background-video2 {
  height: 100vh;
  width: 100%;
  background-size: cover;
  object-fit: cover;
  position: absolute;
  z-index: -1;
}
.bg-claro {
  height: 100vh;
  background: linear-gradient(
    339.73deg,
    rgba(255, 255, 255, 0.98),
    rgba(255, 255, 255, 0.95)
  );
  width: 100%;
}
.face1 {
  position: absolute;
  right: 0;
  z-index: 5;
}
</style>