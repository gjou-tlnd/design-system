import React from 'react';
import { ButtonProps as ReakitButtonProps } from 'reakit/Button';

import Icon, { IconName } from '../Icon/Icon';

import * as S from './Button.style';

export type ButtonProps = ReakitButtonProps & {
	/** The icon name of the button */
	icon?: IconName;
	/** If the button is small or not */
	small?: boolean;
	/** If the button should not display text */
	hideText?: boolean;
};

const Button: React.FC<ButtonProps> = React.forwardRef(
	({ className, icon, small, hideText, children, ...rest }: ButtonProps, ref) => (
		<S.Button
			ref={ref}
			{...rest}
			className={`
				btn ${className ? className : ''} ${icon ? 'btn--has-icon' : ''} ${
				hideText ? '' : 'btn--has-text'
			} ${small ? `btn--small` : ''}
			`}
		>
			{icon && <Icon className="btn__icon" name={icon} />}
			<span className={`btn__text ${hideText ? 'btn__text--hidden' : ''}`}>{children}</span>
		</S.Button>
	),
);

export default Button;
