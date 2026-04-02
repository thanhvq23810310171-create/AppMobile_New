import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function BottomNav({ activeTab }) {
  const router = useRouter();

  const getStyle = (tabName) => {
    const isActive = activeTab === tabName;
    return {
      wrap: [styles.navItem, isActive && styles.navItemActive],
      textColor: isActive ? '#16a34a' : '#9ca3af',
      iconColor: isActive ? '#16a34a' : '#9ca3af',
    };
  };

  const handlePress = (tabName) => {
    if (tabName === 'home') router.push('/home');
    if (tabName === 'search') router.push('/search');
    if (tabName === 'cart') router.push('/cart');
    if (tabName === 'compare') router.push('/compare');
    if (tabName === 'account') router.push('/account');
  };

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={getStyle('home').wrap} onPress={() => handlePress('home')}>
        <Ionicons name="home" size={24} color={getStyle('home').iconColor} />
        <Text style={[styles.navText, { color: getStyle('home').textColor }]}>HOME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={getStyle('search').wrap} onPress={() => handlePress('search')}>
        <View style={activeTab === 'search' ? styles.activeSearchBg : null}>
          <Ionicons name="search" size={24} color={getStyle('search').iconColor} />
        </View>
        <Text style={[styles.navText, { color: getStyle('search').textColor }]}>SEARCH</Text>
      </TouchableOpacity>

      <TouchableOpacity style={getStyle('cart').wrap} onPress={() => handlePress('cart')}>
        <Ionicons name="cart" size={24} color={getStyle('cart').iconColor} />
        <Text style={[styles.navText, { color: getStyle('cart').textColor }]}>CART</Text>
      </TouchableOpacity>

      <TouchableOpacity style={getStyle('compare').wrap} onPress={() => handlePress('compare')}>
        <Ionicons name="swap-horizontal" size={24} color={getStyle('compare').iconColor} />
        <Text style={[styles.navText, { color: getStyle('compare').textColor }]}>COMPARE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={getStyle('account').wrap} onPress={() => handlePress('account')}>
        <Ionicons name="person" size={24} color={getStyle('account').iconColor} />
        <Text style={[styles.navText, { color: getStyle('account').textColor }]}>ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navItemActive: {
    // Only applied if we want special styling, but for now we rely on color change
  },
  activeSearchBg: {
    backgroundColor: '#dbf0ff',
    padding: 8,
    borderRadius: 4,
    marginTop: -16, // pull it up slightly if needed, or just let it sit
  },
  navText: {
    fontSize: 10,
    fontWeight: '800',
    marginTop: 4,
  },
});
