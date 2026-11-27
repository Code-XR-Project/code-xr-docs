// "What's new in v1.2.1", the top of the #whats-new section. The v1.2.0 block
// (whatsNewContent.js) follows it unchanged, under its own subheading.
//
// Every claim here traces to apps/vscode-extension/CHANGELOG.md and README.md
// on the v1.2.1 branch of Code-XR-Project/Code-XR. Two figures come from the
// repository itself rather than the CHANGELOG: the icon was 1,180,653 bytes
// before the 1.2.1 re-encode and is 49,651 bytes after it.
//
// The IDE is the ONE thing here the extension's own CHANGELOG and README do not
// mention, on purpose: it is not public. The site may name it, but only as a
// future project, in the future tense, never as something you can install.
//
// `file` paths are relative to assets-src/releases/v1-2-1 (masters, mirrored
// from media/v1.2.1 in the extension repo) and resolve through
// getReleaseImageSources.
export const latestRelease = {
  release: 'v1-2-1',
  eyebrow: 'Release',
  heading: "What's new in v1.2.1",
  codename: 'Sharper Metrics, Same Code-XR',
  intro:
    'A maintenance release with a few additions, now on the VS Code Marketplace. Everything from 1.2.0 works the same way. What changed is where the metrics come from, how much they cover, and how quickly you can move between your code and the scene.',

  cards: [
    {
      id: 'engine',
      icon: 'cpu',
      title: "Code-XR's own metrics engine",
      body: "Code-XR no longer uses Lizard. Every metric is now computed by Code-XR's own analysis engine, which ships with the extension, so there is nothing extra to install. It makes Code-XR independent of an external library, makes new languages possible, and fixes values that used to be wrong: nesting depth, the complexity of some constructs, function names, line ranges and parameter counts.",
    },
    {
      id: 'metrics',
      icon: 'gauge',
      title: 'Three new metrics, for every function',
      terms: [
        {
          term: 'Cognitive complexity',
          text: 'How hard the control flow is to read. Each if, loop or catch costs more the deeper it is nested.',
        },
        {
          term: 'Halstead metrics',
          text: 'Volume, difficulty, effort and estimated bugs, measured from the operators and operands a function uses.',
        },
        {
          term: 'Maintainability index',
          text: 'One score from 0 to 100. Above 50 is good, below 20 is hard to maintain.',
        },
      ],
      footnote:
        'In the LivePanel and on any numeric axis of the XR chart panel, with per-file summaries for folders and projects.',
    },
    {
      id: 'languages',
      icon: 'code',
      title: 'Five new languages',
      chips: ['Rust', 'Dart', 'Shell (Bash)', 'PowerShell', 'R'],
      body: 'Each one gets every metric, in the LivePanel, in the XR scene and in the dependency graph. That makes 28 code languages, plus the HTML DOM.',
    },
    {
      id: 'size',
      icon: 'package',
      title: 'A lighter download',
      stat: { from: '6.45 MB', to: '3.24 MB' },
      items: [
        'The extension icon went from 1.2 MB to 50 KB.',
        'The package went from 360 files to 219.',
      ],
    },
    {
      id: 'reorganization',
      icon: 'layers',
      title: 'A reorganized codebase',
      body: 'The code was audited end to end and reorganized, and the automated test suite roughly doubled. Nothing you use changes: it is the groundwork for what comes next.',
    },
    {
      id: 'ide',
      icon: 'app',
      title: 'Coming later: the Code-XR IDE',
      body: 'Part of that groundwork is a future Code-XR IDE: a standalone code editor with the analyses and the XR scene built in, sharing its engine with this extension. It is not available yet, and the extension stays the way to use Code-XR.',
    },
  ],

  workflowsHeading: 'Three new ways to move between your code and the scene',
  workflows: [
    {
      id: 'reveal',
      title: 'Reveal in XR Scene',
      body: 'Right-click a file in the Explorer, the editor or its tab and pick Code-XR: Reveal in XR Scene. Every running scene that holds the file marks it: a marker and its legend in the classic analysis, its pinned card in the dependency graph.',
      image: {
        file: 'reveal-in-xr-scene.png',
        alt: 'Reveal in XR Scene: a marker and the legend of dependency_analysis_engine.py over its building in the classic analysis',
      },
    },
    {
      id: 'open-in-editor',
      title: 'Open in editor, from the dependency graph',
      body: "The other direction. Select a file or a symbol in the dependency graph and press Open in editor: VS Code opens the file, at the symbol's line for a symbol. Only on your own machine, never for guests.",
      image: {
        file: 'open-in-editor.png',
        alt: 'Open in editor: the card of brace_parser.py in the dependency graph, with its Open in editor button',
      },
    },
    {
      id: 'headset',
      title: 'Open on a headset, with a QR code',
      body: 'With a scene running, expand its server in ACTIVE SERVERS and pick Open on a headset. A panel shows the address and its QR code: scan it with a Quest or any standalone headset.',
      items: [
        'A shared server gives the Cloudflare invitation link, which works from any network.',
        'An HTTPS server gives its local network address, for a headset on the same Wi-Fi.',
      ],
    },
  ],

  lightbox: {
    expand: 'Open screenshot',
    close: 'Close expanded screenshot',
    previous: 'Previous screenshot',
    next: 'Next screenshot',
  },

  changelog: {
    label: 'Read the full changelog',
    href: 'https://github.com/Code-XR-Project/Code-XR/blob/v1.2.1/apps/vscode-extension/CHANGELOG.md',
  },

};
