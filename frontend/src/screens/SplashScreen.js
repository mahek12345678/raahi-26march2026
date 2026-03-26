import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { useCode, block, timing } from 'react-native-reanimated';

const SplashScreen = () => {
  const opacity = new Animated.Value(0);

  useCode(
    () => block([
      timing(opacity, { toValue: 1, duration: 2000, easing: Easing.inOut(Easing.ease) })
    ]),
    []
  );

  return (
    <Animated.View style={[styles.container, { opacity }]}>  
      <Image source={require('../assets/raahi_logo.png')} style={styles.logo} />
      <Text style={styles.tagline}>Your Community Ride Partner</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default SplashScreen;
