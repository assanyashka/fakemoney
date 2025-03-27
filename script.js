document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("command-input");
    const outputDiv = document.getElementById("output");
    const keypressAudio = document.getElementById("keypress-audio");

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let command = inputField.value.trim();
            inputField.value = "";
            processCommand(command);
        } else {
            keypressAudio.currentTime = 0;
            keypressAudio.play();
        }
    });

    function processCommand(command) {
        let response = "";

        switch (command.toLowerCase()) {
            case "help":
                response = "Список команд:\n- help: показать команды\n- about: информация обо мне\n- hack google: хакинг\n- clear: очистить терминал";
                break;
            case "about":
                response = "Assa.lol | Кодер, любитель аниме и киберпанка.";
                break;
            case "hack google":
                response = "Взлом системы...\n[████████----] 75%\nДоступ запрещен!";
                break;
            case "clear":
                outputDiv.innerHTML = "";
                return;
            default:
                response = `Команда не найдена: ${command}`;
        }

        outputDiv.innerHTML += `<div>user@assa.lol:~$ ${command}</div>`;
        outputDiv.innerHTML += `<div>${response}</div>`;
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
});
