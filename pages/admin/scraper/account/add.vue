<template>
  <div class="q-ma-lg">
    <CustomeTitle icon="font_download" label="Scraping Account" />
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

            <span class="text-bold">Form Scraping Account</span>
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
const router = useRouter();

const onBack = () => {
  router.go(-1);
};
</script>
