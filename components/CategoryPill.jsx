import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CategoryPill({ title, isActive, onPress }) {
  return (
    <TouchableOpacity 
      style={[styles.pill, isActive && styles.activePill]} 
      onPress={onPress}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginRight: 8,
  },
  activePill: {
    backgroundColor: '#4ade80', // bright green
    borderColor: '#4ade80',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4b5563',
  },
  activeText: {
    color: '#ffffff',
  },
});
