import styles from '~styles/app.module.scss';
import { createBrowserRouter } from "react-router";
import { Home } from './Home';
import { Fairytales } from './Fairytales';
import { Layout } from '~/components';
import { MakingOf } from './Makingof';
import { ParallaxPage } from './ParallaxPage';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "fairytales",
                element: <Fairytales />
            },
            {
                path: "makingOf/:id",
                element: <MakingOf />
            },
            {
                path: "parallaxPage",
                element: <ParallaxPage />
            },
            {
                path: "*",
                element: (
                    <div className={styles['error']}>
                        <h1 className={styles['error__h1']}>404 Page not found</h1>
                    </div>
                ),
            },
        ],
    },
]);