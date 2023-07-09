import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Statistics from './components/Statistics.jsx'
import AppliedJobs from './components/AppliedJobs.jsx'
import Blogs from './components/Blogs.jsx'
import Error from './components/Error.jsx'
import JobDetails from './components/JobDetails.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Header />,
        loader: () => fetch('jobcategory.json')
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />
      },
      {
        path: 'blogs',
        element: <Blogs />
      },
      {
        path: '/job-details/:subTitle',
        element: <JobDetails />,
        loader: ({params}) => fetch(`jobs.json${params.subTitle}`)
      },
    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
