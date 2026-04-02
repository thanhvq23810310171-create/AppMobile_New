import React from 'react';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AuthProvider>
        <CartProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
            <Stack.Screen name="home" />
            <Stack.Screen name="search" />
            <Stack.Screen name="cart" />
            <Stack.Screen name="compare" />
            <Stack.Screen name="account" />
            <Stack.Screen name="checkout" />
            <Stack.Screen name="product/[id]" />
          </Stack>
          <StatusBar style="dark" />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
