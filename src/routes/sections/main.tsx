import { Suspense, lazy } from "react";
import MainLayout from "../../layouts/main";
import { Outlet } from "react-router";

export const HomePage = lazy(() => import('../../pages/home'));
export const mainRoutes = [

  {
    element: (
      <MainLayout>
        <Suspense fallback={<>Loading</>}>
          <Outlet />
        </Suspense>
      </MainLayout>
    ),
    children: [
      {
        path: 'about-us',
        element: <></>,
      },
      {
        path: 'setting',
        element: <></>,
      },]
  }
]