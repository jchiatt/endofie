import React from 'react';

export default function usePaint(canvasRef, activeColor) {
  const [isPainting, setIsPainting] = React.useState(false)
  const [mousePosition, setMousePosition] = React.useState({})

  const getCoordinates = React.useCallback(e => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current
    const x = e.layerX - canvas.offsetLeft
    const y = e.layerY - canvas.offsetTop

    return { x, y }
  }, [canvasRef]);

  const startPaint = React.useCallback(e => {
    const coordinates = getCoordinates(e)
    if (coordinates) {
      setIsPainting(true)
      setMousePosition(coordinates)
    }
  }, [getCoordinates]);

  const drawLine = React.useCallback(
    (originalMousePosition, newMousePosition) => {
      if (!canvasRef.current) {
        return
      }

      const canvas = canvasRef.current
      const context = canvas.getContext("2d")
      if (context) {
        context.strokeStyle = activeColor
        context.lineJoin = "round"
        context.lineWidth = 5

        context.beginPath()
        context.moveTo(originalMousePosition.x, originalMousePosition.y)
        context.lineTo(newMousePosition.x, newMousePosition.y)
        context.closePath()

        context.stroke()
      }
    },
    [canvasRef, activeColor]
  );

  const paint = React.useCallback(
    e => {
      if (isPainting) {
        const newMousePosition = getCoordinates(e)
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition)
          setMousePosition(newMousePosition)
        }
      }
    },
    [isPainting, mousePosition, drawLine, getCoordinates]
  );

  const exitPaint = React.useCallback(() => {
    setIsPainting(false)
  }, [])

  React.useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current
    canvas.addEventListener("mousedown", startPaint)

    return () => {
      canvas.removeEventListener("mousedown", startPaint)
    }
  }, [startPaint, canvasRef])

  React.useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current
    canvas.addEventListener("mousemove", paint)

    return () => {
      canvas.removeEventListener("mousemove", paint)
    }
  }, [paint, canvasRef])

  React.useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current
    canvas.addEventListener("mouseup", exitPaint)
    canvas.addEventListener("mouseleave", exitPaint)

    return () => {
      canvas.removeEventListener("mouseup", exitPaint)
      canvas.removeEventListener("mouseleave", exitPaint)
    }
  }, [exitPaint, canvasRef])

  return [canvasRef]
}
