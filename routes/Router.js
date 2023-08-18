const Router = (routes, renderComponent, props) => {
  const router = {
    push(path) {
      window.history.pushState({}, "", path);
      render();
    },
    replace(path) {
      window.history.replaceState({}, "", path);
      render();
    },
    back() {
      window.history.back();
      render();
    },
    forward() {
      window.history.forward();
      render();
    },
    currentRoute() {
      return window.location.pathname;
    },
  };

  const render = () => {
    const currentRoute = window.location.pathname;
    const matchedRoute = routes.find((r) => r.path === currentRoute);

    if (matchedRoute) {
      const component = matchedRoute.element;
      const loader = matchedRoute.loader;

      if (loader) {
        matchedRoute
          .loader()
          .then((data) => {
            renderComponent(component({ data, ...props }));
          })
          .catch((error) => {
            renderComponent(component({ error, ...props }));
          });
      } else {
        renderComponent(component(props));
      }
    }
  };

  return {
    router,
    render,
  };
};

export default Router;
