import {store} from '@/webapp/client/store';

import Dashboard from '@/webapp/client/dashboard/Component';

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
