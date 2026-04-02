import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Input from '../components/Input';
import Button from '../components/Button';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.keyboardAvoiding}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} color="#111827" />
            </TouchableOpacity>
            <Text style={styles.brandText}>Shop</Text>
            <View style={styles.rightIcons}>
              {/* Optional: Add status icons like LoginScreen if desired, or skip to keep it clean */}
            </View>
          </View>

          {/* Title Section */}
          <View style={styles.titleSection}>
            <Text style={styles.titleText}>Create Account</Text>
            <Text style={styles.subtitleText}>
              Join the Shop ecosystem for the{'\n'}latest in mobile innovation.
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            <Input
              label="FULL NAME"
              placeholder="Vu Quang Thanh"
              rightIconName="checkmark-circle"
              rightIconColor="#16a34a" // Green
            />
            
            <Input
              label="EMAIL"
              placeholder="vuquangthanh@gmail.com"
            />

            <Input
              label="PHONE"
              placeholder="+84 123789546"
            />

            <Input
              label="PASSWORD"
              placeholder="••••••"
              secureTextEntry={true}
              rightIconName="alert-circle"
              rightIconColor="#ef4444" // Red
              errorMessage="Password must be at least 8 characters long."
            />

            <Input
              label="CONFIRM PASSWORD"
              placeholder="••••••••"
              secureTextEntry={true}
            />

            <Button title="Create Account" onPress={() => {}} />

            <View style={styles.loginContainer}>
              <Text style={styles.accountText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/')}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    marginTop: Platform.OS === 'android' ? 24 : 0,
  },
  backButton: {
    width: 60,
    alignItems: 'flex-start',
  },
  brandText: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#111827',
  },
  rightIcons: {
    width: 60,
  },
  titleSection: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 40,
  },
  titleText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
  },
  subtitleText: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    lineHeight: 24,
  },
  formSection: {
    flex: 1,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  accountText: {
    color: '#4b5563',
    fontSize: 14,
  },
  loginText: {
    color: '#0066ff',
    fontSize: 14,
    fontWeight: '700',
  },
});
