import "./App.css";
import Layout from "./components/Layout.tsx/Layout";
import { RouterRoutes } from "./routes/Routes";
function App() {
  return (
    <>
      <Layout>
        <RouterRoutes />
      </Layout>
    </>
  );
}

export default App;
