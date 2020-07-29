import { DefaultTheme } from 'styled-components';
import { tint } from 'polished';

import tokens from '../tokens';

const colors = tokens.colors;

const theme: DefaultTheme = {
	colors: {
		primaryColor: colors.deepBlue500,
		informationColor: colors.lochmara,
		warningColor: colors.jaffa500,
		successColor: colors.rioGrande500,
		destructiveColor: colors.coral600,

		textColor: colors.gray900,
		focusColor: colors.moodyPurple,
		activeColor: colors.lochmara,
		backgroundColor: colors.transparent,

		buttonPrimaryColor: colors.gray0,
		buttonPrimaryBackgroundColor: colors.deepBlue500,
		buttonPrimaryHoverBackgroundColor: colors.deepBlue600,
		buttonPrimaryActiveBackgroundColor: colors.deepBlue700,

		buttonDestructiveBackgroundColor: colors.coral600,
		buttonDestructiveHoverBackgroundColor: colors.coral700,
		buttonDestructiveActiveBackgroundColor: colors.coral800,

		buttonSecondaryBackgroundColor: colors.transparent,
		buttonSecondaryHoverBackgroundColor: colors.deepBlue100,
		buttonSecondaryActiveBackgroundColor: colors.deepBlue100,

		buttonDisabledColor: colors.gray600,
		buttonDisabledBackgroundColor: colors.gray100,

		inputColor: colors.gray900,
		inputPlaceholderColor: colors.gray500,
		inputBackgroundColor: colors.gray0,
		inputGroupColor: colors.gray700,
		inputGroupBackgroundColor: colors.gray75,
		inputGroupInteractiveColor: colors.deepBlue500,
		inputGroupInteractiveBackgroundColor: colors.deepBlue100,
		inputRadioBackgroundColor: colors.gray100,
		inputBackgroundReadOnlyColor: colors.transparent,
		inputBorderColor: colors.gray500,
		inputBorderHoverColor: colors.gray700,
		inputBorderFocusColor: colors.lochmara,
		inputBorderDisabledColor: colors.gray300,
		inputBorderReadOnlyColor: colors.gray300,
	},
	id: 'light',
};

export default theme;