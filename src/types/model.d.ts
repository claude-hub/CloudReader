interface RootState {
  global: {
    bookConfig: [];
    activeMenu: string;
  };
}

interface AnyAction extends Action {
  [extraProps: string]: any;
}

type CustomDispatch = <TParam, TReturn = void>(action: AnyAction & TParam) => Promise<TReturn>;
