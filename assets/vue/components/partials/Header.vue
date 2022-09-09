<template>
  <ModalVersion />
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <router-link
        class="navbar-brand d-flex align-items-center"
        id="obs-link"
        :to="getAccueilPath"
      >
        <div class="d-inline-flex align-items-baseline">
          <img
            id="obs"
            src="../../images/orange-logo.svg"
            alt="logo orange"
            aria-hidden="true"
            loading="lazy"
          />
        </div>
      </router-link>
      <span class="nav-appname me-auto h2-font">Knowledge Customer Base</span>
      <ul class="nav align-items-center">
        <li class="me-2 my-auto">
          <select-lang />
        </li>
        <li>
          <select-role />
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle menu-client-mail"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-expanded="false"
            >{{ user.nomPrenom }}</a
          >
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                target="_blank"
                :href="getDocumentationURL"
                >Aide</a
              >
            </li>
            <li>
              <button
                class="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#modalVersion"
              >
                Versions
              </button>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" :href="getDisconnectUrl">{{
                $t("deconnexion")
              }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import RouteMixin from "../../mixins/RouteMixin";
import SelectLang from "../SelectLang";
import SelectRole from "../SelectRole";
import getCurrentUser from "../../localStorage/getCurrentUser";
import {
  ACCUEIL_ADMIN_NOM,
  ACCUEIL_NOM,
  ALERTES_NOM,
  LISTE_CONTACT_ENTREPRISE_NOM,
  LISTE_CONTACT_INTERNE_NOM,
  LISTE_ENTREPRISES_NOM,
  LISTE_EQUIPES_NOM,
} from "../../common/routes";
import ModalVersion from "../ModalVersion";
export default {
  name: "Header",
  components: { ModalVersion, SelectRole, SelectLang },
  mixins: [RouteMixin],
  computed: {
    user() {
      return getCurrentUser();
    },
    getDisconnectUrl() {
      return (
        process.env.VUE_APP_KCUB_TEST_URL + process.env.VUE_APP_DISCONNECT_URL
      );
    },
    getDocumentationURL() {
      let route = this.$route.name;
      if (route === ACCUEIL_NOM || route === ACCUEIL_ADMIN_NOM) {
        return "https://collaboration.factory.orange-business.com/display/KCUBHELP/Tableau+de+bord";
      }
      if (route === ALERTES_NOM) {
        return "https://espaces-oab.si.fr.intraorange/pages/viewpage.action?pageId=226415756";
      }
      if (route === LISTE_ENTREPRISES_NOM) {
        return "https://espaces-oab.si.fr.intraorange/display/KCUBHELP/Gestion+des+entreprises";
      }
      if (route === LISTE_CONTACT_ENTREPRISE_NOM) {
        return "https://espaces-oab.si.fr.intraorange/display/KCUBHELP/Gestion+des+contacts+entreprise";
      }
      if (route === LISTE_CONTACT_INTERNE_NOM) {
        return "https://espaces-oab.si.fr.intraorange/display/KCUBHELP/Gestion+des+contacts+internes";
      }
      if (route === LISTE_EQUIPES_NOM) {
        return "https://espaces-oab.si.fr.intraorange/pages/viewpage.action?pageId=226415766";
      }
      return "https://collaboration.factory.orange-business.com/display/KCUBHELP/Tableau+de+bord";
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 90px !important;
}

.navbar {
  font-size: 1.6rem;
  font-weight: 700;
  border: 0;
}
.side-navbar img {
  width: 50px;
}

.navbar-default .navbar-nav > li > a {
  color: #fff;
}

#obs {
  width: 70px;
  height: auto;
}

.nav-appname {
  padding-left: 25px;
}

.nav-appname > h2 {
  color: #f16e00 !important;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.mainContainer > div,
.mainContainer > div > .row {
  min-height: 100%;
}
.fixedNav > .list-group > a.list-group-item {
  height: 60px;
}

.row > * {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.menu-client-mail {
  color: white;
  font-size: 1rem;
}

@media (min-width: 1024px) {
  .fixedNav {
    min-height: calc(100vh - 154px);
    height: calc(100% - 0px);
    border-right: 1px solid #101010;
  }
  .side-navbar .list-group-item {
    height: 50px;
    line-height: 60px;
    font-weight: 700;
  }
}

.list-group a {
  text-align: left;
}

#help-icon {
  width: 45px;
  height: auto;
}

#help-icon:hover {
  content: url("../../images/icons/help_orange.png");
  width: 45px;
  vertical-align: middle;
}

@media (min-width: 768px) {
  .container-fluid > .navbar-collapse,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container > .navbar-header {
    margin-right: 0;
    margin-left: 0;
  }
  .navbar-nav li:first-child a {
    padding-left: 2rem;
  }
}
</style>
