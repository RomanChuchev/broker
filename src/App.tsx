import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLauout from "./layout";
import Spinner from "./components/Spinner";
import routes from "./routes";

function App() {
  return (
    <main>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainLauout />}>
              {routes.map((route) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
