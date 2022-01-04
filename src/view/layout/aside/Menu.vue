<template>
  <ul class="menu-nav">
    <router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">Dashboard</span>
        </a>
      </li>
    </router-link>
    

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('vuetify') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon flaticon-web"></i>
        <span class="menu-text">Transaksi</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Transaksi</span>
            </span>
          </li>

          <router-link
            to="/vuetify/tables-data-tables"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Data Ziswaf</span>
              </a>
            </li>
          </router-link>


          
        </ul>
      </div>
    </li>
   

    

    
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>
