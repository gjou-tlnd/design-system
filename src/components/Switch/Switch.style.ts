import styled from 'styled-components';
import { shade } from 'polished';

import tokens from '../../tokens';

export const Switch = styled.div(
	({ theme, values, disabled, readOnly }) => `
	div {
		position: relative;
    	display: inline-flex;
		padding: 0 1rem;
		background: ${theme.colors.inputRadioBackgroundColor};
		border-radius: 10rem;
		box-shadow: inset 0 .1rem .3rem 0 rgba(0, 0, 0, .25);
		overflow: hidden;
    	${disabled ? `opacity: ${tokens.opacity.disabled};` : ''}
	}
	
	button {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 0 1rem;
		color: ${theme.colors.textColor}
		font-size: ${tokens.fontSizes.small};
    	opacity: ${tokens.opacity.disabled};
		user-select: none; 		
    	cursor: pointer;
		z-index: 2;
	}
	
	button:nth-child(1) {
		padding-left: 0;
	}
	
	button:nth-child(${values.length}) {
		padding-right: 0;
	}
	
	strong {
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 0;
    	bottom: 0;
    	transition: transform .2s, width .2s;
		z-index: 1;
  	}
  	
  	strong em {
  		position: absolute;
  		top: .2rem;
		right: .2rem;
  		bottom: .2rem;
  		left: .2rem;
	    background: ${theme.colors.activeColor};    
    	border-radius: 100px;
  	}

	${
		!readOnly
			? `
				div:hover strong em {
					background: ${shade(0.25, theme.colors.activeColor)};
				}
			`
			: `
				// FIXME
				// pointer-events: none;
			`
	} 
  
	[data-checked] {
		transition: color .3s;
	}
	
	[data-checked="true"] {
		color: ${theme.colors.inputBackgroundColor};
		opacity: 1;
	}
		
	[data-checked] ~ strong {
		visibility: hidden;
	}
	
	[data-checked="true"] ~ strong {
		visibility: visible;
	}
`,
);
