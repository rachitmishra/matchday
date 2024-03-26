import * as stylex from '@stylexjs/stylex';

const DARK_MODE = '@media (prefers-color-scheme: dark)';
export const colors = stylex.defineVars({
    colorPrimary: {
      default: 'rgb(58 105 59)',
      [DARK_MODE]: 'rgb(160 212 155)',
    },
    colorSurfaceTint: {
      default: 'rgb(58 105 59)',
      [DARK_MODE]: 'rgb(160 212 155)',
    },
    colorOnPrimary: {
      default: 'rgb(255 255 255)',
      [DARK_MODE]: 'rgb(7 57 16)',
    },
    colorPrimaryContainer: {
      default: 'rgb(187 240 181)',
      [DARK_MODE]: 'rgb(34 80 37)',
    },
    colorOnPrimaryContainer: {
      default: 'rgb(0 33 5)',
      [DARK_MODE]: 'rgb(187 240 181)',
    },
    colorSecondary: {
      default: 'rgb(82 99 79)',
      [DARK_MODE]: 'rgb(185 204 180)',
    },
    colorOnSecondary: {
      default: 'rgb(255 255 255)',
      [DARK_MODE]: 'rgb(37 52 35)',
    },
    colorSecondaryContainer: {
      default: 'rgb(213 232 207)',
      [DARK_MODE]: 'rgb(59 75 57)',
    },
    colorOnSecondaryContainer: {
      default: 'rgb(16 31 16)',
      [DARK_MODE]: 'rgb(213 232 207)',
    },
    colorTertiary: {
      default: 'rgb(57 101 107)',
      [DARK_MODE]: 'rgb(161 206 213)',
    },
    colorOnTertiary: {
      default: 'rgb(255 255 255)',
      [DARK_MODE]: 'rgb(0 54 60)',
    },
    colorTertiaryContainer: {
      default: 'rgb(188 235 241)',
      [DARK_MODE]: 'rgb(31 77 83)',
    },
    colorOnTertiaryContainer: {
      default: 'rgb(0 31 35)',
      [DARK_MODE]: 'rgb(188 235 241)',
    },
    colorError: {
      default: 'rgb(186 26 26)',
      [DARK_MODE]: 'rgb(255 180 171)',
    },
    colorOnError: {
      default: 'rgb(255 255 255)',
      [DARK_MODE]: 'rgb(105 0 5)',
    },
    colorErrorContainer: {
      default: 'rgb(255 218 214)',
      [DARK_MODE]: 'rgb(147 0 10)',
    },
    colorOnErrorContainer: {
      default: 'rgb(65 0 2)',
      [DARK_MODE]: 'rgb(255 218 214)',
    },
    colorBackground: {
      default: 'rgb(247 251 241)',
      [DARK_MODE]: 'rgb(16 20 15)',
    },
    colorOnBackground: {
      default: 'rgb(24 29 23)',
      [DARK_MODE]: 'rgb(224 228 219)',
    },
    colorSurface: {
      default: 'rgb(247 251 241)',
      [DARK_MODE]: 'rgb(16 20 15)',
    },
    colorOnSurface: {
      default: 'rgb(24 29 23)',
      [DARK_MODE]: 'rgb(224 228 219)',
    },
    colorSurfaceVariant: {
      default: 'rgb(222 229 217)',
      [DARK_MODE]: 'rgb(66 73 64)',
    },
    colorOnSurfaceVariant: {
      default: 'rgb(66 73 64)',
      [DARK_MODE]: 'rgb(194 201 189)',
    },
    colorOutline: {
      default: 'rgb(114 121 111)',
      [DARK_MODE]: 'rgb(140 147 136)',
    },
    colorOutlineVariant: {
      default: 'rgb(194 201 189)',
      [DARK_MODE]: 'rgb(66 73 64)',
    },
    colorShadow: {
      default: 'rgb(0 0 0)',
      [DARK_MODE]: 'rgb(0 0 0)',
    },
    colorScrim: {
      default: 'rgb(0 0 0)',
      [DARK_MODE]: 'rgb(0 0 0)',
    },
    colorInverseSurface: {
      default: 'rgb(45 50 44)',
      [DARK_MODE]: 'rgb(224 228 219)',
    },
    colorInverseOnSurface: {
      default: 'rgb(238 242 233)',
      [DARK_MODE]: 'rgb(45 50 44)',
    },
    colorInversePrimary: {
      default: 'rgb(160 212 155)',
      [DARK_MODE]: 'rgb(58 105 59)',
    },
    colorPrimaryFixed: {
      default: 'rgb(187 240 181)',
      [DARK_MODE]: 'rgb(187 240 181)',
    },
    colorOnPrimaryFixed: {
      default: 'rgb(0 33 5)',
      [DARK_MODE]: 'rgb(0 33 5)',
    },
    colorPrimaryFixedDim: {
      default: 'rgb(160 212 155)',
      [DARK_MODE]: 'rgb(160 212 155)',
    },
    colorOnPrimaryFixedVariant: {
      default: 'rgb(34 80 37)',
      [DARK_MODE]: 'rgb(34 80 37)',
    },
    colorSecondaryFixed: {
      default: 'rgb(213 232 207)',
      [DARK_MODE]: 'rgb(213 232 207)',
    },
    colorOnSecondaryFixed: {
      default: 'rgb(16 31 16)',
      [DARK_MODE]: 'rgb(16 31 16)',
    },
    colorSecondaryFixedDim: {
      default: 'rgb(185 204 180)',
      [DARK_MODE]: 'rgb(185 204 180)',
    },
    colorOnSecondaryFixedVariant: {
      default: 'rgb(59 75 57)',
      [DARK_MODE]: 'rgb(59 75 57)',
    },
    colorTertiaryFixed: {
      default: 'rgb(188 235 241)',
      [DARK_MODE]: 'rgb(188 235 241)',
    },
    colorOnTertiaryFixed: {
      default: 'rgb(0 31 35)',
      [DARK_MODE]: 'rgb(0 31 35)',
    },
    colorTertiaryFixedDim: {
      default: 'rgb(161 206 213)',
      [DARK_MODE]: 'rgb(161 206 213)',
    },
    colorOnTertiaryFixedVariant: {
      default: 'rgb(31 77 83)',
      [DARK_MODE]: 'rgb(31 77 83)',
    },
    colorSurfaceDim: {
      default: 'rgb(215 219 210)',
      [DARK_MODE]: 'rgb(16 20 15)',
    },
    colorSurfaceBright: {
      default: 'rgb(247 251 241)',
      [DARK_MODE]: 'rgb(54 58 52)',
    },
    colorSurfaceContainerLowest: {
      default: 'rgb(255 255 255)',
      [DARK_MODE]: 'rgb(11 15 10)',
    },
    colorSurfaceContainerLow: {
      default: 'rgb(241 245 236)',
      [DARK_MODE]: 'rgb(24 29 23)',
    },
    colorSurfaceContainer: {
      default: 'rgb(235 239 230)',
      [DARK_MODE]: 'rgb(28 33 27)',
    },
    colorSurfaceContainerHigh: {
      default: 'rgb(230 233 224)',
      [DARK_MODE]: 'rgb(39 43 37)',
    },
    colorSurfaceContainerHighest: {
      default: 'rgb(224 228 219)',
      [DARK_MODE]: 'rgb(50 54 48)',
    },
})
