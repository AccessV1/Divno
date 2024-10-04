import { useState, useEffect, useCallback } from 'react';
import { appColors} from 'app/globalStyles';
import DisabledButton from 'app/components/ui/DisabledButton';
import PhoneNumberInput from 'app/components/ui/PhoneNumberInput';
import SocialButtons from 'app/components/ui/SocialButtons';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';


const socials: Array<{ name: string; img: any; }> = [
  { name: 'Google', img: require('../assets/images/googlelogo.png') },
  { name: 'Facebook', img: require('../assets/images/facebooklogo.png') },
  { name: 'applelogo', img: require('../assets/images/applelogo.png') },
];

const { width } = Dimensions.get('window'); // Get screen dimensions for responsive design

function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>(); // State to hold the phone number input
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true); // State to track if the button should be disabled

 
  useEffect(() => {
    if (phoneNumber && phoneNumber.length === 12) {
      setIsButtonDisabled(false);
      Keyboard.dismiss();
    } else {
      setIsButtonDisabled(true); 
    }
  }, [phoneNumber]);

  return (
    // TouchableWithoutFeedback is used to dismiss the keyboard when tapping outside the input field
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {/* Logo image */}
        <Image
          style={styles.img1}
          source={require('../assets/images/openlogo1.png')}
          resizeMode="contain"
        />
        
        <View>
          
          <PhoneNumberInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
          {/* Custom Button component; disabled when phone number is not valid */}
          <DisabledButton
            disabled={isButtonDisabled}
            style={{ width: width * 0.9 }} // Button width is set relative to screen width
            title="Get Verification Code"
          />
        </View>

       
        <Text style={[styles.p, { marginHorizontal: 'auto', paddingTop: 55 }]}>OR</Text>
        <Text style={[styles.p, { marginHorizontal: 'auto', paddingTop: 10 }]}>Sign in with</Text>

        {/* component for login with Google, Facebook, etc. */}
        <SocialButtons socials={socials} />

        {/* Link to sign up for new users */}
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={[styles.p, { marginHorizontal: 'auto', paddingTop: 30, color: appColors.gray }]}>
            Create a New Account?{' '}
            <Text
              style={[
                styles.p,
                { color: appColors.primary, marginHorizontal: 'auto', paddingTop: 10 },
              ]}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: width * 0.9, // Container takes 90% of the screen width for responsive layout
    flex: 1,
    paddingTop: 50,
  },
  img1: {
    marginHorizontal: 'auto',
    width: 218,
    height: 218,
    marginBottom: 50, 
  },

  p: {
    fontWeight: '600',
    fontSize: 15,
    color: 'black',
    paddingBottom: 10,
  },

  input: {
    marginBottom: 20,
    flexDirection: 'row', 
    width: width * 0.9,
    height: 50,
    backgroundColor: appColors.lightGray, 
    borderRadius: 8, 
    padding: 10, 
  },
});