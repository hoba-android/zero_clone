import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import LearnComponent from './components/LearnComponent';

const Learn = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <LearnComponent />
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
