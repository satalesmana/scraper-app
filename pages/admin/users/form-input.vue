<template>
  <div class="q-ma-lg">
    <CustomeTitle icon="font_download" label="User" />
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
          <q-form
            ref="formInputActivityRef"
            class="q-gutter-md"
            @submit="onSubmit"
            @reset="onReset"
          >
            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Name </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-input
                    v-model:model-value="user.name"
                    outlined
                    dense
                    hide-bottom-space
                    requird
                    @update:model-value="(val) => (user = { name: val })"
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Email </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-input
                    v-model:model-value="user.email"
                    outlined
                    dense
                    hide-bottom-space
                    requird
                    @update:model-value="(val) => (user = { email: val })"
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Scraper Datasource </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-select
                    v-model:model-value="user.scraperDataSource"
                    outlined
                    dense
                    emit-value
                    map-options
                    hide-bottom-space
                    requird
                    :options="optDataSource"
                    :options-dense="false"
                    multiple
                    :rules="[]"
                    @update:model-value="
                      (val) => (user = { scraperDataSource: val })
                    "
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Password </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-input
                    v-model:model-value="user.password"
                    outlined
                    dense
                    hide-bottom-space
                    requird
                    @update:model-value="(val) => (user = { password: val })"
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Role </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-select
                    v-model:model-value="user.role"
                    outlined
                    dense
                    emit-value
                    map-options
                    hide-bottom-space
                    requird
                    :options="optRole"
                    :options-dense="false"
                    :rules="[]"
                    @update:model-value="(val) => (user = { role: val })"
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                <label class="text-bold">Status </label>
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <span class="custom-input">
                  <q-toggle
                    v-model:model-value="user.status"
                    :label="`${user.status ? 'Active' : 'Non Active'}`"
                    @update:model-value="(val) => (user = { status: val })"
                  />
                </span>
              </div>
            </div>

            <div class="row q-mb-sm items-center">
              <div
                class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12"
              >
                &nbsp;
              </div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div class="q-gutter-sm">
                  <q-btn
                    unelevated
                    type="submit"
                    color="primary"
                    label="Submit"
                  />
                  <q-btn
                    unelevated
                    color="negative"
                    label="Cancel"
                    @click="onReset"
                  />
                </div>
              </div>
            </div>
          </q-form>
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
const optDataSource = computed(() => store.getters["users/getOPTDataSource"]);

const user = computed({
  get() {
    return store.getters["users/getUser"];
  },
  set(value) {
    store.commit("users/setUser", value);
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
