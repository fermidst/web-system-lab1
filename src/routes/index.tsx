import React from 'react';
import Links from '../components/Links';

const productConsumers = [
  {
    path: '/products/crm/consumers/lanit',
    name: 'Lanit',
    element: <div>Lanit</div>,
  },
  {
    path: '/products/crm/consumers/norbit',
    name: 'Norbit',
    element: <div>Norbit</div>,
  },
  {
    path: '/products/crm/consumers/nsystems',
    name: 'Nsystems',
    element: <div>Nsystems</div>,
  },
];

const productRoutes = [
  {
    path: '/products/crm',
    name: 'CRM',
    element: (
      <>
        <div>CRM consumers</div>
        <Links routes={productConsumers} />
      </>
    ),
  },
  {
    path: '/products/erp',
    name: 'ERP',
    element: <div>ERP</div>,
  },
  {
    path: '/products/scm',
    name: 'SCM',
    element: <div>SCM</div>,
  },
];

export const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    element: <div>test</div>,
  },
  {
    path: '/products',
    name: 'Our Products',
    element: (
      <div>
        <div className="d-flex justify-content-center">Our products</div>
        <div className="d-flex justify-content-center">
          <Links routes={productRoutes} />
        </div>
      </div>
    ),
  },
  {
    path: '/contact',
    name: 'Contact Us',
    element: <div>contact</div>,
  },
  {
    path: '/about',
    name: 'About',
    element: <div>about</div>,
  },
];
const routes = [...productRoutes, ...productConsumers, ...mainRoutes];

export { productRoutes, routes as default };
