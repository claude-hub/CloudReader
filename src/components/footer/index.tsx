import React from 'react';
import { connect } from 'dva';
import { footerMsg, namespace } from '../../utils/constants';
import './index.less';

interface FooterProps {
  activeMenu: string;
  setMenu: (menu: string) => void;
}

const Footer: React.FC<FooterProps> = (props) => {
  const { activeMenu } = props;
  const setActive = (menu: string) => {
    const { setMenu } = props;
    setMenu(menu);
  };
  return (
    <footer className='footer'>
      {footerMsg.map((item) => {
        return (
          <div
            key={item.activeClass}
            onClick={() => setActive(item.activeClass)}
            className={activeMenu === item.activeClass ? 'active' : ''}
          >
            <svg className='icon' aria-hidden='true'>
              <use xlinkHref={`#icon-${item.icon}`} />
            </svg>
            <div className='size12'>{item.text}</div>
          </div>
        );
      })}
    </footer>
  );
};

export default connect(
  ({ global }: RootState) => {
    return {
      ...global,
    };
  },
  (dispatch: CustomDispatch) => {
    const setMenu = (menu: string) => {
      return dispatch({
        type: `${namespace.GLOBAL}/setActiveMenu`,
        activeMenu: menu,
      });
    };
    return { setMenu };
  },
)(Footer);
