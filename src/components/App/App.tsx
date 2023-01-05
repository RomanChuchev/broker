import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLauout from "../../layout";
import Spinner from "../Spinner";
import s from "./App.module.scss";
import routes from "../../routes";

function App() {
  return (
    <main className={s.app}>
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainLauout />}>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
