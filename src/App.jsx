import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import Jobs from './Pages/Jobs.jsx';
import NotFound from './Pages/NotFound.jsx';
import FullDetallofSingleJob from './Pages/FullDetallofSingleJob.jsx'
import AddJob from './Pages/AddJob.jsx'
import EditJobPage from './Pages/EditJobPage.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='job/:id' element={<FullDetallofSingleJob />} />
      <Route path='*' element={<NotFound />} />
      <Route path='add-job' element={<AddJob />} />
      <Route path='edit-job/:id' element={<EditJobPage />} />
    </Route>  
  ) 
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
