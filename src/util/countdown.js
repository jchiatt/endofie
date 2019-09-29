const PARTY_DATE = new Date(2025, 9, 14) // October 14, 2025

export default function useCountdown(endDate = PARTY_DATE) {
  let years, days, hours, minutes, seconds
  let startDate = new Date().getTime()
  endDate = new Date(endDate).getTime()

  if (isNaN(endDate))
    throw new Error("You must pass in a valid date to useCountdown")

  let timeRemaining = parseInt((endDate - startDate) / 1000)

  years = parseInt(timeRemaining / 31557600) // 365.25 days in seconds
  timeRemaining = timeRemaining % 31557600

  days = parseInt(timeRemaining / 86400)
  timeRemaining = timeRemaining % 86400

  hours = parseInt(timeRemaining / 3600)
  timeRemaining = timeRemaining % 3600

  minutes = parseInt(timeRemaining / 60)
  timeRemaining = timeRemaining % 60

  seconds = parseInt(timeRemaining)

  return [years, days, hours, minutes, seconds]
}
