import ScrollToTop from '../scrollToTop/scrollToTop';
import Layout from '../layout';
import Main from '../../pages/main/main';
import Property from '../../pages/property/property';
import Page404 from '../../pages/page404/page404';
import Login from '../../pages/login/login';
import { hotelsType, reviewType } from '../../types';
import { AppRoute, WrapperClasses } from '../../const';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

type appProps = {
  data: hotelsType[];
  reviews: reviewType[];
}

function App({ data, reviews }: appProps): JSX.Element {
  const [isAuth, setIsAuth] = useState(false);
  const authenticationHandle = () => {
    setIsAuth((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root} element={<Layout isAuth={isAuth} classes={WrapperClasses.Main} />}>
          <Route index element={<Main />} />
          <Route path={`${AppRoute.Room}:id`} element={<Property data={data} reviews={reviews}/>} />
        </Route>
        <Route path={AppRoute.Login} element={<Layout isAuth={isAuth} classes={WrapperClasses.Login} />}>
          <Route index element={<Login isAuth={isAuth} authenticationHandle={authenticationHandle} />} />
        </Route>
        <Route path='*' element={<Layout isAuth={isAuth} classes={WrapperClasses.Main} />}>
          <Route path='*' element={<Page404 />}>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
