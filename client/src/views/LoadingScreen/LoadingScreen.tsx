import './loadingScreen.scss';
import { useAppSelector } from '../../app/hooks';
import { selectTheme } from '../../features/themeController/ThemeControllerSlice';
import Logo from '../../assets/general/k-logo.png';
import { useEffect } from 'react';

function LoadingScreen() {
    const theme = useAppSelector(selectTheme);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    });

    return (
        <div className={`loadingScreenMain ${theme === 'dark' ? 'dark' : 'light'}`}>
            <img src={Logo} alt="loadingLogo" className="loadingLogo" />
            <div className={`loader1 ${theme === 'dark' ? 'dark' : 'light'}`} />
            <div className={`loader2 ${theme === 'dark' ? 'dark' : 'light'}`} />
            <div className={`loader3 ${theme === 'dark' ? 'dark' : 'light'}`} />
        </div>
    );
}

export default LoadingScreen;
