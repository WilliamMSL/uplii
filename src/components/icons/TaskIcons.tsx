import Svg, { Path } from 'react-native-svg';

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

export function PlayIcon({ color = '#fff', width = 10, height = 12 }: { color?: string; width?: number; height?: number }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 12" fill="none">
      <Path d="M9 5.13397C9.66667 5.51887 9.66667 6.48113 9 6.86603L1.5 11.1962C0.833333 11.5811 0 11.1 0 10.3301V1.66987C0 0.900067 0.833334 0.418943 1.5 0.803843L9 5.13397Z" fill={color} />
    </Svg>
  );
}

export function ClockIcon({ fill = '#4EBCF0', stroke = '#2A3B5C', width = 15, height = 15 }: { fill?: string; stroke?: string; width?: number; height?: number }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path d="M7.5 13.4375C10.7792 13.4375 13.4375 10.7792 13.4375 7.5C13.4375 4.22081 10.7792 1.5625 7.5 1.5625C4.22081 1.5625 1.5625 4.22081 1.5625 7.5C1.5625 10.7792 4.22081 13.4375 7.5 13.4375Z" fill={fill} stroke={stroke} />
      <Path d="M7.5 7.5L9.5 5.9375" stroke={stroke} strokeLinecap="round" />
      <Path d="M7.5 7.5V4.0625" stroke={stroke} strokeLinecap="round" />
    </Svg>
  );
}

export function BoltIcon({ fill = '#FCD34D', stroke = '#2A3B5C', width = 15, height = 15 }: { fill?: string; stroke?: string; width?: number; height?: number }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path
        d="M8.40186 0.927734C8.92864 0.664596 9.60969 0.934679 9.74072 1.58984C9.75408 1.65694 9.7532 1.72609 9.73877 1.79297L8.76123 6.3125H11.5005C11.828 6.31263 12.1225 6.48013 12.2778 6.75195C12.4386 7.03331 12.4265 7.38923 12.2124 7.6748C12.2052 7.68443 12.1978 7.69405 12.1899 7.70312L6.75244 13.9531L6.75146 13.9521C6.46044 14.3007 6.01784 14.3332 5.69873 14.1738C5.38119 14.0151 5.13922 13.6389 5.26221 13.1992L6.23877 8.6875H3.50049C3.1728 8.6875 2.87758 8.52003 2.72217 8.24805C2.56144 7.96671 2.5735 7.61074 2.7876 7.3252L2.81006 7.29688L8.24756 1.04688C8.29049 0.997533 8.34336 0.956983 8.40186 0.927734Z"
        fill={fill}
        stroke={stroke}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BookIcon({ color = '#4A2C66', width = 28, height = 23 }: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 28 23" fill="none">
      <Path
        d="M14 22C14 22 15.4444 20.6 18.3333 18.5C21.2222 17.1 27 17.1 27 17.1V1C27 1 21.2222 1 18.3333 3.1C15.4444 5.2 14 6.6 14 6.6C14 6.6 12.5556 5.2 9.66667 3.1C6.77778 1 1 1 1 1V17.1C1 17.1 6.77778 17.1 9.66667 18.5C12.5556 20.6 14 22 14 22ZM14 6.6V22M3.88889 5.9L8.22222 6.6M3.88889 9.4L8.22222 10.1M19.7778 5.9L24.1111 6.6M19.7778 9.4L24.1111 10.1"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
