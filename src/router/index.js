import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import HospitalRegistrationPartOne from "@/pages/HospitalRegistrationPartOne.vue";
import HospitalRegistrationPartTwo from "@/pages/HospitalRegistrationPartTwo.vue";
import HospitalRegistrationPartThree from "@/pages/HospitalRegistrationPartThree.vue";
import HospitalRegistrationPartFour from "@/pages/HospitalRegistrationPartFour.vue";
import CheckYourEmail from "@/pages/CheckYourEmail.vue";
// import RedefinePassword from "@/pages/RedefinePassword.vue";
import RedefinePasswordConfirmation from "@/pages/RedefinePasswordConfirmation.vue";
import Faq from "@/pages/Faq.vue";

//DASHBOARD
import Dashboard from "@/pages/dashboard/Dashboard.vue";
import Schedules from "@/pages/dashboard/Schedules.vue";
import Donator from "@/pages/dashboard/Donator.vue";
import BookSchedules from "@/pages/dashboard/BookSchedules.vue";
import Settings from "@/pages/dashboard/Settings.vue";
import RedefinePassword from "@/pages/dashboard/RedefinePassword.vue";
import EditHospital from "@/pages/dashboard/EditHospital.vue";
import Help from "@/pages/dashboard/Help.vue";
import Statistics from "@/pages/dashboard/Statistics.vue";

// TELAS DE TESTE
import Requisicoes from "@/pages/Requisicoes.vue";
import Firebase from "@/pages/Firebase.vue";
import Criptografia from "@/pages/Criptografia.vue";
import Menu from "@/pages/Menu.vue";
import Notificacao from "@/pages/Notificacao.vue";
import PopUp from "@/pages/PopUp.vue";
import Pizza from "@/pages/Pizza.vue";
import Adicionar from "@/pages/Adicionar.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/hospital-registration-part-one",
    name: "HospitalRegistrationPartOne",
    component: HospitalRegistrationPartOne,
  },
  {
    path: "/hospital-registration-part-two",
    name: "HospitalRegistrationPartTwo",
    component: HospitalRegistrationPartTwo,
  },
  {
    path: "/hospital-registration-part-three",
    name: "HospitalRegistrationPartThree",
    component: HospitalRegistrationPartThree,
  },
  {
    path: "/hospital-registration-part-four",
    name: "HospitalRegistrationPartFour",
    component: HospitalRegistrationPartFour,
  },
  {
    path: "/check-your-email",
    name: "CheckYourEmail",
    component: CheckYourEmail,
  },
  // {
  //   path: "/redefine-password",
  //   name: "RedefinePassword",
  //   component: RedefinePassword,
  // },
  {
    path: "/redefine-password-confirmation",
    name: "RedefinePasswordConfirmation",
    component: RedefinePasswordConfirmation,
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
  },

  //DASHBOARD
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    // meta: { requiresAuth: true },
    children: [
      {
        path: "",
        redirect: "/dashboard/schedules",
      },
      {
        path: "/dashboard/schedules",
        name: "Schedules",
        component: Schedules,
      },
      {
        path: "/dashboard/donator",
        name: "Donator",
        component: Donator,
      },
      {
        path: "/dashboard/book-schedules",
        name: "BookSchedules",
        component: BookSchedules,
      },
      {
        path: "/dashboard/settings",
        name: "Settings",
        component: Settings,
      },
      {
        path: "/dashboard/settings/redefine-password",
        name: "RedefinePassword",
        component: RedefinePassword,
      },
      {
        path: "/dashboard/settings/edit-hospital",
        name: "EditHospital",
        component: EditHospital,
      },
      {
        path: "/dashboard/help",
        name: "Help",
        component: Help,
      },
      {
        path: "/dashboard/statistics",
        name: "Statistics",
        component: Statistics,
      },
    ],
  },

  // TESTES DE FUNCIONALIDADES
  {
    path: "/requisicoes",
    name: "Requisicoes",
    component: Requisicoes,
  },
  {
    path: "/firebase",
    name: "Firebase",
    component: Firebase,
  },
  {
    path: "/criptografia",
    name: "Criptografia",
    component: Criptografia,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/notificacao",
    name: "Notificacao",
    component: Notificacao,
  },
  {
    path: "/popup",
    name: "PopUp",
    component: PopUp,
  },
  {
    path: "/pizza",
    name: "Pizza",
    component: Pizza,
  },
  {
    path: "/adicionar",
    name: "Adicionar",
    component: Adicionar,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = localStorage.getItem("token");
    if (!token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
