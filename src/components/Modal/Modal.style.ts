import styled from 'styled-components';

import {
	Dialog as ReakitDialog,
	DialogDisclosure as ReakitDialogDisclosure,
	DialogBackdrop as ReakitDialogBackdrop,
} from 'reakit/Dialog';

export const DialogDisclosure = ReakitDialogDisclosure;

export const DialogBackdrop = styled(ReakitDialogBackdrop)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
`;

export const Dialog = styled(ReakitDialog)(
	({ theme }) => `
	position: fixed;
	top: 5rem;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 0.25rem;
	padding: 1em;
	max-height: calc(100vh - 5rem);
	outline: 0;
	border: 1px solid rgba(33, 33, 33, 0.25);
	color: ${theme.colors.textColor};
	background-color: ${theme.colors.backgroundColor};
	z-index: 999;
`,
);
