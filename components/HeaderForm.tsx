import { ArrowBack } from '@/lib/Icons';
import { useNavigation } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type HeaderFormProps = {
  title: string;
  onSave: () => void;
};

export default function HeaderForm({ title, onSave }: HeaderFormProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.reset({
        index: 0,
        routes: [{ name: "home" }]
      })} style={styles.backButton}>
        <ArrowBack />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onSave} style={styles.saveButton}>
        <Text style={styles.saveText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  saveButton: {
    padding: 8,
    backgroundColor: '#4608AD',
    borderRadius: 12
  },
  saveText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14
  },
});
