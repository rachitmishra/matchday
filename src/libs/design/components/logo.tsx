import * as stylex from "@stylexjs/stylex";
import { spacing } from "@/src/libs/design";

export const MatchDay = () => {
  return (
    <div {...stylex.props(styles.container)}>
    <h1>Match Day</h1>
    <p>by sunday cricket club</p>
  </div>
  );
};

const styles = stylex.create({
  container: {
    padding: spacing.md,
    // fontFamily: fonts.logo,
  },
});
