import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomNav from '../components/BottomNav';
import SearchResultCard from '../components/SearchResultCard';
import { useCart } from '../context/CartContext';

const FilterPill = ({ title, isActive, hasDropdown }) => (
  <TouchableOpacity style={[styles.filterPill, isActive && styles.filterPillActive]}>
    <Text style={[styles.filterPillText, isActive && styles.filterPillTextActive]}>{title}</Text>
    {hasDropdown && (
      <Ionicons
        name="chevron-down"
        size={14}
        color={isActive ? '#16a34a' : '#6b7280'}
        style={{ marginLeft: 4 }}
      />
    )}
  </TouchableOpacity>
);

const RecentSearchPill = ({ title }) => (
  <TouchableOpacity style={styles.recentPill}>
    <Ionicons name="time-outline" size={14} color="#4b5563" />
    <Text style={styles.recentPillText}>{title}</Text>
  </TouchableOpacity>
);

export default function SearchScreen() {
  const { cartCount } = useCart();

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
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#6b7280" />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search smartphones..." 
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
          <FilterPill title="Brand" isActive={true} hasDropdown={true} />
          <FilterPill title="Price" isActive={false} hasDropdown={true} />
          <FilterPill title="OS" isActive={false} hasDropdown={true} />
          <FilterPill title="RAM" isActive={false} hasDropdown={false} />
        </ScrollView>

        {/* Recent Searches */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <TouchableOpacity>
            <Text style={styles.clearAllText}>Clear All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.recentSearchesWrapper}>
          <RecentSearchPill title="Galaxy S24 Ultra" />
          <RecentSearchPill title="iPhone 15 Pro" />
          <RecentSearchPill title="Pixel 8" />
        </View>

        {/* Search Results */}
        <View style={[styles.sectionHeader, { marginTop: 24, marginBottom: 16 }]}>
          <Text style={styles.sectionTitle}>Search Results (4)</Text>
        </View>

        <View style={styles.resultsWrapper}>
          <SearchResultCard
            title="NeoPulse Pro X1"
            badgeText="120HZ OLED"
            specs="• Snapdragon 8 Gen 3"
            price="$899"
            oldPrice="$1,049"
            isBlueBadge={true}
          />
          <SearchResultCard
            title="Lumina Z Flip"
            badgeText="FOLDABLE"
            specs="• 12GB RAM"
            price="$1,299"
            isFoldable={true}
          />
          <SearchResultCard
            title="Zenith Pure 5G"
            badgeText="48MP MAIN"
            specs="• Eco-Finish"
            price="$549"
            isBlueBadge={true}
          />
          <SearchResultCard
            title="Vortex Edge Pro"
            badgeText="INFINITY EDGE"
            specs="• 5000mAh"
            price="$799"
            isBlueBadge={true}
          />
        </View>
      </ScrollView>

      {/* Extracted BottomNav */}
      <BottomNav activeTab="search" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fafbfc', // slightly off-white for the background
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
    backgroundColor: '#ff3b30', // Red badge to stand out against blue cart, or keep blue? Let's use red or same blue. Home uses blue.
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
    paddingBottom: 100, // accommodate bottom nav
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e7eb',
    borderRadius: 4, // quite round as per new screenshot
    paddingHorizontal: 16,
    height: 48,
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: '#1f2937',
  },
  filtersScroll: {
    marginBottom: 24,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
    marginRight: 8,
  },
  filterPillActive: {
    backgroundColor: '#4ade80', // green
  },
  filterPillText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4b5563',
  },
  filterPillTextActive: {
    color: '#065f46', // dark green text for active
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  clearAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#16a34a',
  },
  recentSearchesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  recentPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  recentPillText: {
    fontSize: 12,
    color: '#4b5563',
    marginLeft: 6,
    fontWeight: '500',
  },
  resultsWrapper: {
    marginTop: 8,
  },
});
