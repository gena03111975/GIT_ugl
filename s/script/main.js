let messageCount = 1;

function updateText() {
    const inputText = document.getElementById("textInput").value;

    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString();

    const message = `${messageCount}. [${formattedTime}]: ${inputText}`;

    const textDisplay = document.getElementById("textDisplay");
    textDisplay.value += message + '\n';

    messageCount++;
    document.getElementById("textInput").value = "";
}

// Обработчик для загрузки изображения
document.getElementById("imageInput").addEventListener("change", function () {
    const fileInput = this;
    const imageDisplay = document.getElementById("imageDisplay");

    // Очищаем предыдущее содержимое контейнера
    imageDisplay.innerHTML = '';

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const image = new Image();
        image.src = URL.createObjectURL(file);

        // Отображаем изображение в контейнере
        imageDisplay.appendChild(image);
    }
});

// const colors = ["#FFB27F", "#6BC5F5", "#FFA3A3", "#C3F6A2", "#FFDE79"];
const colors = [
    "#FFB27F",
    "#6BC5F5",
    "#FFA3A3",
    "#C3F6A2",
    "#FFDE79",
    "#C0C1C9",
    "#FFC3A0",
    "#A2D7DD",
    "#FFA3A0",
    "#D8E2DC",
    "#FFC3A0",
    "#A2D7DD",
    "#FFA3A0",
    "#D8E2DC",
    "#FFA3A0",
    "#C0C1C9",
];
let currentColorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 5000);
