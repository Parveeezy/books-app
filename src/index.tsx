import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Results from './components/Results/Results';
import FullBookInfo from './components/FullBookInfo';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter([
    {
        path: '/books-app/*',
        element: <App />,
        children: [
            {
                path: 'results',
                element: <Results />,
            },
        ],
    },
    {
        path: '/book',
        element: <FullBookInfo />,
    },
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
