const quotes = [
    {
      quote: "노력하면 어떻게든 된다는 보증은 없지만 노력하지않으면 아무것도 안된다는것은 보증할수있습니다!",
      author: "-빙과, 치탄다에루-",
    },
    {
      quote: "꿈은 도망가지 않아 도망가는 것은 언제나 나 자신이지",
      author: "-신형만-",
    },
    {
      quote:
        "모두에게는 저만의 평범함이라는게 있어서 이 세상의 사람의 수 만큼 평범함이 있는거에요. 그러니 상대방의 평범함을 존중하는게 그 사람을 소중히 여기는 마음이에요.",
      author: "-개구리 중사 케로로-",
    },
    {
      quote: "잃은 것만 세지마 없는건 이제 없어 너에게 남은건 뭐냐",
      author: "-루피-",
    },
    {
      quote: "의미없는 것을 잔뜩 하는 것이 인생이란다",
      author: "-마루코는 아홉살-",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];
  /* quotes는 안에 10개의 object가 들어있는 array이다 */

  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  /* 만약 todaysquote의 값이 quotes[1]이면 quotes array안에 있는 1번 object를 값으로 갖는다 */
  /* floor를 쓰는 이유 = 위와같이 array안의 요소가 10개면 끝번호의 index는 9이기때문 */
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;

  /* 따라서 우리는 1번 object에 있는 key값 quote와 author를 통해 value에 접근,사용할수있다 */