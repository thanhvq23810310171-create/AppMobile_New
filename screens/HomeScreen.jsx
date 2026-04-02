import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import CategoryPill from '../components/CategoryPill';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';
import { useCart } from '../context/CartContext';

export default function HomeScreen() {
  const { cartCount } = useCart();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={{ width: 28 }} />
        <Text style={styles.brandText}>PhoneHub</Text>
        <TouchableOpacity style={styles.cartBtn}>
          <Ionicons name="cart" size={24} color="#1f2937" />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <SearchBar placeholder="Search for smartphones, accesso..." />

        {/* Categories Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          <CategoryPill title="Latest" isActive={true} onPress={() => {}} />
          <CategoryPill title="Gaming" isActive={false} onPress={() => {}} />
          <CategoryPill title="Photography" isActive={false} onPress={() => {}} />
        </ScrollView>

        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <View style={styles.newArrivalBadge}>
            <Ionicons name="star" size={10} color="#ffffff" style={{marginRight: 4}} />
            <Text style={styles.newArrivalText}>NEW ARRIVAL</Text>
          </View>
          <Text style={styles.heroTitle}>Galaxy S24{'\n'}Ultra</Text>
          <Text style={styles.heroSubtitle}>
            Experience the next era of mobile AI. Unleash new levels of creativity and productivity.
          </Text>
          <TouchableOpacity style={styles.shopNowBtn}>
            <Text style={styles.shopNowText}>Shop Now</Text>
            <Ionicons name="arrow-forward" size={16} color="#ffffff" style={{marginLeft: 8}} />
          </TouchableOpacity>
        </View>

        {/* Featured Phones */}
        <View style={[styles.sectionHeader, { marginTop: 32 }]}>
          <View>
            <Text style={styles.sectionTitle}>Featured Phones</Text>
            <Text style={styles.sectionSubtitle}>Curated for your high-tech lifestyle</Text>
          </View>
          <View style={styles.toggleIcons}>
            <TouchableOpacity style={styles.iconBtnActive}>
              <Ionicons name="grid" size={18} color="#4b5563" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="list" size={18} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.productsGrid}>
          <ProductCard
            title="iPhone 15 Pro Max"
            subtitle="Natural Titanium • 256GB"
            price="$1,199.00"
            rating="4.8"
          />
          <ProductCard
            title="Google Pixel 8 Pro"
            subtitle="Bay Blue • 128GB"
            price="$899.00"
            rating="4.6"
            isSale={true}
          />
          <ProductCard
            title="Galaxy S24 Ultra"
            subtitle="Titanium Black • 512GB"
            price="$1,299.00"
            rating="5.0"
          />
        </View>

        {/* Other Products */}
        <View style={[styles.sectionHeader, { marginTop: 16 }]}>
          <Text style={styles.sectionTitle}>Other Products</Text>
        </View>

        <View style={styles.productsGrid}>
          <ProductCard
            title="Nexus Watch Series 4"
            subtitle="Health on your wrist"
            price="$299.00"
            rating="4.7"
          />
          <ProductCard
            title="AeroBuds Pro"
            subtitle="Active Noise Cancellation"
            price="$199.00"
            rating="4.9"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation Navbar */}
      <BottomNav activeTab="home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    backgroundColor: '#16a34a',
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#16a34a',
  },
  categoriesScroll: {
    marginBottom: 24,
  },
  heroBanner: {
    backgroundColor: '#0f172a',
    borderRadius: 4,
    padding: 24,
    marginTop: 8,
  },
  newArrivalBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 16,
  },
  newArrivalText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '700',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    lineHeight: 36,
  },
  heroSubtitle: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 12,
    marginBottom: 20,
    lineHeight: 18,
  },
  shopNowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16a34a',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 4,
  },
  shopNowText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  toggleIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtnActive: {
    backgroundColor: '#f3f4f6',
    padding: 6,
    borderRadius: 8,
    marginRight: 8,
  },
  iconBtn: {
    padding: 6,
    borderRadius: 8,
  },
  productsGrid: {
    marginTop: 8,
  },
});
