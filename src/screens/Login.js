import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Button,
  Image,
  PermissionsAndroid,
} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  const androidId =
    '1072231116706-at3i3k42jj1nqi3h3pldl0v5voaq9ct4.apps.googleusercontent.com';
  const webId =
    '1072231116706-1mqd13uvgfj2agd7ltafv5u4qvn2qed5.apps.googleusercontent.com';

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: webId,
    });
  }, []);

  const signIn = () => {};
  const faceBook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      await auth().signInWithCredential(facebookCredential);
      console.log('er');
      navigation.navigate('Tabs');
    } catch (er) {
      console.log(er);
    }
  };

  const google = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
      navigation.navigate('Tabs');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 230, height: 120, resizeMode: 'contain'}}
        />

        <TextInput
          style={styles.input2}
          placeholder="Mobile Number"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setEmail}
        />

        {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
        <TouchableOpacity
          style={[styles.loginButton, {width: 150, backgroundColor: '#FF6462'}]}
          onPress={signIn}>
          <Text
            style={{fontSize: 20, fontFamily: 'CairoRegular', color: 'white'}}>
            Send code
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '75%',
            marginVertical: 10,
          }}>
          <View style={styles.hor} />
          <Text style={{fontSize: 20, fontFamily: 'CairoRegular'}}>Or</Text>
          <View style={styles.hor} />
        </View>

        <TouchableOpacity style={styles.facebookButton} onPress={faceBook}>
          <Icon2
            name="facebook"
            size={24}
            color="white"
            style={{marginRight: 10}}
          />
          <Text
            style={{fontSize: 20, fontFamily: 'CairoRegular', color: 'white'}}>
            Login with facebook account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={google}>
          <Icon
            name="google"
            size={24}
            color="white"
            style={{marginRight: 10}}
          />
          <Text
            style={{fontSize: 20, fontFamily: 'CairoRegular', color: 'white'}}>
            Login with google account
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input1: {
    width: '40%',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    borderColor: 'lightgrey',
    padding: 7,
    marginVertical: 10,
    fontFamily: 'CairoRegular',
  },
  input2: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    borderColor: 'lightgrey',
    padding: 7,
    marginVertical: 10,
    fontFamily: 'CairoRegular',
  },
  loginButton: {
    width: '80%',
    height: 45,

    borderRadius: 25,
    backgroundColor: '#388bcb',
    padding: 7,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newButton: {
    width: '80%',
    height: 45,

    borderRadius: 25,
    backgroundColor: 'black',
    padding: 7,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookButton: {
    width: '80%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 25,
    backgroundColor: '#064EB0',
    padding: 7,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    width: '80%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',

    borderRadius: 25,
    backgroundColor: '#DD4337',
    padding: 7,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hor: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    width: '40%',
  },
});

// import {AntDesign} from '@expo/vector-icons';
// import {FontAwesome} from '@expo/vector-icons';

// const Login = props => {

//   const signIn = async () => {
//     const respoonse = await fetch(
//       'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYV3YrSkQwgZXJrqwpCPNVQC9nzQB3m7c',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           returnSecureToken: true,
//         }),
//       },
//     );

//     if (!respoonse.ok) {
//       const erroeResData = await respoonse.json();
//       const errId = erroeResData.error.message;
//       var msg = 'This email could not be found';
//       setError(msg);
//       if (errId == 'EMAIL_NOT_FOUND') {
//         setError(msg);
//       } else if (errId == 'INVALID_PASSWORD') {
//         msg = 'The password is invalid';
//         setError(msg);
//       }
//       console.log(errId);
//       throw new Error(msg);
//     }

//     const data = await respoonse.json();
//     const token = data.idToken;

//     props.navigation.navigate('Dummy');
//     setError('');
//   };

//   const googleSignIn = async () => {
//     //    await Google.logInAsync(config).then((resutl) => {
//     //        const {type, user} = resutl;
//     //        if (type === 'success') {
//     //         handleMessage('Google sign in succeeded')
//     //         props.navigation.navigate("Dummy");
//     //       } else {
//     //         handleMessage('Google sign in canceled')
//     //       }
//     //    }).catch((error) => {
//     //         console.log(error)
//     //         handleMessage('An error occured')
//     //     });

//     try {
//       const result = await Google.logInAsync({
//         androidClientId: `181557170242-ce4sedotnr1ctu289jjm9qm9uef8h83h.apps.googleusercontent.com`,
//         scopes: ['profile', 'email'],
//       });

//       if (result.type === 'success') {
//         props.navigation.navigate('Dummy');
//         return result.accessToken;
//       } else {
//         return {cancelled: true};
//       }
//     } catch (e) {
//       return {error: true};
//     }
//   };

//   const facebookSingIn = async () => {
//     console.log('facebook');
//     await Facebook.initializeAsync({
//       appId: '193426132654305',
//     });

//     let {type, token} = await Facebook.logInWithReadPermissionsAsync({
//       permissions: ['public_profile'],
//     });

//     if (type === 'cancel') {
//       console.log('cancel');
//     } else {
//       console.log('success');
//       props.navigation.navigate('Dummy');
//     }
//   };

//   const faceBook = async () => {
//     try {
//       await Facebook.initializeAsync({
//         appId: '193426132654305',
//       });
//       const {type, token, expirationDate, permissions, declinedPermissions} =
//         await Facebook.logInWithReadPermissionsAsync({
//           permissions: ['public_profile'],
//         });
//       if (type === 'success') {
//         // Get the user's name using Facebook's Graph API
//         const response = await fetch(
//           `https://graph.facebook.com/me?access_token=${token}`,
//         );
//         Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
//         props.navigation.navigate('Dummy');
//       } else {
//         // type === 'cancel'
//       }
//     } catch ({message}) {
//       alert(`Facebook Login Error: ${message}`);
//     }
//   };

// };
