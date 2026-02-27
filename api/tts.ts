import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") return res.status(405).end();

    const { text, lang } = req.body as { text: string; lang: string };

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "ElevenLabs API key not configured" });

    // Mark for English, Adam for French (configurable via env vars)
    const voiceId =
        lang === "fr"
            ? process.env.ELEVENLABS_VOICE_FR
            : process.env.ELEVENLABS_VOICE_EN

    // Use multilingual model for French, turbo for English
    const modelId =
        lang === "fr" ? "eleven_multilingual_v2" : "eleven_turbo_v2";

    try {
        const response = await fetch(
            `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
            {
                method: "POST",
                headers: {
                    "xi-api-key": apiKey,
                    "Content-Type": "application/json",
                    Accept: "audio/mpeg",
                },
                body: JSON.stringify({
                    text,
                    model_id: modelId,
                    voice_settings: {
                        stability: 0.35,
                        similarity_boost: 0.85,
                        style: 0.2,
                        use_speaker_boost: true,
                    },
                }),
            }
        );

        if (!response.ok) {
            const err = await response.text();
            return res.status(response.status).json({ error: "ElevenLabs API error", detail: err });
        }

        const buffer = await response.arrayBuffer();
        res.setHeader("Content-Type", "audio/mpeg");
        res.setHeader("Cache-Control", "no-cache");
        res.send(Buffer.from(buffer));
    } catch {
        return res.status(500).json({ error: "Failed to contact ElevenLabs API" });
    }
}
