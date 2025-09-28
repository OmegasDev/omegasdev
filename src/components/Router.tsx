import React, { useState, useEffect } from 'react';

type Route = {
  path: string;
  component: React.ComponentType;
  title: string;
};

type RouterProps = {
  routes: Route[];
  defaultRoute?: string;
};

export function Router({ routes, defaultRoute = '/' }: RouterProps) {
  const [currentPath, setCurrentPath] = useState(defaultRoute);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    // Set initial path
    const initialPath = window.location.pathname || defaultRoute;
    setCurrentPath(initialPath);

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [defaultRoute]);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  // Find matching route
  const currentRoute = routes.find(route => route.path === currentPath) || routes[0];
  const Component = currentRoute.component;

  // Make navigate function available globally
  (window as any).navigate = navigate;

  return <Component />;
}

// Navigation helper
export const useNavigate = () => {
  return (path: string) => {
    if ((window as any).navigate) {
      (window as any).navigate(path);
    }
  };
};