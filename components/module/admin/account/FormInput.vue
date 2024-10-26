<script lang="ts" setup>
import { useStore } from "vuex";
const isPwd = ref<boolean>(true);
const store = useStore();

const optAccountType = store.getters["scraperAccount/getAccountType"];

const scraperAccount = computed({
  get() {
    return store.getters["scraperAccount/getForm"];
  },
  set(value) {
    store.commit("scraperAccount/setForm", value);
  },
});

const onSubmit = () => {
  store.dispatch("scraperAccount/onSubmitData");
};

const onReset = () => {
  store.commit("scraperAccount/clerForm");
};
</script>

<template>
  <q-form
    ref="formInputActivityRef"
    class="q-gutter-md"
    @submit="onSubmit"
    @reset="onReset"
  >
    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Account Source</label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-select
            v-model="role"
            outlined
            dense
            emit-value
            map-options
            :model-value="scraperAccount.type"
            hide-bottom-space
            requird
            :options="optAccountType"
            :options-dense="false"
            :rules="[]"
            @update:model-value="(value) => (scraperAccount = { type: value })"
          />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Name </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input
            outlined
            :model-value="scraperAccount.name"
            dense
            hide-bottom-space
            requird
            @update:model-value="(value) => (scraperAccount = { name: value })"
          />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Email </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input
            outlined
            dense
            :model-value="scraperAccount.email"
            hide-bottom-space
            requird
            @update:model-value="(value) => (scraperAccount = { email: value })"
          />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Phone </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input
            outlined
            dense
            :model-value="scraperAccount.phone"
            hide-bottom-space
            requird
            @update:model-value="(value) => (scraperAccount = { phone: value })"
          />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Password </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input
            :model-value="scraperAccount.password"
            outlined
            dense
            hide-bottom-space
            requird
            :type="isPwd ? 'password' : 'text'"
            @update:model-value="
              (value) => (scraperAccount = { password: value })
            "
          >
            <template #append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        &nbsp;
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <div class="q-gutter-sm">
          <q-btn unelevated type="submit" color="primary" label="Submit" />
          <q-btn unelevated color="negative" label="Cancel" @click="onReset" />
        </div>
      </div>
    </div>
  </q-form>
</template>
