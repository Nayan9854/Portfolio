import type { Experience } from "@/data/profile";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-white/5 bg-white/5 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-500 hover:border-white/15 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_40px_140px_rgba(0,0,0,0.6),0_0_40px_rgba(129,140,248,0.15)]">
      <div className="flex flex-wrap items-baseline justify-between gap-2 flex-shrink-0">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#818cf8]">
            {experience.period}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            {experience.role}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
          {experience.location}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 flex-shrink-0">
        <p className="text-lg font-medium text-white">{experience.company}</p>
        {experience.link && (
          <a
            href={experience.link}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex w-fit items-center gap-2 rounded-full border border-[#818cf8]/40 bg-[#818cf8]/10 px-3 py-1.5 text-sm font-semibold text-[#c7d2fe] transition-all duration-300 hover:translate-x-1 hover:border-[#818cf8] hover:bg-[#818cf8]/20 hover:text-white"
          >
            Visit site
            <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">↗</span>
          </a>
        )}
      </div>
      <p className="mt-2 text-sm text-zinc-400 flex-shrink-0 min-h-[2.5rem]">{experience.summary}</p>
      <ul className="mt-4 flex-1 space-y-2 text-sm text-zinc-300">
        {experience.bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[#818cf8]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

