// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Plan Tracker App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green', // Dark blue background
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#34495e', // Darker blue border bottom
    alignItems: 'center', // Center align text
  },
  title: {
    fontSize: 36, // Increased font size to make it bigger
    fontFamily: 'Papyrus', // Font style
    color: '#5707DD', // White text color
  },
});

export default Header;
