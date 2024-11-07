import { IndexRouteObject, Navigate, NonIndexRouteObject } from 'react-router-dom';
import DefaultLayout from '@/layout';
import PostListPage from '@/pages/post';
import NotFound from '@/pages/error/404';
import PostDetailPage from '@/pages/post/detail';

type IndexAppRouteObject = IndexRouteObject & {
    title?: string;
};

type NonIndexAppRouteObject = NonIndexRouteObject & {
    children?: AppRoute[];
    title?: string;
};

export type AppRoute = IndexAppRouteObject | NonIndexAppRouteObject;

export const AppRoutes: AppRoute[] = [
    {
        path: '',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                children: [
                    {
                        index: true,
                        element: <PostListPage />,
                    },
                    {
                        path: 'post',
                        children: [
                            {
                                path: ':id',
                                element: <PostDetailPage />,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: '/404',
        element: <NotFound />,
    },
    {
        path: '*',
        element: <Navigate to="/404" replace />,
    },
];