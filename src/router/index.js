import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import HospitalRegistrationPartOne from "@/pages/HospitalRegistrationPartOne.vue";
import HospitalRegistrationPartTwo from "@/pages/HospitalRegistrationPartTwo.vue";
import HospitalRegistrationPartThree from "@/pages/HospitalRegistrationPartThree.vue";
import HospitalRegistrationPartFour from "@/pages/HospitalRegistrationPartFour.vue";
import ThankYou from "@/pages/ThankYou.vue";
// import RedefinePassword from "@/pages/RedefinePassword.vue";
import RedefinePasswordConfirmation from "@/pages/RedefinePasswordConfirmation.vue";

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
import Campaigns from "@/pages/dashboard/Campaigns.vue";
import AddCampaign from "@/pages/dashboard/AddCampaign.vue";
import SeeCampaign from "@/pages/dashboard/SeeCampaign.vue";
import Donation from "@/pages/dashboard/Donation.vue";

// TELAS DE TESTE
import Requisicoes from "@/pages/Requisicoes.vue";
import Firebase from "@/pages/Firebase.vue";
import Criptografia from "@/pages/Criptografia.vue";
import Menu from "@/pages/Menu.vue";
import Notificacao from "@/pages/Notificacao.vue";
import PopUp from "@/pages/PopUp.vue";
import Pizza from "@/pages/Pizza.vue";
import Slider from "@/pages/Slider.vue";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
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
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
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

  //DASHBOARD
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
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
      {
        path: "/dashboard/campaign",
        name: "Campaigns",
        component: Campaigns,
      },
      {
        path: "/dashboard/add-campaign",
        name: "AddCampaign",
        component: AddCampaign,
      },
      {
        path: "/dashboard/see-campaign",
        name: "SeeCampaign",
        component: SeeCampaign,
      },
      {
        path: "/dashboard/donation",
        name: "Donation",
        component: Donation,
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
    path: "/slider",
    name: "Slider",
    component: Slider,
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
