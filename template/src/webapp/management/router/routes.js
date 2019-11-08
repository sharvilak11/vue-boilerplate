import Layout from '@/e9_components/layouts/ModuleBaseLayout';
import DashboardRoutes from '@/webapp/management/dashboard/routes';

export const routes = [
    {
        path: '',
        component: Layout,
        children: [
            DashboardRoutes,
        ]
    }
];
