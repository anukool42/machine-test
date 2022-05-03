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
import SignlRow from './SignalRow';

const App = () => {
  const [signal, setSignal] = React.useState([
    {
      is_open: true,
      label: 'A',
      position: 1,
      amb: false,
    },
    {
      is_open: false,
      label: 'B',
      position: 2,
      amb: false,
    },
    {
      is_open: false,
      label: 'C',
      position: 3,
      amb: false,
    },
    {
      is_open: false,
      label: 'D',
      position: 4,
      amb: false,
    },
  ]);
  const [passTime, setPassTime] = React.useState(5);
  const [currentSignal, setCurrentSignal] = React.useState(0);

  React.useEffect(() => {
    setInterval(() => {
      signal[currentSignal].is_open = false;
      signal[currentSignal + 1].is_open = true;
      let cs = currentSignal + 1;
      if (cs > 3) {
        setCurrentSignal(0);
      } else {
        setCurrentSignal(cs);
      }

      console.log(currentSignal, '-------------');
      // setSignal(arr);
    }, passTime * 1000);
  }, [currentSignal]);

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <SignlRow
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        highlight={signal[0].is_open}
        amb={signal[0].amb}
        label={signal[0].label}
        passTime={passTime}
      />
      <View style={{flexDirection: 'row'}}>
        <SignlRow
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          highlight={signal[3].is_open}
          amb={signal[3].amb}
          label={signal[3].label}
          passTime={passTime}
        />
        <SignlRow
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          highlight={signal[1].is_open}
          amb={signal[1].amb}
          label={signal[1].label}
          passTime={passTime}
        />
      </View>

      <SignlRow
        style={{
          flexDirection: 'column-reverse',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        highlight={signal[2].is_open}
        amb={signal[2].amb}
        label={signal[2].label}
        passTime={passTime}
      />
    </SafeAreaView>
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

export default App;
