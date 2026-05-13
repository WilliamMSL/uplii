import { useRef, useState } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChatInput, ChatHeader, Badge, MessageBubble } from '@/components/ui';
import { useChat } from '@/features/chat/useChat';
import { colors, spacing } from '@/design';

type MockDate = { type: 'date'; id: string; label: string };
type MockMsg  = { type: 'message'; id: string; content: string; hour: string; variant: 'user' | 'bot' };
type MockItem = MockDate | MockMsg;

const MOCK: MockItem[] = [
  { type: 'date',    id: 'd1', label: 'Lundi 5 mai' },
  { type: 'message', id: 'm1', content: 'Salut Uplii ! Je veux commencer un programme de running.', hour: '09:12', variant: 'user' },
  { type: 'message', id: 'm2', content: 'Bonjour ! Avec plaisir 🏃 Tu cours déjà ou tu pars de zéro ?', hour: '09:12', variant: 'bot' },
  { type: 'message', id: 'm3', content: "Je pars de zéro, je n'ai pas couru depuis des années.", hour: '09:14', variant: 'user' },
  { type: 'message', id: 'm4', content: "Pas de souci ! Je te recommande de commencer par le programme Couch to 5K. On alterne marche et course sur 9 semaines. Tu veux qu'on démarre ?", hour: '09:14', variant: 'bot' },
  { type: 'message', id: 'm5', content: 'Oui carrément !', hour: '09:15', variant: 'user' },
  { type: 'message', id: 'm6', content: "Super ! Semaine 1 : 3 séances de 20 min — 1 min de course / 2 min de marche, alternées. Je t'ajoute ça à ton planning.", hour: '09:15', variant: 'bot' },
  { type: 'date',    id: 'd2', label: 'Mercredi 7 mai' },
  { type: 'message', id: 'm7', content: "J'ai fait ma première séance hier soir, c'était dur mais j'ai tenu !", hour: '08:30', variant: 'user' },
  { type: 'message', id: 'm8', content: "Bravo, c'est le plus dur de commencer 💪 Tu as ressenti des douleurs ?", hour: '08:31', variant: 'bot' },
  { type: 'message', id: 'm9', content: 'Un peu les mollets mais rien de méchant.', hour: '08:32', variant: 'user' },
  { type: 'message', id: 'm10', content: "C'est normal ! Étire-toi bien après chaque séance. Je t'envoie une routine d'étirements adaptée.", hour: '08:32', variant: 'bot' },
  { type: 'date',    id: 'd3', label: "Aujourd'hui" },
  { type: 'message', id: 'm11', content: "J'ai terminé la semaine 1 ! 3 séances faites 🎉", hour: '18:05', variant: 'user' },
  { type: 'message', id: 'm12', content: 'Excellent ! Tu passes en semaine 2 : 1 min 30 de course / 2 min de marche. Tu te sens prêt ?', hour: '18:05', variant: 'bot' },
  { type: 'message', id: 'm13', content: 'Oui, je me sens beaucoup mieux qu\'au début.', hour: '18:07', variant: 'user' },
  { type: 'message', id: 'm14', content: 'Parfait ! Continue comme ça, tu es sur la bonne voie 🚀', hour: '18:07', variant: 'bot' },
];

export default function Chat() {
  const { isStreaming, sendMessage } = useChat();
  const [input, setInput] = useState('');
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleSend = () => {
    if (!input.trim() || isStreaming) return;
    sendMessage(input.trim());
    setInput('');
  };

  return (
    <View style={styles.root}>
      <ChatHeader scrollY={scrollY} />

      <SafeAreaView style={styles.safe} edges={['left', 'right']}>
        <Animated.FlatList
          data={MOCK}
          keyExtractor={(item: MockItem) => item.id}
          contentContainerStyle={styles.list}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
          renderItem={({ item }: { item: MockItem }) => {
            if (item.type === 'date') {
              return <View style={styles.dateRow}><Badge label={item.label} /></View>;
            }
            return (
              <MessageBubble
                message={item.content}
                hour={item.hour}
                variant={item.variant}
              />
            );
          }}
        />
        <ChatInput
          value={input}
          onChangeText={setInput}
          onSend={handleSend}
          disabled={isStreaming}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background.primary },
  safe: { flex: 1 },
  list: { padding: spacing[4], gap: spacing[3], flexGrow: 1 },
  dateRow: { alignItems: 'center' },
});
