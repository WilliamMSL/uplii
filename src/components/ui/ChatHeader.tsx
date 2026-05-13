import React, { useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fonts } from '@/design';

interface ChatHeaderProps {
  scrollY?: Animated.Value;
}

const EXPANDED = 250;
const COLLAPSED = 110;
const RANGE = 100;

export function ChatHeader({ scrollY }: ChatHeaderProps) {
  const insets = useSafeAreaInsets();
  const fallback = useRef(new Animated.Value(0)).current;
  const animY = scrollY ?? fallback;

  const height = animY.interpolate({ inputRange: [0, RANGE], outputRange: [EXPANDED, COLLAPSED], extrapolate: 'clamp' });
  const extraTop = animY.interpolate({ inputRange: [0, RANGE], outputRange: [20, 4], extrapolate: 'clamp' });
  const paddingBottom = animY.interpolate({ inputRange: [0, RANGE], outputRange: [40, 12], extrapolate: 'clamp' });
  const nameSize = animY.interpolate({ inputRange: [0, RANGE], outputRange: [24, 17], extrapolate: 'clamp' });
  const statusSize = animY.interpolate({ inputRange: [0, RANGE], outputRange: [16, 12], extrapolate: 'clamp' });
  const thinkingOpacity = animY.interpolate({ inputRange: [0, RANGE / 2], outputRange: [1, 0], extrapolate: 'clamp' });
  const thinkingHeight = animY.interpolate({ inputRange: [0, RANGE], outputRange: [18, 0], extrapolate: 'clamp' });

  return (
    <Animated.View style={[styles.container, { paddingTop: Animated.add(extraTop, insets.top), height, paddingBottom }]}>
      <Animated.View style={styles.group}>
        <Animated.Text style={[styles.name, { fontSize: nameSize }]}>Uplii</Animated.Text>
        <Animated.Text style={[styles.status, { fontSize: statusSize }]}>● En ligne</Animated.Text>
        <Animated.View style={{ height: thinkingHeight, overflow: 'hidden' }}>
          <Animated.Text style={[styles.thinking, { opacity: thinkingOpacity }]}>En train de réfléchir...</Animated.Text>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E4F7FF',
    borderBottomWidth: 1,
    borderBottomColor: '#50BBEC',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    overflow: 'hidden',
  },
  group: {
    gap: 2,
  },
  name: {
    fontFamily: fonts.medium,
  },
  status: {
    fontFamily: fonts.medium,
    color: '#73CC69',
  },
  thinking: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: '#5F5F66',
  },
});
