// src/App.tsx
import { type JSX, lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ThreeColumnLayout from "@components/Layout/ThreeColumnLayout";
import { Spinner } from "@components/Shared/Spinner";
import NotFound from "@pages/NotFound";

import { ROUTES } from "@/constants";

import "./styles/App.css";

const SavedPalettes = lazy(() => import("@pages/SavedPalettes"));
const Accessibility = lazy(() => import("@pages/Accessibility"));
const ExtractColors = lazy(() => import("@pages/ExtractColors"));
const About = lazy(() => import("@pages/About"));

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    children: [
      {
        path: ROUTES.HOME,
        index: true,
        element: <ThreeColumnLayout />,
      },
      { path: ROUTES.SAVED_PALETTES, element: <SavedPalettes /> },
      { path: ROUTES.ACCESSIBILITY, element: <Accessibility /> },
      { path: ROUTES.EXTRACT_COLORS, element: <ExtractColors /> },
      { path: ROUTES.ABOUT, element: <About /> },
    ],
  },
]);

/**
 * The main App component that renders the application.
 */
export default function App(): JSX.Element {
  return (
    <>
      {/* Render toast notifications */}
      <Toaster />
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}
