<script>
export default {
  data() {
    return {
      name: '',
      hello: ''
    }
  },
}
</script>

<template>
  <Header />
  <div class="mainContainer">
    <div class="myContent">
      <Menu />
      <router-view :key="$route.fullPath" />
    </div>
  </div>
  <Footer />
</template>