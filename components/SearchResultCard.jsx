import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function SearchResultCard({ title, badgeText, specs, price, oldPrice, isFoldable, isBlueBadge }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();

  const handleCardPress = () => {
    router.push('/product/1');
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleCardPress} activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        {/* Placeholder image representation */}
        <Ionicons name="phone-portrait-outline" size={48} color="#9ca3af" />
        {isFoldable && <Text style={styles.placeholderLabel}>SAFE</Text>}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        
        <View style={styles.metadataRow}>
          {badgeText && (
            <View style={[styles.badge, isBlueBadge ? styles.badgeBlue : styles.badgeGreen]}>
              <Text style={[styles.badgeText, isBlueBadge ? styles.badgeTextBlue : styles.badgeTextGreen]}>
                {badgeText}
              </Text>
            </View>
          )}
          <Text style={styles.specsText}>{specs}</Text>
        </View>
        
        <View style={styles.priceRow}>
          <Text style={styles.price}>{price}</Text>
          {oldPrice && <Text style={styles.oldPrice}>{oldPrice}</Text>}
        </View>
      </View>

      <TouchableOpacity 
        style={styles.cartButton} 
        onPress={(e) => {
          e.stopPropagation();
          if (isLoggedIn) addToCart();
          else router.push('/login');
        }}
      >
        <Ionicons name="cart-outline" size={20} color="#1f2937" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 4,
    backgroundColor: '#dcfce7', // light blue background
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  placeholderLabel: {
    color: '#16a34a',
    fontSize: 10,
    fontWeight: '700',
    marginTop: 4,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 6,
  },
  metadataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 6,
  },
  badgeBlue: {
    backgroundColor: '#dcfce7',
  },
  badgeGreen: {
    backgroundColor: '#dcfce7',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
  },
  badgeTextBlue: {
    color: '#2563eb',
  },
  badgeTextGreen: {
    color: '#16a34a',
  },
  specsText: {
    fontSize: 12,
    color: '#6b7280',
    flexShrink: 1,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '900',
    color: '#111827',
  },
  oldPrice: {
    fontSize: 14,
    color: '#9ca3af',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
