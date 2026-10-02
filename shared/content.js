// Single source of truth for the site's words. The site (and the old prototypes) read window.RF.
window.RF = {
  name: "RISINGFORCE",
  domain: "risingforce.se",
  place: "Sweden",
  tagline: "Sites and games, built from scratch.",
  projects: [
    {
      id: "tracker", title: "Match Tracker", theme: "tracker", kind: "Web", year: 2026, status: "LIVE",
      stack: "Cloudflare Workers / PandaScore",
      blurb: "When do my teams play. A live CS2 schedule with scores, brackets, a calendar feed and an OBS overlay.",
      url: "https://cs2-matches.cs2-matches.workers.dev",
      api: "https://cs2-matches.cs2-matches.workers.dev/api", // CORS-open; the gate shows what is on right now
      shots: { desk: "media/tracker-desk.jpg", phone: "media/tracker-phone.jpg" },
    },
    {
      id: "killer", title: "The Killer Game", theme: "killer", kind: "Party game", year: 2026, status: "PLAYABLE",
      stack: "One HTML file",
      blurb: "Pass one phone around. Everyone sees the secret word except the killer, who only gets a hint and has to bluff.",
      url: "https://thekillergame.github.io/The-Killer-Game/",
      repo: "https://github.com/TheKillerGame/The-Killer-Game",
      shots: { home: "media/killer-home.jpg", hold: "media/killer-hold.jpg", innocent: "media/killer-innocent.jpg", killer: "media/killer-killer.jpg" },
      // real word/hint pairs from the game's 1500-word bank, for the gate's "deal" card
      deck: [["HAMMER", "smash"], ["FROG", "hop"], ["STAR", "twinkle"], ["LIBRARY", "quiet"], ["FOOT", "kick"], ["ECHO", "repeat"], ["RHINO", "charge"], ["FRIES", "salty"],
        ["DUNE", "shifting"], ["SAW", "toothed"], ["DOCTOR", "diagnose"], ["SURFING", "ride"], ["MALL", "bustling"], ["NECKLACE", "dangle"], ["HYENA", "cackling"],
        ["SALMON", "upstream"], ["CHOWDER", "thick"], ["WHISKEY", "burning"], ["HORIZON", "receding"], ["SOFA", "sinking"], ["CEMENT", "setting"], ["ARCHERY", "aiming"],
        ["COTTAGE", "quaint"], ["REGRET", "lingering"], ["GECKO", "clinging"], ["EGGNOG", "festive"], ["JOYSTICK", "tilting"], ["SURGEON", "steady"], ["SLEIGH", "jingly"],
        ["PARANOIA", "watched"], ["GLOBE", "spun"], ["KEY", "unlock"], ["ANT", "tiny"], ["GHOST", "haunt"], ["CAR", "drive"], ["TRUMPET", "blare"], ["TENT", "shelter"],
        ["DEER", "graze"], ["RACCOON", "sneaky"]],
    },
    {
      id: "knife", title: "Knife Throw", theme: "knife", kind: "Phone game", year: 2026, status: "PLAYABLE",
      stack: "One HTML file",
      blurb: "Tap to throw, don't hit a knife. Beat a boss to win a new knife, and every knife has its own ability.",
      url: "https://thekillergame.github.io/knife-throw/",
      repo: "https://github.com/TheKillerGame/knife-throw",
      shots: { home: "media/knife-home.jpg", play: "media/knife-play.jpg" },
    },
    {
      id: "slice", title: "Slice", theme: "slice", kind: "Phone game", year: 2026, status: "PLAYABLE",
      stack: "One HTML file",
      blurb: "Swipe the fruit, skip the bombs. Every tenth wave is a boss, and beating it opens a new world.",
      url: "https://thekillergame.github.io/slice/",
      repo: "https://github.com/TheKillerGame/slice",
      shots: { home: "media/slice-home.jpg", play: "media/slice-play2.jpg" },
    },
  ],
  // The handles from the Killer Game README. To add email: { label: "Email", value: "...", url: "mailto:..." }
  contact: [
    { label: "YouTube", value: "@RisingForce1337", url: "https://www.youtube.com/@RisingForce1337" },
    { label: "Discord", value: "risingforce1337", url: "#", copy: "risingforce1337" },
    { label: "GitHub", value: "TheKillerGame", url: "https://github.com/TheKillerGame" },
  ],
};
