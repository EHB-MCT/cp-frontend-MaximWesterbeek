import styles from '~styles/app.module.scss';
import { Button } from '../ui/Button';
import { Link, useLocation, useParams } from 'react-router';
import { useGetParallaxLink } from '~/shared/hooks/useGetParallaxLink';

export const Header = () => {
    const location = useLocation();
    const isParallaxOrMakingOf = location.pathname.includes('/parallaxPage') || location.pathname.includes('/makingOf');

    const params = useParams<{ id: string }>();
    const queryParams = new URLSearchParams(location.search);
    const id = params.id || queryParams.get("id");

    const { data: parallaxLinkItems } = useGetParallaxLink();
    const matchedItem = parallaxLinkItems?.find(item => item.id === id);
    const fairytaleLink = matchedItem?.fairytaleLink;

    return (
        <nav className={styles['navbar']}>
            {!isParallaxOrMakingOf && (
                <>
                    <div className={styles['navbar__nav-wrapper']}>
                        <Link to="/">
                            <img src="/assets/logo_white.svg" alt="Er was eens..." className={styles['navbar__nav-wrapper__logo']} />
                        </Link>

                        <div className={styles['navbar__nav-wrapper__nav-buttons']}>
                            <Button name="Home" link="/" />

                            <Button name="Sprookjes" link="/fairytales" />

                            <Button name="About" link="/about" />
                        </div>
                    </div>
                    <img src="/assets/element_header-footer.svg" alt="clouds" className={styles['navbar__element']} />
                </>
            )}

            {isParallaxOrMakingOf && (
                <>
                    <div className={styles['navbar__nav-wrapper']}>
                        <Link to="/">
                            <img src="/assets/logo_white.svg" alt="Er was eens..." className={styles['navbar__nav-wrapper__logo']} />
                        </Link>

                        <div className={styles['navbar__nav-wrapper__nav-buttons']}>
                            <Button name="Home" link="/" />

                            {fairytaleLink && (
                                <Button name="Sprookje" link={`${fairytaleLink}?id=${id}`} />
                            )}

                            <Button name="Making-Of" link={`/makingOf/${id}`} />
                        </div>
                    </div>
                    <img src="/assets/element_header-footer.svg" alt="clouds" className={styles['navbar__element']} />
                </>
            )}
        </nav>
    );
}