import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Input from '../components/Input';
import Button from '../components/Button';

export default function LoginScreen() {
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
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#0066ff" />
              <Text style={styles.timeText}>9:41</Text>
            </TouchableOpacity>
            <Text style={styles.brandTex}>SHOP</Text>
            <View style={styles.rightIcons}>
              <Ionicons name="cellular" size={16} color="#000" style={styles.statusIcon} />
              <Ionicons name="wifi" size={16} color="#000" style={styles.statusIcon} />
              <Ionicons name="battery-full" size={16} color="#000" style={styles.statusIcon} />
            </View>
          </View>

          {/* Logo Section */}
          <View style={styles.logoSection}>
            <View style={styles.logoCircle}>
              <Ionicons name="phone-portrait" size={32} color="#0066ff" />
            </View>
            <Text style={styles.welcomeText}>Welcome To Shop</Text>
            <Text style={styles.subtitleText}>
              Enter your details to access your{'\n'}premium digital showroom.
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            <Input
              label="EMAIL OR PHONE"
              placeholder="vuquangthanh...@email.com"
              leftIconName="person"
            />
            
            <Input
              label="PASSWORD"
              placeholder="••••••••"
              leftIconName="lock-closed"
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <Button title="Login" onPress={() => {}} />

            <View style={styles.registerContainer}>
              <Text style={styles.noAccountText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/register')}>
                <Text style={styles.registerText}>Register</Text>
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
    backgroundColor: '#ffffff',
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
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    marginLeft: 4,
    position: 'absolute',
    left: 20,
    top: -10,
  },
  brandText: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#111827',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
    justifyContent: 'flex-end',
  },
  statusIcon: {
    marginLeft: 4,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 48,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#eef4ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 28,
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
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 24,
    marginTop: -8,
  },
  forgotPasswordText: {
    color: '#0066ff',
    fontSize: 14,
    fontWeight: '700',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  noAccountText: {
    color: '#4b5563',
    fontSize: 14,
  },
  registerText: {
    color: '#0066ff',
    fontSize: 14,
    fontWeight: '700',
  },
});
