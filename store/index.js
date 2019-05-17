export const state = () => ({
  test: null,
});

export const getters = {
  getTest(state) {
    return state.test;
  },
};
