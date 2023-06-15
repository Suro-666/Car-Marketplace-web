import React, { Suspense } from "react";
import RouterManager from "./Router/RouterManager";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense>
          <RouterManager />
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
