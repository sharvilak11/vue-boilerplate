import {store} from '@/webapp/tenant/store';

import Dashboard from '@/webapp/tenant/dashboard/Component';

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

/*
    For sub navigation bar

    expanded: false,
    subItems: [
        {
            name: 'Auth',
            path: 'settings/auth',
            icon: 'profile'
        },
        {
            name: 'Timeoff',
            path: 'settings/timeoff',
            icon: 'calendar'
        }
    ]
*/
