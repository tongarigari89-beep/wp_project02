/* ブログ詳細ページ：記事ごとの表示データ */
const blogArticles = [
    {
        id: "pre-training",
        category: "社内研修",
        title: "新入社員向けに、入社前研修を行いました。",
        date: "2025-03-25",
        displayDate: "2025.03.25",
        image: "./img/blog01-detail.jpg",
        alt: "新入社員向け入社前研修の様子",
        description: "新入社員向け入社前研修について紹介しています。",
        content: `<p>2023年3月25日、新入社員を対象とした入社前研修を実施しました。<br>今回の研修では、社会人としての基礎知識やビジネスマナー、当社の事業内容や社風について学びました。</p><h2>研修内容</h2><ul><li>挨拶、自己紹介</li><li>社会人としての心構え</li><li>ビジネスマナー</li><li>当社の事業内容</li><li>社風</li><li>グループワーク</li><li>懇親会</li></ul><h2>研修の様子</h2><p>研修は、座学とグループワーク、懇親会を通して行いました。<br>座学では、社会人としての心構えやビジネスマナーについて学びました。<br>グループワークでは、チームで課題に取り組むことで、コミュニケーション能力や問題解決能力を向上させました。<br>懇親会では、社員同士が交流を深め、親睦を図りました。</p><h2>今後の期待</h2><p>今回の研修で学んだことを活かして、新入社員の皆さんが、一人前の社会人として成長していくことを期待しています。<br>当社は、新入社員の皆さんが、自分の能力を最大限に発揮できる環境を提供します。<br>ぜひ、積極的にチャレンジし、自分自身を成長させてください！</p>`
    },
    {
        id: "offer-training",
        category: "社内研修",
        title: "内定者向け研修を行いました。",
        date: "2024-08-25",
        displayDate: "2024.08.25",
        image: "./img/blog02-detail.jpg",
        alt: "内定者向け研修の会場",
        description: "内定者向け研修について紹介しています。",
        content: `<p>入社を控えた内定者の皆さんを対象に、内定者研修を実施しました。<br>参加者同士の交流を深めながら、入社後の働き方やTETOTEの事業について理解を深める一日となりました。</p><h2>研修内容</h2><ul><li>会社・事業紹介</li><li>先輩社員との座談会</li><li>チームワーク研修</li><li>グループワーク</li></ul><h2>研修の様子</h2><p>グループワークでは、身近な社会課題をテーマに意見を出し合いました。<br>最初は緊張した様子も見られましたが、時間が進むにつれて活発な意見交換が行われ、チームごとに工夫を凝らした発表が完成しました。</p><h2>入社に向けて</h2><p>今回の研修が、入社前の不安を解消し、仲間とのつながりを築くきっかけになればうれしく思います。<br>皆さんと一緒に働ける日を、社員一同楽しみにしています。</p>`
    },
    {
        id: "company-trip",
        category: "社内イベント",
        title: "【社員旅行2023】沖縄でリフレッシュ！チームワークも深まった！",
        date: "2024-03-25",
        displayDate: "2024.03.25",
        image: "./img/blog04-detail.jpg",
        alt: "沖縄での社員旅行の様子",
        description: "沖縄で実施した社員旅行について紹介しています。",
        content: `<p>社員同士の交流とリフレッシュを目的に、沖縄へ社員旅行に行きました。<br>普段は異なるプロジェクトで働くメンバーも集まり、部署を越えて交流できる機会となりました。</p><h2>沖縄で過ごした時間</h2><p>現地では、美しい自然を楽しみながら観光やアクティビティに参加しました。<br>チームごとに行動する時間もあり、仕事中とは違った一面を知ることで、メンバー同士の距離がさらに縮まりました。</p><h2>深まったチームワーク</h2><p>夕食会では、日頃の仕事や今後挑戦したいことについてゆっくり話すことができました。<br>今回の旅行で生まれたつながりを、これからのプロジェクトにも活かしていきます。</p>`
    },
    {
        id: "recruit-2024",
        category: "お知らせ",
        title: "【新卒採用2024】エントリー受付中！",
        date: "2024-03-01",
        displayDate: "2024.03.01",
        image: "./img/blog03-detail.jpg",
        alt: "新卒採用担当の社員",
        description: "新卒採用のエントリーについて案内しています。",
        content: `<p>TETOTEでは、2024年度の新卒採用エントリーを受け付けています。<br>テクノロジーの力で社会課題を解決するという想いに共感し、仲間と一緒に挑戦できる方を募集しています。</p><h2>募集職種</h2><ul><li>コンサルタント</li><li>ソリューション営業</li><li>システムエンジニア</li></ul><h2>選考について</h2><p>募集要項をご確認のうえ、エントリーフォームから必要事項を送信してください。<br>選考の詳しい日程や内容については、担当者よりご案内します。</p><h2>皆さんへ</h2><p>TETOTEには、年齢や経験に関係なく新しいことへ挑戦できる環境があります。<br>皆さんのこれまでの経験や、これから実現したいことを、ぜひ選考で聞かせてください。</p>`
    }
];

const articleId = new URLSearchParams(window.location.search).get("article") || "pre-training";
const articleIndex = Math.max(0,blogArticles.findIndex((article) => article.id === articleId));
const article = blogArticles[articleIndex];
const previousArticle = blogArticles[(articleIndex + 1) % blogArticles.length];
const nextArticle = blogArticles[(articleIndex - 1 + blogArticles.length) % blogArticles.length];
const articleUrl = (item) => item.id === "pre-training" ? "./blog-detail.html" : `./blog-detail.html?article=${item.id}`;

document.title = `${article.title} | 株式会社TETOTE`;
document.querySelector('meta[name="description"]').content = `テクノロジーで社会課題を解決する、AIやビッグデータ分析などの技術を活用した社会課題解決サービスを提供するTETOTEの採用サイト。このページでは、${article.description}`;
document.querySelector(".breadcrumb li:last-child").textContent = article.title;
document.querySelector(".blog-article__category").lastChild.textContent = article.category;
const articleTime = document.querySelector(".blog-article__meta time");
articleTime.dateTime = article.date;
articleTime.textContent = article.displayDate;
document.querySelector(".blog-article__header h1").textContent = article.title;
const articleImage = document.querySelector(".blog-article__main-image");
articleImage.src = article.image;
articleImage.alt = article.alt;
document.querySelector(".blog-article__content").innerHTML = article.content;

const setNavigationItem = (selector,item) => {
    const link = document.querySelector(selector);
    link.href = articleUrl(item);
    link.querySelector(".post-navigation__content span").textContent = item.title;
    const time = link.querySelector("time");
    time.dateTime = item.date;
    time.textContent = item.displayDate;
};

setNavigationItem(".post-navigation__item--previous",previousArticle);
setNavigationItem(".post-navigation__item--next",nextArticle);
