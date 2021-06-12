import request from '../utils/request';

const getBookConfig = () => {
  return request.get('/shuyuan/1622744487.json');
};

export { getBookConfig };
