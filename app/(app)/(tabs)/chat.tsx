import { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Screen } from '@/components/layout';
import { UText, Card } from '@/components/ui';
import { useChat } from '@/features/chat/useChat';
import { colors, spacing, borders, typography, fonts } from '@/design';
import type { Message } from '@/types';

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user';
  return (
    <View style={[styles.bubble, isUser ? styles.bubbleUser : styles.bubbleAssistant]}>
      <UText variant="body" style={isUser ? styles.textUser : undefined}>
        {message.content}
      </UText>
    </View>
  );
}

export default function Chat() {
  const { messages, isStreaming, sendMessage } = useChat();
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim() || isStreaming) return;
    sendMessage(input.trim());
    setInput('');
  };

  return (
    <Screen padded={false}>
      <FlatList
        data={messages}
        keyExtractor={(m) => m.id}
        renderItem={({ item }) => <MessageBubble message={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>
            <UText variant="body" style={{ color: colors.text.secondary }}>Posez votre première question…</UText>
          </View>
        }
      />
      <Card style={styles.inputBar}>
        <TextInput
          style={styles.textInput}
          value={input}
          onChangeText={setInput}
          placeholder="Écrivez un message…"
          placeholderTextColor={colors.text.disabled}
          multiline
        />
        <TouchableOpacity onPress={handleSend} disabled={isStreaming} style={styles.sendBtn}>
          <UText variant="small" style={styles.sendText}>Envoyer</UText>
        </TouchableOpacity>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: { padding: spacing[4], gap: spacing[3], flexGrow: 1 },
  bubble: { maxWidth: '80%', padding: spacing[3], borderRadius: borders.radius.lg },
  bubbleUser: { backgroundColor: colors.brand.primary, alignSelf: 'flex-end' },
  bubbleAssistant: { backgroundColor: colors.neutral[100], alignSelf: 'flex-start' },
  textUser: { color: colors.text.inverse },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: spacing[16] },
  inputBar: { margin: spacing[3], flexDirection: 'row', alignItems: 'flex-end', gap: spacing[2], padding: spacing[3] },
  textInput: { flex: 1, fontSize: typography.fontSize.base, color: colors.text.primary, maxHeight: 100 },
  sendBtn: { backgroundColor: colors.brand.primary, paddingHorizontal: spacing[3], paddingVertical: spacing[2], borderRadius: borders.radius.md },
  sendText: { color: colors.text.inverse, fontFamily: fonts.bold },
});
