function verifyAge(isAdult) {
    if (isAdult) {
        // Przekierowanie do sklepu
        window.location.href = "wodki.html";
    } else {
        alert("Musisz mieć ukończone 18 lat, aby wejść na tę stronę.");
        window.location.href = "https://google.com";
    }
}