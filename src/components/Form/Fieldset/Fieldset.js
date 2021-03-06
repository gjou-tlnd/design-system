import React from 'react';
import styled from 'styled-components';
import tokens from '../../../tokens';

const StyledFieldset = styled.fieldset(
	({ theme }) => `
	display: flex;
	flex-direction: column;
	justify-content: center;
`,
);

const StyledLegend = styled.legend(
	({ theme }) => `
	color: ${theme.colors.textColor};
	font-weight: ${tokens.fontWeights.bold};
	padding: ${tokens.space.m} 0; 
`,
);

function Fieldset({ legend, children }) {
	return (
		<StyledFieldset>
			<StyledLegend>{legend}</StyledLegend>
			{children}
		</StyledFieldset>
	);
}

export default Fieldset;
