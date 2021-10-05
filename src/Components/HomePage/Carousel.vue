<template>
  <section class="carousel">
    <div id="heroControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#heroControls" class="active" data-slide-to="0"></li>
        <li data-target="#heroControls" data-slide-to="1"></li>
        <li data-target="#heroControls" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="img-fluid" src="@/assets/pro (22).jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="@/assets/pro (23).jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="img-fluid" src="@/assets/pro (26).jpg" alt="Third slide">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style scoped>
.img-fluid {
  margin: auto;
  min-width: 500px !important;
  height: 500px;
}

ol.carousel-indicators li {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid black;
}

ol.carousel-indicators li.active {
  background: #dbf0fa;
}
</style>
