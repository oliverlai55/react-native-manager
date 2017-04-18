import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  // Below in the [ ], ReactNative will take the origianl containerStyle, but on the right, if there is another style (props.style), it will override the original style
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
