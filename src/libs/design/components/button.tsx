import * as stylex from "@stylexjs/stylex";

export const MDButton = ({
  title,
  onClick,
  disabled,
}: {
  disabled?: boolean;
  title: string;
  onClick: () => void;
}) => {
  return (
    <button
      {...stylex.props(styles.button)}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

const styles = stylex.create({
  button: {
    backgroundColor: {
      default: "lightblue",
      ":hover": "blue",
      ":active": "darkblue",
    },
  },
});
