let birthYear = prompt("Введіть ваш рік народження:");
if (birthYear === null) {
    alert("Шкода, що ви не захотіли ввести свій рік народження.");
} else {
    birthYear = parseInt(birthYear);
    let city = prompt("Введіть ваше місто проживання:");
    if (city === null) {
        alert("Шкода, що ви не захотіли ввести місто проживання.");
    } else {
        let sport = prompt("Введіть ваш улюблений вид спорту:");
        if (sport === null) {
            alert("Шкода, що ви не захотіли ввести улюблений вид спорту.");
        } else {
            let currentYear = new Date().getFullYear();
            let age = currentYear - birthYear;
            let message;
            if (city.toLowerCase() === "київ") {
                message = `Ти живеш у столиці України.`;
            } else if (city.toLowerCase() === "вашингтон") {
                message = `Ти живеш у столиці США.`;
            } else if (city.toLowerCase() === "лондон") {
                message = `Ти живеш у столиці Великої Британії.`;
            } else {
                message = `Ти живеш у місті ${city}.`;
            }
            let finalMessage = `Твій вік: ${age}. ${message}`;
            alert(finalMessage);
        }
    }
}
