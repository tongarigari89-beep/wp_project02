const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    const button = question.querySelector(".faq-question__toggle");
    const questionText = question.querySelector(".faq-question__text p").textContent;

    button.addEventListener("click", () => {
        const isOpen = question.classList.toggle("is-open");

        button.setAttribute("aria-expanded", String(isOpen));
        button.setAttribute(
            "aria-label",
            `${questionText}の回答を${isOpen ? "閉じる" : "開く"}`
        );
    });
});
