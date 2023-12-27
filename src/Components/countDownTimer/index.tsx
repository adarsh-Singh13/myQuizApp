/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface CountdownTimerProps {
  initialTime: string;
  isActive: boolean;
  // onStart: () => void;
  // onPause: () => void;
  // onRestart: () => void;
}

export default function CountdownTimer({initialTime}: CountdownTimerProps) {
  const [seconds, setSeconds] = useState(initialTime); // Initial time in seconds
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const restartTimer = () => {
    setSeconds(initialTime);
    setIsActive(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };

  const timerStyle = seconds < 300 ? styles.clockColor1 : styles.clockColor2;

  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.clockStyle, timerStyle]}>{formatTime(seconds)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockStyle: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 15,
    fontWeight: '900',
  },
  clockColor1: {
    color: '#e20b0b',
  },
  clockColor2: {
    color: '#02215b',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
