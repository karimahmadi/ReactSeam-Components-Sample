import React, { Fragment } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup/ButtonGroup';
import { useModal } from '@tatareact/core/Modal';
import { Section } from '@tatareact/core/Section';
import { Button } from '@tatareact/core/Button';
import { Grid } from '@tatareact/core/Grid';
import Page2 from './page2';

const Modal = () => {
  const { openModal } = useModal();

  const handleConfirm = () => {
    // confirm clicked
  };
  const handleCancel = () => {
    // cancel clicked
  };
  const handleClose = () => {
    // modal closed
  };

  const handleRetrive = () => {
    openModal({
      Component: Page2,
      fullWidth: true,
      maxWidth: 'sm',
      title: 'عنوان فرم',
      disableBackdropClick: true,
      disableEscapeKeyDown: true,
      onConfirm: handleConfirm,
      onCancel: handleCancel,
      onClose: handleClose,
    });
  };

  return (
    <Fragment>
      <Section grid>
        <Grid container spacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <ButtonGroup variant="text">
              <Button onClick={handleRetrive}>show modal</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Section>
    </Fragment>
  );
};

export default Modal;
