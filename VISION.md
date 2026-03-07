# Epic Fury Monitor — War Dashboard Final Vision

## What Is This

A single-conflict, theater-level situational awareness dashboard for the Iran-USA-Israel war. Not a news aggregator. A living operational picture — the kind a journalist, analyst, or serious defense enthusiast would have open on a second screen all day.

**One-line pitch:** The only dashboard that shows you the entire Iran-USA war in one screen — strikes, proxies, casualties, diplomacy, and oil — updated live.

---

## Target Users

- War journalists and correspondents
- Defense analysts and researchers
- Military enthusiasts
- Geopolitical researchers
- Anyone following the conflict seriously

---

## Design Philosophy

- **Military HUD aesthetic** — think F-35 helmet display, JARVIS, AEGIS combat systems
- **NOT boxy squares** — angled edges, glowing borders, scan-line effects
- **Breathing room** — negative space is power
- **Progressive disclosure** — summary first, details on interaction/hover
- **Controlled color palette:**
  - Dark charcoal background
  - Amber for warnings
  - Red for critical/hostile
  - Green for alliance/friendly
  - White for neutral data
- **Animations:** breathing pulse on live indicators, sweep effects on map, smooth transitions

---

## Base Project

Fork of **WorldMonitor** (worldmonitor.app) — open source real-time global intelligence dashboard. Strip everything non-MENA. Keep: flight tracking, naval vessel tracking, AI brief engine, strike/explosion alerts. Remove: finance variant, tech variant, global instability scores for non-involved countries.

---

## The 7 Core Panels

### 1. The Theater Map (Always Visible — The Heart)
A dark, MENA-focused map that is always on screen. Everything orbits this.

- **Strike locations** — pins where US/Israeli bombs have hit inside Iran
- **Retaliation arcs** — animated lines showing Iranian missile/drone launches toward targets
- **US base status** — color-coded icons (green=operational, amber=struck, red=destroyed)
- **Strait of Hormuz layer** — highlighted chokepoint, live tanker traffic in/out
- **Proxy front markers** — Lebanon, Yemen, Iraq, Gaza, each with escalation color

---

### 2. The Scoreboard
Hard numbers. No analysis. No spin. Just facts. Three tabs:

**STRIKES tab:**
- US/Israel strikes launched vs. Iranian retaliatory launches
- Intercept rates by country (Qatar, Kuwait, Jordan, UAE, Saudi Arabia)
- Targets struck count

**CASUALTIES tab:**
- Military KIA per faction: IRGC, Hezbollah, Houthis, Hamas, IDF, US Forces
- Civilian toll by country
- Displacement numbers

**ASSETS tab:**
- Naval ships sunk
- Aircraft downed
- Bases destroyed/damaged

---

### 3. The Proxy Front Tracker
The Iran-US war is not two-party. Every active front on one panel.

| Front | Actor | Status |
|-------|-------|--------|
| Lebanon | Hezbollah | 🟡 Active |
| Yemen | Houthis | 🟡 Active |
| Iraq | PMF / Kataib Hezbollah | 🟡 Active |
| Gaza | Hamas | 🔴 Escalating |
| Afghanistan | Taliban | 🟢 Watching |

Status indicators: 🟢 Quiet / 🟡 Active / 🔴 Escalating

---

### 4. The Escalation Ladder
A horizontal slider — not a static list. Visual, dramatic, alive.

```
🕊️ Ceasefire ←————————●————————→ ☢️ Nuclear
```

- Current position updates based on events
- Peace indicator: pulses green (trending toward ceasefire) or red (escalating)
- Weekly trend arrows showing direction of travel
- Key thresholds marked: Negotiation / Strikes / Proxy War / Direct War / WMD Risk

---

### 5. The Iran Power Vacuum Tracker
Nobody is doing this well. Khamenei is dead. Iran has no named successor.

- Temporary leadership council — who's on it
- Succession candidates — short list with faction alignment
- The central contradiction displayed side by side:
  - Trump: "Iran's new leadership wants to negotiate"
  - Larijani: "We will not negotiate with the United States"
- Simple indicator: **NEGOTIATE / FIGHT / SPLIT**

---

### 6. The Economic Shockwave Panel
The war's measurable ripple effects.

- **Brent crude price** — live, with pre-war baseline marked (shows war premium)
- **Strait of Hormuz status** — Open / Threatened / Disrupted / Closed
- **Aviation graveyard** — list of grounded airlines, closed airspace
- **Infrastructure disruptions** — data centers, power outages, shipping delays
- **Cost of War counter** — running financial toll, both sides

---

### 7. The International Alignment Board
Where every major country stands. Simple, visual, updated as positions shift.

- 🔵 With US/Israel: UK, France, Western Europe
- 🔴 Against: China, Russia
- 🟡 Neutral/Evacuating: India, Pakistan, Thailand
- ⚪ Watching: Turkey, Gulf states
- US Congress war powers vote status

---

## The Escalation Timeline (Persistent)
A vertical chronological log that starts at Day 0 (Feb 28 strikes) and grows in real time. One sentence per event. No editorializing. The authoritative "how did we get here" reference.

---

---

### 8. Live Stream Monitor — Split Screen News
A dedicated screen mode that splits into live news streams simultaneously. The user can toggle this panel on top of everything else or as a separate full-screen view.

**Channels (split 2x2 grid or carousel):**
- Al Jazeera Arabic — primary Arab world perspective
- Al Arabiya Arabic — Gulf/Saudi perspective  
- CNN USA — Western mainstream
- Fox News USA — US conservative/military perspective

**Why all four matter:** Each channel has different sources, different framing, different breaking news timing. Watching all four simultaneously shows you information gaps and propaganda patterns in real time.

**Layout options:**
- 2x2 grid (all four at once, muted with subtitles)
- Picture-in-picture (one main stream, three small)
- Single focus (one stream full, switch between channels)

**Smart features:**
- Auto-highlight when two or more channels cover the same story simultaneously (indicates major breaking event)
- "Bias meter" showing each channel's known editorial lean on this conflict
- Timestamp sync — shows which channel broke a story first

---

## Implementation Phases

### Phase 1 — Foundation
- New repo setup, strip WorldMonitor to MENA-only
- Design system: HUD aesthetic, color palette, fonts, component library
- Theater Map base layer
- Scoreboard panel (static data first)

### Phase 2 — Intelligence
- Live map data + strike location pins
- Escalation ladder widget
- OSINT news feed (Iran International, Al-Monitor, Al Jazeera, Tasnim, IRNA)
- War clock + casualties live data
- Escalation timeline

### Phase 3 — Analysis
- Iran power vacuum tracker
- Economic shockwave panel
- Strait of Hormuz live status
- Air defense intercept tracker
- International alignment board

### Phase 4 — Advanced
- Proxy front network graph
- Ceasefire probability meter
- Attack animation overlays on map
- Scenario simulator ("what if Hormuz closes?")
- Mobile responsive layout

---

## Technical Stack
Inherits from WorldMonitor:
- Vite + React
- Mapbox/Leaflet for maps
- Tailwind CSS (extended with HUD design tokens)
- AI brief engine (re-prompted for MENA focus)
- Flight/naval tracking APIs

---

## What Success Looks Like
A journalist covering the war has this open on their second monitor all day. An analyst can screenshot the scoreboard and publish it. A military enthusiast checks it every morning like a newspaper. It becomes the reference dashboard for this conflict.