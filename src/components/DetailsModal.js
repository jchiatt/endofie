import React from 'react';
import { Modal } from '@react95/core';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  top: 6rem;
  right: 2rem;
  width: 300px;
  min-height: 300px;

  @media screen and (min-width: 480px) {
    width: 400px;
  }

  h3 {
    margin-bottom: 0;
  }
`

export default function DetailsModal() {
    return (
      <StyledModal title="WHERE THE PARTY AT">
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
            <a href="mailto:jc+endofie@jchiatt.com">if we have sponsors</a>)
          </li>
        </ul>
      </StyledModal>
    )
}