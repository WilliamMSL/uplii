import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from './Avatar';
import { UText } from './Text';
import { colors, fonts } from '@/design';

interface ProfilHeaderProps {
  name?: string;
  username?: string;
  avatarUri?: string;
  joinedYear?: number | string;
}

export function ProfilHeader({ name, username, avatarUri, joinedYear }: ProfilHeaderProps) {
  return (
    <View style={styles.container}>
      <Avatar uri={avatarUri} name={name} size={90} />
      <View style={styles.info}>
        <UText style={styles.name}>{name ?? 'Prénom'}</UText>
        <UText style={styles.username}>{username ? `@${username}` : 'Utilisateur'}</UText>
        <UText style={styles.joined}>{joinedYear ? `À rejoint en ${joinedYear}` : 'A rejoint Uplii'}</UText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 24,
  },
  info: {
    gap: 0,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.medium,
    color: colors.text.primary,
  },
  username: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
  },
  joined: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
  },
});
