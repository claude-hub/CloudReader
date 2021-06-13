import React from 'react';
import { Search, MoreHorizontal, Filter } from 'react-feather';
import { ICON_SIZE } from '../../../utils/constants';
import './index.less';

const Header = () => {
  return (
    <div className='bookshelf-header'>
      <div className='filter size12'>
        <Filter size={ICON_SIZE.small} className='margin-right-half' />
        筛选
      </div>
      <div className='size18'>书架</div>
      <div className='action'>
        <Search size={ICON_SIZE.normal} />
        <MoreHorizontal size={ICON_SIZE.normal} />
      </div>
    </div>
  );
};

export default Header;
