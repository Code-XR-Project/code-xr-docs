import Container from '@/components/ui/Container';
import MediaVideo from '@/components/ui/MediaVideo';
import SectionBridge from '@/components/ui/SectionBridge';
import { FUTURE_VIDEO, future } from '@/content/futureContent';
import { getReleaseImageSources } from '@/lib/assets';
import { getYouTubeEmbedUrl, getYouTubeWatchUrl } from '@/lib/media';

// The video's slot: max-w-5xl (1024px) centred in the Container, so it is the
// viewport minus the Container's gutters (px-6 below sm, px-8 from sm) until
// that reaches 1024, i.e. from a 1088px viewport up.
const VIDEO_SIZES =
  '(min-width: 1088px) 1024px, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 3rem)';

// "What's next", the first section under the hero.
//
// It sits second on purpose: the hero says what Code-XR is, this says where it
// is going, and everything below is the extension as it stands today. The
// bridge at the bottom says exactly that, so a reader who came for the current
// release is one click from it.
//
// One centred column with the video at full reading width, unlike every other
// video section (which pair the video with copy in two columns): here the
// video IS the section, and the copy is its caption.
//
// The copy is a research proposal and must keep reading as one; see the
// accuracy rules at the top of futureContent.js before rewording anything.
const Future = () => {
  return (
    <section id="future" className="border-t border-edge py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wide text-accent-strong uppercase dark:text-accent">
            {future.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {future.heading}
          </h2>

          <div className="mt-5 space-y-4">
            {future.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base text-pretty text-ink-muted sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* text-left is not needed: MediaVideo's caption row is its own flex
            line and the centring above stops at its wrapper. */}
        <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
          <MediaVideo
            title={FUTURE_VIDEO.title}
            src={getYouTubeEmbedUrl(FUTURE_VIDEO.id)}
            poster={getReleaseImageSources(FUTURE_VIDEO.posterRelease, FUTURE_VIDEO.posterFile)}
            posterAlt={FUTURE_VIDEO.posterAlt}
            posterSizes={VIDEO_SIZES}
            playLabel={future.playLabel}
            badge={FUTURE_VIDEO.durationLabel}
            watchUrl={getYouTubeWatchUrl(FUTURE_VIDEO.id)}
            watchLabel={future.watchLabel}
          />

          {/* The status line, directly under the video it qualifies. A bordered
              note rather than more prose: it is the one sentence here that must
              not be skimmed past. Weight only, no hue. */}
          <p className="mt-6 rounded-card border border-edge bg-surface-raised px-4 py-3 text-sm text-pretty text-ink-muted">
            {future.status}
          </p>

          {/* Still inside the video's max-w-5xl wrapper: the research lines
              share its left edge instead of jumping out to the full 84rem
              Container under a centred header. */}
          <h3 className="mt-12 text-xl font-bold tracking-tight text-ink sm:mt-16 sm:text-2xl">
            {future.linesTitle}
          </h3>
          {/* A real <ol>: the video numbers them and presents them in this
              order. One column until lg — three across at 768 would leave
              ~220px cards for 200-character descriptions. */}
          <ol className="stagger-cards mt-5 grid gap-4 lg:grid-cols-3">
            {future.lines.map((line, index) => (
              <li
                key={line.term}
                className="flex gap-3 rounded-card border border-edge bg-surface-raised p-4 shadow-card"
              >
                <span
                  aria-hidden="true"
                  className="flex size-6 shrink-0 items-center justify-center rounded-md border border-edge bg-surface text-xs font-bold text-accent-strong tabular-nums dark:text-accent"
                >
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold tracking-tight text-balance text-ink">
                    {line.term}
                  </p>
                  <p className="mt-1.5 text-sm text-pretty text-ink-muted">{line.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-base text-pretty text-ink-muted">{future.closing}</p>
        </div>

        {/* Inside Container, or it picks up its own scroll reveal — same rule
            as every other section's bridge. */}
        <SectionBridge
          className="mt-10 sm:mt-12"
          text={future.bridge.text}
          label={future.bridge.label}
          href={future.bridge.href}
        />
      </Container>
    </section>
  );
};

export default Future;
