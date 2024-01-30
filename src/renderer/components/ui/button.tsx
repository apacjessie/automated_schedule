import { ButtonHTMLAttributes, ElementType, FC } from 'react';
import { twmerge as twMerge } from '@/utils/index';

export enum IconPosition {
  Leading = 'leading',
  Ending = 'ending',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  Icon?: ElementType;
  iconPosition?: IconPosition;
  className?: string;
}

const Button: FC<Props> = ({
  label,
  Icon,
  iconPosition,
  className = '',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={twMerge(
        `bg-accent text-white flex py-2
    px-4 rounded-md font-bold gap-2 hover:bg-accent/75`,
        className as string,
      )}
    >
      {iconPosition === IconPosition.Leading && Icon && <Icon />}
      {label}
      {iconPosition === IconPosition.Ending && Icon && <Icon />}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  Icon: undefined,
  iconPosition: IconPosition.Leading,
};

export default Button;
