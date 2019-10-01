import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Modal } from '@react95/core';

import '../styles/paintModal.css';

export function Paint() {
    const canvasRef = useRef(null);
    const [isPainting, setIsPainting] = useState(false);
    const [mousePosition, setMousePosition] = useState(undefined);

    const startPaint = useCallback((event) => {
        const coordinates = getCoordinates(event);
        console.log(coordinates);
        if(coordinates) {
            setMousePosition(coordinates);
            setIsPainting(true);
        }
    }, []);
    
    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const canvas = canvasRef.current;
        canvas.addEventListener('mousedown', startPaint);
        return () => {
            canvas.removeEventListener('mousedown', startPaint);
        };
    }, [startPaint]);

    const paint = useCallback((event) => {
            if (isPainting) {
                const newMousePosition = getCoordinates(event);
                if (mousePosition && newMousePosition) {
                    drawLine(mousePosition, newMousePosition);
                    setMousePosition(newMousePosition);
                }
            }
        }, [isPainting, mousePosition]);

        useEffect(() => {
            if (!canvasRef.current) {
                return;
            }
            const canvas = canvasRef.current;
            canvas.addEventListener('mousemove', paint);
            return () => {
                canvas.removeEventListener('mousemove', paint);
            };
        }, [paint]);
    
        const exitPaint = useCallback(() => {
            setIsPainting(false);
            setMousePosition(undefined);
        }, []);
    
        useEffect(() => {
            if (!canvasRef.current) {
                return;
            }
            const canvas = canvasRef.current;
            canvas.addEventListener('mouseup', exitPaint);
            canvas.addEventListener('mouseleave', exitPaint);
            return () => {
                canvas.removeEventListener('mouseup', exitPaint);
                canvas.removeEventListener('mouseleave', exitPaint);
            };
        }, [exitPaint]);
    
        const getCoordinates = (event) => {
            if (!canvasRef.current) {
                return;
            }
    
            const canvas = canvasRef.current;
            return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
        };
    
        const drawLine = (originalMousePosition, newMousePosition) => {
            if (!canvasRef.current) {
                return;
            }
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (context) {
                console.log(context);
                context.strokeStyle = 'red';
                context.lineJoin = 'round';
                context.lineWidth = 5;
    
                context.beginPath();
                context.moveTo(originalMousePosition.x, originalMousePosition.y);
                context.lineTo(newMousePosition.x, newMousePosition.y);
                context.closePath();
    
                context.stroke();
            }
        };

    return <canvas ref={canvasRef} height={150} width={250}></canvas>
}

export default function PaintModal() {
    return (
        <Modal id="paintModal" title="MS Paint.exe">
            <Paint />
        </Modal>
    )
}
