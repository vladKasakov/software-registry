import { Route, Routes } from 'react-router-dom';

import { Layout } from '../Layout';
import { Home } from '../../pages/Home';
import { Authorization } from '../../pages/Authorization';
import { Personal } from '../../pages/Personal';
import { NotFound } from '../../pages/NotFound';
import { UserData } from '../../pages/Personal/pages/UserData';
import { Notifications } from '../../pages/Personal/pages/Notifications';
import { Registry } from '../../pages/Personal/pages/Registry';
import { Metadata } from '../../pages/Personal/pages/Metadata';
import { Security } from '../../pages/Personal/pages/Security';
import { Downloads } from '../../pages/Personal/pages/Downloads';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Authorization />} />
          <Route path="personal" element={<Personal />}>
            <Route path="data" element={<UserData />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="registry" element={<Registry />} />
            <Route path="metadata" element={<Metadata />} />
            <Route path="security" element={<Security />} />
            <Route path="downloads" element={<Downloads />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
