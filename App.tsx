import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorBoundary from './src/components/errorBoundary';
import Splash from './src/modules/onBoarding/splashScreen';
import MainNavigation from './src/navigations';
import { useEffect, useState } from 'react';
import { store } from './src/store';

const App = () => {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    SplashScreen.hide();
    const splashTimeOut = setTimeout(() => {
      setIsSplash(false);
    }, 3000);
    return () => clearTimeout(splashTimeOut);
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <SafeAreaProvider>
          {/* {isSplash ? <Splash /> : <MainNavigation />} */}
          <MainNavigation/>
        </SafeAreaProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;