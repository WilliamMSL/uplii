import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { UText } from './Text';
import { fonts } from '@/design';

interface MessageBubbleProps {
  message: string;
  hour: string;
  variant: 'user' | 'bot';
}

const RADIUS = 12;

function UserTail() {
  return (
    <Svg width={14} height={12} viewBox="0 0 14 12" style={styles.tailUser}>
      <Path d="M 14,0 L 0,0 L 12,11 Q 14,12 14,10 L 14,0 Z" fill="#E4F7FF" stroke="#50BBEC" strokeWidth={1} />
      <Path d="M -1,0 L 15,0" stroke="#E4F7FF" strokeWidth={2.5} />
    </Svg>
  );
}

function BotTail() {
  return (
    <Svg width={14} height={12} viewBox="0 0 14 12" style={styles.tailBot}>
      <Path d="M 0,0 L 14,0 L 2,11 Q 0,12 0,10 L 0,0 Z" fill="#FBFBFB" stroke="#D0D0D8" strokeWidth={1} />
      <Path d="M -1,0 L 15,0" stroke="#FBFBFB" strokeWidth={2.5} />
    </Svg>
  );
}

export function MessageBubble({ message, hour, variant }: MessageBubbleProps) {
  const isUser = variant === 'user';

  return (
    <View style={isUser ? styles.wrapperUser : styles.wrapperBot}>
      <View style={[styles.bubble, isUser ? styles.user : styles.bot,
        isUser ? styles.bubbleRadiusUser : styles.bubbleRadiusBot,
      ]}>
        <UText style={styles.message}>{message}</UText>
        <UText style={styles.hour}>{hour}</UText>
      </View>
      {isUser ? <UserTail /> : <BotTail />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperUser: {
    alignSelf: 'flex-end',
    maxWidth: '80%',
    alignItems: 'flex-end',
  },
  wrapperBot: {
    alignSelf: 'flex-start',
    maxWidth: '80%',
    alignItems: 'flex-start',
  },
  bubble: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 11,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 6,
  },
  bubbleRadiusUser: {
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: 3,
  },
  bubbleRadiusBot: {
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: RADIUS,
  },
  user: {
    backgroundColor: '#E4F7FF',
    borderColor: '#50BBEC',
  },
  bot: {
    backgroundColor: '#FBFBFB',
    borderColor: '#D0D0D8',
  },
  tailUser: {
    alignSelf: 'flex-end',
    marginRight: 8,
    marginTop: -1,
  },
  tailBot: {
    alignSelf: 'flex-start',
    marginLeft: 8,
    marginTop: -1,
  },
  message: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: '#5F5F66',
    flexShrink: 1,
  },
  hour: {
    fontSize: 9,
    fontFamily: fonts.regular,
    color: '#8C8C98',
  },
});
