export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-stone-200/80 bg-white/50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
          Prototype
        </p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600">
          UX 검증용 정적 목업입니다. 콘텐츠·투표 수치는 샘플이며, 실서비스에서는
          에디터 검증 후 발행됩니다.
        </p>
        <p className="mt-4 text-xs text-stone-400">
          © {new Date().getFullYear()} newtro-prototype
        </p>
      </div>
    </footer>
  );
}
