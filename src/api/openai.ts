export async function getAstrologyReply(question, astroContext) {
    const prompt = `
  You are a mystical astrologer AI named Celestia. The user has the following astrological context:
  - Sun Sign: ${astroContext.sunSign}
  - Moon Sign: ${astroContext.moonSign}
  - Rising Sign: ${astroContext.risingSign || "unknown"}
  
  Answer the following user question in a warm, mystical tone, using their chart for insight:
  "${question}"
  `;
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });
  
    const json = await response.json();
    return json.choices[0].message.content;
  }
  