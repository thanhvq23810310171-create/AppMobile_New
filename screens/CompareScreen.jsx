import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';

export default function CompareScreen() {
  const router = useRouter();

  const renderProgressBar = (value, total, color) => {
    const percentage = (value / total) * 100;
    return (
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerIcon} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Performance Hub</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="swap-horizontal" size={24} color="#16a34a" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Device Headers */}
        <View style={styles.deviceRow}>
          <View style={styles.deviceCol}>
            <View style={styles.phonePlaceholder}>
               <Ionicons name="phone-portrait-outline" size={48} color="#9ca3af" />
            </View>
            <Text style={styles.brandBlue}>APPLE</Text>
            <Text style={styles.deviceName}>iPhone 15 Pro</Text>
          </View>
          <View style={styles.deviceCol}>
             <View style={styles.phonePlaceholder}>
               <Ionicons name="phone-portrait-outline" size={48} color="#9ca3af" />
            </View>
            <Text style={styles.brandGreen}>SAMSUNG</Text>
            <Text style={styles.deviceName}>S24 Ultra</Text>
          </View>
        </View>

        {/* Performance Benchmarks */}
        <View style={styles.card}>
          <View style={styles.sectionHeader}>
             <Text style={styles.cardTitle}>Performance{'\n'}Benchmarks</Text>
             <View style={styles.legendWrap}>
               <View style={[styles.legendDot, { backgroundColor: '#0066ff' }]} />
               <Text style={styles.legendText}>GEEKBENCH{'\n'}6</Text>
             </View>
          </View>

          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>Single-Core Score</Text>
            <Text style={styles.metricLabelEnd}>Higher is <Text style={{fontWeight: '800', color: '#111827'}}>better</Text></Text>
          </View>
          
          {/* iPhone Single-core */}
          <View style={styles.scoreRow}>
            <Text style={styles.scoreName}>iPhone 15 Pro</Text>
            <Text style={styles.scoreValue}>2,908</Text>
          </View>
          {renderProgressBar(2908, 3000, '#0066ff')}

          {/* Samsung Single-core */}
          <View style={styles.scoreRow}>
            <Text style={styles.scoreName}>S24 Ultra</Text>
            <Text style={styles.scoreValue}>2,271</Text>
          </View>
          {renderProgressBar(2271, 3000, '#4ade80')}

          <View style={[styles.metricRow, { marginTop: 24 }]}>
            <Text style={styles.metricLabel}>Multi-Core Score</Text>
          </View>

           {/* iPhone Multi-core */}
           <View style={styles.scoreRow}>
            <Text style={styles.scoreName}>iPhone 15 Pro</Text>
            <Text style={styles.scoreValue}>7,238</Text>
          </View>
          {renderProgressBar(7238, 8000, '#0066ff')}

          {/* Samsung Multi-core */}
          <View style={styles.scoreRow}>
            <Text style={styles.scoreName}>S24 Ultra</Text>
            <Text style={styles.scoreValue}>6,854</Text>
          </View>
          {renderProgressBar(6854, 8000, '#4ade80')}
        </View>

        {/* Battery Endurance */}
        <View style={styles.blueCard}>
           <Ionicons name="battery-half" size={24} color="#ffffff" style={{marginBottom: 12}} />
           <Text style={styles.blueCardTitle}>Battery Endurance</Text>
           <Text style={styles.blueCardDesc}>Continuous web browsing over 5G at 150 nits display brightness.</Text>
           
           <View style={styles.batteryScoreRow}>
             <Text style={styles.batteryLargeText}>11:05 <Text style={styles.batterySmallHr}>Hours</Text></Text>
             <Text style={styles.batteryDevice}>IPHONE 15 PRO</Text>
           </View>

           <View style={styles.batteryScoreRow}>
             <Text style={styles.batteryLargeText}>16:45 <Text style={styles.batterySmallHr}>Hours</Text></Text>
             <Text style={styles.batteryDevice}>S24 ULTRA</Text>
           </View>
        </View>

        {/* Camera Systems */}
        <View style={styles.card}>
          <View style={styles.iconTitleRow}>
            <View style={[styles.titleIconBox, { backgroundColor: '#dcfce7' }]}>
               <Ionicons name="camera" size={16} color="#16a34a" />
            </View>
            <Text style={styles.cardTitleLine}>Camera Systems</Text>
          </View>

          <View style={styles.columnsRow}>
            <View style={styles.colHalf}>
               <Text style={styles.colHeader}>APPLE PRORAW</Text>
               <View style={styles.specBlock}>
                 <Text style={styles.specHero}>48MP Main</Text>
                 <Text style={styles.specSub}>f/1.78, 24mm</Text>
               </View>
               <View style={styles.specBlock}>
                 <Text style={styles.specHero}>12MP Ultra Wide</Text>
                 <Text style={styles.specSub}>f/2.2, 13mm</Text>
               </View>
               <View style={styles.specBlock}>
                 <Text style={styles.specHero}>12MP Telephoto</Text>
                 <Text style={styles.specSub}>3x Optical</Text>
               </View>
            </View>

            <View style={styles.colHalf}>
               <Text style={styles.colHeader}>SPACE ZOOM</Text>
               <View style={styles.specBlock}>
                 <Text style={styles.specHero}>200MP Main</Text>
                 <Text style={styles.specSub}>f/1.7, 24mm</Text>
               </View>
               <View style={styles.specBlock}>
                 <Text style={styles.specHero}>12MP Ultra Wide</Text>
                 <Text style={styles.specSub}>f/2.2, 13mm</Text>
               </View>
               <View style={styles.specBlock}>
                 <Text style={styles.specHero}>50MP Telephoto</Text>
                 <Text style={styles.specSub}>5x Optical</Text>
               </View>
            </View>
          </View>
        </View>

        {/* Display Quality */}
        <View style={styles.card}>
          <View style={styles.iconTitleRow}>
            <View style={[styles.titleIconBox, { backgroundColor: '#e0e7ff' }]}>
               <Ionicons name="hardware-chip" size={16} color="#0066ff" />
            </View>
            <Text style={styles.cardTitleLine}>Display Quality</Text>
          </View>

          <View style={styles.brightnessRow}>
             <View style={styles.brightnessBox}>
               <Text style={styles.brightnessLabel}>PEAK BRIGHTNESS</Text>
               <Text style={styles.brightnessValueBlue}>2,000 nits</Text>
             </View>
             <View style={[styles.brightnessBox, { marginLeft: 8 }]}>
               <Text style={styles.brightnessLabel}>PEAK BRIGHTNESS</Text>
               <Text style={styles.brightnessValueGreen}>2,600 nits</Text>
             </View>
          </View>

          <View style={styles.columnsRow}>
            <View style={styles.colHalf}>
               <View style={styles.specBlock}>
                 <Text style={styles.specSub}>Technology</Text>
                 <Text style={styles.specHero}>Super Retina XDR</Text>
               </View>
               <View style={styles.specBlock}>
                 <Text style={styles.specSub}>Refresh Rate</Text>
                 <Text style={styles.specHero}>1-120Hz{'\n'}ProMotion</Text>
               </View>
            </View>
            <View style={[styles.colHalf, { alignItems: 'flex-end' }]}>
               <View style={[styles.specBlock, { alignItems: 'flex-end' }]}>
                 <Text style={styles.specSub}>Technology</Text>
                 <Text style={[styles.specHero, { textAlign: 'right' }]}>Dynamic AMOLED 2X</Text>
               </View>
               <View style={[styles.specBlock, { alignItems: 'flex-end' }]}>
                 <Text style={styles.specSub}>Refresh Rate</Text>
                 <Text style={[styles.specHero, { textAlign: 'right' }]}>1-120Hz LTPO</Text>
               </View>
            </View>
          </View>
        </View>

      </ScrollView>
      <BottomNav activeTab="compare" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  headerIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  deviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 24,
  },
  deviceCol: {
    flex: 1,
    alignItems: 'center',
  },
  phonePlaceholder: {
    backgroundColor: '#ffffff',
    width: 100,
    height: 120,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  brandBlue: {
    color: '#0066ff',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },
  brandGreen: {
    color: '#16a34a',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 4,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    lineHeight: 26,
  },
  legendWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  legendText: {
    fontSize: 8,
    fontWeight: '700',
    color: '#6b7280',
    letterSpacing: 0.5,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  metricLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  metricLabelEnd: {
    fontSize: 12,
    color: '#6b7280',
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  scoreName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111827',
  },
  scoreValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111827',
  },
  barBackground: {
    height: 8,
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
    marginBottom: 16,
  },
  barFill: {
    height: 8,
    borderRadius: 4,
  },
  blueCard: {
    backgroundColor: '#0066cc',
    borderRadius: 24,
    padding: 24,
    marginBottom: 16,
  },
  blueCardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
  },
  blueCardDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
    marginBottom: 24,
  },
  batteryScoreRow: {
    marginBottom: 20,
  },
  batteryLargeText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 4,
  },
  batterySmallHr: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.8)',
  },
  batteryDevice: {
    fontSize: 10,
    fontWeight: '800',
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: 1,
  },
  iconTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  titleIconBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardTitleLine: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  columnsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colHalf: {
    flex: 1,
  },
  colHeader: {
    fontSize: 10,
    fontWeight: '800',
    color: '#6b7280',
    letterSpacing: 1,
    marginBottom: 16,
  },
  specBlock: {
    marginBottom: 16,
  },
  specHero: {
    fontSize: 14,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  specSub: {
    fontSize: 12,
    color: '#6b7280',
  },
  brightnessRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  brightnessBox: {
    flex: 1,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  brightnessLabel: {
    fontSize: 8,
    fontWeight: '800',
    color: '#9ca3af',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  brightnessValueBlue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#0066ff',
  },
  brightnessValueGreen: {
    fontSize: 18,
    fontWeight: '900',
    color: '#16a34a',
  },
});
