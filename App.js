import React, {useEffect} from 'react';
import Navigator from './src/navigation/Navigator3';
import RNBootSplash from 'react-native-bootsplash';
const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return <Navigator />;
};

export default App;
