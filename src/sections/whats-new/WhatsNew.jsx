import Container from '@/components/ui/Container';
import SectionBridge from '@/components/ui/SectionBridge';
import SectionLink from '@/components/ui/SectionLink';
import { ANALYSIS_INDEX_HREF, ANALYSIS_INDEX_LABEL } from '@/content/analysisPagesContent';
import { whatsNew } from '@/content/whatsNewContent';
import AnalysisBlock from '@/sections/whats-new/AnalysisBlock';
import HighlightCard from '@/sections/whats-new/HighlightCard';
import LatestRelease from '@/sections/whats-new/LatestRelease';

// The release section: the newest release on top (LatestRelease, v1.2.1),
// then v1.2.0, the release that introduced the four analyses, and the rest of
// it. One section and one nav entry for both: the bar has no room for a
// thirteenth link (see Navbar).
const WhatsNew = () => {
  return (
    <section id="whats-new" className="border-t border-edge py-16 sm:py-24">
      <LatestRelease />

      <Container className="mt-16 sm:mt-20">
        <div className="@container max-w-3xl border-t border-edge pt-12 sm:pt-16">
          <p className="text-sm font-semibold tracking-wide text-accent-strong uppercase dark:text-accent">
            {whatsNew.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {whatsNew.heading}
          </h2>
          <p className="mt-3 text-lg font-medium text-balance text-ink sm:text-xl">
            {whatsNew.codename}
          </p>
          <p className="mt-4 text-base hyphens-auto @md:text-justify text-ink-muted sm:text-lg">
            {whatsNew.intro}
          </p>

          <div className="mt-6 rounded-card border border-edge bg-surface-raised p-5 shadow-card">
            <p className="text-lg font-semibold text-ink">{whatsNew.headline}</p>
            <p className="mt-1 text-sm hyphens-auto @md:text-justify text-ink-muted">
              {whatsNew.headlineDetail}
            </p>

            {/* The card that announces the set is the right place to offer the
                index of it. The four direct links further down stay: those are
                for reading top to bottom, this is for choosing. */}
            <SectionLink href={ANALYSIS_INDEX_HREF} className="mt-4">
              {ANALYSIS_INDEX_LABEL}
            </SectionLink>
          </div>
        </div>

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          {whatsNew.analyses.map((analysis) => (
            <AnalysisBlock key={analysis.id} analysis={analysis} />
          ))}
        </div>

        <h3 className="mt-16 text-2xl font-bold tracking-tight sm:mt-20">
          {whatsNew.highlightsHeading}
        </h3>

        {/* md, not lg: 344px cards work at 768 and spare the tablet band a
            long single-column stretch. HighlightCard's SIZES tracks this
            breakpoint — change them together. */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {whatsNew.highlights.map((highlight) => (
            <HighlightCard key={highlight.id} highlight={highlight} />
          ))}
        </div>

        <SectionBridge
          className="mt-10 sm:mt-12"
          text={whatsNew.bridge.text}
          label={whatsNew.bridge.label}
          href={whatsNew.bridge.href}
        />
      </Container>
    </section>
  );
};

export default WhatsNew;
