import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function CheckoutScreen() {
  const router = useRouter();
  const [deliveryMethod, setDeliveryMethod] = useState('standard');

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.push('/cart');
            }
          }} 
          style={styles.headerIcon}
        >
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
        <View style={{ width: 32 }} /> {/* Spacer for centering */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Shipping Address */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          <TouchableOpacity>
            <Text style={styles.actionText}>Change</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.iconBox}>
            <Ionicons name="home" size={20} color="#16a34a" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Alex Thompson</Text>
            <Text style={styles.cardSubtitle}>123 Tech Lane, Silicon Valley</Text>
            <Text style={styles.cardSubtitle}>San Francisco, CA 94025</Text>
            <Text style={styles.cardSubtitle}>+1 (555) 000-1234</Text>
          </View>
        </View>

        {/* Delivery Method */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Delivery Method</Text>
        </View>

        <TouchableOpacity 
          style={[styles.card, styles.optionCard, deliveryMethod === 'standard' && styles.optionCardActive]} 
          onPress={() => setDeliveryMethod('standard')}
          activeOpacity={0.8}
        >
          <Ionicons 
            name={deliveryMethod === 'standard' ? "radio-button-on" : "radio-button-off"} 
            size={24} 
            color={deliveryMethod === 'standard' ? "#16a34a" : "#d1d5db"} 
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Standard Delivery</Text>
            <Text style={styles.cardSubtitle}>Estimated 3-5 business days</Text>
          </View>
          <Text style={[styles.optionPrice, { color: '#16a34a' }]}>Free</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.card, styles.optionCard, deliveryMethod === 'express' && styles.optionCardActive]}
          onPress={() => setDeliveryMethod('express')}
          activeOpacity={0.8}
        >
          <Ionicons 
            name={deliveryMethod === 'express' ? "radio-button-on" : "radio-button-off"} 
            size={24} 
            color={deliveryMethod === 'express' ? "#16a34a" : "#d1d5db"} 
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Express Delivery</Text>
            <Text style={styles.cardSubtitle}>Delivered within 24 hours</Text>
          </View>
          <Text style={styles.optionPrice}>$15.00</Text>
        </TouchableOpacity>

        {/* Order Summary */}
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          
          <View style={styles.summaryItem}>
            <View style={styles.summaryItemImage}>
              <View style={styles.mockLaptop} />
            </View>
            <View style={styles.summaryItemContent}>
              <Text style={styles.summaryItemTitle}>Nexus Pro 15{'\n'}Ultra</Text>
              <Text style={styles.summaryItemSubtitle}>Titanium Gray | 512GB</Text>
            </View>
            <Text style={styles.summaryItemPrice}>$1,199.00</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>$1,199.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={[styles.summaryValue, { color: '#16a34a' }]}>Free</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax</Text>
            <Text style={styles.summaryValue}>$95.92</Text>
          </View>
          
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$1,294.92</Text>
          </View>
        </View>

      </ScrollView>

      {/* Bottom Fixed Action */}
      <View style={styles.bottomActionContainer}>
        <TouchableOpacity style={styles.placeOrderBtn}>
          <Ionicons name="lock-closed" size={16} color="#ffffff" style={{ marginRight: 8 }} />
          <Text style={styles.placeOrderText}>Place Order</Text>
        </TouchableOpacity>
        <Text style={styles.secureText}>SECURE SSL ENCRYPTED CHECKOUT</Text>
      </View>
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
  headerIcon: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111827',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120, // Space for bottom fixed action
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#16a34a',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 16,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  optionCard: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  optionCardActive: {
    borderColor: '#16a34a',
    backgroundColor: '#f0fdf4',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#dcfce7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 18,
  },
  optionPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
  },
  summaryBox: {
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    padding: 24,
    marginTop: 12,
    marginBottom: 32,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  summaryItemImage: {
    width: 64,
    height: 64,
    backgroundColor: '#111827',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  mockLaptop: {
    width: 40,
    height: 30,
    backgroundColor: '#374151',
    borderRadius: 4,
  },
  summaryItemContent: {
    flex: 1,
  },
  summaryItemTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  summaryItemSubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  summaryItemPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginBottom: 20,
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
    marginTop: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '900',
    color: '#111827',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#111827',
  },
  bottomActionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fafbfc',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
  },
  placeOrderBtn: {
    flexDirection: 'row',
    backgroundColor: '#16a34a',
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  placeOrderText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
  secureText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#9ca3af',
    textAlign: 'center',
    letterSpacing: 1,
  },
});
