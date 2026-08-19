/* 社員詳細ページ：社員ごとの表示データ */
const staffMembers = {
    hashimoto: {
        name: "橋本 拓也", roman: "HASHIMOTO", position: "コンサルタント", joined: "2015年入社",
        image: "./img/syain02-detail.jpg", message01: "全力で考えぬける環境", message02: "試練の数だけ強くなれました",
        biography: "関西大学工学部を卒業後、大手IT企業で営業マンとして3年間、システム導入に携わった。その後、TETOTEに転職し、お客様第一のコンサルティングを意識して業務に取り組んでいる。",
        workIntro: "お客様の課題を分析し、AIやビッグデータ分析などの技術を活用したソリューションを提案・導入しています。具体的には、以下のような業務を担当しています。",
        duties: "<p>・お客様の課題ヒアリング</p><p>・ソリューションの設計・開発</p><p>・導入支援</p><p>・効果測定</p>",
        student: "大学時代は、クイズ研究会に所属していました。全国大会に出場し、優勝した経験があります。この経験を通して、情報収集能力と論理的思考力を鍛えました。",
        reason: "社会課題を解決したいという思いがあり、そのためにテクノロジーを活用したいと考えていました。TETOTEは、AIやビッグデータ分析などの技術を活用して社会課題を解決している会社であり、自分の想いを叶えられる場所だと感じました。",
        reward: "お客様の課題を解決し、喜んでいただいたときです。特に、チームで協力してプロジェクトを成功させたときに、大きな喜びを感じます。",
        person: "柔軟な発想力と独創的なアイデアを持つ人、困難な課題にも粘り強く取り組む人、社会課題に関心があり解決したいという思いのある人です。",
        applicant: "TETOTEは、社会課題を解決したいという熱意のある人材を募集しています。一緒にテクノロジーの力で社会を変えていきましょう！"
    },
    aoki: {
        name: "青木 美月", roman: "AOKI", position: "ソリューション営業", joined: "2017年入社",
        image: "./img/syain03-detail.jpg", message01: "お客様も知らない課題を", message02: "一緒に探し出す醍醐味",
        biography: "広島大学法学部卒。学生時代は演劇サークルで舞台に立ち、脚本や演出にも挑戦。そこで培ったコミュニケーション能力とプレゼンテーション能力を活かし、現在はソリューション営業として活躍中。",
        workIntro: "お客様の課題をヒアリングし、AIやビッグデータ分析などの技術を活用したソリューションを提案・販売しています。具体的には、以下のような業務を担当しています。",
        duties: "<p>・お客様の課題ヒアリング</p><p>・ソリューションの提案</p><p>・導入支援</p><p>・顧客関係構築</p>",
        student: "大学時代は、演劇サークルに所属していました。女優として舞台に立つだけでなく、脚本や演出にも挑戦しました。この経験を通して、コミュニケーション能力やプレゼンテーション能力を磨きました。",
        reason: "社会課題を解決したいという思いがあり、そのためにテクノロジーの力に惹かれていました。TETOTEは、AIやビッグデータ分析などの技術を活用して社会課題を解決している会社であり、自分の想いを形にできる場所だと感じました。",
        reward: "お客様の課題を解決し、喜んでいただいたときです。チームで協力してプロジェクトを成功させたときにも、大きな喜びを感じます。",
        person: "向上心があり、常に新しいことに挑戦する人、チームワークを大切にし周囲と協力して仕事ができる人、社会課題に関心がある人です。",
        applicant: "TETOTEは、社会課題を解決したいという熱意を持つ人材を募集しています。一緒にテクノロジーの力で社会を変えていきましょう！"
    },
    takahashi: {
        name: "高橋 智", roman: "TAKAHASHI", position: "データサイエンティスト", joined: "2002年入社",
        image: "./img/syain04-detail.jpg", message01: "ビジネスの課題を", message02: "データで解決する醍醐味",
        biography: "東京工業大学大学院卒業後、ソフトウェア開発会社を経て、2002年にTETOTEに入社。データ分析部門の立ち上げに携わり、現在はデータサイエンティストとして活躍。",
        workIntro: "TETOTEのデータ分析部門を牽引する存在として、データ収集から分析、モデル開発、研究まで幅広く担当しています。",
        duties: "<p><strong>1. データ収集・加工</strong></p><p>お客様のシステムやデータベースからデータを収集し、分析しやすいように加工します。</p><p><strong>2. データ分析</strong></p><p>機械学習や統計分析などの手法を用いて分析し、課題解決や意思決定に役立つ情報を抽出します。</p><p><strong>3. レポート作成</strong></p><p>分析結果を分かりやすくまとめたレポートを作成し、お客様や社内の関係者にレポートを共有します。</p><p><strong>4. モデル開発</strong></p><p>・機械学習モデルの開発・運用<br>・モデルの精度向上のためのチューニング</p><p><strong>5. 研究</strong></p><p>・最新のデータ分析技術に関する情報収集<br>・研究結果の発表</p>",
        student: "学生時代は、数学とプログラミングに力を入れていました。特に、統計学やデータ解析に興味を持ち、その分野での知識とスキルを深めることに専念していました。",
        reason: "データサイエンスの分野でのキャリアを築くために様々な企業を検討していました。TETOTEは、その先進的な技術とフレキシブルな働き方が魅力でした。",
        reward: "データサイエンスの仕事では、問題解決において常に新たな発見やアイデアが生まれる瞬間があります。分析結果が成果を生むことに大きなやりがいを感じます。",
        person: "チームワークを重視する人と一緒に働きたいです。異なる専門知識や視点を持つ人々が協力することで、より良い解決策が生まれると考えています。",
        applicant: "TETOTEは、データサイエンスの分野でキャリアを築く方にとって、素晴らしいチャンスを提供しています。ぜひ一緒に成長していきましょう。"
    },
    takada: {
        name: "高田 凛", roman: "TAKADA", position: "コンサルタント", joined: "2006年入社",
        image: "./img/syain05-detail.jpg", message01: "どんな難解な案件も", message02: "チームで突破できる強い連携",
        biography: "東洋大学経済学部を卒業し、その後一橋大学院でMBAを取得。学生時代からビジネスや経済に興味を持ち、それを深めるために様々な経験を積む。TETOTEに入社してからは、クライアントのビジネス課題に対する最適な解決策を提供することに取り組む。",
        workIntro: "私の業務は、主にクライアントとのコミュニケーションを通じて、彼らのビジネス課題を理解し、解決策を提案することです。データ分析や市場調査などの具体的な調査活動も行います。さらに、プロジェクトチームと協力して、提案した解決策を実行に移すプロセスにも関与しています。",
        duties: "",
        student: "大学時代には経済学やビジネスについての基礎知識を身につけるために努力しました。また、リーダーシップやチームワークを発揮する経験も積みました。",
        reason: "クライアントとの深い関係を築きながら、ビジネス課題に対する最適な解決策を提供することを重視していたためです。チームワークを重視し、メンバー同士が協力して成長する文化にも魅力を感じました。",
        reward: "クライアントが私たちの提案を実行に移し、それがビジネスにポジティブな影響を与えるときです。また、チームでプロジェクトに取り組み、成功したときにも大きなやりがいを感じます。",
        person: "私は、柔軟性を持ちながらも、チーム全体の目標に向かって協力し合える人と一緒に働きたいです。",
        applicant: "TETOTEは、ビジネスコンサルティングの分野でキャリアを築くための素晴らしい場所です。挑戦と成長の機会を求める方は、ぜひTETOTEにご応募ください。"
    },
    tachibana: {
        name: "橘 光", roman: "TACHIBANA", position: "システム事業部課長", joined: "2007年入社",
        image: "./img/syain06-detail.jpg", message01: "お客様と一緒に開発", message02: "豊富なプライム案件が魅力です",
        biography: "東京農工大学を卒業。電気工学科出身。大学在学中から情報技術に興味を持ち、プログラミングやシステム開発に関するスキルを磨く。その後、TETOTEに入社し、システム開発の分野でキャリアを築いている。",
        workIntro: "私の普段の業務は、システム開発プロジェクトの管理とチームのリーダーシップを担当しています。クライアントの要求を理解し、それを実現するための開発計画を策定します。",
        duties: "<p>プロジェクトの進捗状況を管理し、技術的な問題やリスクの解決にも取り組んでいます。</p>",
        student: "学生時代は、主に電気工学やコンピュータサイエンスに関する基礎知識を学ぶことに力を入れました。また、プログラミングやシステム開発のスキルを身につけるために、個人プロジェクトやインターンシップなどの経験を積みました。",
        reason: "TETOTEは、技術的な挑戦を受け入れる文化があり、新しいアイデアや技術を積極的に取り入れています。また、チームワークを重視し、メンバー同士が協力して成長する環境があります。",
        reward: "プロジェクトチームが協力してシステムを開発し、それがクライアントにとって有益な成果をもたらすときです。新しい技術やツールを導入し、それがプロジェクトにプラスの影響を与えることにもやりがいを感じます。",
        person: "私は、技術的な知識やスキルを持ちながらも、チーム全体の目標に向かって協力し合える人と一緒に働きたいです。柔軟性を持ちながら、問題解決に向けて積極的に取り組む姿勢がある人を歓迎します。",
        applicant: "TETOTEは、システム開発の分野でキャリアを築くための素晴らしい場所です。技術的な挑戦を受け入れ、チームと協力して成長したいと考えているなら、ぜひTETOTEにご応募ください。"
    }
};

const memberId = new URLSearchParams(window.location.search).get("member");
const member = staffMembers[memberId];

if(member){
    document.body.classList.add(`staff-member--${memberId}`);
    document.title = `${member.name} | TETOTE RECRUITING`;
    document.querySelector('meta[name="description"]').content = `TETOTEで働く${member.position}、${member.name}のインタビューです。`;
    const messageLines = document.querySelectorAll(".staff-profile__message span");
    messageLines[0].textContent = member.message01;
    messageLines[1].textContent = member.message02;
    document.querySelector(".staff-profile__position").textContent = member.position;
    document.querySelector(".staff-profile__identity h1").textContent = member.name;
    document.querySelector(".staff-profile__identity p").textContent = member.joined;
    document.querySelector(".staff-profile__biography").textContent = member.biography;
    const photo = document.querySelector(".staff-profile__photo img");
    photo.src = member.image;
    photo.alt = `${member.position}の${member.name}`;
    document.querySelector(".breadcrumb li:last-child").textContent = member.roman;
    document.querySelector(".staff-interview__intro").textContent = member.workIntro;
    document.querySelector(".staff-interview__duties").innerHTML = member.duties;
    document.querySelector("#student-days .staff-interview__answer p").textContent = member.student;
    document.querySelector("#reason .staff-interview__answer p").textContent = member.reason;
    document.querySelector("#reward .staff-interview__answer p").textContent = member.reward;
    document.querySelector("#person .staff-interview__answer p").textContent = member.person;
    document.querySelector("#message .staff-interview__answer p").textContent = member.applicant;
}
