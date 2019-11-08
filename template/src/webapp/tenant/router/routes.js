import Layout from '@/e9_components/layouts/ModuleBaseLayout';
import DashboardRoutes from '@/webapp/tenant/dashboard/routes';

export const routes = [
    {
        path: '',
        component: Layout,
        children: [
            DashboardRoutes,
        ]
    }
];
