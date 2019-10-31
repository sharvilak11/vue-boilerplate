import {store} from '@/webapp/management/store';

import Dashboard from '@/webapp/management/dashboard/Component';

const routes = {
    path: 'dashboard',
    name: 'Dashboard',
    component: Dashboard
};

export default routes;

store.state['sideBarModule'].menuItems.push({
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard'
});
