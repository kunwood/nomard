const quotes =[
{
    quote: "왜 사는지를 아는 자는 어떤 비극도 견딜 수 있다.",
    author: "빅터 프랭클",
},
{
    quote: "인생은 자전거 타기다. 균형을 잡으려면 움직여야 한다",
    author: "앨버트 아인슈타인",
},
{
    quote: "나는 머리가 좋지 않다. 그래서 문제가 있을 때 다른 사람보다 좀 더 오래 생각한다.",
    author: "앨버트 아인슈타인",
},
{
    quote: "참된 행복은 자기만족을 통해 얻어지는 것이 아니다. 가치 있는 목적에 충실했을 때 얻어진다.",
    author: "헬렌 켈러",
},
{
    quote: "우리의 모든 꿈은 우리가 그것을 추구할 용기만 있다면 이뤄진다.",
    author: "월트 디즈니",
},
{
    quote: "장애물은 역경이 아닌 기회다. 이 사실을 똑바로 보지 못하게 막는 모든 인식이 적이다.",
    author: "라이언 홀리데이",
},
{
    quote: "타인이 우리에게 무엇을 해줄 수 있는지는 그만 질문하고, 우리가 타인에게 무엇을 해줄 수 있는지를 질문하라.",
    author: "오스틴 클레온",
},
{
    quote: "'성장한다'는 것은 위쪽을 향해 나아간다는 뜻이고, '뛰어넘는다'는 것은 계속 앞으로 나아간다는 의미다. 우리 모두는 포기하는 것보다 더 나은 선택을 할 수 있다.",
    author: "셰릴 스트레이드",
},
{
    quote: "자제력을 키우는 가장 좋은 방법은 어떻게 그리고 왜 당신이 자제력을 잃는가를 살피는 것이다.",
    author: "켈리 맥고니걸",
},
{
    quote: "실패는 목표를 지나치게 높게 설정해 이에 미치지 못하는데 있지 않다. 목표를 너무 낮게 잡고. 여기에 매달리는 데 있다.",
    author: "미켈란젤로",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- "+todaysQuote.author;