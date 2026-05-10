export const colors = {

  // ─── Brand Uplii ───────────────────────────────────────────────
  brand: {
    primary:          '#50BBEC',  // bleu principal
    primaryHover:     '#45AEDE',  // généré — entre primary et pressed
    primaryPressed:   '#3998C3',  // figma: button press
    primarySelected:  '#4EBCF0',  // figma: selected card background
    primaryLight:     '#D4F1FF',  // figma: background uplii normal
    primaryLighter:   '#EAF8FF',  // généré — fond subtil
    primaryLightest:  '#F5FCFF',  // généré — surface très légère
  },

  // ─── Button tertiary (dark teal) ──────────────────────────────
  tertiary: {
    default:  '#2A607D',  // figma: tertiary button bg
    pressed:  '#1D4459',  // figma: tertiary button border / pressed
    light:    '#3A7A9C',  // généré — hover
  },

  // ─── Uplii+ (tier premium) ────────────────────────────────────
  plus: {
    background:       '#FFF7E1',  // figma: background uplii+
    accent:           '#F7C600',  // figma: logo uplii+ (or)
    accentLight:      '#FFF3B0',  // généré — hover / highlight or
    accentLighter:    '#FFFAE5',  // généré — fond très doux
  },

  // ─── Texte ────────────────────────────────────────────────────
  text: {
    primary:          '#101010',  // figma: text color
    secondary:        '#575757',  // figma: secondary text color
    placeholder:      '#9E9E9E',  // figma: input placeholder
    icon:             '#7A7A8A',  // figma: input icon color
    tag:              '#7CB342',  // figma: grey text color (vert — badges/tags)
    disabled:         '#B8B8C0',  // généré
    inverse:          '#FFFFFF',
  },

  // ─── UI / Bordures / Inputs ───────────────────────────────────
  ui: {
    border:           '#D0D0D8',  // figma: button border + input border
    borderFocus:      '#50BBEC',  // généré — focus ring
    borderError:      '#EF4444',  // généré
    inputBackground:  '#F5F5F7',  // figma: input background
    inputIcon:        '#7A7A8A',  // figma: input icon color
    divider:          '#E8E8EF',  // généré — séparateurs
  },

  // ─── Backgrounds ──────────────────────────────────────────────
  background: {
    primary:          '#FFFFFF',
    surface:          '#F5F5F7',  // figma: input background (réutilisé pour cards)
    upliiNormal:      '#D4F1FF',  // figma: background uplii normal
    upliiPlus:        '#FFF7E1',  // figma: background uplii+
  },

  // ─── Sémantique ───────────────────────────────────────────────
  semantic: {
    success:          '#7CB342',  // figma: tag vert
    successLight:     '#EDF4E0',  // généré
    error:            '#EF4444',
    errorLight:       '#FEE2E2',  // généré
    warning:          '#F7C600',  // aligné sur or uplii+
    warningLight:     '#FFF7CD',  // généré
    info:             '#50BBEC',  // aligné sur brand
    infoLight:        '#D4F1FF',  // aligné sur uplii normal
  },

  // ─── Neutrals ─────────────────────────────────────────────────
  neutral: {
    0:    '#FFFFFF',
    50:   '#F5F5F7',  // figma: input background
    100:  '#EBEBEF',  // généré
    200:  '#D0D0D8',  // figma: border
    300:  '#B8B8C0',  // généré
    400:  '#9E9E9E',  // figma: placeholder
    500:  '#7A7A8A',  // figma: icon
    600:  '#575757',  // figma: secondary text
    700:  '#3A3A3A',  // généré
    800:  '#222222',  // généré
    900:  '#101010',  // figma: primary text
    1000: '#000000',
  },

} as const;
