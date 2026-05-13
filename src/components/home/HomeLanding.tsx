import Link from "next/link";

export function HomeLanding() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 sm:px-6 sm:pt-20">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">
          그날의 트랙
        </p>
        <h1 className="font-[family-name:var(--font-serif)] mt-4 text-3xl font-semibold leading-snug text-[var(--ink)] sm:text-4xl">
          뻔한 90년대 탑100 플레이리스트에 지친 당신을 위한, 초개인화 레트로 음악
          매거진 및 프라이빗 토론 라운지
        </h1>
        <p className="mt-8 text-[15px] leading-relaxed text-stone-400">
          매일 아침 &lt;오늘의 디깅&gt;으로 과거의 오늘과 수록곡 서사를 만나고,
          믹스테이프 보관함에 쌓으며, 리플레이 라운지에서 동년배와 교감합니다.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
          <span className="text-[var(--ink)]">타깃.</span> 과거 음악을 즐기지만
          양산 플레이리스트만으로는 취향을 채우기 어려운 3040.{" "}
          <span className="text-[var(--ink)]">문제.</span> 알고리즘은 타이틀만
          돌려 주고, 기억나지 않는 명곡·감성 썰을 쓸 곳은 젊고 산만한 댓글창뿐.
          <span className="text-[var(--ink)]"> 해결.</span> 매거진으로 디깅하고
          플레이리스트로 직배송하며, 프리미엄 살롱에서 이야기합니다.
        </p>
        <nav className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--gold)]">
          <Link href="/digging" className="hover:underline underline-offset-4">
            오늘의 디깅
          </Link>
          <Link href="/mixtape" className="hover:underline underline-offset-4">
            나의 믹스테이프
          </Link>
          <Link href="/lounge" className="hover:underline underline-offset-4">
            리플레이 라운지
          </Link>
          <Link href="/memory" className="hover:underline underline-offset-4">
            내 기억 속 그 트랙
          </Link>
          <Link href="/capsule" className="hover:underline underline-offset-4">
            타임캡슐 믹스
          </Link>
        </nav>
      </section>

      <section className="border-t border-[var(--line)] bg-black/20 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-serif)] text-lg font-semibold text-[var(--ink)]">
            수익 모델 (Freemium)
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)]">
            트래픽 모집 기능은 무료로, 귀찮음 해소·소통 욕구를 채우는 기능은
            유료로 분리합니다. 초기 유입은 인스타그램 명곡 디깅 게시물과 앱 내
            매거진 연결이 기획안에 있습니다.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--line)]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-[var(--surface)]/80 text-xs uppercase tracking-wider text-[var(--gold)]">
                <tr>
                  <th className="px-4 py-3 font-medium">구분</th>
                  <th className="px-4 py-3 font-medium">무료 플랜</th>
                  <th className="px-4 py-3 font-medium">
                    프리미엄 (월 4,900원)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--line)] text-[var(--muted)]">
                <tr>
                  <td className="px-4 py-3 text-[var(--ink)]">콘텐츠 소비</td>
                  <td className="px-4 py-3">
                    매일 발행 매거진 열람, 1분 미리듣기
                  </td>
                  <td className="px-4 py-3">전체 매거진 무제한 지난보기</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[var(--ink)]">플레이리스트</td>
                  <td className="px-4 py-3">앱 내 보관함 수집·저장</td>
                  <td className="px-4 py-3 text-[var(--gold)]">
                    유튜브 뮤직·스포티파이로 곡 리스트 자동 전송 (Export API)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[var(--ink)]">개인화</td>
                  <td className="px-4 py-3">기본 태그 기반 장르 추천</td>
                  <td className="px-4 py-3 text-[var(--gold)]">
                    AI 타임캡슐 믹스 주 1회 (숨은 수록곡 맞춤 매거진)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[var(--ink)]">UGC</td>
                  <td className="px-4 py-3">유저 매거진 열람·곡 수집</td>
                  <td className="px-4 py-3 text-[var(--gold)]">
                    매거진 작성·발행, 「테이프 마스터」 뱃지
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[var(--ink)]">토론장 참여</td>
                  <td className="px-4 py-3">주제 확인·A/B 투표</td>
                  <td className="px-4 py-3 text-[var(--gold)]">
                    의견 작성, 공감·댓글, 프리미엄 뱃지 노출
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="font-[family-name:var(--font-serif)] text-lg font-semibold text-[var(--ink)]">
          기술·UX
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
          <li>
            Next.js 기반 PWA·모바일에서 네이티브에 가까운 전환을 목표로 합니다.
          </li>
          <li>
            믹스테이프 공간은 WebGL/Three.js로 카세트·턴테이블 등 3D 질감을
            붙이는 방향입니다.
          </li>
          <li>
            OAuth로 YouTube Data API·Spotify Web API를 연결해 수집 곡 ID를
            재생목록에 밀어 넣습니다.
          </li>
          <li>
            AI 추천은 수집·UGC 맥락·라운지 텍스트를 결합한 하이브리드 모델로
            확장합니다.
          </li>
        </ul>
      </section>
    </div>
  );
}
