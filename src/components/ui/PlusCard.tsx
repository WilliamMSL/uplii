import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import Svg, { Rect, Path, G, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg';
import { UText } from './Text';
import { fonts } from '@/design';

interface PlusCardProps {
  title: string;
  description: string;
  style?: ViewStyle;
}

function PlusLogoIcon() {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <Defs>
        <LinearGradient id="plusBg" x1="-0.551724" y1="16" x2="31.4483" y2="16" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EDC659" />
          <Stop offset="1" stopColor="#DCB24A" />
        </LinearGradient>
        <ClipPath id="plusClip">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#plusClip)">
        <Rect width="32" height="32" rx="6" fill="url(#plusBg)" fillOpacity="0.15" />
        <Path
          d="M25.4421 13.5965C24.9321 12.7708 24.2114 12.0959 23.354 11.6411C22.4967 11.1863 21.5337 10.9681 20.5641 11.009C19.8319 11.0539 19.1177 11.2545 18.4692 11.5973C17.8207 11.9401 17.2527 12.4172 16.8032 12.9969C16.8831 13.1274 16.9697 13.2511 17.0417 13.3873L18.0306 15.2457L18.1813 14.96C18.4115 14.4846 18.7613 14.0771 19.1963 13.7775C19.6314 13.478 20.1368 13.2966 20.6631 13.2511C21.0932 13.235 21.5221 13.3058 21.9242 13.4592C22.3264 13.6127 22.6934 13.8457 23.0034 14.1443C23.3134 14.4429 23.56 14.8009 23.7284 15.197C23.8969 15.5931 23.9837 16.0191 23.9837 16.4495C23.9837 16.8799 23.8969 17.3059 23.7284 17.702C23.56 18.0981 23.3134 18.4561 23.0034 18.7547C22.6934 19.0533 22.3264 19.2863 21.9242 19.4398C21.5221 19.5932 21.0932 19.664 20.6631 19.6479C20.1371 19.6026 19.6318 19.4213 19.197 19.122C18.7621 18.8226 18.4125 18.4153 18.1824 17.9401L17.3904 16.4506L16.0483 13.9081C15.6342 13.0855 15.0128 12.385 14.2453 11.8758C13.4779 11.3666 12.591 11.0663 11.6721 11.0045C10.9382 10.9747 10.206 11.0934 9.51919 11.3537C8.83241 11.6139 8.20532 12.0103 7.67555 12.5189C7.14579 13.0276 6.72429 13.6381 6.43635 14.3137C6.14842 14.9893 6 15.7162 6 16.4506C6 17.1851 6.14842 17.9119 6.43635 18.5875C6.72429 19.2632 7.14579 19.8736 7.67555 20.3823C8.20532 20.891 8.83241 21.2873 9.51919 21.5476C10.206 21.8078 10.9382 21.9266 11.6721 21.8967C12.4042 21.8518 13.1184 21.6513 13.7669 21.3085C14.4154 20.9657 14.9834 20.4885 15.4329 19.9089C15.3531 19.7784 15.2664 19.6546 15.1944 19.5185L14.2056 17.6555L14.0548 17.9412C13.8246 18.4167 13.4749 18.8241 13.0398 19.1237C12.6048 19.4233 12.0993 19.6047 11.5731 19.6501C10.9993 19.6742 10.4297 19.544 9.92334 19.2731C9.41701 19.0023 8.99256 18.6006 8.69419 18.11C8.38929 17.611 8.22797 17.0376 8.22797 16.4529C8.22797 15.8681 8.38929 15.2947 8.69419 14.7958C8.98119 14.3242 9.38461 13.9344 9.86571 13.6637C10.3468 13.393 10.8894 13.2505 11.4414 13.25H11.5776C12.1036 13.2953 12.6088 13.4765 13.0437 13.7759C13.4785 14.0753 13.8281 14.4826 14.0582 14.9578L14.8457 16.4506L16.1878 18.9931C16.6019 19.8158 17.2234 20.5162 17.9908 21.0254C18.7582 21.5346 19.6452 21.8349 20.5641 21.8967H20.7992C21.7678 21.8958 22.7187 21.6367 23.554 21.1463C24.3892 20.6559 25.0788 19.9518 25.5516 19.1064C26.0245 18.2611 26.2636 17.305 26.2443 16.3366C26.2251 15.3682 25.9482 14.4224 25.4421 13.5965Z"
          fill="#F7C600"
        />
      </G>
    </Svg>
  );
}

function CheckIcon() {
  return (
    <Svg width={29} height={29} viewBox="0 0 29 29" fill="none">
      <Defs>
        <LinearGradient id="checkBg" x1="13.5" y1="-5.5" x2="34.3494" y2="28.4634" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFE38F" />
          <Stop offset="1" stopColor="#D9AE47" />
        </LinearGradient>
      </Defs>
      <Rect width="29" height="29" rx="14.5" fill="url(#checkBg)" />
      <Path d="M8 14.9572L12.0234 19.0882L20.875 10" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </Svg>
  );
}

export function PlusCard({ title, description, style }: PlusCardProps) {
  return (
    <View style={[styles.container, style]}>
      <PlusLogoIcon />
      <View style={styles.text}>
        <UText style={styles.title}>{title}</UText>
        <UText style={styles.description}>{description}</UText>
      </View>
      <CheckIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(237, 200, 107, 0.6)',
    borderRadius: 10,
    padding: 14,
    gap: 12,
  },
  text: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: '#37342D',
  },
  description: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: fonts.regular,
    color: '#59554A',
  },
});
