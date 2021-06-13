const namespace = {
  GLOBAL: 'global',
};

const ICON_SIZE = {
  normal: 20,
  small: 14,
  large: 28,
};

const MENU_ENUM = {
  bookshelf: 'bookshelf',
  bookCity: 'bookCity',
  mine: 'mine',
};

const footerMsg = [
  {
    icon: 'shujia',
    activeClass: MENU_ENUM.bookshelf,
    text: '书架',
  },
  {
    icon: 'shujia',
    activeClass: MENU_ENUM.bookCity,
    text: '书城',
  },
  {
    icon: 'shujia',
    activeClass: MENU_ENUM.mine,
    text: '我的',
  },
];

export { namespace, MENU_ENUM, footerMsg, ICON_SIZE };
