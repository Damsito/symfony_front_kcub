<template>
  <div class="fixedNav side-navbar col-perso-2">
    <div class="list-group">
      <nav class="collapse bd-links" id="menu" aria-label="Docs navigation">
        <ul class="list-unstyled mb-0" id="ul_menu">
          <li id="accueil" class="pb-1" :class="{ 'bg-primary': isAccueil }">
            <router-link
              class="btn-menu w-100 d-flex align-items-center"
              :to="getAccueilPath"
            >
              <div class="block">
                <img src="/images/icons/home.png" alt="Tableau de bord" />
                <span class="sideOnOff">{{ $t("tableau_de_bord") }}</span>
              </div>
            </router-link>
          </li>
          <li id="alertes" class="pb-1" :class="{ 'bg-primary': isAlertes }">
            <router-link
              class="btn-menu w-100 d-flex align-items-center"
              :to="getAlertesPath"
            >
              <div class="block">
                <img src="/images/icons/alerte.png" alt="Détails alertes" />
                <span class="sideOnOff">{{ $t("details_alerte") }}</span>
              </div>
            </router-link>
          </li>
          <li class="show-fleche">
            <div
              class="block"
              :class="{
                'bg-white': hoverExterne,
                'bg-primary':
                  (isEntreprise || isContactEntreprise) && !toggleExterne,
              }"
            >
              <button
                class="btn-menu w-100 d-flex align-items-center m-0 p-0"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-externe"
                type="button"
                role="button"
                aria-expanded="false"
                aria-controls="collapse-externe"
                @click="toggleExterne = !toggleExterne"
              >
                <img src="/images/icons/folder.png" alt="Détails alertes" />
                <span class="sideOnOff">{{ $t("clients_externes") }}</span>
              </button>
            </div>
            <div class="collapse" id="collapse-externe">
              <ul class="list-unstyled sous_menu">
                <li
                  :class="{ 'bg-primary': isEntreprise }"
                  id="menu_entreprise"
                  @mouseover="hoverExterne = true"
                  @mouseleave="hoverExterne = false"
                >
                  <router-link
                    class="padding-btn-menu d-flex align-items-center justify-content-center"
                    :to="getListeEntreprisePath"
                  >
                    <div class="block ms-5">
                      <img
                        style="width: 31px !important"
                        src="/images/icons/client1.png"
                        alt="Entreprises"
                      />
                      <span class="sideOnOff">{{ $t("entreprises") }}</span>
                    </div>
                  </router-link>
                </li>
                <li
                  :class="{ 'bg-primary': isContactEntreprise }"
                  id="menu_contact_entreprise"
                  @mouseover="hoverExterne = true"
                  @mouseleave="hoverExterne = false"
                >
                  <router-link
                    class="padding-btn-menu d-flex align-items-center justify-content-center"
                    :to="getListeContactEntreprisePath"
                  >
                    <div class="block ms-5">
                      <img
                        style="width: 31px !important"
                        src="/images/icons/compte_acces.png"
                        alt="Gestion comptes d'accès"
                      />
                      <span class="sideOnOff">{{ $t("contacts") }}</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="show-fleche">
            <div
              class="block"
              :class="{
                'bg-white': hoverInterne,
                'bg-primary':
                  (isFiliale || isContactInterneEntreprise) && !toggleInterne,
              }"
            >
              <button
                class="btn-menu w-100 d-flex align-items-center m-0 p-0"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-interne"
                aria-controls="collapse-interne"
                type="button"
                @click="toggleInterne = !toggleInterne"
                aria-expanded="false"
                aria-current="true"
              >
                <img src="/images/icons/folder.png" alt="Détails alertes" />
                <span class="sideOnOff">{{
                  $t("clients_internes_groupe")
                }}</span>
              </button>
            </div>
            <div class="collapse" id="collapse-interne">
              <ul class="list-unstyled sous_menu">
                <li
                  id="menu_filiale"
                  :class="{ 'bg-primary': isFiliale }"
                  @mouseover="hoverInterne = true"
                  @mouseleave="hoverInterne = false"
                >
                  <router-link
                    class="padding-btn-menu d-flex align-items-center justify-content-center"
                    :to="getListeFilialePath"
                  >
                    <div class="block ms-5">
                      <img
                        style="width: 31px !important"
                        src="/images/icons/client1.png"
                        alt="Entreprises"
                      />
                      <span class="sideOnOff">{{ $t("filiales") }}</span>
                    </div>
                  </router-link>
                </li>
                <li
                  id="menu_contact_interne_entreprise"
                  :class="{ 'bg-primary': isContactInterneEntreprise }"
                  @mouseover="hoverInterne = true"
                  @mouseleave="hoverInterne = false"
                >
                  <router-link
                    class="padding-btn-menu d-flex align-items-center justify-content-center"
                    :to="getListeContactInterneEntreprisePath"
                  >
                    <div class="block ms-5">
                      <img
                        style="width: 31px !important"
                        src="/images/icons/compte_acces.png"
                        alt="Gestion comptes d'accès"
                      />
                      <span class="sideOnOff">{{
                        $t("contacts_interne_orange")
                      }}</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li
            id="menu_contact_interne"
            class="pb-1"
            :class="{ 'bg-primary': isContactInterne }"
          >
            <router-link
              class="btn-menu w-100 d-flex align-items-center"
              :to="getListeContactInternePath"
            >
              <div class="block">
                <img
                  src="/images/icons/gestionEmploye.png"
                  alt="Gestion contacts internes"
                />
                <span class="sideOnOff">{{ $t("contact_interne") }}</span>
              </div>
            </router-link>
          </li>
          <li id="menu_equipe" class="pb-1" :class="{ 'bg-primary': isEquipe }">
            <router-link
              class="btn-menu w-100 d-flex align-items-center"
              :to="getListeEquipePath"
            >
              <div class="block">
                <img
                  src="/images/icons/gestionGroupes.png"
                  alt="Gestion des groupes"
                />
                <span class="sideOnOff">{{ $t("equipes") }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import {
  LISTE_ENTREPRISES_NOM,
  LISTE_CONTACT_ENTREPRISE_NOM,
  LISTE_CONTACT_INTERNE_NOM,
  LISTE_EQUIPES_NOM,
  MODIFIER_EQUIPE_NOM,
  MODIFIER_CONTACT_EQUIPE_NOM,
  CREER_EQUIPE_NOM,
  CREER_CONTACT_EQUIPE_NOM,
  ACCUEIL_NOM,
  ALERTES_NOM,
  ACCUEIL_ADMIN_NOM,
  LISTE_FILIALES_NOM,
  LISTE_CONTACT_INTERNE_ENTREPRISE_NOM,
} from "../../common/routes";
import RouteMixin from "../../mixins/RouteMixin";

export default {
  name: "Menu",
  mixins: [RouteMixin],
  data() {
    return {
      isEntiteGroupe: false,
      toggleInterne: false,
      toggleExterne: false,
      hoverInterne: false,
      hoverExterne: false,
      accueil: [ACCUEIL_NOM, ACCUEIL_ADMIN_NOM],
      alertes: [ALERTES_NOM],
      entreprise: [LISTE_ENTREPRISES_NOM],
      filiale: [LISTE_FILIALES_NOM],
      contact_entreprise: [LISTE_CONTACT_ENTREPRISE_NOM],
      contact_interne_entreprise: [LISTE_CONTACT_INTERNE_ENTREPRISE_NOM],
      contact_interne: [LISTE_CONTACT_INTERNE_NOM],
      equipe: [
        LISTE_EQUIPES_NOM,
        CREER_EQUIPE_NOM,
        MODIFIER_EQUIPE_NOM,
        MODIFIER_CONTACT_EQUIPE_NOM,
        CREER_CONTACT_EQUIPE_NOM,
      ],
    };
  },
  computed: {
    isEntreprise() {
      return this.entreprise.includes(this.$route.name);
    },
    isFiliale() {
      return this.filiale.includes(this.$route.name);
    },
    isContactEntreprise() {
      return this.contact_entreprise.includes(this.$route.name);
    },
    isContactInterneEntreprise() {
      return this.contact_interne_entreprise.includes(this.$route.name);
    },
    isContactInterne() {
      return this.contact_interne.includes(this.$route.name);
    },
    isEquipe() {
      return this.equipe.includes(this.$route.name);
    },
    isAccueil() {
      return this.accueil.includes(this.$route.name);
    },
    isAlertes() {
      return this.alertes.includes(this.$route.name);
    },
  },
};
</script>

<style scoped>
.side-navbar img {
  width: 50px;
}
.mainContainer > div {
  min-height: 100%;
}

.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}

.row > * {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

@media (min-width: 1024px) {
  .fixedNav {
    min-height: calc(100vh - 154px);
    width: 17.2rem !important;
    height: 100%;
    border-right: 1px solid #101010;
  }
}

.list-group a {
  text-align: left;
}

.block {
  width: 100%;
  height: 50px !important;
  display: flex;
  align-items: center;
}

.sideOnOff {
  margin-left: 10px;
  font-size: 0.89rem;
}
.col-perso-2 {
  flex: 0 0 auto;
}

@media (max-width: 1570px) {
  .fixedNav {
    width: 120px !important;
    min-height: calc(100vh - 154px);
    height: 100%;
    border-right: 1px solid #101010;
  }
  #collapse-externe .block,
  #collapse-interne .block {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  #collapse-externe li,
  #collapse-interne li {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }
  .sideOnOff {
    display: none;
  }
  .block {
    width: initial !important;
    height: initial !important;
  }
}
</style>
