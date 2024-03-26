import * as stylex from '@stylexjs/stylex';

export const MDInput = ({
    type,
    placeholder,
    value,
    onChange,
}: {
    type: 'tel' | 'number';
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div {...stylex.props(styles.container)}>
      <input
        {...stylex.props(styles.input)}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const styles = stylex.create({
  input: {
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '10px',
  },
  container: {
    marginBottom: '10px',
  },
});

