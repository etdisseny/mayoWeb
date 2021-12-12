<template>
  <section class="bg-oscuro">
    <div class="textBaner d-flex justify-content-between">
      <section
        class="txt"
        v-rellax="{
          speed: -3,
        }"
      >
        <h1 class="text-white" v-scroll-reveal.reset="{ delay: 400, scale: 2 }">
          Comunicamos
        </h1>
        <h3 class="text-white" v-scroll-reveal.reset="{ delay: 500, scale: 2 }">
          salud
        </h3>
        <h2 class="text-white" v-scroll-reveal.reset="{ delay: 800, scale: 2 }">
          comunicación integral personalizada en salud
        </h2>
      </section>
    </div>
    <video
      id="background-video"
      autoplay
      loop
      muted
      poster=""
      class="img-fluid relative"
    >
      <source
        src="../assets/TEXT-FACE.mp4"
        type="video/mp4"
        class="img-fluid"
      />
    </video>
  </section>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
#background-video {
  height: 100vh;
  width: 100%;
  background-size: cover;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
.bg-oscuro {
  height: 100vh;
  background: linear-gradient(
    339.73deg,
    rgba(2, 145, 169, 0.35) 14.14%,
    rgba(9, 58, 100, 0.85) 77.68%
  );
  width: 100%;
}
.textBaner {
  padding: 6rem;
}
h1 {
  font-family: "Syncopate", sans-serif;
  font-size: 5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 8rem;
}
h2 {
  font-family: "Syncopate", sans-serif;
  font-size: 2rem;
  font-weight: 400;
}
h3 {
  font-family: "Syncopate", sans-serif;
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 8rem;
}
</style>