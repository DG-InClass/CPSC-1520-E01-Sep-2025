// js/calendar-view.js

export function calendarMonth({year, month}) {
    let requestedMonth = new Date(year, month);
    let offsetDate = requestedMonth.getDate() - requestedMonth.getDay();
    let startDate = new Date(year, month, offsetDate);

    let result = {
        startDate
    }

    return result;
}