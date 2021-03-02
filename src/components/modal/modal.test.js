import React from 'react';
import { Modal, ModalButton, ModalContent } from './index';
import Button from '../button';
import { render, fireEvent, screen, getByRole } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const renderModal = (closeCallback) =>
  render(
    <Modal>
      <ModalButton>
        <Button primary outline>
          Open the modal
        </Button>
      </ModalButton>
      <ModalContent>
        <p>The content</p>
      </ModalContent>
    </Modal>,
  );

describe('Modal component', () => {
  test('should allow to open the modal', () => {
    const onCloseCallback = jest.fn();
    renderModal(onCloseCallback);
    const openModalButton = screen.queryByText('Open the modal');
    expect(openModalButton).not.toBeNull();
    // const theContent = screen.queryByText('The content');
    // expect(theContent).not.toBeNull();
    // screen.debug();
    // expect(theContent).not.toBeVisible();
    // expect(screen.getByRole('dialog')).toHaveClass('modal');
    expect(screen.queryByRole('dialog')).toBeNull();
    fireEvent.click(screen.getByText('Open the modal'));
    expect(screen.queryByRole('dialog')).not.toBeNull();
    fireEvent.click(screen.getByText('close'));
    expect(screen.queryByRole('dialog')).toBeNull();
  });
});
