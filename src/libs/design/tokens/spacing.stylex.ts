import * as stylex from "@stylexjs/stylex";

export const MIN_WIDTH = 320;
export const MAX_WIDTH = 1240;
export const MIN_SCALE = 1.2;
export const MAX_SCALE = 1.333;
export const MIN_BASE_SIZE = 16;
export const MAX_BASE_SIZE = 20;

const MULT = {
  xxxs: 0.25,
  xxs: 0.5,
  xs: 0.75,
  sm: 1,
  md: 1.5,
  lg: 2,
  xl: 3,
  xxl: 4,
  xxxl: 6,
  xxxxl: 8,
};

const MIN_SPACE = {
  xxxs: MULT.xxxs * MIN_BASE_SIZE,
  xxs: MULT.xxs * MIN_BASE_SIZE,
  xs: MULT.xs * MIN_BASE_SIZE,
  sm: MULT.sm * MIN_BASE_SIZE,
  md: MULT.md * MIN_BASE_SIZE,
  lg: MULT.lg * MIN_BASE_SIZE,
  xl: MULT.xl * MIN_BASE_SIZE,
  xxl: MULT.xxl * MIN_BASE_SIZE,
  xxxl: MULT.xxxl * MIN_BASE_SIZE,
  xxxxl: MULT.xxxxl * MIN_BASE_SIZE,
};

const MAX_SPACE = {
  xxxs: MULT.xxxs * MAX_BASE_SIZE,
  xxs: MULT.xxs * MAX_BASE_SIZE,
  xs: MULT.xs * MAX_BASE_SIZE,
  sm: MULT.sm * MAX_BASE_SIZE,
  md: MULT.md * MAX_BASE_SIZE,
  lg: MULT.lg * MAX_BASE_SIZE,
  xl: MULT.xl * MAX_BASE_SIZE,
  xxl: MULT.xxl * MAX_BASE_SIZE,
  xxxl: MULT.xxxl * MAX_BASE_SIZE,
  xxxxl: MULT.xxxxl * MAX_BASE_SIZE,
};

const SLOPE_SPACE = {
  xxxs: (MAX_SPACE.xxxs - MIN_SPACE.xxxs) / (MAX_WIDTH - MIN_WIDTH),
  xxs: (MAX_SPACE.xxs - MIN_SPACE.xxs) / (MAX_WIDTH - MIN_WIDTH),
  xs: (MAX_SPACE.xs - MIN_SPACE.xs) / (MAX_WIDTH - MIN_WIDTH),
  sm: (MAX_SPACE.sm - MIN_SPACE.sm) / (MAX_WIDTH - MIN_WIDTH),
  md: (MAX_SPACE.md - MIN_SPACE.md) / (MAX_WIDTH - MIN_WIDTH),
  lg: (MAX_SPACE.lg - MIN_SPACE.lg) / (MAX_WIDTH - MIN_WIDTH),
  xl: (MAX_SPACE.xl - MIN_SPACE.xl) / (MAX_WIDTH - MIN_WIDTH),
  xxl: (MAX_SPACE.xxl - MIN_SPACE.xxl) / (MAX_WIDTH - MIN_WIDTH),
  xxxl: (MAX_SPACE.xxxl - MIN_SPACE.xxxl) / (MAX_WIDTH - MIN_WIDTH),
  xxxxl: (MAX_SPACE.xxxxl - MIN_SPACE.xxxxl) / (MAX_WIDTH - MIN_WIDTH),
};

const INTERCEPT_SPACE = {
  xxxs: Math.round(4 * (MIN_SPACE.xxxs - SLOPE_SPACE.xxxs * MIN_WIDTH)) / 4,
  xxs: Math.round(4 * (MIN_SPACE.xxs - SLOPE_SPACE.xxs * MIN_WIDTH)) / 4,
  xs: Math.round(4 * (MIN_SPACE.xs - SLOPE_SPACE.xs * MIN_WIDTH)) / 4,
  sm: Math.round(4 * (MIN_SPACE.sm - SLOPE_SPACE.sm * MIN_WIDTH)) / 4,
  md: Math.round(4 * (MIN_SPACE.md - SLOPE_SPACE.md * MIN_WIDTH)) / 4,
  lg: Math.round(4 * (MIN_SPACE.lg - SLOPE_SPACE.lg * MIN_WIDTH)) / 4,
  xl: Math.round(4 * (MIN_SPACE.xl - SLOPE_SPACE.xl * MIN_WIDTH)) / 4,
  xxl: Math.round(4 * (MIN_SPACE.xxl - SLOPE_SPACE.xxl * MIN_WIDTH)) / 4,
  xxxl: Math.round(4 * (MIN_SPACE.xxxl - SLOPE_SPACE.xxxl * MIN_WIDTH)) / 4,
  xxxxl: Math.round(4 * (MIN_SPACE.xxxxl - SLOPE_SPACE.xxxxl * MIN_WIDTH)) / 4,
};

// export const spacing = stylex.defineVars({
//     xxxs:  `clamp(${MIN_SPACE.xxxs  }px, calc(${INTERCEPT_SPACE.xxxs  }px + ${ Math.round(10000 * SLOPE_SPACE.xxxs  ) / 100 }vw), ${MAX_SPACE.xxxs  }px)`,
//     xxs:   `clamp(${MIN_SPACE.xxs   }px, calc(${INTERCEPT_SPACE.xxs   }px + ${ Math.round(10000 * SLOPE_SPACE.xxs   ) / 100 }vw), ${MAX_SPACE.xxs   }px)`,
//     xs:    `clamp(${MIN_SPACE.xs    }px, calc(${INTERCEPT_SPACE.xs    }px + ${ Math.round(10000 * SLOPE_SPACE.xs    ) / 100 }vw), ${MAX_SPACE.xs    }px)`,
//     sm:    `clamp(${MIN_SPACE.sm    }px, calc(${INTERCEPT_SPACE.sm    }px + ${ Math.round(10000 * SLOPE_SPACE.sm    ) / 100 }vw), ${MAX_SPACE.sm    }px)`,
//     md:    `clamp(${MIN_SPACE.md    }px, calc(${INTERCEPT_SPACE.md    }px + ${ Math.round(10000 * SLOPE_SPACE.md    ) / 100 }vw), ${MAX_SPACE.md    }px)`,
//     lg:    `clamp(${MIN_SPACE.lg    }px, calc(${INTERCEPT_SPACE.lg    }px + ${ Math.round(10000 * SLOPE_SPACE.lg    ) / 100 }vw), ${MAX_SPACE.lg    }px)`,
//     xl:    `clamp(${MIN_SPACE.xl    }px, calc(${INTERCEPT_SPACE.xl    }px + ${ Math.round(10000 * SLOPE_SPACE.xl    ) / 100 }vw), ${MAX_SPACE.xl    }px)`,
//     xxl:   `clamp(${MIN_SPACE.xxl   }px, calc(${INTERCEPT_SPACE.xxl   }px + ${ Math.round(10000 * SLOPE_SPACE.xxl   ) / 100 }vw), ${MAX_SPACE.xxl   }px)`,
//     xxxl:  `clamp(${MIN_SPACE.xxxl  }px, calc(${INTERCEPT_SPACE.xxxl  }px + ${ Math.round(10000 * SLOPE_SPACE.xxxl  ) / 100 }vw), ${MAX_SPACE.xxxl  }px)`,
//     xxxxl: `clamp(${MIN_SPACE.xxxxl }px, calc(${INTERCEPT_SPACE.xxxxl }px + ${ Math.round(10000 * SLOPE_SPACE.xxxxl ) / 100 }vw), ${MAX_SPACE.xxxxl }px)`,
//   });

export const spacing = stylex.defineVars({
  xs: '4',
  sm: '8',
  md: '12',
});

export const scales = stylex.defineVars({
  small: "scale(0.95)",
  medium: "scale(1)",
  large: "scale(1.2)",
});

// const MEDIA_MOBILE = '@media (max-width: 700px)' as const;
// const MEDIA_TABLET =
//   '@media (min-width: 701px) and (max-width: 1120px)' as const;

// const beat = stylex.keyframes({
//   '0%': { transform: scales.medium },
//   '10%': { transform: scales.large },
//   '20%': { transform: scales.medium },
//   '30%': { transform: scales.large },
//   '40%': { transform: scales.medium },
//   '90%': { transform: scales.small },
//   '100%': { transform: scales.medium },
// });

// const style = stylex.create({
//   hero: {
//     flexGrow: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: spacing.xl,
//   },
//   h1: {
//     fontSize: text.h1,
//     lineHeight: 1,
//     fontFamily: $.fontSans,
//     fontWeight: 400,
//     textAlign: 'center',
//     display: 'flex',
//     gap: spacing.md,
//     whiteSpace: 'nowrap',
//     flexDirection: {
//       default: 'row',
//       [MEDIA_MOBILE]: 'column',
//     },
//   },
//   emoji: {
//     position: 'relative',
//     fontFamily: 'sans-serif',
//     top: {
//       default: 0,
//       [MEDIA_MOBILE]: spacing.xxxs,
//     },
//     animationName: beat,
//     animationDuration: '2s',
//     animationIterationCount: 'infinite',
//     animationTimingFunction: 'linear',
//   },
//   description: {
//     display: 'inherit',
//     justifyContent: 'inherit',
//     alignItems: 'inherit',
//     fontSize: text.sm,
//     maxWidth: $.maxWidth,
//     width: '100%',
//     zIndex: 2,
//     fontFamily: $.fontMono,
//   },
//   descLink: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: spacing.xxs,
//     padding: { [MEDIA_MOBILE]: spacing.sm },
//   },
//   descP: {
//     display: { [MEDIA_MOBILE]: 'flex' },
//     position: {
//       default: 'relative',
//       [MEDIA_MOBILE]: 'fixed',
//     },
//     justifyContent: { [MEDIA_MOBILE]: 'center' },
//     alignItems: { [MEDIA_MOBILE]: 'center' },
//     width: { [MEDIA_MOBILE]: '100%' },
//     margin: 0,
//     paddingInline: spacing.sm,
//     paddingTop: {
//       default: spacing.sm,
//       [MEDIA_MOBILE]: spacing.lg,
//     },
//     paddingBottom: {
//       default: spacing.sm,
//       [MEDIA_MOBILE]: spacing.md,
//     },
//     backgroundColor: $.calloutRGB50,
//     backgroundImage: {
//       default: null,
//       [MEDIA_MOBILE]: `linear-gradient(to bottom, ${$.bgStartRGB}, ${$.calloutRGB50})`,
//     },
//     borderWidth: {
//       default: '1px',
//       [MEDIA_MOBILE]: '0',
//     },
//     borderStyle: 'solid',
//     borderColor: `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.3)`,
//     borderBottomColor: {
//       default: null,
//       [MEDIA_MOBILE]: `rgba(${$.calloutBorderR}, ${$.calloutBorderG}, ${$.calloutBorderB}, 0.25)`,
//     },
//     borderRadius: {
//       default: spacing.xs,
//       [MEDIA_MOBILE]: 0,
//     },
//     inset: { [MEDIA_MOBILE]: '0 0 auto' },
//   },
//   code: {
//     fontWeight: 700,
//     fontFamily: $.fontMono,
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: {
//       default: 'repeat(4, minmax(25%, auto))',
//       [MEDIA_MOBILE]: '1fr',
//       [MEDIA_TABLET]: 'repeat(2, 50%)',
//     },
//     width: $.maxWidth,
//     maxWidth: {
//       default: '100%',
//       [MEDIA_MOBILE]: 320,
//     },
//     textAlign: { [MEDIA_MOBILE]: 'center' },
//   },
// });
