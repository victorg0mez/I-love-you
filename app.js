
document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector("button:last-of-type");
    const yesButton = document.querySelector("button:first-of-type");
    const content = document.getElementById("content");
    const acceptDiv = document.getElementById("accept");

    let yesButtonSize = 1.2;

    const noResponses = [
        "¿Estás segura?",
        "¿Piensalo otra vez?",
        "¿Ultima oportunidad?",
        "¿Me romperás el corazón?",
        "😢",
        "Por favor",
        ""
    ];

    let currentResponseIndex = 0;

    noButton.addEventListener("click", function () {
        const currentResponse = noResponses[currentResponseIndex];
        noButton.textContent = currentResponse;

        const contentRect = content.getBoundingClientRect();
        const maxX = contentRect.width - noButton.offsetWidth;
        const maxY = contentRect.height - noButton.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        yesButtonSize += 0.2;
        yesButton.style.fontSize = `${yesButtonSize}rem`;
        yesButton.style.padding = `${yesButtonSize * 0.6}rem ${yesButtonSize * 0.9}rem`;

        currentResponseIndex++;

        if (currentResponseIndex === noResponses.length) {
            setTimeout(() => {
                noButton.style.display = "none";
            }, 0);
        }
    });

    // Mostrar el div "accept" cuando se presione el botón "¡Sí!💖"
    yesButton.addEventListener("click", function () {
        acceptDiv.style.display = "flex";  // Muestra el div
        content.style.display = "none";  // Muestra el div

    });
});
