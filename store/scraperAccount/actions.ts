import { Body } from "#build/components";

export const onFetchList = async ({ commit }) => {
  try {
    const { $useApiFetch } = useNuxtApp();
    const { data, error } = await $useApiFetch("/api/scraper-account");

    if (error.value) {
      throw error.value.data;
    }

    if (data.value) {
      commit("setScraperAccountData", data.value.data);
    }
  } catch (error) {
    console.log("[fetchScraperAccount]", error);
  }
};

export const onSubmitData = async ({ commit, getters }) => {
  try {
    const { $useApiFetch } = useNuxtApp();
    const body = getters.getForm;

    const { data, error } = await $useApiFetch("/api/scraper-account", {
      method: "POST",
      body,
    });

    if (error.value) {
      throw error.value.data;
    }

    // if (data.value) {
    //   commit("setScraperAccountData", data.value.data);
    // }
  } catch (error) {
    console.log("[fetchScraperAccount]", error);
  }
};
