import { namespace } from '../utils/constants';
import { getBookConfig } from '../services';
import store from '../store/global';

export default {
  namespace: namespace.GLOBAL,
  state: store,
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'init',
          });
        }
      });
    },
  },
  effects: {
    *init(_, { call, put }) {
      const { data } = yield call(getBookConfig);
      console.log(data);
      yield put({
        type: 'setState',
        payload: {
          bookConfig: data,
        },
      });
    },
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, payload };
    },
  },
};
