export const getForm = (state: any) => state.form;

export const getListData = (state) => state.data;

export const getAccountType = (state, getters, rootState, rootGetters) => {
  const { data } = useAuth();
  const optons = rootGetters["users/getOPTDataSource"];

  return optons.filter((item) =>
    data.value.scraperDataSource.includes(item.value)
  );
};
