import { View, StyleSheet } from 'react-native';
import { Screen } from '@/components/layout';
import { UText } from '@/components/ui';
import { colors, spacing } from '@/design';

export default function Charts() {
  return (
    <Screen padded={false}>
      <View style={styles.empty}>
        <UText variant="body" style={styles.text}>Charts — bientôt disponible</UText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text:  { color: colors.text.secondary },
});
