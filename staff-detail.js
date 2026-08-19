const interviewSections = document.querySelectorAll("[data-interview-section]");
const tocLinks = document.querySelectorAll(".interview-toc__list a");

const updateActiveToc = () => {
    const currentPosition = window.scrollY + 180;
    let currentSection = interviewSections[0];

    interviewSections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY;

        if(sectionPosition <= currentPosition){
            currentSection = section;
        }
    });

    tocLinks.forEach((link) => {
        link.classList.toggle("is-active",link.getAttribute("href") === `#${currentSection.id}`);
    });
};

tocLinks.forEach((link) => {
    link.addEventListener("click",(event) => {
        const target = document.querySelector(link.getAttribute("href"));

        if(!target){
            return;
        }

        event.preventDefault();
        target.scrollIntoView({behavior:"smooth",block:"start"});
    });
});

window.addEventListener("scroll",updateActiveToc,{passive:true});
updateActiveToc();

const relatedStaff = [
    {image:"./img/syain01.jpg",name:"西村 優",message01:"「あなたが担当で良かった」",message02:"この一言が、最高のやりがい",position:"コンサルタント",joined:"2011年入社",href:"./staff-detail.html"},
    {image:"./img/syain02.jpg",name:"橋本 拓也",message01:"全力で考えぬける環境",message02:"試練の数だけ強くなれました",position:"コンサルタント",joined:"2015年入社",href:"./staff-detail.html?member=hashimoto"},
    {image:"./img/syain03.jpg",name:"青木 美月",message01:"お客様も知らない課題を",message02:"一緒に探し出す醍醐味",position:"ソリューション営業",joined:"2017年入社",href:"./staff-detail.html?member=aoki"},
    {image:"./img/syain04.jpg",name:"高橋 智",message01:"ビジネスの課題を",message02:"データで解決する醍醐味",position:"データサイエンティスト",joined:"2002年入社",href:"./staff-detail.html?member=takahashi"},
    {image:"./img/syain05.jpg",name:"高田 凛",message01:"どんな難解な案件も",message02:"チームで突破できる強い連携",position:"コンサルタント",joined:"2006年入社",href:"./staff-detail.html?member=takada"},
    {image:"./img/syain06.jpg",name:"橘 光",message01:"お客様と一緒に開発",message02:"豊富なプライム案件が魅力です",position:"システム事業部課長",joined:"2007年入社",href:"./staff-detail.html?member=tachibana"}
];

const currentStaffName = document.querySelector(".staff-profile__identity h1")?.textContent.trim();
const shuffledStaff = relatedStaff.filter((staff) => staff.name !== currentStaffName).sort(() => Math.random() - 0.5).slice(0,3);
const relatedStaffList = document.getElementById("related-staff-list");

if(relatedStaffList){
    relatedStaffList.innerHTML = shuffledStaff.map((staff) => `
        <li class="related-staff__card">
            <a href="${staff.href}">
                <div class="related-staff__visual"><img src="${staff.image}" alt="${staff.name}"><p><span>${staff.message01}</span><span>${staff.message02}</span></p></div>
                <div class="related-staff__profile"><p><span>${staff.position}</span><span>${staff.joined}</span></p><h3>${staff.name}</h3></div>
            </a>
        </li>
    `).join("");
}
