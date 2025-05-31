let currentDate = new Date();
let selectedDay = null; // Variável para armazenar o dia selecionado

function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarBody = document.getElementById("calendar-body");
    document.getElementById("month-year").textContent = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(new Date(year, month));

    calendarBody.innerHTML = "";
    let row = document.createElement("tr");

    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        let cell = document.createElement("td");
        cell.textContent = day;
        cell.classList.add("day-cell");

        if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            cell.classList.add("today");
        }

        cell.addEventListener("click", function () {
            if (selectedDay) {
                selectedDay.classList.remove("selected");
            }
            this.classList.add("selected");
            selectedDay = this;
        });

        row.appendChild(cell);

        if ((firstDay + day) % 7 === 0) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
        }
    }

    calendarBody.appendChild(row);
}

function changeMonth(delta) {
    currentDate.setMonth(currentDate.getMonth() + delta);
    generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
}

generateCalendar(currentDate.getMonth(), currentDate.getFullYear());

const modal = document.getElementById("myModal");
const btnOpenModal = document.getElementById("btnOpenModal");
const btnCloseModal = document.getElementById("btnCloseModal");

// Quando o botão "Abrir Modal" for clicado, exibe o modal
btnOpenModal.onclick = function () {
    modal.style.display = "block";
}

// Quando o botão "Fechar" for clicado, esconde o modal
btnCloseModal.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, também esconde o modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/*modal*/
// Abrir o modal
function openModal() {
    document.getElementById("modal").style.display = "block";
}

// Fechar o modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Fechar modal ao clicar fora
window.onclick = function (event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
