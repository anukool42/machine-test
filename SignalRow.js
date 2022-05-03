import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SignlRow = props => {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={[
          styles.button_one,
          {backgroundColor: props.amb ? 'red' : '#fff'},
        ]}>
        <Text>AMB</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button_one,
          {backgroundColor: props.highlight ? 'red' : '#fff'},
        ]}>
        <Text>{props.label}</Text>
      </TouchableOpacity>
      <Text style={styles.text_one}>{props.passTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button_one: {
    margin: 5,
    padding: 5,
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_one: {
    margin: 5,
    padding: 5,
    // textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SignlRow;
