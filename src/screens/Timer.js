import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Modal} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import Icon from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-date-picker';
import Modal1 from 'react-native-modal';

const Timer = () => {
  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.main}>
      <Modal1 isVisible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker date={date} onDateChange={setDate} />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text>Update time</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal1>

      <Text style={{fontSize: 20, fontWeight: 'bold'}}>You're fasting!</Text>
      <View
        style={{
          width: 110,
          height: 25,
          borderRadius: 10,
          backgroundColor: 'lightgrey',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 12}}>20 : 4 TRF</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <AnimatedCircularProgress
          size={300}
          width={35}
          fill={80}
          tintColor="#F7803C"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#3d5875"
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 16, color: 'grey'}}>Elapsed time (90%)</Text>
          <Text style={{fontSize: 35, marginBottom: 15}}> 18:11:20</Text>
          <Text style={{fontSize: 12, color: 'grey', marginBottom: 10}}>
            Remaining (10%)
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}> 1: 59 : 40</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
          width: 300,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: 'grey'}}>
            STARTED FASTING
          </Text>
          <Text> Yesterday , 2: 25 PM</Text>

          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14, color: '#F7803C', paddingRight: 5}}>
              Edit start
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-start',

            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: 'grey'}}>
            FAST ENDING
          </Text>
          <Text> Today ,10:53 AM</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            width: 180,
            height: 50,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
            marginBottom: 5,
            shadowColor: 'lightgrey',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 3,

            elevation: 1,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#F7803C'}}>
            End fast
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginTop: 15,
  },
  centeredView: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
