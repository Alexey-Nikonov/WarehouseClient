import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomContainer = ({ containerStyle, titleContainerStyle, contentContainerStyle, bottomContainerStyle, titleText, titleStyle, bottomContent, children }) => (
  <View style={[styles.container, containerStyle]}>
    {
      titleText === undefined ?
      null
      :
      <View style={titleContainerStyle}>
        <Text style={titleStyle}>
          {titleText}
        </Text>
      </View>
    }
    {
      children === undefined ?
      null
      :
      <View style={contentContainerStyle}>
        {children}
      </View>
    }
    {
      bottomContent === undefined ?
      null
      :
      <View style={bottomContainerStyle}>
        {bottomContent}
      </View>
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    backgroundColor: '#EEEEEE',
    width: 350,
    overflow: 'hidden'
  }
});

export default CustomContainer;