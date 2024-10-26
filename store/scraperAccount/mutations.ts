const INTIAL_FORM_STATE = {
  name: null,
  accountType: null,
  email: null,
  phone: null,
  password: null,
};

export function clerForm(state: any) {
  state.form = {
    ...INTIAL_FORM_STATE,
  };
}

export const setForm = (state, payload) => {
  state.form = { ...state.form, ...payload };
};

export const setScraperAccountData = (state, payload) => {
  state.data = payload;
};

export const clearScraperAccountData = (state) => {
  state.data = [];
};
