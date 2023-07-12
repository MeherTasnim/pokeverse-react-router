import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './routes/Layout';
import { Home } from './routes/Home';
import { PokemonDetails } from './routes/PokemonDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/:name", element: <PokemonDetails /> }
        ]
    }
]);

function App() {

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export { App };
