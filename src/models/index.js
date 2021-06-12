export default {
  namespace: 'home',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          console.log('xxx', dispatch);
        }
      });
    },
  },
};
