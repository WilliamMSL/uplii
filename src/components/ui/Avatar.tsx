import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { colors, borders, fonts } from '@/design';
import { UText } from './Text';

interface AvatarProps {
  uri?: string;
  name?: string;
  size?: number;
}

export function Avatar({ uri, name, size = 40 }: AvatarProps) {
  const initials = name
    ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
    : '?';

  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
      {uri
        ? <Image source={{ uri }} style={StyleSheet.absoluteFill} borderRadius={size / 2} />
        : <UText style={[styles.initials, { fontSize: size * 0.35 }]}>{initials}</UText>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.brand.primary, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  initials: { color: colors.text.inverse, fontFamily: fonts.bold },
});
