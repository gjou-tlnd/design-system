import React from 'react';
import styled from 'styled-components';
import { tint } from 'polished';
import Alert from '../Alert';
import tokens from '../../../tokens';
import Icon from '../../Icon';

const StyledComponent = styled(Alert)`
	background: ${tint(0.9, tokens.colors.successColor)};
`;

const AlertSuccess = React.forwardRef((props, ref) => {
	return <StyledComponent icon={<Icon name={'checkCircle'} />} {...props} ref={ref} />;
});

AlertSuccess.propTypes = Alert.propTypes;

export default React.memo(AlertSuccess);