import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import LearnComponent from './components/LearnComponent';
import VideoPlayer from './components/VideoPlayer';

const Learn = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <LearnComponent />
        {/* <VideoPlayer /> */}
      </View>
    </ScrollView>
  );
};

export default Learn;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
