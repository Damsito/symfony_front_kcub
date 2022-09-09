import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Accueil/Home";
import {
  ACCUEIL,
  ACCUEIL_NOM
} from "../common/routes";

import {  getInterlocuteurRUNRoles } from "../common/roles";

const routes = [
  {
    path: ACCUEIL,
    name: ACCUEIL_NOM,
    component: Home,
    meta: { roles: getInterlocuteurRUNRoles() },
  }
];

const router = createRouter({
  history: createWebHistory(ACCUEIL),
  base: ACCUEIL,
  routes,
});

export default router;
