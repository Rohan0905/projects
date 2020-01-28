import {
  DefaultPage,
  EditProduct,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: 'edit-product/:productId', name: 'Edit product', component: EditProduct },
  ],
};



