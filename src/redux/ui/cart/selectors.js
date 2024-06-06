export const selectCartModule = (state) => state.cart;

export const selectHeadphoneCount = (state, id) =>
  selectCartModule(state)[id] || 0;

export const selectCartCount = (state) =>
  Object.values(selectCartModule(state)).reduce((sum, count) => sum + count, 0);
