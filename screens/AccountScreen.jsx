import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';
import AccountMenuRow from '../components/AccountMenuRow';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export default function AccountScreen() {
  const router = useRouter();
  const { cartCount } = useCart();
  const { isLoggedIn, logout } = useAuth();

  const handleSignOut = () => {
    logout();
  };

  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={{ width: 28 }} />
          <Text style={styles.brandText}>PhoneHub</Text>
          <View style={{ width: 28 }} />
        </View>

        <View style={[styles.profileSection, { flex: 1, justifyContent: 'center', marginTop: 0 }]}>
          <Ionicons name="person-circle-outline" size={80} color="#d1d5db" style={{ marginBottom: 16 }} />
          <Text style={styles.userName}>Guest User</Text>
          <Text style={styles.userEmail}>Please log in to manage your account.</Text>

          <TouchableOpacity style={[styles.signOutBtn, { backgroundColor: '#16a34a', marginTop: 24, paddingHorizontal: 32 }]} onPress={() => router.push('/login')}>
            <Text style={[styles.signOutText, { color: '#ffffff' }]}>Login to Account</Text>
          </TouchableOpacity>
        </View>

        <BottomNav activeTab="account" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ width: 28 }} />
        <Text style={styles.brandText}>PhoneHub</Text>
        <TouchableOpacity style={styles.cartBtn} onPress={() => router.push('/cart')}>
          <Ionicons name="cart" size={24} color="#111827" />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile Block */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarOuterRing}>
              <View style={styles.avatarInnerBg}>
                <Ionicons name="person" size={56} color="#d1d5db" />
              </View>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Ionicons name="pencil" size={12} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>Alex Thompson</Text>
          <Text style={styles.userEmail}>alex.thompson@example.com</Text>

          <View style={styles.tagsRow}>
            <View style={styles.tagPro}>
              <Text style={styles.tagProText}>PRO MEMBER</Text>
            </View>
            <View style={styles.tagJoined}>
              <Text style={styles.tagJoinedText}>JOINED 2023</Text>
            </View>
          </View>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Ionicons name="cube" size={24} color="#16a34a" style={{ marginBottom: 12 }} />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>ORDERS</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="star" size={24} color="#bc4a1f" style={{ marginBottom: 12 }} />
            <Text style={styles.statNumber}>450</Text>
            <Text style={styles.statLabel}>POINTS</Text>
          </View>
        </View>

        {/* Settings Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>ACCOUNT SETTINGS</Text>
        </View>
        <View style={styles.cardGroup}>
          <AccountMenuRow
            iconName="time-outline"
            iconBgColor="#dcfce7"
            title="Order History"
            subtitle="Manage and track your purchases"
          />
          <AccountMenuRow
            iconName="location-outline"
            iconBgColor="#dcfce7"
            title="Saved Addresses"
            subtitle="3 active delivery locations"
          />
          <AccountMenuRow
            iconName="card-outline"
            iconBgColor="#ffedd5"
            title="Payment Methods"
            subtitle="Visa ending in •••• 4242"
            isLast={true}
          />
        </View>

        {/* Support Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>SUPPORT</Text>
        </View>
        <View style={styles.cardGroup}>
          <AccountMenuRow
            iconName="help-circle-outline"
            iconBgColor="#e5e7eb"
            title="Help Center"
            subtitle="FAQs and customer support"
            isLast={true}
          />
        </View>

        {/* Sign Out */}
        <TouchableOpacity style={styles.signOutBtn} onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={20} color="#dc2626" style={{ marginRight: 8 }} />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>

        {/* Version */}
        <Text style={styles.versionText}>PHONEHUB VERSION 4.2.1-STABLE</Text>

      </ScrollView>

      <BottomNav activeTab="account" />
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
  profileSection: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatarOuterRing: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#4ade80', // green
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInnerBg: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: '#f3f4f6',
    borderWidth: 3,
    borderColor: '#16a34a', // inner blue
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#16a34a',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  userName: {
    fontSize: 24,
    fontWeight: '900',
    color: '#111827',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 16,
  },
  tagsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  tagPro: {
    backgroundColor: '#4ade80',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  tagProText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#064e3b',
  },
  tagJoined: {
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  tagJoinedText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#4b5563',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 32,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '900',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#6b7280',
    letterSpacing: 1,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#4b5563',
    letterSpacing: 1,
  },
  cardGroup: {
    backgroundColor: '#f9fafb',
    borderRadius: 4,
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  signOutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e7eb',
    paddingVertical: 16,
    borderRadius: 4,
    marginBottom: 24,
  },
  signOutText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#dc2626',
  },
  versionText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#9ca3af',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 32,
  },
});
