import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import authOperations from "redux/auth/auth-operations";

import Container from "components/Container/Container";
import AppBar from "components/AppBar/AppBar";
import Loader from "components/Loader/Loader";
import PublicRoute from "components/PublicRoute/PublicRoute";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import authSelectors from "redux/auth/auth-selectors";

const Home = lazy(() => import('./views/HomeView'));
const Register = lazy(() => import('./views/RegisterView'));
const Login = lazy(() => import('./views/LoginView'));
const Contacts = lazy(() => import('./views/ContactsView'));
const Error = lazy(() => import('./views/ErrorView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  
  return !isFetchingCurrentUser && (
    <Container>
        <>
          <AppBar />
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <PublicRoute path="/">
                      <Home />
                    </PublicRoute>
                  }
                ></Route>
                <Route
                  path="/register"
                  element={
                    <PublicRoute
                      path="/register"
                      redirectTo="/contacts"
                      restricted>
                      <Register />
                    </PublicRoute>
                  }
                ></Route>
                <Route
                  path="/login"
                  element={
                    <PublicRoute
                      path="/login"
                      redirectTo="/contacts"
                      restricted>
                      <Login />
                    </PublicRoute>
                  }
                ></Route>
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      path="/contacts"
                      redirectTo="/login"
                    >
                      <Contacts />
                    </PrivateRoute>
                  }
                ></Route>
                <Route
                  path="*"
                  element={<Error />
                  }></Route>
              </Routes>
            </Suspense>
        </>
    </Container>
  );
};