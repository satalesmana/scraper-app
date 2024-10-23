<template>
  <div class="q-ma-lg">
    <CustomeTitle icon="font_download" label="Edit Account" />
    <q-card flat bordered class="q-mt-lg">
      <q-item class="bg-grey-4">
        <q-item-section>
          <q-item-label class="row no-wrap items-center">
            <q-btn
              outline
              flat
              round
              color="primary"
              size="sm"
              icon="arrow_back"
              @click="onBack"
            >
              <q-tooltip> Back </q-tooltip>
            </q-btn>

            <q-separator vertical class="q-ml-md q-mr-md" />

            <span class="text-bold">Form User</span>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-section>
        <ClientOnly fallback-tag="span" fallback="Loading component...">
          <ModuleAdminAccountFormInput />
        </ClientOnly>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const optRole = computed(() => store.getters["users/getOPTRole"]);

const name = computed({
  get() {
    return store.getters["users/getUser"].name;
  },
  set(value) {
    store.commit("users/setUser", { name: value });
  },
});

const email = computed({
  get() {
    return store.getters["users/getUser"].email;
  },
  set(value) {
    store.commit("users/setUser", { email: value });
  },
});

const password = computed({
  get() {
    return store.getters["users/getUser"].password;
  },
  set(value) {
    store.commit("users/setUser", { password: value });
  },
});

const role = computed({
  get() {
    return store.getters["users/getUser"].role;
  },
  set(value) {
    store.commit("users/setUser", { role: value });
  },
});

const onSubmit = async () => {
  await store.dispatch("users/submitUser", { router });
};

const onReset = () => {
  store.commit("users/clearUsers");
};

const onBack = () => {
  router.go(-1);
};
</script>
