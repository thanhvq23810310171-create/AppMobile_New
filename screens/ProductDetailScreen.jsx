import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function ProductDetailScreen() {
  const router = useRouter();
  const { cartCount, addToCart } = useCart();
  const { isLoggedIn } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerIcon}>
          <Ionicons name="arrow-back" size={24} color="#1f2937" />
        </TouchableOpacity>
        
        <Text style={styles.brandText}>PhoneHub</Text>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="share-social-outline" size={24} color="#4b5563" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.headerIcon, { marginLeft: 12 }]} onPress={() => router.push('/cart')}>
            <Ionicons name="cart" size={24} color="#4b5563" />
            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Main Image Showcase */}
        <View style={styles.imageShowcase}>
          <View style={styles.mainImagePlaceholder}>
             {/* Simulating phone mock */}
            <View style={styles.mockPhone}>
               <View style={styles.mockCamera} />
            </View>
          </View>
          
          <View style={styles.thumbnailsContainer}>
            <View style={[styles.thumbnailWrap, styles.thumbnailActive]}>
              <View style={[styles.thumbnailContent, { backgroundColor: '#111827' }]} />
            </View>
            <View style={styles.thumbnailWrap}>
              <View style={[styles.thumbnailContent, { backgroundColor: '#f3f4f6' }]} />
            </View>
            <View style={styles.thumbnailWrap}>
              <View style={[styles.thumbnailContent, { backgroundColor: '#0f172a' }]} />
            </View>
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.infoWrapper}>
          <View style={styles.metaRow}>
            <View style={styles.newReleaseBadge}>
              <Text style={styles.newReleaseText}>NEW RELEASE</Text>
            </View>
            <Text style={styles.ratingText}>★ 4.9 (2.4k reviews)</Text>
          </View>

          <Text style={styles.productTitle}>Nexus Pro 15{'\n'}Ultra</Text>
          <Text style={styles.productPrice}>$1,299.00</Text>

          {/* Colors */}
          <Text style={styles.sectionLabel}>COLOR: OBSIDIAN BLACK</Text>
          <View style={styles.colorSelector}>
            <View style={[styles.colorRingActive, { borderColor: '#16a34a' }]}>
              <View style={[styles.colorDot, { backgroundColor: '#0f172a' }]} />
            </View>
            <View style={[styles.colorDot, { backgroundColor: '#cbd5e1', marginHorizontal: 12 }]} />
            <View style={[styles.colorDot, { backgroundColor: '#14532d', marginRight: 12 }]} />
            <View style={[styles.colorDot, { backgroundColor: '#065f46' }]} />
          </View>

          {/* Storage */}
          <Text style={styles.sectionLabel}>STORAGE</Text>
          <View style={styles.storageSelector}>
            <TouchableOpacity style={[styles.storageBtn, styles.storageBtnActive]}>
              <Text style={[styles.storageText, styles.storageTextActive]}>256GB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storageBtn}>
              <Text style={styles.storageText}>512GB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.storageBtn}>
              <Text style={styles.storageText}>1TB</Text>
            </TouchableOpacity>
          </View>

          {/* Specs */}
          <View style={styles.specsRow}>
            <View style={styles.specCard}>
              <Ionicons name="camera" size={24} color="#16a34a" />
              <Text style={styles.specLabel}>CAMERA</Text>
              <Text style={styles.specValue}>200MP{'\n'}Main</Text>
            </View>
            <View style={styles.specCard}>
              <Ionicons name="battery-charging" size={24} color="#16a34a" />
              <Text style={styles.specLabel}>BATTERY</Text>
              <Text style={styles.specValue}>5000mAh</Text>
            </View>
            <View style={styles.specCard}>
              <Ionicons name="hardware-chip" size={24} color="#16a34a" />
              <Text style={styles.specLabel}>PROCESSOR</Text>
              <Text style={styles.specValue}>A18{'\n'}Bionic</Text>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.sectionTitle}>Experience the Future</Text>
          <Text style={styles.description}>
            The Nexus Pro 15 Ultra redefines what a smartphone can be. Crafted from aerospace-
            grade titanium and featuring the most advanced photographic system ever integrated
            into a mobile device. With the new 200MP sensor, capture detail beyond human perception.
          </Text>

          {/* Reviews */}
          <View style={styles.reviewsHeader}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllBtn}>View all 2.4k</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.reviewCard}>
            <View style={styles.reviewMeta}>
              <Text style={styles.reviewerName}>Alex Thompson</Text>
              <Text style={styles.reviewStars}>★★★★★</Text>
            </View>
            <Text style={styles.reviewText}>
              "The camera quality is absolutely insane. Coming from the Pro 13, it's a night and day
              difference in low light."
            </Text>
          </View>
          
        </View>
      </ScrollView>

      {/* Fixed Bottom Action Bar */}
      <View style={styles.bottomActionBar}>
        <TouchableOpacity style={styles.addToCartBtn} onPress={() => {
          if (isLoggedIn) addToCart();
          else router.push('/login');
        }}>
          <Ionicons name="cart-outline" size={20} color="#111827" style={{ marginRight: 8 }} />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowBtn} onPress={() => {
          if (isLoggedIn) router.push('/checkout');
          else router.push('/login');
        }}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
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
  brandText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#16a34a',
  },
  headerIcon: {
    padding: 4,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingBottom: 120, // space for sticky bottom bar
  },
  imageShowcase: {
    alignItems: 'center',
    marginTop: 16,
  },
  mainImagePlaceholder: {
    width: '85%',
    aspectRatio: 1,
    backgroundColor: '#000000',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 20,
  },
  mockPhone: {
    width: 120,
    height: 250,
    backgroundColor: '#111827',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#374151',
    alignItems: 'center',
  },
  mockCamera: {
    width: 32,
    height: 48,
    backgroundColor: '#000',
    borderRadius: 8,
    marginTop: 16,
    marginLeft: -48,
  },
  thumbnailsContainer: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 16,
  },
  thumbnailWrap: {
    padding: 2,
    borderRadius: 4,
  },
  thumbnailActive: {
    borderWidth: 2,
    borderColor: '#16a34a',
  },
  thumbnailContent: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  infoWrapper: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  newReleaseBadge: {
    backgroundColor: '#4ade80',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 12,
  },
  newReleaseText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#064e3b',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#16a34a',
  },
  productTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#111827',
    lineHeight: 40,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: '800',
    color: '#16a34a',
    marginBottom: 32,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#6b7280',
    letterSpacing: 1,
    marginBottom: 12,
  },
  colorSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  colorRingActive: {
    borderWidth: 2,
    borderRadius: 4,
    padding: 2,
  },
  colorDot: {
    width: 32,
    height: 32,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  storageSelector: {
    flexDirection: 'row',
    marginBottom: 32,
    gap: 12,
  },
  storageBtn: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  storageBtnActive: {
    backgroundColor: '#4ade80',
  },
  storageText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  storageTextActive: {
    color: '#064e3b',
  },
  specsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  specCard: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
  },
  specLabel: {
    fontSize: 8,
    fontWeight: '800',
    color: '#6b7280',
    marginTop: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  specValue: {
    fontSize: 12,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
    marginBottom: 32,
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAllBtn: {
    fontSize: 12,
    fontWeight: '700',
    color: '#16a34a',
  },
  reviewCard: {
    marginBottom: 32,
  },
  reviewMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  reviewStars: {
    color: '#fbbf24',
    fontSize: 12,
  },
  reviewText: {
    fontSize: 12,
    color: '#6b7280',
    fontStyle: 'italic',
    lineHeight: 18,
  },
  bottomActionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#fafbfc',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    gap: 16,
  },
  addToCartBtn: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#dcfce7',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  addToCartText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
  },
  buyNowBtn: {
    flex: 1,
    backgroundColor: '#16a34a',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  buyNowText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#ffffff',
  },
});
