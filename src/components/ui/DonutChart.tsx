import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export interface DonutSegment {
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: DonutSegment[];
  strokeWidth?: number;
  gap?: number;
  capRadius?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
}

const SIZE = 296;
const CENTER = SIZE / 2;

function polar(cx: number, cy: number, r: number, deg: number): [number, number] {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function segmentPath(
  cx: number, cy: number,
  outerR: number, innerR: number,
  startDeg: number, endDeg: number,
  capR: number,
): string {
  const sweep = endDeg - startDeg;
  const large = sweep > 180 ? 1 : 0;

  const [x1, y1] = polar(cx, cy, outerR, startDeg);
  const [x2, y2] = polar(cx, cy, outerR, endDeg);
  const [x3, y3] = polar(cx, cy, innerR, endDeg);
  const [x4, y4] = polar(cx, cy, innerR, startDeg);

  return [
    `M ${x1} ${y1}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${x2} ${y2}`,
    `A ${capR} ${capR} 0 0 1 ${x3} ${y3}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${x4} ${y4}`,
    `A ${capR} ${capR} 0 0 1 ${x1} ${y1}`,
    'Z',
  ].join(' ');
}

export function DonutChart({
  segments,
  strokeWidth = 22,
  gap = 4,
  capRadius,
  children,
  style,
}: DonutChartProps) {
  const outerR = CENTER - 1;
  const innerR = outerR - strokeWidth;
  const total = segments.reduce((s, seg) => s + seg.value, 0);
  const capR = capRadius ?? strokeWidth * 0.75;

  // Convert gap from px to degrees
  const gapDeg = (gap / (2 * Math.PI * ((outerR + innerR) / 2))) * 360;

  let angle = 0;

  return (
    <View style={[styles.container, style]}>
      <Svg width={SIZE} height={SIZE}>
        {segments.map((seg, i) => {
          const sweep = (seg.value / total) * 360;
          const startDeg = angle + gapDeg / 2;
          const endDeg = angle + sweep - gapDeg / 2;
          angle += sweep;

          return (
            <Path
              key={i}
              d={segmentPath(CENTER, CENTER, outerR, innerR, startDeg, endDeg, capR)}
              fill={seg.color}
            />
          );
        })}
      </Svg>

      {children && (
        <View style={styles.center} pointerEvents="none">
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    alignSelf: 'center',
  },
  center: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
