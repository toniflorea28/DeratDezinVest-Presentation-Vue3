<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        DeratDezin Vest <sup>&reg;</sup>
      </router-link>
    </template>
    <template slot="navbar-menu">
      

      <li class="nav-item">
        <router-link v-popover:popover1 class="navbar-brand px-4  text-white" to="/">
        <i class="now-ui-icons shopping_shop"></i>
          Acasa
        </router-link>
      </li>

      <drop-down
        tag="li"
        title=" Servicii"
        icon="now-ui-icons ui-2_settings-90"
        class="nav-item"
      >
        <nav-link to="/dezinfectie-timisoara"> Dezinfectie generală </nav-link>
        <nav-link to="/deratizare-timisoara"> Deratizare </nav-link>
        <nav-link to="/dezinsectie-timisoara"> Dezinsectie </nav-link>
      </drop-down>

      <li class="nav-item">
        <router-link v-popover:popover1 class="navbar-brand pl-4  text-white" to="/despre-noi">
        <i class="now-ui-icons travel_info"></i>
          Despre noi
        </router-link>
      </li>



      <!-- <li class="nav-item">
        <router-link v-popover:popover1 class="navbar-brand pl-4  text-white" to="/galerie">
        <i class="now-ui-icons design_image"></i>
           &nbsp; Galerie foto
        </router-link>
      </li> -->

      <li class="nav-item">
        <router-link v-popover:popover1 class="navbar-brand pl-4  text-white" to="/oferta">
        <i class="now-ui-icons files_paper"></i>
           &nbsp; Oferta
        </router-link>
      </li>

    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover,
  },
};
</script>

<style scoped></style>
