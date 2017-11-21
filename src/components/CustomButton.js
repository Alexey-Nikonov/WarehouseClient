import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

const CustomButton = ({ withoutFeedback, buttonStyle, titleStyle, title, onPress }) => (
  withoutFeedback ?
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={buttonStyle}>
      <Text style={titleStyle}>
        {title}
      </Text>
    </View>
  </TouchableWithoutFeedback>
  :
  <TouchableOpacity onPress={onPress} style={buttonStyle}>
    <Text style={titleStyle}>
      {title}
    </Text>
  </TouchableOpacity>
);

export default CustomButton;