import styles from './Button.module.scss';

type Props = {
  label: string;
  color?: string;
  background?: string;
  width: number;
  height?: number;
  radius?: string;
  padding?: string;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  const {
    label,
    height = 'auto',
    width,
    padding = '10px 15px',
    color = 'rgba(255, 255, 255, 1)',
    background = 'rgba(0, 156, 180, 1)',
    radius = '0px',
    onClick = () => {},
  } = props;

  return (
    <button
      style={{
        color,
        width,
        height,
        backgroundColor: background,
        borderRadius: radius,
        padding,
      }}
      className={styles.button}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
