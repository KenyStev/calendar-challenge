// Convert a pixel value to em
const toEm = (px: number) => `${px / 16}em`

const theme = {
  colors: {
    blue:          '#3073b1',
    lightblue:     '#4d84af',
    black:         '#171717',
    lightblack:    '#9c9c9c',
    white:         '#ffffff',
    whitegrey:     '#f1f1f1',
    grey:          '#a6a6a6',
    darkgrey:      '#ecf3fb',
    red:           '#b81e51'
  },

  space: [
    toEm(0),
    toEm(6),
    toEm(12),
    toEm(24),
    toEm(56),
    toEm(102),
    toEm(204)
  ],

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500
  },

  fontSizes: [
    12,
    16,
    18,
    22,
    28,
    36,
    42,
    72,
  ]
};

// Custome cell space
theme.space[145] = toEm(145);

export default theme;
