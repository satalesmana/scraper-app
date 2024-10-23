import { Loading, Dialog } from "quasar";

export async function submitData({ getters }: any, { router }: any) {
  try {
    const { $useApiFetch } = useNuxtApp();
    Loading.show();

    const body = getters.getFormData;

    const { data, error } = await $useApiFetch("/api/activity-user", {
      method: "POST",
      body,
    });

    if (error.value) {
      throw error;
    }

    Dialog.create({
      title: "Info",
      message: `<span class="text-green">${data.value?.message}</span>`,
      html: true,
    }).onOk(() => {
      router.replace("/admin/users");
    });
  } catch (error) {
    showErorrDialog({ name: "[submitUser]", type: "Error", error });
  } finally {
    Loading.hide();
  }
}

export async function fetchActivityUser({ getters }: any, id: string) {
  try {
    const { $useApiFetch } = useNuxtApp();
    const { data, error } = await $useApiFetch(`/api/activity-user/${id}`, {
      method: "GET",
    });
    console.log("tesssss---");
    if (error.value) {
      throw error;
    }

    return data.value?.data[0];
  } catch (error) {
    showErorrDialog({ name: "[submitUser]", type: "Error", error });
    return;
  } finally {
    Loading.hide();
  }
}
