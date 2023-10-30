import { useRoutes } from "react-router";
import MainLayout from "../../layouts/main";
import HomePage from "../../pages/home";
import { mainRoutes } from './main';

export default function SimpleLayout() {
  return useRoutes(
    [
      {
        path: '/',
        element: (
          <MainLayout>
            <HomePage />
          </MainLayout>
        ),
      },
      ...mainRoutes,
    ]


  )
}