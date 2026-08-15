const blogCards = document.querySelectorAll(".blog-card");
const paginationButtons = document.querySelectorAll(".pagination__button");
const postsPerPage = 8;

const showBlogPage = (pageNumber) => {
    const firstPost = (pageNumber - 1) * postsPerPage;
    const lastPost = firstPost + postsPerPage;

    blogCards.forEach((card,index) => {
        card.classList.toggle("is-hidden",index < firstPost || index >= lastPost);
    });

    paginationButtons.forEach((button) => {
        const isCurrent = Number(button.dataset.page) === pageNumber;

        button.classList.toggle("is-current",isCurrent);

        if(isCurrent){
            button.setAttribute("aria-current","page");
        }else{
            button.removeAttribute("aria-current");
        }
    });
};

paginationButtons.forEach((button) => {
    button.addEventListener("click",() => {
        showBlogPage(Number(button.dataset.page));
        document.querySelector(".blog-main").scrollIntoView({behavior:"smooth",block:"start"});
    });
});

showBlogPage(1);
