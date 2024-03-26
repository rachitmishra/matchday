import './globals.css';
import * as stylex from '@stylexjs/stylex';
import { colors, spacing } from '../libs/design/tokens';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html {...stylex.props(styles.html, styles.reset)} lang="en">
<body {...stylex.props(styles.reset, styles.body)}> 
          {/* Layout UI */}
          <main {...stylex.props(styles.main)}>
          {/* <AuthContextProvider> */}
            {children}
          {/* </AuthContextProvider> */}
          </main>
      </body>
    </html>
  )
}

const DARK = '@media (prefers-color-scheme: dark)';

const MEDIA_MOBILE = '@media (max-width: 700px)' as const;

const styles = stylex.create({
  html: {
    colorScheme: 'light dark',
  },
  reset: {
    minHeight: '100%',
    margin: 0,
    padding: 0,
  },
  body: {
    // color: colors.colorBackground,
    // backgroundImage: {
    //   default: 'linear-gradient(to bottom, rgb(214, 219, 220), white)',
    //   [DARK]: 'linear-gradient(to bottom, rgb(20, 22, 27), black)',
    // },
    
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '100vh',
    // paddingTop: spacing.xxl,
    //   default: spacing.xxl,
    //   [MEDIA_MOBILE]: spacing.md,
    // },
  },
});