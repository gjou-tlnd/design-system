/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Button from '../Button';
import Dropdown from '../../Dropdown';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
	background-color: ${props => props.theme?.mainBackgroundColor};
	font-size: 10px;
  }
`;

const RowDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	> * {
		margin: 0 2rem;
	}
`;

export default {
	title: 'Components|Button',

	parameters: {
		component: Button,
	},
	decorators: [
		storyFn => (
			<RowDiv>
				<GlobalStyle />
				{storyFn()}
			</RowDiv>
		),
	],
};

export const basic = () => (
	<>
		<Button onClick={action('clicked')}>Basic Button</Button>
		<Dropdown
			as={Button}
			items={[<span>Custom item 1</span>, <span>Custom item 2</span>, <span>Custom item 3</span>]}
		>
			Dropdown
		</Dropdown>
		<Button small onClick={action('clicked')}>
			Small Button
		</Button>
		<Button disabled onClick={action('clicked')}>
			Disabled Button
		</Button>
		<Button disabled focusable onClick={action('clicked')}>
			Disabled Focusable Button
		</Button>
	</>
);

export const primary = () => (
	<>
		<Button.Primary onClick={action('clicked')}>Basic Button</Button.Primary>
		<Dropdown
			as={Button.Primary}
			items={[<span>Custom item 1</span>, <span>Custom item 2</span>, <span>Custom item 3</span>]}
		>
			Dropdown
		</Dropdown>
		<Button.Primary small onClick={action('clicked')}>
			Small Button
		</Button.Primary>
		<Button.Primary disabled onClick={action('clicked')}>
			Disabled Button
		</Button.Primary>
		<Button.Primary disabled focusable onClick={action('clicked')}>
			Disabled Focusable Button
		</Button.Primary>
	</>
);
export const destructive = () => (
	<>
		<Button.Destructive onClick={action('clicked')}>Basic Button</Button.Destructive>
		<Dropdown
			as={Button.Destructive}
			items={[<span>Custom item 1</span>, <span>Custom item 2</span>, <span>Custom item 3</span>]}
		>
			Dropdown
		</Dropdown>
		<Button.Destructive small onClick={action('clicked')}>
			Small Button
		</Button.Destructive>
		<Button.Destructive disabled onClick={action('clicked')}>
			Disabled Button
		</Button.Destructive>
		<Button.Destructive disabled focusable onClick={action('clicked')}>
			Disabled Focusable Button
		</Button.Destructive>
	</>
);
export const secondary = () => (
	<>
		<Button.Secondary onClick={action('clicked')}>Basic Button</Button.Secondary>
		<Dropdown
			as={Button.Secondary}
			items={[<span>Custom item 1</span>, <span>Custom item 2</span>, <span>Custom item 3</span>]}
		>
			Dropdown
		</Dropdown>
		<Button.Secondary small onClick={action('clicked')}>
			Small Button
		</Button.Secondary>
		<Button.Secondary disabled onClick={action('clicked')}>
			Disabled Button
		</Button.Secondary>
		<Button.Secondary disabled focusable onClick={action('clicked')}>
			Disabled Focusable Button
		</Button.Secondary>
	</>
);

export const ghost = () => (
	<>
		<Button.Ghost onClick={action('clicked')}>Basic Button</Button.Ghost>
		<Dropdown
			as={Button.Ghost}
			items={[<span>Custom item 1</span>, <span>Custom item 2</span>, <span>Custom item 3</span>]}
		>
			Dropdown
		</Dropdown>
		<Button.Ghost small onClick={action('clicked')}>
			Small Button
		</Button.Ghost>
		<Button.Ghost disabled onClick={action('clicked')}>
			Disabled Button
		</Button.Ghost>
		<Button.Ghost disabled focusable onClick={action('clicked')}>
			Disabled Focusable Button
		</Button.Ghost>
	</>
);
export const icon = () => (
	<>
		<Button.Icon onClick={action('clicked')} icon={'plus'}>
			Basic Button
		</Button.Icon>
		<Dropdown
			as={Button.Icon}
			icon={'plus'}
			items={[<span>Custom item 1</span>, <span>Custom item 2</span>, <span>Custom item 3</span>]}
		>
			Dropdown
		</Dropdown>
		<Button.Icon small onClick={action('clicked')} icon={'plus'}>
			Small Button
		</Button.Icon>
		<Button.Icon disabled onClick={action('clicked')} icon={'plus'}>
			Disabled Button
		</Button.Icon>
		<Button.Icon disabled focusable onClick={action('clicked')} icon={'plus'}>
			Disabled Focusable Button
		</Button.Icon>
	</>
);