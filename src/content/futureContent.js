// "What's next": the research that follows the current release, presented by
// the author's own five-minute video. It is the first thing under the hero.
//
// SOURCES. Every claim is the video's own and none of it is invented:
//   - the video's English subtitles (the narration, line for line),
//   - the thesis proposal document: its title and its three research lines.
// Both live with the author's thesis material, outside this repo.
//
// ACCURACY RULES, do not soften:
//   - NO VERSION NUMBER AND NO DATE. This work has no release name yet and may
//     not ship as "the next version" at all. Do not write v1.3.0 or any other
//     number here, and do not promise when.
//   - It is a RESEARCH PROPOSAL and what the video shows is a CONCEPTUAL
//     VISUALIZATION: the video stamps exactly those words on its own frames.
//     Nothing here may read as a feature you can install today. The verbs stay
//     in the future or in the language of research ("will estimate", "studies",
//     "investigate"), never the present tense of the sections below it.

// The video, in one place, same shape as TUTORIAL_VIDEO.
export const FUTURE_VIDEO = {
  id: 'adJD8RDbVrc',
  // The title the upload carries on YouTube, byte for byte: it is what the
  // VideoObject declares and it has to match what YouTube shows. TFM is the
  // Spanish acronym for a Master's thesis; the copy around it spells that out.
  title: 'Code-XR: TFM Prototype',
  durationLabel: '5 minutes',
  // ISO 8601, for the VideoObject the prerender injects. 5:13, read off the
  // YouTube player itself: the upload is the English cut (the Spanish one runs
  // 5:16), so a re-upload of the other cut changes this.
  duration: 'PT5M13S',
  // NOT KNOWN, deliberately null, same rule as the other five videos: it is a
  // claim Google can check against YouTube, so it is left out rather than
  // guessed. The prerender drops falsy fields. Fill it in from YouTube Studio.
  uploadDate: null,
  // A frame of the video itself (3:52, the change-prediction scene), so the
  // still matches what plays. Master in assets-src/releases/tfm-prototype/,
  // a directory named after the work rather than after a version.
  posterRelease: 'tfm-prototype',
  posterFile: 'change-prediction.jpg',
  posterAlt:
    'A slide from the video titled "What will change next?": a 3D dependency graph beside a list of files ranked by estimated change probability',
};

export const future = {
  eyebrow: "What's next",
  // The video's own closing line.
  heading: 'From analysing the past to anticipating the future',
  paragraphs: [
    'Code-XR began by showing code metrics in real time and has grown into a way to explore whole projects: their structure, their dependencies and their Git history. The next step asks a different question. Not just how software has evolved, but whether its evolution can be anticipated.',
    "That is the subject of the author's Master's thesis: machine learning models trained on data from real projects, with their results shown where Code-XR already shows everything else, inside the 3D scene. The video presents the proposal.",
  ],
  // The honest status line, set apart from the prose so it cannot be missed.
  status:
    'This is a research proposal, and what the video shows is a conceptual visualization. None of it is part of the extension you can install today.',

  linesTitle: 'Three research lines',
  lines: [
    {
      term: 'Change prediction',
      description:
        'From how often files change, how tightly they are coupled and where they sit in the dependency graph, a model will estimate which parts of a system are most likely to change next, and how far the impact of a modification could spread.',
    },
    {
      term: 'Architectural evolution',
      description:
        'Comparing the dependency graph over time characterises how modules grow, where coupling concentrates and where the architecture is heading, in order to project its future state.',
    },
    {
      term: 'Anomaly detection',
      description:
        "Changes that break a project's usual pattern, such as a sudden jump in complexity or an unexpected dependency between modules that should not know each other.",
    },
  ],
  closing:
    'It all starts in the repository: every commit is a snapshot, and walking the Git history turns the metrics and the dependency graph Code-XR already extracts into the time series a model can learn from. The results do not stay in a table. Predictions and alerts are planned to return to the immersive scene, shown on the code itself.',

  watchLabel: 'Watch on YouTube',
  playLabel: 'Play the video',

  bridge: {
    text: 'All of that builds on what Code-XR already does. The rest of this page is the extension as it is today.',
    label: 'See Code-XR today',
    href: '#about',
  },
};
