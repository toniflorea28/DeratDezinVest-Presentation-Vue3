<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://www.creative-tim.com">
              Despre noi
            </a>
          </li>
          <li>
            <a href="https:///presentation.creative-tim.com">
              Galerie
            </a>
          </li>
          <li>
            <a href="https:///blog.creative-tim.com">
              Pagina facebook
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, DeratDezin Vest SRL. Website designed & coded by Flotek Software Solutions, Timișoara
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
