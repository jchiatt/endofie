import React from 'react';

export default function usePaint(canvasRef, activeColor) {
  const [isPainting, setIsPainting] = React.useState(false)
  const [mousePosition, setMousePosition] = React.useState({})

  const startPaint = React.useCallback(e => {
    const coordinates = getCoordinates(e)
    if (coordinates) {
      setIsPainting(true)
      setMousePosition(coordinates)
    }
  }, []);

  function getCoordinates(e) {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current
    const x = e.pageX - canvas.offsetLeft
    const y = e.pageY - canvas.offsetTop

    return { x, y }
  }

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
    [isPainting, mousePosition]
  )

  function drawLine(originalMousePosition, newMousePosition) {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (context) {
      context.strokeStyle = activeColor;
      context.lineJoin = "round"
      context.lineWidth = 5

      context.beginPath()
      context.moveTo(originalMousePosition.x, originalMousePosition.y)
      context.lineTo(newMousePosition.x, newMousePosition.y)
      context.closePath()

      context.stroke()
    }
  }

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
  }, [startPaint])

  React.useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current
    canvas.addEventListener("mousemove", paint)

    return () => {
      canvas.removeEventListener("mousemove", paint)
    }
  }, [paint])

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
  }, [exitPaint])

  return [canvasRef]
}
