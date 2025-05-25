import { Outlet } from 'react-router';
import styles from '~styles/app.module.scss';
import { Footer, Header } from '~/components/layout';
import { useRef } from 'react';

export const Layout = () => {
    const aboutRef = useRef<HTMLDivElement>(null);

    return (
        <div className={styles['container-wrapper']}>
            <Header aboutRef={aboutRef} />
            <Outlet context={{ aboutRef }} />
            <Footer aboutRef={aboutRef} />
        </div>
    );
};