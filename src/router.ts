import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import Grid from './layouts/grid';

type PageRouteObject = RouteObject & {
  default: React.ComponentType;
};

const pages: Record<string, PageRouteObject> = import.meta.glob('./pages/**/*.tsx', { eager: true });

const staticFilesRoutes = Object.entries(pages)
  .map(([path, page]) => {
    const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];

    if (!fileName) {
      return false;
    }

    const normalizedPathName = fileName.includes('$') ? fileName.replace('$', ':') : fileName.replace(/\/index/, '');

    return {
      index: fileName === 'index',
      path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
      Component: page.default,
      ...(page.ErrorBoundary && { errorElement: page.ErrorBoundary }),
    };
  })
  .filter(Boolean) as Array<RouteObject>;

const routes = [
  {
    path: '/',
    Component: Grid,
    children: staticFilesRoutes,
  },
];

const router = createBrowserRouter(routes);

export default router;
