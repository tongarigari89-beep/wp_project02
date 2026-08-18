const entryForm = document.querySelector(".entry-form");

if (entryForm) {
    const monthSelect = entryForm.elements["birth-month"];
    const daySelect = entryForm.elements["birth-day"];
    const submitButton = entryForm.querySelector(".entry-form__submit");

    const addOptions = (select, first, last) => {
        for (let number = first; number <= last; number += 1) {
            const option = document.createElement("option");
            option.value = String(number);
            option.textContent = String(number);
            select.appendChild(option);
        }
    };

    const updateSubmitButton = () => {
        submitButton.disabled = !entryForm.checkValidity();
    };

    addOptions(monthSelect, 1, 12);
    addOptions(daySelect, 1, 31);

    entryForm.addEventListener("input", updateSubmitButton);
    entryForm.addEventListener("change", updateSubmitButton);
}
