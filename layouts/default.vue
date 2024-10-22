<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
definePageMeta({ middleware: "auth" });
const { data } = useAuth();

const { signOut } = useAuth();
const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const onLogout = () => {
  store.commit("menu/clearMenu");
  signOut({ callbackUrl: "/login" });
};
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> EasyGun </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <q-scroll-area
        style="
          height: calc(100% - 200px);
          margin-top: 200px;
          border-right: 1px solid #ddd;
        "
      >
        <Sidebar />
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="data:image/svg+xml,%3Csvg width='1138' height='900' viewBox='0 0 1138 900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_1_1677' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='1138' height='1138'%3E%3Crect width='1138' height='1138' fill='url(%23paint0_linear_1_1677)'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_1_1677)'%3E%3Crect width='1138' height='1138' fill='url(%23paint1_linear_1_1677)'/%3E%3Cg style='mix-blend-mode:overlay'%3E%3Cpath d='M1005.39 611.675C1005.39 851.291 811.139 1045.54 571.524 1045.54C331.908 1045.54 137.661 851.291 137.661 611.675C137.661 372.059 829.783 -419.638 1069.4 -419.638C1309.01 -419.638 1005.39 372.059 1005.39 611.675Z' fill='url(%23paint2_linear_1_1677)'/%3E%3C/g%3E%3Cg style='mix-blend-mode:lighten'%3E%3Cpath d='M1060.84 867.725C1060.84 1197.69 -195.282 1600.31 -525.245 1600.31C-855.207 1600.31 -134.057 1197.69 -134.057 867.725C-134.057 537.762 -364.445 -56.9 -34.4821 -56.9C295.48 -56.9 1060.84 537.762 1060.84 867.725Z' fill='url(%23paint3_linear_1_1677)'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_1677' x1='186.557' y1='139.918' x2='858.164' y2='1091.36' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%232BA7DF'/%3E%3Cstop offset='1' stop-color='%231F779E'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_1677' x1='-1.14761e-05' y1='1138' x2='1159.34' y2='1.17207e-05' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230073DE'/%3E%3Cstop offset='1' stop-color='%2300529E'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear_1_1677' x1='1090.74' y1='1130.89' x2='649.762' y2='576.113' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230073DE'/%3E%3Cstop offset='1' stop-color='%2300529E'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint3_linear_1_1677' x1='61.8298' y1='417.189' x2='767.017' y2='1416.2' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230073DE'/%3E%3Cstop offset='1' stop-color='%2300529E'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A"
        style="height: 200px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="~/assets/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold text-h6">{{ data?.name }}</div>
          <div class="text-italic">{{ data?.id }}</div>

          <q-btn
            class="full-width q-mt-lg"
            rounded
            color="red"
            @click="onLogout"
          >
            Logout
          </q-btn>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container class="bg-grey-3" style="min-height: 100vh">
      <slot />
    </q-page-container>
  </q-layout>
</template>
