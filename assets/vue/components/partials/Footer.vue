<template>
  <footer class="navbar">
    <h1 class="sr-only"></h1>
    <div class="o-footer-bottom">
      <ul>
        <li class="pull-left">
          <span>© Orange Business Services 2022</span>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer.navbar {
  z-index: 100;
  margin-bottom: 0;
  margin-top: 0;
  height: 40px !important;
  color: #fff;
  background-color: #000;
  position: absolute;
  width: 100%;
  min-height: auto;
}

.o-footer-bottom ul {
  margin: 0;
  text-align: center;
  list-style: outside none none;
}

.o-footer,
.o-footer .o-footer-bottom {
  height: 40px;
  min-height: auto;
  padding: 0;
}

.o-footer-bottom span {
  font-size: 0.95rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
