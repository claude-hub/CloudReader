import { namespace } from '../utils/constants';
import { getBookConfig } from '../services';
import store from '../store/global';
import bookList from '../../mock/book_list.json';

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
      const mockConfig = [bookList];
      yield put({
        type: 'setState',
        payload: {
          bookConfig: mockConfig,
        },
      });
    },
  },
  reducers: {
    setState(state, { payload }) {
      return { ...state, payload };
    },
    setActiveMenu(state, { activeMenu }) {
      return { ...state, activeMenu };
    },
  },
};
