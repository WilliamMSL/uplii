import { View, StyleSheet } from 'react-native';
import { Screen } from '@/components/layout';
import { PlusCard, UpliiPlusWithTagline, Button, UText } from '@/components/ui';
import { colors, spacing, fonts } from '@/design';

export default function UpliiPlus() {
  return (
    <Screen scroll backgroundColor={colors.background.upliiPlus}>
      <View style={styles.logoContainer}>
        <UpliiPlusWithTagline />
      </View>

      <View style={styles.cards}>
        <PlusCard
          title="Programmes illimités"
          description="Jusqu'à 24 semaines, sans limite de parcours"
        />
        <PlusCard
          title="Chat IA illimité"
          description="Discute avec Uplii autant que tu veux"
        />
        <PlusCard
          title="Coach IA avancé"
          description="Accède au modèle IA le plus performant"
        />
        <PlusCard
          title="Stats & insights avancés"
          description="Graphiques, historique et insights IA hebdo"
        />
      </View>

      <Button
        label="Essaie pour 0,00$"
        variant="golden"
        size="lg"
        style={styles.cta}
      />
      <UText style={styles.tagline}>7 jours gratuits, annule à tout moment</UText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    paddingVertical: spacing[8],
  },
  cards: {
    gap: spacing[2],
  },
  cta: {
    marginTop: spacing[6],
  },
  tagline: {
    marginTop: 16,
    fontSize: 12,
    fontFamily: fonts.regular,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
