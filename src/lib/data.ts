import type { MagazineIssue, LoungeTopic, UserMagazine } from "./types";

export const DEMO_ISSUE: MagazineIssue = {
  id: "issue-001",
  dateLabel: "1999년 이 시점 · 오늘의 날짜에 맞춘 매거진",
  headline:
    "1999년 오늘, 가요계를 휩쓴 테크노 열풍 속에서 조용히 빛났던 발라드 3선",
  dek: "과거 특정 연도의 오늘에 얽힌 음악적 서사를 매거진으로 풀어 냅니다.",
  tracks: [
    {
      id: "tr-1",
      year: 1999,
      title: "〈December〉",
      artist: "브이티씨(VTC)",
      subtitle: "겨울 전주곡이 아닌, 그해 겨울의 공기",
      article:
        "차트 상위권이 댄스곡이었던 시기에, 라디오 심야에는 이런 멜로디로 하루를 접는 청취가 많았습니다. 앨범 3번 트랙으로 오래 남았다는 말이 괜히 나온 게 아닙니다.",
      coverClass: "from-violet-950 via-indigo-900 to-slate-950",
      era: "cassette",
    },
    {
      id: "tr-2",
      year: 1999,
      title: "〈For Your Soul〉",
      artist: "조성모",
      subtitle: "발라드와 랩이 한 트랙에",
      article:
        "지금 들으면 그 시절 믹스테이프의 정석 같지만, 당시에는 구성 자체가 과감한 시도였습니다. 파일명만 봐도 어떤 밤인지 떠오른다면 이미 디깅 중입니다.",
      coverClass: "from-amber-950 via-stone-900 to-zinc-950",
      era: "cd",
    },
    {
      id: "tr-3",
      year: 1999,
      title: "〈약속〉",
      artist: "김범수",
      subtitle: "노래방 애창곡이 아닌, 혼자 듣는 버전",
      article:
        "뻔한 탑100이 아니라 플레이리스트의 깊이를 채우고 싶다면, 이런 수록이 하루의 시작점이 됩니다.",
      coverClass: "from-rose-950 via-red-950 to-stone-950",
      era: "lp",
    },
  ],
};

export const NEIGHBOR_MAGAZINES: UserMagazine[] = [
  {
    id: "ugc-neighbor-1",
    title: "2003년, 학원 끝나고 버스 안에서 MP3로 듣던 노래들",
    author: "한강각",
    badge: "테이프 마스터",
    episode:
      "창문에 김이 서리던 계절에 이어폰 볼륨만 키웠던 기억. 타이틀보다 수록이 더 오래 남았다.",
    tracks: [
      {
        id: "ugc-neighbor-1-0",
        title: "〈…〉",
        artist: "버즈",
        year: 2003,
        era: "cd",
      },
      {
        id: "ugc-neighbor-1-1",
        title: "〈스키장에서〉",
        artist: "럼블피쉬",
        year: 2003,
        era: "cd",
      },
      {
        id: "ugc-neighbor-1-2",
        title: "〈회상〉",
        artist: "터보",
        year: 2001,
        era: "cassette",
      },
    ],
  },
  {
    id: "ugc-neighbor-2",
    title: "첫 아이팟에 넣은 다섯 곡",
    author: "새벽버스",
    badge: "테이프 마스터",
    episode: "동기화 기다리며 곡 순서만 한 시간째 만졌던 날.",
    tracks: [
      {
        id: "ugc-neighbor-2-0",
        title: "〈총 맞은 것처럼〉",
        artist: "백지영",
        year: 2008,
        era: "cd",
      },
      {
        id: "ugc-neighbor-2-1",
        title: "〈Love Letter〉",
        artist: "비",
        year: 2002,
        era: "cd",
      },
    ],
  },
];

export const loungeTopics: LoungeTopic[] = [
  {
    id: "lounge-1",
    year: "2005",
    question:
      "2005년 SG워너비 vs 2005년 버즈, 당신의 MP3를 지배했던 목소리는?",
    optionA: { id: "a", label: "SG 워너비", votes: 1842 },
    optionB: { id: "b", label: "버즈", votes: 1603 },
    seedComments: [
      {
        id: "c1",
        author: "노을막차",
        text: "버즈는 앨범 전체를 폴더째로 들었고, SG는 싱글 몇 곡이 폰에만 남았어요. 그해엔 재생 빈도로 따지면 버즈 쪽이었습니다.",
        likes: 48,
        replies: [
          {
            id: "c1-r1",
            author: "윈앰프중독",
            text: "전 반대로 라디오에서 SG가 더 많이 틀려서 그쪽이 상처받힌 기억이… 둘 다 2005년 공기는 맞죠.",
            likes: 12,
          },
        ],
      },
    ],
  },
  {
    id: "lounge-2",
    year: "2002",
    question: "첫 CD로 샀던 장르, 발라드 앨범 vs 댄스 컴필?",
    optionA: { id: "a", label: "발라드 앨범", votes: 989 },
    optionB: { id: "b", label: "댄스 컴필", votes: 1120 },
    seedComments: [
      {
        id: "c2",
        author: "포터블플레이어",
        text: "발라드 정규는 비쌀 때가 많아서, 첫 소비가 컴필인 경우가 많았던 것 같아요.",
        likes: 23,
      },
    ],
  },
];

export function getLoungeById(id: string) {
  return loungeTopics.find((t) => t.id === id) ?? null;
}
