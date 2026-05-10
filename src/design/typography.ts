export const fonts = {
  thin:        'MadeTommy-Thin',
  thinOutline: 'MadeTommy-ThinOutline',
  light:       'MadeTommy-Light',
  lightOutline:'MadeTommy-LightOutline',
  regular:     'MadeTommy-Regular',
  regularOutline: 'MadeTommy-RegularOutline',
  medium:      'MadeTommy-Medium',
  mediumOutline: 'MadeTommy-MediumOutline',
  bold:        'MadeTommy-Bold',
  boldOutline: 'MadeTommy-BoldOutline',
  extraBold:   'MadeTommy-ExtraBold',
  extraBoldOutline: 'MadeTommy-ExtraBoldOutline',
  black:       'MadeTommy-Black',
  blackOutline:'MadeTommy-BlackOutline',
} as const;

export const typography = {
  fontFamily: fonts,
  fontSize: {
    xs:    11,
    sm:    13,
    base:  15,
    md:    17,
    lg:    20,
    xl:    24,
    '2xl': 30,
    '3xl': 36,
  },
  lineHeight: {
    tight:   1.2,
    normal:  1.5,
    relaxed: 1.75,
  },
} as const;
