# ⚔️ Epic Fury Monitor — Complete Project Handoff Document

> This document contains EVERYTHING needed for a new AI agent to continue building this project. It covers: what the project is, how we arrived at the decisions, what research was done, what the features are, design philosophy, tech stack, phased plan, and all context from prior conversations.

---

## 1. PROJECT OVERVIEW

### What Is This?
A **single-conflict, theater-level situational awareness dashboard** for the **Iran–USA–Israel war**. Not a generic world monitor. Not a news aggregator. A living operational picture — the kind a journalist, analyst, or serious defense enthusiast would have open on a second screen all day.

**One-line pitch:** The only dashboard that shows you the entire Iran–USA war in one screen — strikes, proxies, casualties, diplomacy, and oil — updated live.

**Project name:** Epic Fury Monitor (working title)

### Target Users
- War journalists and correspondents
- Defense analysts and researchers
- Military enthusiasts
- Geopolitical researchers
- Anyone following the conflict seriously

### Core Principle
> "If you want to monitor this war, you come HERE. Nowhere else."

Every pixel must serve one mission: understanding THIS specific conflict. If a feature doesn't help understand the Iran–Alliance war better, it's gone.

---

## 2. HOW WE GOT HERE — Research & Brainstorming Context

### World Monitor Analysis
We studied **World Monitor** (https://www.worldmonitor.app) — an open-source real-time global intelligence dashboard built by **Elie Habib** (co-founder of Anghami). Source code: https://github.com/koala73/worldmonitor

#### What World Monitor Does Well (Keep/Learn From):
- **Dark tactical "Command Center" aesthetic** — high-contrast dark mode with neon accents (red alerts, yellow monitoring, blue military)
- **Real-time data** — live UTC timestamps, LIVE indicators create urgency
- **WebGL map** using Mapbox GL JS / MapLibre with CARTO + OpenStreetMap tiles
- **40+ data layers** — conflicts, military bases, nuclear sites, undersea cables, GPS jamming, satellite fires, protests, etc.
- **Country Intelligence Briefs** — AI-generated dossiers with Country Instability Index (CII), active signals (satellite fires, GPS jamming, temporal anomalies, climate stress)
- **Pentagon Pizza Index** — creative OSINT indicator tracking Pentagon readiness via pizza delivery metrics
- **Live News panel** — embedded streams from Bloomberg, Sky News, CNN, Al Jazeera, France 24, Euronews, Al Arabiya
- **Live Webcams** — grid of CCTV/public camera feeds from Tehran, Tel Aviv, Jerusalem
- **Intelligence Findings** — automated alerts panel (e.g., "Iran Instability Rising — CRITICAL") with toggleable breaking alerts
- **Historical playback** via IndexedDB snapshots
- **Command palette search** (Cmd+K) with ~250 country commands, layer presets, fuzzy search
- **Region presets** — Global, Americas, Europe, MENA, Asia, Africa, Oceania, Latin America
- **Time range filtering** — 1h, 6h, 24h, 48h, 7d event windows
- **URL state sharing** — map center, zoom, layers encoded in URL
- **Telegram OSINT intelligence feed** — 27 channels via MTProto
- **OREF rocket alert integration** — Israel Home Front Command siren data
- **AI Deduction & Forecasting panel** — LLM-powered near-term geopolitical analysis
- **Headline Memory (RAG)** — client-side vector store with ONNX embeddings

#### What World Monitor Does Wrong (for our purposes):
- ❌ **Too many equal-sized squares** — feels like a spreadsheet, not a situation room
- ❌ **Everything competes for attention** — no visual hierarchy
- ❌ **Information overload** — 40+ layers most users don't need
- ❌ **Global scope** — dilutes focus, shows Tokyo stock exchanges alongside war zones
- ❌ **No conflict-specific analysis tools** — it monitors everything but analyzes nothing
- ❌ **No scoreboard/comparison** — can't see "who's winning" at a glance
- ❌ **No casualty tracking** — missing the human cost dimension
- ❌ **Modal clutter** — opening multiple panels causes visual overlap
- ❌ **Search command syntax not discoverable** — `Map:`, `Brief:` commands hidden

#### World Monitor Tech Stack (for reference):
- **Frontend:** React (Vite)
- **Map:** deck.gl + MapLibre GL JS (WebGL) — switchable between 3D globe and flat map
- **Tiles:** CARTO + OpenStreetMap
- **Clustering:** Supercluster for marker grouping
- **Error tracking:** Sentry
- **Analytics:** PostHog
- **Desktop:** Tauri (native app with OS keychain)
- **PWA:** Offline map support
- **Backend:** 60+ Vercel Edge Functions, Upstash Redis caching
- **API contracts:** Protocol Buffers (92 proto files, 20 service domains)
- **Data sources:** ACLED, GDELT, USGS, GDACS, NASA EONET, UNHCR, ADS-B (Wingbits), AIS maritime, Feodo Tracker, URLhaus, Polymarket, Yahoo Finance, USNI Fleet, NGA
- **AI:** LLM integration with 4-tier fallback chain (cloud → local Ollama/LM Studio)

### Brainstorming Process
We went through three rounds of feature ideation:

**Round 1:** Three concept options were proposed:
- Option A: "War Room" — Conflict timeline & analysis dashboard
- Option B: "Signal Board" — Personal OSINT watchlist
- Option C: "Tactical Feed" — Military movement aggregator

**Decision:** User wanted ALL THREE combined into one app, but focused ONLY on the Iran–USA–Israel conflict and MENA region.

**Round 2:** User added critical requirements:
- **Scoreboard** (Iran vs Alliance) with drill-down by weapon type (drones, missiles, airstrikes, naval, cyber, economic)
- **Casualties** must be part of the scoreboard
- **War AI Fact Checker** — enter a claim, get ✅/❌/⚠️ with sources
- **Strip the noise** — no weather, pizza index, stock exchanges, undersea cables
- **Design must NOT be boxy** — more military HUD, less spreadsheet

**Round 3:** User finalized additional features:
- Escalation Ladder as a **slider** (ceasefire ↔ nuclear) with **peace indicator** built in
- Cost of War with detailed casualty breakdowns
- Hormuz Monitor as a dedicated panel
- Approved the full 14-feature list
- Added: Power Vacuum Tracker, Economic Shockwave Panel, International Alignment Board, Live Stream Monitor, Escalation Timeline

---

## 3. DESIGN PHILOSOPHY

### Aesthetic: Military HUD, Not Spreadsheet
- **F-35 helmet display** — clean, focused, heads-up
- **AEGIS Combat System** — information density without clutter
- **Ace Combat mission briefings** — dramatic, cinematic panels
- **Iron Man's JARVIS** — fluid, animated, responsive
- **Modern military C2 systems** — dark, functional, purposeful

### Design Rules
| Rule | Description |
|------|-------------|
| **Visual hierarchy** | Scoreboard and map DOMINATE. Everything else supports. |
| **NOT boxy** | No equal-sized grid squares. Angled edges, glowing borders, scan-line effects. |
| **Breathing room** | Negative space is power. Not every pixel needs data. |
| **Progressive disclosure** | Show summary first, drill into details on hover/click. |
| **Animations** | Panels slide, scores count up, the ladder pulses, sweep effects on map. |
| **Cinematic panels** | Angled edges, glow effects, subtle scan-line overlays. |
| **Live indicators** | Breathing pulse on "LIVE" markers, animated sweep on map. |

### Color Palette
| Color | Usage | Hex (approx) |
|-------|-------|------|
| Dark charcoal | Background | `#0a0e14` to `#141a22` |
| Amber/Gold | Warnings, monitoring | `#ffaa00` |
| Red | Critical, hostile, Iran side | `#ff2d55` |
| Green | Alliance/friendly, operational | `#00e676` |
| Cyan/Blue | Neutral data, info, UI elements | `#00d4ff` |
| White | Text, neutral data | `#e0e0e0` |
| Muted gray | Secondary text, borders | `#3a4555` |

### Typography
- **Monospace** for data values, numbers, timestamps (e.g., JetBrains Mono, Fira Code)
- **Clean sans-serif** for labels and descriptions (e.g., Inter, Outfit)
- **Military stencil** for major headers (e.g., Black Ops One, or custom)

---

## 4. THE FEATURES — Complete Specification

### Panel 1: 🗺️ The Theater Map (ALWAYS VISIBLE — THE HEART)
**Priority:** CRITICAL — This is the central visual element everything orbits.

A dark, MENA-focused map that is always on screen.

**Map layers (ONLY these):**
- **Strike locations** — pins where US/Israeli bombs have hit inside Iran
- **Retaliation arcs** — animated curved lines showing Iranian missile/drone launches toward targets
- **US base status** — color-coded icons (green=operational, amber=struck, red=destroyed) in Qatar, Bahrain, Iraq, Kuwait, UAE, Jordan
- **Israel military bases** — IDF positions
- **Iran military bases** — IRGC, air bases, missile sites, nuclear sites
- **Strait of Hormuz layer** — highlighted chokepoint, live tanker traffic in/out
- **Proxy front markers** — Lebanon (Hezbollah), Yemen (Houthis), Iraq (PMF), Gaza (Hamas), each with escalation color
- **Carrier group positions** — US Navy carrier strike groups in the region
- **Active operation zones** — highlighted areas with ongoing combat
- **Bab el-Mandeb chokepoint** — Red Sea shipping lane
- **Suez Canal** — status indicator

**What's NOT on the map:** Weather, stock exchanges, undersea cables, datacenters, spaceports, gamma irradiation, pizza index, anything non-conflict related.

**Map tech:** MapLibre GL JS (free, open-source Mapbox fork) with dark basemap, locked to MENA bounds.

---

### Panel 2: 🏟️ The Scoreboard — Iran vs Alliance
**Priority:** CRITICAL — This is THE signature feature.

Sports-style scoreboard with overall score and drill-down tabs.

**Tabs:**
| Tab | Iran Side Shows | Alliance Side Shows |
|-----|----------------|-------------------|
| **🚀 STRIKES** | Missiles/drones launched, targets hit | Sorties flown, precision strikes, intercepts |
| **💀 CASUALTIES** | Military KIA (IRGC, proxies), civilian toll by country | Military KIA (IDF, US), civilian toll |
| **🛡️ ASSETS** | Ships sunk, aircraft downed, bases damaged | Same for alliance |
| **🛩️ DRONES** | Shahed-136, Mohajer, Ababil — count, intercept rate, cost | MQ-9 Reaper, Hermes, Heron — count, cost |
| **🚀 MISSILES** | Shahab-3, Fateh-110, cruise missiles — launched, impact, intercepted | Jericho, Arrow, retaliatory — same |
| **✈️ AIRSTRIKES** | Proxy airstrikes (Hezbollah/Houthi) | IAF/USAF sorties & precision strikes |
| **🛡️ AIR DEFENSE** | S-300, Bavar-373 intercept rates | Iron Dome, Arrow, David's Sling, THAAD, Patriot rates |
| **🌊 NAVAL** | IRGC Navy, Houthi anti-ship attacks | USN carrier group operations |
| **📡 CYBER** | APT33/APT35 attacks | Unit 8200 + US Cyber Command ops |

**Scoring notes:**
- Weighted by strategic impact, not just volume
- Accounts for interception rate
- Shows cost efficiency (cheap drone vs. expensive target = high efficiency)
- Historical trend line available

---

### Panel 3: 🕸️ The Proxy Front Tracker
**Priority:** HIGH

| Front | Actor | Status Indicators |
|-------|-------|-------------------|
| Lebanon | Hezbollah | 🟢 Quiet / 🟡 Active / 🔴 Escalating |
| Yemen | Houthis | Same |
| Iraq | PMF / Kataib Hezbollah | Same |
| Gaza | Hamas | Same |
| Afghanistan | Taliban | Same (watching) |

---

### Panel 4: ⚡ The Escalation Ladder
**Priority:** HIGH

A **horizontal slider** — not a static list. Visual, dramatic, alive.

```
🕊️ Ceasefire ←————————●————————→ ☢️ Nuclear
```

- **Slider position** updates based on real-time events
- **Peace indicator** built into the slider:
  - Green glow/pulse = trending toward peace
  - Red glow/pulse = trending toward escalation
  - Weekly/monthly trend arrows
- **Key thresholds marked along the slider:**
  - Negotiation → Proxy War → Targeted Ops → Direct Strikes → Total War → WMD Risk
- Movement: shows "+2 levels in past 7 days" style annotations

---

### Panel 5: 🏛️ Iran Power Vacuum Tracker
**Priority:** HIGH — Unique feature nobody else has.

- Temporary leadership council — who's on it
- Succession candidates — short list with faction alignment (hardliner/reformist/military)
- The central contradiction displayed side by side:
  - Trump: "Iran's new leadership wants to negotiate"
  - Larijani: "We will not negotiate with the United States"
- Simple status indicator: **NEGOTIATE / FIGHT / SPLIT**

---

### Panel 6: 💰 Economic Shockwave Panel
**Priority:** MEDIUM

- **Brent crude price** — live, with pre-war baseline marked (shows war premium in $/barrel)
- **Strait of Hormuz status** — Open / Threatened / Disrupted / Closed
- **Aviation graveyard** — list of grounded airlines, closed airspace
- **Infrastructure disruptions** — power outages, shipping delays
- **Cost of War counter** — running financial toll, both sides (debt-clock style)

---

### Panel 7: 🌍 International Alignment Board
**Priority:** MEDIUM

Where every major country stands:
- 🔵 **With US/Israel:** UK, France, Western Europe
- 🔴 **Against:** China, Russia
- 🟡 **Neutral/Evacuating:** India, Pakistan, Thailand
- ⚪ **Watching:** Turkey, Gulf states
- US Congress war powers vote status

---

### Panel 8: 📺 Live Stream Monitor
**Priority:** MEDIUM

Split-screen live news:
- **Al Jazeera Arabic** — primary Arab world perspective
- **Al Arabiya Arabic** — Gulf/Saudi perspective
- **CNN USA** — Western mainstream
- **Fox News USA** — US conservative/military perspective

**Layout modes:**
- 2×2 grid (all four muted with subtitles)
- Picture-in-picture (one main, three small)
- Single focus (one full, switch channels)

**Smart features:**
- Auto-highlight when 2+ channels cover the same story simultaneously (= major breaking event)
- Bias meter showing each channel's editorial lean
- Timestamp sync — which channel broke the story first

---

### Panel 9: 📜 Escalation Timeline
**Priority:** HIGH — The "how did we get here" reference.

A vertical chronological log starting at Day 0 (Feb 28 strikes). One sentence per event. No editorializing. Grows in real time. The authoritative timeline.

---

### Panel 10: 🤖 War AI Fact Checker
**Priority:** HIGH

Input a claim → AI verifies it against multiple sources.

**Output levels:**
- ✅ **VERIFIED** — Multiple credible sources confirm (shown in green)
- ⚠️ **PARTIALLY TRUE** — Some elements confirmed (shown in amber)
- ❌ **FALSE** — Debunked by credible sources (shown in red)
- 🔍 **UNVERIFIED** — Cannot confirm or deny yet (shown in gray)
- 🕐 **DEVELOPING** — Too early to call, monitoring (shown in blue)

**Source credibility tiers:**
- ⭐⭐⭐⭐⭐ Wire services: Reuters, AP, AFP
- ⭐⭐⭐⭐ Major outlets: BBC, Al Jazeera English, NYT
- ⭐⭐⭐ OSINT: Flight tracking, verified analyst accounts
- ⭐⭐ Regional/government: Biased but useful (IRNA, IDF spokesperson)
- ⭐ Social media: Unverified Telegram, Twitter

Each check shows: confidence %, sourced evidence, nuance note, recent check history.

---

### Panel 11: 📡 Strait of Hormuz Monitor
**Priority:** HIGH — This is THE chokepoint of the conflict.

Dedicated panel:
- Oil tankers transiting today (vs. average)
- IRGC patrol boats active
- US Navy vessels present
- Last incident (type + days ago)
- Oil price impact (Brent $/barrel, war premium)
- Insurance risk rating
- Mini-map showing vessel positions in the strait

---

### Panel 12: 🛡️ Air Defense Scorecard
**Priority:** MEDIUM

System-by-system interception rates:

| Alliance Systems | Rate | Iran Systems | Rate |
|-----------------|------|--------------|------|
| Iron Dome | ~96% | S-300 | ~61% |
| Arrow 3 | ~89% | Bavar-373 | ~43% |
| David's Sling | ~94% | Khordad-15 | ~58% |
| THAAD | ~98% | Sayyad | ~40% |
| Patriot | ~87% | | |

Shows total intercept rate per side.

---

### Panel 13: 🔮 Ceasefire Probability
**Priority:** LOW (Phase 4)

30-day forecast combining Polymarket odds + AI analysis.
- Shows probability percentage with trend
- Lists factors FOR and AGAINST ceasefire
- Sources: prediction markets + diplomatic signal analysis

---

### Panel 14: 🧠 War Scenario Simulator
**Priority:** LOW (Phase 4)

Interactive "what-if" panel:
- "What if Iran closes the Strait of Hormuz?" → oil price impact, military response, timeline
- "What if Israel strikes Natanz?" → likely retaliation, escalation path
- "What if US withdraws carrier groups?" → power vacuum analysis

AI-powered scenario modeling based on historical precedents + current force disposition.

---

### Panel 15: 📊 Red Lines Tracker
**Priority:** MEDIUM

Each side's stated red lines with crossed/not-crossed status:

**Iran's red lines:** Attack on Iranian soil (❌ CROSSED), Killing senior IRGC (❌ CROSSED), Blockade ports (✅ NOT CROSSED), Nuclear facility strike (✅ NOT CROSSED)

**Alliance red lines:** Iran nuclear weapon (⚠️ APPROACHING), Closing Hormuz (✅ NOT CROSSED), Mass casualty attack on Israel (❌ CROSSED), Attack on US personnel (❌ CROSSED)

---

### Panel 16: 📻 Live OSINT Feed
**Priority:** HIGH

Real-time scrolling feed of OSINT intelligence, credibility-rated:
- Each item shows: timestamp, credibility stars, source tag, headline
- Sources: Reuters, AP, BBC, OSINT analysts, IDF, IRGC, Telegram channels
- Unverified items clearly marked with ⚠️
- Auto-scrolls, newest at top

---

### Panel 17: 🎯 Operation Tracker
**Priority:** MEDIUM

Named military operations with status:
- 🔴 LIVE — currently ongoing
- 🟢 DONE — completed
- 🟡 PAUSED — ceasefire or standby
- Shows: operation name, country, description, start date, duration, result

---

### Panel 18: 🕐 War Clock
**Priority:** MEDIUM

Running timer from Day 0 + conflict phase timeline:
- Duration in days, hours, minutes
- Phase breakdown with color-coded bars
- "Days since last major escalation" counter
- Average days between escalations
- AI prediction of when next event is likely

---

## 5. DASHBOARD LAYOUT CONCEPT

The layout is NOT a rigid grid. It has visual hierarchy:

```
┌──────────────────────────────────────────────────────────────────┐
│  ⚔️ EPIC FURY MONITOR    🔴 LIVE    [Escalation Slider ═══●══] │
├─────────┬─────────────────────────────┬─────────────────────────┤
│         │                             │                         │
│  SCORE  │    🇮🇷 45  vs  71 🇺🇸🇮🇱      │   📻 LIVE OSINT FEED    │
│  BOARD  │ [Strikes][Casualties][Assets]│   (scrolling feed)     │
│         │                             │                         │
├─────────┼─────────────────────────────┤   21:04 BREAKING...    │
│         │                             │   21:03 ADS-B...       │
│ SIDE    │    🗺️ THEATER MAP           │   21:01 Iron Dome...   │
│ PANELS  │    (the heart of the app)   │                         │
│         │                             ├─────────────────────────┤
│ 🕐Clock │    Dark MENA map with:     │                         │
│ 🕸️Proxy│    - Strike pins            │   🤖 FACT CHECKER      │
│ 🏛️Power│    - Retaliation arcs       │   [Enter a claim...]   │
│ 💰Econ │    - Base status             │                         │
│ 🌍Align│    - Carrier groups          │                         │
│         │    - Hormuz traffic         │                         │
├─────────┼──────────────┬──────────────┼─────────────────────────┤
│ 📊 RED  │  📡 HORMUZ   │ 🛡️ AIR DEF │  🎯 OPERATIONS         │
│ LINES   │  MONITOR     │ SCORECARD   │  TRACKER               │
└─────────┴──────────────┴──────────────┴─────────────────────────┘
```

**Key layout rules:**
- Map takes ~40% of screen real estate
- Scoreboard is immediately visible at top
- Escalation slider spans the full header width
- Side panels are collapsible/expandable
- Bottom panels are lower priority, always accessible
- Live Stream Monitor is an overlay/separate view

---

## 6. IMPLEMENTATION PHASES

### Phase 1: Foundation (THE CORE)
> Get the skeleton up, make it look INCREDIBLE from day 1.

| Wave | Tasks |
|------|-------|
| 1.1 | Project setup — fork WorldMonitor, strip non-MENA, new repo |
| 1.2 | Design system — HUD colors, typography, animated components, scan-line CSS |
| 1.3 | Layout shell — header with escalation slider, responsive panel grid |
| 1.4 | Theater Map — dark basemap, MENA bounds lock, basic markers |
| 1.5 | Scoreboard component — Iran vs Alliance with tab switching (static data) |

### Phase 2: Intelligence Layer
> Make the data real.

| Wave | Tasks |
|------|-------|
| 2.1 | Map markers — bases (US/Iran/Israel), proxy fronts, chokepoints |
| 2.2 | Escalation Ladder slider with peace indicator |
| 2.3 | Live OSINT Feed panel (RSS aggregation + credibility tiers) |
| 2.4 | War Clock & Phase tracker |
| 2.5 | Cost of War + detailed casualties dashboard |
| 2.6 | Escalation Timeline (chronological event log) |

### Phase 3: Analysis Tools
> The features that make this a real intelligence platform.

| Wave | Tasks |
|------|-------|
| 3.1 | War AI Fact Checker (LLM integration) |
| 3.2 | Operation Tracker |
| 3.3 | Red Lines Tracker |
| 3.4 | Air Defense Scorecard |
| 3.5 | Hormuz Monitor (dedicated chokepoint panel) |
| 3.6 | Iran Power Vacuum Tracker |
| 3.7 | Economic Shockwave Panel |
| 3.8 | International Alignment Board |

### Phase 4: Advanced Intelligence
> The "holy shit" features.

| Wave | Tasks |
|------|-------|
| 4.1 | Proxy Network interactive graph (D3.js force layout) |
| 4.2 | Ceasefire Probability meter (Polymarket + AI) |
| 4.3 | War Scenario Simulator (AI what-if modeling) |
| 4.4 | Attack trajectory animations on map (animated arcs) |
| 4.5 | Live Stream Monitor (4-channel split screen) |
| 4.6 | Polish, performance, responsive/mobile, deployment |

---

## 7. TECH STACK

### Inherited from WorldMonitor (forked base):
| Layer | Tech |
|-------|------|
| Framework | React + Vite + TypeScript |
| Map | MapLibre GL JS (free Mapbox fork) or deck.gl |
| Base tiles | CARTO + OpenStreetMap (dark style) |
| Hosting | Vercel (edge functions for API proxying) |
| PWA | Offline support, installable |

### Our Additions:
| Layer | Tech | Why |
|-------|------|-----|
| Charts/Viz | D3.js + Recharts | Custom military-style charts, the scoreboard, escalation slider |
| Graph viz | D3 Force Layout | Proxy network visualization |
| AI | OpenAI API / Groq / local LLM (Ollama) | Fact checker, scenario simulator, daily briefs |
| Data - Conflicts | ACLED API | Armed conflict events, casualties |
| Data - News | GDELT API, RSS feeds | News sentiment, breaking events |
| Data - Displacement | UNHCR API | Refugee/displacement numbers |
| Data - Predictions | Polymarket API | Ceasefire/escalation odds |
| Data - Maritime | AIS feeds | Hormuz vessel tracking |
| Data - Aviation | ADS-B Exchange | Military aircraft tracking |
| Data - Oil | EIA API | Brent crude, war premium |
| State management | Zustand | Lightweight, no Redux bloat |
| Styling | CSS Modules + CSS custom properties | Full control for HUD aesthetic |
| Caching | Upstash Redis (from WorldMonitor) | API response caching |

### Key Design System Tokens (CSS Custom Properties):
```css
--bg-primary: #0a0e14;
--bg-panel: #141a22;
--bg-panel-hover: #1a2230;
--border-glow: rgba(0, 212, 255, 0.3);
--text-primary: #e0e0e0;
--text-secondary: #8899aa;
--color-critical: #ff2d55;
--color-warning: #ffaa00;
--color-friendly: #00e676;
--color-info: #00d4ff;
--color-iran: #ff2d55;
--color-alliance: #00e676;
--font-data: 'JetBrains Mono', monospace;
--font-label: 'Inter', sans-serif;
--font-header: 'Black Ops One', system-ui;
--scan-line: repeating-linear-gradient(
  transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px
);
```

---

## 8. DATA SOURCES — Where The Numbers Come From

| Data Type | Source | Free? | Notes |
|-----------|--------|-------|-------|
| Conflict events | ACLED (Armed Conflict Location & Event Data) | Free for research | Weekly updated, covers all MENA |
| News/sentiment | GDELT Project | Free | Real-time news monitoring, tone analysis |
| Breaking news | RSS feeds (Reuters, AP, Al Jazeera, Iran International, BBC) | Free | Aggregated via edge functions |
| Displacement | UNHCR Operational Data Portal | Free | Refugee stats by country |
| Oil prices | EIA (U.S. Energy Information Administration) | Free | Brent, WTI, daily updates |
| Maritime/AIS | MarineTraffic or VesselFinder APIs | Freemium | Hormuz transit data |
| Military flights | ADS-B Exchange | Free | Military aircraft positions |
| Predictions | Polymarket API | Free | Betting odds on geopolitical events |
| Telegram OSINT | MTProto / Telegram Bot API | Free | Monitor OSINT channels |
| Verified claims | OpenAI / Groq API | Paid (cheap) | For fact checker + scenario simulator |
| Satellite imagery | NASA FIRMS (Fire Information) | Free | Satellite-detected fires/explosions |

---

## 9. METHODOLOGY — GSD (Get Shit Done)

The project uses the **GSD** spec-driven development methodology (https://github.com/toonight/get-shit-done-for-antigravity).

**Workflow:**
1. `/new-project` → Creates SPEC.md
2. `/discuss-phase N` → Clarify requirements for phase N
3. `/plan N` → Generate XML-structured PLAN.md with waves and tasks
4. `/execute N` → Implement with atomic git commits
5. `/verify N` → Prove it works with screenshots/tests
6. Repeat for each phase

**File structure:**
```
.gsd/
├── SPEC.md          # Project specification (finalize first)
├── ROADMAP.md       # Phases and progress
├── STATE.md         # Session memory
├── ARCHITECTURE.md  # System design
├── DECISIONS.md     # Architecture Decision Records
└── JOURNAL.md       # Session log
```

**Rule:** GSD forces planning before coding. The AI can't write code until SPEC.md says FINALIZED.

---

## 10. WHAT SUCCESS LOOKS LIKE

A journalist covering the war has this open on their second monitor all day. An analyst can screenshot the scoreboard and publish it. A military enthusiast checks it every morning like a newspaper. It becomes **the** reference dashboard for this conflict.

---

## 11. CRITICAL CONTEXT FOR THE NEXT AI AGENT

1. **This is a FORK of WorldMonitor** — start by cloning https://github.com/koala73/worldmonitor and stripping it down. Don't build from scratch.
2. **MENA ONLY** — remove ALL non-MENA features, layers, regions, data sources.
3. **Design is NOT boxy squares** — the user explicitly rejected World Monitor's grid layout. Think military HUD, not spreadsheet.
4. **The scoreboard is THE feature** — if you build one thing first, it's the Iran vs Alliance scoreboard with drill-down tabs including casualties.
5. **Use GSD methodology** — install the GSD framework from https://github.com/toonight/get-shit-done-for-antigravity, create SPEC.md, and execute phase by phase.
6. **The user has strong opinions on design** — they want it to feel premium, cinematic, and military. Not cluttered. Not generic. Not boxy.
7. **Casualties matter** — the human cost is a core data point, not an afterthought. It's in the scoreboard AND the cost of war panel.
8. **The escalation ladder is a SLIDER** — horizontal, interactive, with peace indicator built in. It shows whether we're trending toward peace or nuclear.
9. **The user is passionate about this conflict** — they follow it closely and will know if data is wrong or sources are unreliable.
10. **The project code should live in a NEW repo** — not inside the portfolio site.
