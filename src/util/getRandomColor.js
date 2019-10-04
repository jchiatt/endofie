export default function getRandomColor() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .substring(2, 8)
  )
}
