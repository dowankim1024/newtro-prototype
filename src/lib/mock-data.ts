import type { DebateTopic, TimelinePiece } from "./types";

/** 프로토타입용 고정 “오늘” — 기획서 예시 연도·소재와 맞춤 */
export const DEMO_TODAY_LABEL = "2026년 5월 11일 월요일";

export const timelinePieces: TimelinePiece[] = [
  {
    id: "m-2008",
    slug: "bigbang-lies-2008",
    category: "music",
    year: 2008,
    title: "멜론 위클리 1위, BIGBANG 〈거짓말〉",
    subtitle: "피처폰 벨소리가 도로변에서 울리던 시절",
    excerpt:
      "발라드와 힙합이 한 트랙에서 만났다는 평가. ‘미안해’로 이어지는 브릿지는 지금 들어도 울립니다.",
    coverImage: {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&q=85",
      alt: "무대 조명 아래 콘서트 분위기",
    },
    article: {
      lead:
        "2008년, 거리마다 피처폰 스피커로 흘러나오던 멜로디가 있었습니다. 그중에서도 〈거짓말〉은 ‘한 번만 들어도 중독된다’는 말이 과장처럼 느껴질 만큼 강한 후킹을 가지고 있었죠.",
      blocks: [
        {
          kind: "h2",
          text: "왜 지금도 기억되는 걸까요",
        },
        {
          kind: "p",
          text: "곡 구조를 조금만 따라가 보면, 절망 뒤에 붙는 ‘미안해’의 반복이 이상할 정도로 솔직하게 들립니다. 화려한 퍼포먼스보다 ‘이별 직후의 어설픈 변명’ 같은 질감이 동년배 청취자에게는 익숙한 풍경이었을지도 모릅니다.",
        },
        {
          kind: "quote",
          text: "“거짓말이길 바랬던 사람이 있는가 하면, 거짓말로라도 붙잡고 싶었던 사람도 있었다.”",
        },
        {
          kind: "p",
          text: "차트 1위는 숫자일 뿐이지만, 그 숫자 뒤에는 ‘학교 끝나고 이어폰을 나눠 끼던’ 친구들과, ‘첫 브레이크업 후 밤 산책’ 같은 사적 풍경이 겹쳐 보입니다. 프로토타입 편집 노트로는, 당시 음원 플랫폼 UI와 멜론 위클리 화면 캡처가 나중에 아카이브에 붙을 예정입니다.",
        },
        {
          kind: "figure",
          src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1400&q=85",
          alt: "콘서트 군중 실루엣",
          caption: "같은 시기, 현장의 열기는 차트와는 다른 온도였습니다.",
        },
        {
          kind: "p",
          text: "지금 들어도 특유의 신스와 비트가 시대를 타지 않는 이유는, '완벽한 슬픔'보다 '미완의 사과'에 가까운 서사를 택했기 때문이 아닐까요. 이 카드는 에디터가 사실 관계를 재확인한 뒤 발행되는 형태로 확장될 예정입니다.",
        },
      ],
    },
    linkLabel: "뮤직 플레이어 (준비 중)",
    tags: ["#아티스트(BIGBANG)", "#장르(K-POP)", "#연도(2008)", "#키워드(피처폰)"],
    tone: "coral",
    readTimeMinutes: 6,
  },
  {
    id: "mv-1994",
    slug: "forrest-gump-1994",
    category: "movie",
    year: 1994,
    title: "영화 〈포레스트 검프〉 국내 개봉일",
    subtitle: "박스오피스와 상영관이 ‘검프’로 붐볐던 주간",
    excerpt:
      "‘인생은 초콜릿 상자’가 밈이 되기 전, 극장 로비에서 줄넘기 장면을 두고 웃던 주말이 있었습니다.",
    coverImage: {
      src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=85",
      alt: "어두운 영화관 좌석과 스크린 빛",
    },
    article: {
      lead:
        "1994년의 극장은 지금보다 훨씬 담배 연기와 팝콘 냄새가 뒤섞였다는 추억이 자주 등장합니다. 〈포레스트 검프〉는 그런 공기 속에서도 가족 관객과 데이트 관객을 한 스크린으로 모았던 이례적인 작품이었습니다.",
      blocks: [
        {
          kind: "h2",
          text: "명대사 이전의 ‘공감’",
        },
        {
          kind: "p",
          text: "포레스트의 달리기 장면은 이후 패러디의 단골 소재가 되지만, 당시에는 ‘멈추지 않는 인내’가 주는 묘한 위로로 읽히기도 했습니다. 역사적 사건은 배경일 뿐, 관객이 붙잡은 건 작은 순간들의 연속이었죠.",
        },
        {
          kind: "p",
          text: "박스오피스 숫자는 아카이브에서 다시 짚어볼 수 있지만, 이 프로토타입에서는 ‘그 주에 가장 많이 들린 감탄사’ 같은 소소한 현장 기억을 모으는 데 초점을 둡니다.",
        },
        {
          kind: "figure",
          src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&q=85",
          alt: "영화 필름 스풀과 빛",
          caption: "필름 시절의 물성은 디지털 리마스터에도 남아 있습니다.",
        },
        {
          kind: "quote",
          text: "“우리는 스크린을 보면서 각자 다른 사람을 생각했고, 끝날 때는 같은 박수를 쳤다.”",
        },
        {
          kind: "p",
          text: "개봉일 아카이브 기능이 붙으면, 같은 날 개봉한 다른 작품과 ‘이중 관람’ 경험도 함께 정리해 드릴 예정입니다.",
        },
      ],
    },
    linkLabel: "상영 스케줄 아카이브 (준비 중)",
    tags: ["#영화(포레스트검프)", "#연도(1994)", "#키워드(극장추억)"],
    tone: "teal",
    readTimeMinutes: 7,
  },
  {
    id: "n-2009",
    slug: "iphone-korea-2009",
    category: "news",
    year: 2009,
    title: "아이폰, 한국 시장 첫 출시",
    subtitle: "물리 키보드 vs 풀터치의 분수령",
    excerpt:
      "멀티터치에 익숙해지기까지 ‘습관 전쟁’이 있었습니다. 통화·문자 중심에서 앱 생태계로의 이동은 그 다음 챕터였죠.",
    coverImage: {
      src: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1600&q=85",
      alt: "스마트폰을 든 손 클로즈업",
    },
    article: {
      lead:
        "2009년, ‘스마트폰’이라는 단어가 아직 생소했던 이들에게 아이폰은 단순한 통화기가 아니라 ‘터치라는 새 언어’였습니다. 애니메이션이 따라오는 스크롤은 마법 같았고, 물리 키에 익숙한 손가락은 처음엔 전부 엇박자였죠.",
      blocks: [
        {
          kind: "h2",
          text: "물리키 파와 풀터치 파",
        },
        {
          kind: "p",
          text: "직장 동료들 사이에서는 ‘이메일만 잘 되면 된다’는 현실적인 평가와, ‘게임이 이 정도면 미친 것’이라는 감탄이 공존했습니다. 앱스토어가 느리게 자라는 동안, 대한민국의 피처폰 생태계는 마지막 불꽃을 태우고 있었죠.",
        },
        {
          kind: "quote",
          text: "“첫날밤에 키보드 없는 문자가 제일 무서웠다.”",
        },
        {
          kind: "p",
          text: "이 글은 공신력 있는 뉴스 아카이브와 출시 보도를 교차 확인한 뒤 에디터가 확정하는 형태로 넘어갈 예정입니다. 지금 보시는 버전은 내러티브 프로토타입입니다.",
        },
        {
          kind: "figure",
          src: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1400&q=85",
          alt: "여러 대의 스마트폰이 놓인 테이블",
          caption: "출시 이후, 실제 사용 패턴은 개인마다 크게 갈렸습니다.",
        },
      ],
    },
    linkLabel: "당시 보도 모음 (준비 중)",
    tags: ["#키워드(스마트폰)", "#연도(2009)", "#키워드(물리키)"],
    tone: "violet",
    readTimeMinutes: 5,
  },
  {
    id: "a-sc",
    slug: "starcraft-1998",
    category: "article",
    year: 1998,
    title: "그날, PC방 향기와 함께 깔린 RTS",
    subtitle: "1998년 오늘, 〈스타크래프트〉 발매",
    excerpt:
      "밤을 새운 이유는 랭킹이 아니라 동네 형들의 밸런스 썰일지도 모릅니다. 종족 논쟁은 아직 끝나지 않았죠.",
    coverImage: {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&q=85",
      alt: "키보드 위에서 게임하는 손",
    },
    article: {
      lead:
        "1998년의 PC방 공기는 라면 냄새, 에어컨 냄새, 그리고 ‘gg’라는 짧은 인사가 뒤섞였습니다. 스타크래프트는 그 공간의 공용어가 되었고, 테란·프로토스·저그는 동네마다 다른 전설을 양산했습니다.",
      blocks: [
        {
          kind: "h2",
          text: "RTS가 만든 사회성",
        },
        {
          kind: "p",
          text: "지금의 배틀 로얄과는 다른 종류의 긴장이 있었습니다. 한 판이 길면 길수록 뒤에서 기다리는 사람들의 시선이 등을 찌르는 느낌—그 압력이 오히려 중독성이었다는 증언도 많죠.",
        },
        {
          kind: "figure",
          src: "https://images.unsplash.com/photo-1593640408182-31baa697fd84?w=1400&q=85",
          alt: "모니터와 복도가 보이는 PC방 느낌의 공간",
          caption: "출입 증명·담배·음료 규정은 시대마다 달랐습니다.",
        },
        {
          kind: "p",
          text: "밸런스 패치와 패러다임은 역사책처럼 남지만, ‘그날 밤의 냄새’ 같은 감각은 개인의 회고 속에만 선명합니다. 이 아티클은 AI 초안에 에디터 각주를 더하는 파이프라인의 샘플입니다.",
        },
        {
          kind: "h2",
          text: "토론으로 이어지는 조각",
        },
        {
          kind: "p",
          text: "같은 시리즈의 토론 코너 〈그때, 우리는〉에서 종족 설문을 열어 두었습니다. 이 기사를 읽고 나서 한 번 들러 보셔도 좋습니다.",
        },
      ],
    },
    linkLabel: "토론장 바로가기는 상단 메뉴에서",
    tags: ["#키워드(PC방)", "#연도(1998)", "#키워드(라디오BGM)"],
    tone: "amber",
    readTimeMinutes: 8,
  },
];

export const debateTopics: DebateTopic[] = [
  {
    id: "d-sc1",
    slug: "starcraft-race-1998",
    teaser: "PC방 밤샘의 공용어, 종족 밸런스는 아직 갈리는 중",
    headline:
      "1998년 오늘, 스타크래프트 발매. 세 종족 중 가장 사기였던 종족은?",
    year: 1998,
    context:
      "패치마다 밸런스는 바뀌었지만 감성은 남습니다. 먼저 내 진영을 고른 뒤, 전체 썰을 보며 채팅에 참여해 보세요.",
    options: [
      {
        id: "terran",
        label: "테란",
        blurb: "탱크·마린의 무난함",
        votes: 412,
        badgeVariant: "amber",
      },
      {
        id: "protoss",
        label: "프로토스",
        blurb: "드래곤 러시의 설렘",
        votes: 355,
        badgeVariant: "violet",
      },
      {
        id: "zerg",
        label: "저그",
        blurb: "러시의 쾌감",
        votes: 389,
        badgeVariant: "emerald",
      },
    ],
    comments: [
      {
        id: "c1",
        optionId: "terran",
        author: "군밤_3040",
        text: "당시엔 탱크 쌓으면 형들이 ‘현실감 있다’면서 다들 박수 쳤음 ㅋㅋ",
        ago: "12분 전",
      },
      {
        id: "c2",
        optionId: "protoss",
        author: "넷상의_곰",
        text: "풀무 다크템프 들키면 PC방 전체가 조용해지던 기억",
        ago: "28분 전",
      },
      {
        id: "c3",
        optionId: "zerg",
        author: "말토사",
        text: "6풀은 미추… 근데 이기면 기분 최고였음",
        ago: "1시간 전",
      },
      {
        id: "c4",
        optionId: "terran",
        author: "회차정리",
        text: "저는 지금도 테란이 편안해요. 물리키보드도 그랬고요.",
        ago: "2시간 전",
      },
    ],
  },
  {
    id: "d-cy1",
    slug: "cyworld-vs-instagram",
    teaser: "도토리·BGM 미니홈 vs 그리드 피드, 감성의 거처",
    headline: "싸이월드 도토리 감성 vs 지금의 인스타 감성, 당신의 선택은?",
    year: 2012,
    context:
      "'일촌 공개'와 '팔로워 공개'는 완전 다른 신체감이었죠. 진영을 정하고 추억을 올려 주세요.",
    options: [
      {
        id: "cyworld",
        label: "싸이월드",
        blurb: "BGM·도토리·일촌",
        votes: 502,
        badgeVariant: "rose",
      },
      {
        id: "instagram",
        label: "인스타그램",
        blurb: "그리드·릴스·DM",
        votes: 478,
        badgeVariant: "cyan",
      },
    ],
    comments: [
      {
        id: "cy1",
        optionId: "cyworld",
        author: "미니홈피_수호자",
        text: "스킨 바꾸고 투명 배경 깔 때 들떴던 기억이 아직도…",
        ago: "6분 전",
      },
      {
        id: "cy2",
        optionId: "instagram",
        author: "릴스_only",
        text: "속도는 인스타가 이김. 근데 '누가 봤는지'는 싸이가 더 소름",
        ago: "19분 전",
      },
      {
        id: "cy3",
        optionId: "cyworld",
        author: "클럽오디션",
        text: "방명록이 진짜 SNS였음. 지금 댓글과 질감이 다름",
        ago: "42분 전",
      },
      {
        id: "cy4",
        optionId: "instagram",
        author: "정리의_달인",
        text: "사진 정리는 인스타가 편했어요. 근데 청춘이 싸이에 있음",
        ago: "1시간 전",
      },
    ],
  },
  {
    id: "d-ph1",
    slug: "first-smartphone-keys",
    teaser: "아이폰 첫 출시 무렵, 손가락이 익숙해지기까지",
    headline:
      "2009년 즈음, 당신의 인생 첫 스마트폰은 물리 키보드였나요, 풀터치였나요?",
    year: 2009,
    context:
      "아이폰이 들어오던 시기에도 피처폰·안드로이드 첫 기기는 각각 달랐습니다. 본인의 ‘첫 감각’에 쪽을 골라 주세요.",
    options: [
      {
        id: "physical",
        label: "물리키보드파",
        blurb: "눌러야 안심",
        votes: 336,
        badgeVariant: "slate",
      },
      {
        id: "touch",
        label: "풀터치파",
        blurb: "스와이프가 미래",
        votes: 401,
        badgeVariant: "amber",
      },
    ],
    comments: [
      {
        id: "ph1",
        optionId: "physical",
        author: "타자마스터",
        text: "블랙베리처럼 촉감 있는 건 지금도 그립습니다",
        ago: "8분 전",
      },
      {
        id: "ph2",
        optionId: "touch",
        author: "멀티터치_첫날",
        text: "첫날은 오타가 너무 많아서 포기할 뻔… 일주일 뒤 적응",
        ago: "33분 전",
      },
      {
        id: "ph3",
        optionId: "physical",
        author: "피처폰잔재",
        text: "통화는 물리 버튼이 빨랐음 ㅋㅋ",
        ago: "55분 전",
      },
      {
        id: "ph4",
        optionId: "touch",
        author: "맵_한손",
        text: "지도 돌려보는 순간 게임 바뀐 느낌",
        ago: "2시간 전",
      },
    ],
  },
];
