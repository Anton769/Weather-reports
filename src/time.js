export function unix(dt, type) { 
    let date = dt * 1000
    let time = new Date(date)
    let result = 
    type == 'day' ? time.toLocaleDateString("ru-RU", {day: 'numeric'}) : 
    type == 'month' ? time.toLocaleDateString("ru-RU", {month: 'short'}) : 
    type == 'weekday' ? time.toLocaleDateString("ru-RU", {weekday: 'long'}) : ''
    return result
 }