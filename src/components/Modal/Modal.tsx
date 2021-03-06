import React from 'react';
import { useDialogState, DialogProps } from 'reakit/Dialog';

import * as S from './Modal.style';

export type ModalProps = DialogProps & {
	disclosure?: string;
};

const Modal: React.FC<ModalProps> = React.forwardRef(
	({ disclosure, children, ...props }: ModalProps, ref) => {
		const dialog = useDialogState();
		return (
			<>
				{disclosure && (
					<S.DialogDisclosure ref={ref} {...dialog} {...props}>
						{disclosure}
					</S.DialogDisclosure>
				)}
				<S.DialogBackdrop {...dialog}>
					<S.Dialog {...dialog}>{children}</S.Dialog>
				</S.DialogBackdrop>
			</>
		);
	},
);

const useModalState = useDialogState;
const ModalDisclosure = React.forwardRef((props, ref) => (
	<S.DialogDisclosure {...props} ref={ref} />
));
const ModalDialog = ({ children, ...rest }) => (
	<S.DialogBackdrop {...rest}>
		<S.Dialog {...rest}>{children}</S.Dialog>
	</S.DialogBackdrop>
);

const ModalComponent = Modal as typeof Modal & {
	useDialogState: typeof useModalState;
	Disclosure: typeof ModalDisclosure;
	Dialog: typeof ModalDialog;
};

ModalComponent.useDialogState = useModalState;
ModalComponent.Disclosure = ModalDisclosure;
ModalComponent.Dialog = ModalDialog;

export default ModalComponent;
