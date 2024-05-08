import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Homepage from '../Components/Homepage';

import DashboardPage from '../Components/DashboardPage';

import AboutPage from '../Components/AboutPage';

import PageNotFound from '../Components/PageNotFound';

import LoginPage from '../Pages/Login';
import BitcoinRates from '../Pages/BitCoinRates';

function AppRoutes() {

return (

<Routes>

  <Route path="/" element={<Homepage />} />

  <Route path="/dash" element={<DashboardPage />}>

    <Route path="messages" element={<DashboardMessages />} />

    <Route path="tasks" element={<DashboardTasks />} />

  </Route>

  <Route path="/about" element={<AboutPage />} />
  
  <Route path="/Login" element={<LoginPage />} />

  <Route path="/BitCoinrates" element={<BitcoinRates />} />

  <Route path="*" element={<PageNotFound />} />

</Routes>
);

}

export default AppRoutes;

/* why do we need all of the above routes (i.e. messages, tasks, and about page) when the
assignment only asks for "3 different pages: Home, Login and Bitcoin Rates"?
*/