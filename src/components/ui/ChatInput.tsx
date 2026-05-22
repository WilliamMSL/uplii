import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { borders, fonts } from '@/design';

function SendIcon() {
  return (
    <Svg width={18} height={20} viewBox="0 0 22 24" fill="none">
      <Path
        d="M1.53663 24H1.19988C0.753497 23.9307 0.401089 23.6921 0.197476 23.3688C-0.00613801 23.0455 -0.053126 22.5682 0.0721748 22.1449L2.09265 15.3094C2.31976 14.5473 3.06373 13.9623 3.83903 13.7929L12.0697 12.0071L3.64325 10.075C2.94626 9.91332 2.27277 9.31291 2.06916 8.63552L0.0800063 1.90008C-0.0922823 1.29967 0.00169319 0.714647 0.479402 0.322067C0.94928 -0.0628148 1.56795 -0.101303 2.11614 0.198905L21.3341 10.8293C21.7805 11.0757 22.0076 11.5683 21.9998 12.0225C21.992 12.4766 21.7649 12.9385 21.3341 13.1771L2.21012 23.7537C1.98301 23.8768 1.77157 23.9538 1.54446 24H1.53663Z"
        fill="white"
      />
    </Svg>
  );
}

interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({ value, onChangeText, onSend, disabled, placeholder = 'Écrivez un message…' }: ChatInputProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#B0B0B8"
          maxLength={2000}
          multiline
        />
        <TouchableOpacity
          style={[styles.sendBtn, disabled && styles.sendBtnDisabled]}
          onPress={onSend}
          disabled={disabled}
          activeOpacity={0.8}
        >
          <SendIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 120,
    borderWidth: 1,
    borderColor: '#D0D0D8',
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 13,
    fontSize: 14,
    fontFamily: fonts.regular,
    color: '#101010',
  },
  sendBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#50BBEC',
    borderWidth: 1,
    borderColor: '#3998C3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: {
    opacity: 0.5,
  },
});
