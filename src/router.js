import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/dashboard",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue")
        },
        
        {
          path: "/vuetify",
          name: "vuetify",
          component: () => import("@/view/pages/vuetify/Vuetify.vue"),
          children: [
            
            {
              path: "forms",
              name: "vuetify-forms",
              component: () => import("@/view/pages/vuetify/forms/Forms.vue")
            },
            
            {
              path: "tables-data-tables",
              name: "vuetify-data-tables",
              component: () =>
                import("@/view/pages/vuetify/tables/DataTables.vue")
            },
            
          ]
        },
        
        {
          path: "/profile",
          name: "profile",
          component: () => import("@/view/pages/profile/Profile.vue"),
          children: [
            {
              path: "profile-1",
              name: "profile-1",
              component: () => import("@/view/pages/profile/Profile-1.vue")
            },
            
          ]
        }
      ]
    },
    
    {
      path: "/",
      component: () => import("@/view/pages/auth/login_pages/Login-1"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/login_pages/Login-1")
        },
        {
          name: "register",
          path: "/register",
          component: () => import("@/view/pages/auth/login_pages/Login-1")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
