import React from 'react';
import { Modal } from '@react95/core';

import '../styles/detailsModal.css';

export default function DetailsModal() {
    return (
        <Modal title="WHERE THE PARTY AT">
            <h3>The deets</h3>
            <ul>
                <li><strong>Where:</strong> We don't know yet.</li>
                <li><strong>When:</strong> October 14, 2025</li>
                <li><strong>Why:</strong> why tf not?</li>
            </ul>
        </Modal>
    )
}