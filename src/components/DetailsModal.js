import React from 'react';
import { Modal } from '@react95/core';
import styled from 'styled-components';
import { ModalContext } from '../contexts/ModalContext';

const StyledModal = styled(Modal)`
  display: ${props => (props.active ? "block" : "none")};
  top: 6rem;
  left: 50%;
  width: 280px;
  min-height: 360px;
  transform: translateX(-50%) !important;

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1024px) {
    right: 2rem;
    left: unset;
    transform: none !important;
  }

  h3 {
    margin-bottom: 0;
  }
`

export default function DetailsModal() {
    const { hideDetailsModal, detailsModalActive} = React.useContext(ModalContext);
    
    return (
      <StyledModal
        title="WHERE THE PARTY AT"
        active={detailsModalActive}
        closeModal={() => {
          hideDetailsModal()
        }}
      >
        <h3>The deets</h3>
        <p>
          On October 14, 2025, Microsoft will officially stop supporting IE 11.
        </p>
        <p>Get ready to party.</p>
        <ul>
          <li>
            <strong>Where:</strong> We don't know yet.
          </li>
          <li>
            <strong>When:</strong> October 14, 2025
          </li>
          <li>
            <strong>Why:</strong> why tf not?
          </li>
          <li>
            <strong>Cost:</strong> FREE (
            <a href="mailto:jc+endofie@jchiatt.com?subject=Sponsoring End of IE Party&body=I want to sponsor the End of IE party because I'm awesome.">
              if we have sponsors
            </a>
            )
          </li>
        </ul>
      </StyledModal>
    )
}