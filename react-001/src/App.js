import AboutPage from "pages/about/AboutPage";
import ScreenAnimalDetail from "pages/animal/screen-animal-detail/ScreenAnimalDetail";
import ScreenAnimalList from "pages/animal/screen-animal-list/ScreenAnimalList";
import HomePage from "pages/home/HomePage";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styles from "./App.module.css";
const AppHeader = () => {
  const routerList = [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Animals",
      href: "/animals",
    },
  ];
  return (
    <div className={styles.appHeaderContainer}>
      <nav className={styles.appHeaderNavContainer}>
        <ul className={styles.appHeaderRouterList}>
          {routerList.map((item, index) => {
            return (
              <li key={index}>
                <Link className={styles.appHeaderLink} to={item.href}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const App = () => {
  const routerList = [
    {
      path: "/home",
      component: <HomePage />,
    },
    {
      path: "/about",
      component: <AboutPage />,
    },
    {
      path: "/animals",
      component: <ScreenAnimalList />,
    },
    {
      path: "/animals/:id",
      component: <ScreenAnimalDetail />,
    },
  ];
  return (
    <div className={styles.appContainer}>
      <Router>
        <AppHeader />

        <div className={styles.appPageContainer}>
          <Routes>
            {routerList.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  key={index}
                  element={item.component}
                ></Route>
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
