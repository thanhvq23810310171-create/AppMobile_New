import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function CartScreen() {
  const router = useRouter();
  const { cartCount } = useCart();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={{ width: 28 }} />
          <Text style={styles.headerTitle}>PhoneHub</Text>
          <View style={{ width: 28 }} />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 }}>
          <Ionicons name="cart-outline" size={80} color="#d1d5db" style={{ marginBottom: 16 }} />
          <Text style={styles.headerTitle}>Your Cart</Text>
          <Text style={{ textAlign: 'center', marginTop: 8, color: '#6b7280' }}>Log in to add items to your cart and checkout easily.</Text>
          <TouchableOpacity style={{ backgroundColor: '#16a34a', paddingVertical: 16, paddingHorizontal: 32, borderRadius: 4, marginTop: 32 }} onPress={() => router.push('/login')}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '800' }}>Login to Shop</Text>
          </TouchableOpacity>
        </View>
        <BottomNav activeTab="cart" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ width: 28 }} />
        <Text style={styles.brandText}>PhoneHub</Text>
        <TouchableOpacity style={styles.cartBtn}>
          <Ionicons name="cart" size={24} color="#16a34a" />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle}>Your Cart</Text>
          <Text style={styles.pageSubtitle}>3 premium items ready for checkout</Text>
        </View>

        {/* Cart Items */}
        <View style={styles.itemsWrapper}>
          <CartItem
            title="iPhone 15 Pro"
            subtitle="Natural Titanium • 256GB"
            price="$1,099.00"
            quantity={1}
            imagePlaceholderColor="#0f172a"
          />
          <CartItem
            title="Galaxy S24 Ultra"
            subtitle="Titanium Gray • 512GB"
            price="$1,299.00"
            quantity={1}
            imagePlaceholderColor="#000000"
          />
          <CartItem
            title="Pulse Audio Buds"
            subtitle="Arctic White • Noise Cancelling"
            price="$249.00"
            quantity={1}
            imagePlaceholderColor="#1e293b"
          />
        </View>

        {/* Summary Block */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Summary</Text>
          
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>$2,647.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={[styles.summaryValue, { color: '#16a34a', fontWeight: '700' }]}>Free</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax (8%)</Text>
            <Text style={styles.summaryValue}>$211.76</Text>
          </View>
          
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$2,858.76</Text>
          </View>

          <TouchableOpacity style={styles.checkoutBtn} onPress={() => router.push('/checkout')}>
            <Text style={styles.checkoutBtnText}>Checkout</Text>
          </TouchableOpacity>
          <Text style={styles.checkoutNote}>Standard 2-day shipping and secure 256-bit SSL encrypted checkout.</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav activeTab="cart" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fafbfc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  brandText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#16a34a',
  },
  cartBtn: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ff3b30',
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  titleSection: {
    marginTop: 8,
    marginBottom: 24,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#111827',
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 12,
    color: '#4b5563',
  },
  itemsWrapper: {
    marginBottom: 16,
  },
  summaryCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 4,
    padding: 24,
    marginBottom: 32,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#4b5563',
  },
  summaryValue: {
    fontSize: 14,
    color: '#111827',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },
  totalValue: {
    fontSize: 24,
    fontWeight: '900',
    color: '#16a34a',
  },
  checkoutBtn: {
    backgroundColor: '#16a34a',
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  checkoutBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  checkoutNote: {
    fontSize: 10,
    color: '#9ca3af',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
    lineHeight: 14,
  },
});
