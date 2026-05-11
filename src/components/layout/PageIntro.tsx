interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="mb-10 border-b border-stone-200/90 pb-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-800/80">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone-600">
        {description}
      </p>
    </header>
  );
}
