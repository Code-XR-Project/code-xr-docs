import { AppWindow, Code2, Cpu, Gauge, Layers, Package } from 'lucide-react';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import Lightbox from '@/components/ui/Lightbox';
import MediaCard from '@/components/ui/MediaCard';
import SectionLink from '@/components/ui/SectionLink';
import { latestRelease } from '@/content/latestReleaseContent';
import { getReleaseImageSources } from '@/lib/assets';

// Icons live here, not in content: the content module stays plain data.
const ICONS = {
  cpu: Cpu,
  gauge: Gauge,
  code: Code2,
  package: Package,
  layers: Layers,
  app: AppWindow,
};

const RELEASE = latestRelease.release;

// The workflow grid is one column below lg and three from lg up (gap-6), each
// card with p-5 inside an 84rem Container (px-6, sm:px-8). At a 1344px viewport
// the container caps: (1280 - 48) / 3 - 40 = 371px. Between lg and there:
// (100vw - 64 - 48) / 3 - 40. Below lg: 100vw - 48 (or 64 from sm) - 40.
const SIZES =
  '(min-width: 1344px) 371px, (min-width: 1024px) calc(33.3vw - 78px), (min-width: 640px) calc(100vw - 104px), calc(100vw - 88px)';

// Only the workflows with a screenshot take part in the lightbox walk.
const IMAGES = latestRelease.workflows
  .filter((workflow) => workflow.image)
  .map((workflow) => ({ ...workflow.image, title: workflow.title }));

const Bullets = ({ items }) => (
  <ul className="mt-3 space-y-2">
    {items.map((item) => (
      <li key={item} className="flex gap-2.5 text-sm text-ink-muted">
        <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
        <span className="min-w-0 flex-1 text-pretty">{item}</span>
      </li>
    ))}
  </ul>
);

// The newest release, on top of #whats-new. Its own Container, with the
// Lightbox as a SIBLING of it rather than inside: the Container is what the
// scroll reveal animates, and a <dialog> must not sit in an animated subtree
// (same arrangement as TutorialPart).
const LatestRelease = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const open = IMAGES[openIndex ?? -1] ?? null;
  const openSources = open ? getReleaseImageSources(RELEASE, open.file) : null;
  const stepBy = (delta) =>
    setOpenIndex((current) => (current + delta + IMAGES.length) % IMAGES.length);

  return (
    <>
      <Container>
        <div className="@container max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-accent-strong uppercase dark:text-accent">
            {latestRelease.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {latestRelease.heading}
          </h2>
          <p className="mt-3 text-lg font-medium text-balance text-ink sm:text-xl">
            {latestRelease.codename}
          </p>
          <p className="mt-4 text-base text-pretty text-ink-muted hyphens-auto @md:text-justify sm:text-lg">
            {latestRelease.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestRelease.cards.map((card) => {
            const Icon = ICONS[card.icon];

            return (
              <article
                key={card.id}
                className="flex flex-col rounded-card border border-edge bg-surface-raised p-5 shadow-card"
              >
                <Icon aria-hidden="true" className="size-6 text-accent-strong dark:text-accent" />
                <h3 className="mt-3 text-lg font-semibold text-balance text-ink">{card.title}</h3>

                {card.body ? (
                  <p className="mt-2 text-sm text-pretty text-ink-muted">{card.body}</p>
                ) : null}

                {card.chips ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {card.chips.map((chip) => (
                      <li
                        key={chip}
                        className="rounded-full border border-edge bg-surface px-3 py-1 text-sm font-semibold text-ink"
                      >
                        {chip}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {card.terms ? (
                  <dl className="mt-2 space-y-2">
                    {card.terms.map((entry) => (
                      <div key={entry.term} className="text-sm text-pretty">
                        <dt className="font-semibold text-ink">{entry.term}</dt>
                        <dd className="text-ink-muted">{entry.text}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {card.footnote ? (
                  <p className="mt-3 text-sm text-pretty text-ink-muted">{card.footnote}</p>
                ) : null}

                {card.stat ? (
                  <p className="mt-3 flex flex-wrap items-baseline gap-2 text-ink-muted">
                    <span className="text-lg line-through">{card.stat.from}</span>
                    <span aria-hidden="true">&rarr;</span>
                    <span className="text-3xl font-bold tabular-nums text-accent-strong dark:text-accent">
                      {card.stat.to}
                    </span>
                  </p>
                ) : null}

                {card.items ? <Bullets items={card.items} /> : null}
              </article>
            );
          })}
        </div>

        <h3 className="mt-14 text-2xl font-bold tracking-tight text-balance sm:mt-16">
          {latestRelease.workflowsHeading}
        </h3>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {latestRelease.workflows.map((workflow) => {
            const imageIndex = IMAGES.findIndex((image) => image.file === workflow.image?.file);

            return (
              <article
                key={workflow.id}
                className="flex flex-col rounded-card border border-edge bg-surface-raised p-5 shadow-card"
              >
                <h4 className="text-lg font-semibold text-balance text-ink">{workflow.title}</h4>
                <p className="mt-2 text-sm text-pretty text-ink-muted">{workflow.body}</p>
                {workflow.items ? <Bullets items={workflow.items} /> : null}

                {workflow.image ? (
                  <div className="mt-auto pt-5">
                    <MediaCard
                      title={workflow.image.alt}
                      image={getReleaseImageSources(RELEASE, workflow.image.file)}
                      alt={workflow.image.alt}
                      label={latestRelease.lightbox.expand}
                      sizes={SIZES}
                      onOpen={() => setOpenIndex(imageIndex)}
                    />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>

        <SectionLink
          href={latestRelease.changelog.href}
          icon="up-right"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8"
        >
          {latestRelease.changelog.label}
        </SectionLink>

      </Container>

      <Lightbox
        isOpen={open !== null}
        src={openSources?.src ?? ''}
        sources={openSources?.sources ?? []}
        alt={open?.alt ?? ''}
        caption={open ? `${open.title}. ${open.alt}` : ''}
        onClose={() => setOpenIndex(null)}
        onPrev={() => stepBy(-1)}
        onNext={() => stepBy(1)}
        labels={latestRelease.lightbox}
      />
    </>
  );
};

export default LatestRelease;
