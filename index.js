const addForm = document.querySelector('.add-task');
const task = document.querySelector(".show-tasks");
const clearAll = document.querySelector(".clear");
const pendingTask = document.querySelector(".pending-task");
const search = document.querySelector(".search-value");
const searchSection = document.querySelector(".search-section");

function updataMessage() {
    let textLenght = task.children.length;
    pendingTask.textContent = `You Have ${textLenght} Pending Tasks`;
}
updataMessage();

addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = addForm.task.value.trim();
    if (value.length) {
        task.innerHTML += `<li class="show-task">${value} <i class=" delete bi bi-trash"></i></li>`
        addForm.reset();
        updataMessage();
    };

})

task.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        updataMessage();
    }
})

clearAll.addEventListener("click", (event) => {
    const allTasks = task.querySelectorAll(".show-task");
    allTasks.forEach(element => {
        element.remove();
        updataMessage();
    })
})

function filterTask(term) {
    Array.from(task.children).
        filter(task => {
            return !task.textContent.includes(term);
        })
        .forEach(task => {
            task.classList.add("hide")
        });

    Array.from(task.children).
        filter(task => {
            return task.textContent.toLowerCase().includes(term);
        })
        .forEach(task => {
            task.classList.remove("hide");
        })

}

search.addEventListener("keyup", event => {
    const term = event.target.value.trim().toLowerCase();
    filterTask(term);
})

searchSection.addEventListener("click", event => {
    if (event.target.classList.contains("reset")) {
        searchSection.reset();
        console.log("working")
        const term = searchSection.task1.value.trim();
        filterTask(term);
    }
});
