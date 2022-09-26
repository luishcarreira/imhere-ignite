import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState(['Luis Henrique'])

  function handleParticipantAdd() {
    if(participants.includes('Maumau')) {
      return Alert.alert("Participante existente", "Já existe um participante na lista com esse nome!")
    }

    setParticipants(prevState => [...prevState, 'Ana'])
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!')
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presentes
          </Text>
        )}
      />
    </View>
  )
}
