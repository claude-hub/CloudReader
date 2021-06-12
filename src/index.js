import dva from 'dva';
import { createBrowserHistory } from 'history';
import router from './router';
import global from './models/global';
import './index.less';

// 1. Initialize
const app = dva({
  // ...createLoading({
  //   effects: true,
  // }),
  history: createBrowserHistory(),
  onError: (error) => {
    console.warn(`dva报错: ${error.message}`);
  },
});

// 2. Model
app.model(global);

// 3. Router
app.router(router);

// 4. Start
app.start('#root');
