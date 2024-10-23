<template>
  <q-form
    ref="formInputActivityRef"
    class="q-gutter-md"
    @submit="onSubmit"
    @reset="onReset"
  >
    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Name </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input v-model="name" outlined dense hide-bottom-space requird />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Email </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-input v-model="email" outlined dense hide-bottom-space requird />
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
            v-model="password"
            outlined
            dense
            hide-bottom-space
            requird
          />
        </span>
      </div>
    </div>

    <div class="row q-mb-sm items-center">
      <div class="text-right q-pr-md col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <label class="text-bold">Role </label>
      </div>
      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <span class="custom-input">
          <q-select
            v-model="role"
            outlined
            dense
            emit-value
            map-options
            hide-bottom-space
            requird
            :options="optRole"
            :options-dense="false"
            :rules="[]"
          />
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

<script lang="ts" setup>
const onSubmit = () => {};
const onReset = () => {};
</script>
