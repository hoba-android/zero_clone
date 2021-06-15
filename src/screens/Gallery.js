import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Gallery = () => {
  const [data, setData] = React.useState();
  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/random?count=30&client_id=_77970I8pPKgwpiVSGm2pBrd6b9D4BjOyDlNtpvPW8U',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
    console.log('data from h\n', data);
  }, []);

  const renderImage = image => {
    return (
      <View style={{flex: 1}}>
        <View style={{height, width}}>
          <Image
            style={{flex: 1, height: null, width: null}}
            source={{uri: image.urls.regular}}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        scrollEnabled={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => renderImage(item)}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
