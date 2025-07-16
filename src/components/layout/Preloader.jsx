import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../public/assets/lottie/preloader.json';
import { useTheme } from '../../context/ThemeContext';

const Preloader = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }, 3000);

    document.body.style.overflow = 'hidden';
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="w-40 h-40 md:w-48 md:h-48">
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
          isStopped={false}
          isPaused={false}
        />
      </div>
    </div>
  );
};

export default Preloader;
