import React from 'react';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import JobPage from './Pages/JobPage.jsx';
import AddJobPage from './Pages/AddJobPage.jsx';
import FullDetailOfJob from './Pages/FullDetailOfJob.jsx';
import HomePage from './Pages/HomePage.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import UpdateJob from './Pages/UpdateJob.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<MainLayout />} >
    <Route index element={<HomePage />} />
    <Route path="/jobs" element={<JobPage />} />
    <Route path="/add-job" element={<AddJobPage />} />
    <Route path= "/job/:id" element={<FullDetailOfJob />} />
    <Route path="/updatejob/:id" element={<UpdateJob />} />

    </Route>
        
    </>
  )
);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
