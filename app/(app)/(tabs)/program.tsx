import { View, StyleSheet } from 'react-native';
import { Screen } from '@/components/layout';
import { UText } from '@/components/ui';
import { fonts, spacing } from '@/design';

export default function Program() {
  return (
    <Screen>
      <View style={styles.header}>
        <UText style={styles.title}>Programme</UText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: spacing[4],
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
});
