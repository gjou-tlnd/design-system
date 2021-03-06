import React from 'react';
import styled, { StyledProps } from 'styled-components';
import { BoxProps } from 'reakit';
import icons from '../../icons';

import tokens from '../../tokens';

export type IconName =
	| 'arrowLeft'
	| 'bell'
	| 'burger'
	| 'bubbles'
	| 'caret'
	| 'cross'
	| 'check'
	| 'datagrid'
	| 'eye'
	| 'eyeSlash'
	| 'information'
	| 'link'
	| 'minus'
	| 'opener'
	| 'plus'
	| 'search'
	| 'talend'
	| 'talendLogo'
	| 'upload'
	| 'user'
	| 'validate'
	| 'warning';

export type IconProps = BoxProps &
	StyledProps<any> & {
		/** The name of the icon  */
		name: IconName;
	};

const SVG = styled.svg<IconProps & { preserveColors: boolean }>(
	({ preserveColors }) => `
	width: ${tokens.sizes.l};
	height: ${tokens.sizes.l};

	circle,
	path,
	rect {
		${preserveColors ? '' : 'fill: currentColor;'}
	}
`,
);

const Icon: React.FC<IconProps> = React.forwardRef(
	({ className, name, ...rest }: IconProps, ref) => {
		if (!Object.keys(icons).find(iconName => iconName === name)) {
			return null;
		}
		return (
			<SVG
				// @ts-ignore
				as={icons[name].ReactComponent}
				aria-hidden
				{...rest}
				className={`icon ${className || ''}`}
				ref={ref}
			/>
		);
	},
);

export default React.memo(Icon);
