<<<<<<< HEAD
export default function buildDays(value) {
    const startDay = value.clone().startOf("month").startOf("isoWeek")
    const endDay = value.clone().startOf("month").endOf("isoWeek")
    const day = startDay.clone().subtract(1, "day")

    const calendar  = []
    if(day.isBefore(endDay,"day")) {
        calendar .push(
            Array(7).fill(0).map( () => day.add(1,"day").clone())
        )
    }

    return calendar
=======
export default function buildDays(value) {
    const startDay = value.clone().startOf("month").startOf("isoWeek")
    const endDay = value.clone().startOf("month").endOf("isoWeek")
    const day = startDay.clone().subtract(1, "day")

    const calendar  = []
    if(day.isBefore(endDay,"day")) {
        calendar .push(
            Array(7).fill(0).map( () => day.add(1,"day").clone())
        )
    }

    return calendar
>>>>>>> 64b346b5af57183f5a1859bff9087d3de7a41d59
}