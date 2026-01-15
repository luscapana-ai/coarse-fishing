import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// IMPORTANT: process.env.API_KEY is guaranteed to be available in this environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION_TACTICS = `You are 'RiverKeeper', an elite coarse fishing coach and guide for UK and European waters. 
Your goal is to provide specific, technical, and actionable tactical plans.
Focus on rig mechanics, bait application, and location finding.
Structure your response with clear headers and bullet points. 
Avoid generic advice; be specific about hook sizes, line strengths, and rig components suitable for the target.`;

const SYSTEM_INSTRUCTION_MARKET = `You are a helpful copywriter for a fishing tackle marketplace. 
You generate attractive, accurate, and sales-focused descriptions for fishing gear based on basic details provided by the user.`;

const SYSTEM_INSTRUCTION_ENCYCLOPEDIA = `You are the 'Angler's Almanac', the definitive and most comprehensive encyclopedia for Coarse Fishing in the UK and Europe. 
When given a topic (species, technique, bait, or tackle), provide an extensive, highly detailed, and structured guidebook entry.
Use Markdown formatting.

Structure for **Fish Species**:
1. **Identification & Overview**: Physical features, size potential, key variations.
2. **Habitat & Location**: Preferred waters (rivers vs lakes), features to look for (reeds, gravel bars).
3. **Feeding Habits**: Natural diet, preferred depths, feeding times.
4. **Best Baits**: Breakdown of naturals, boilies, pellets, groundbaits.
5. **Rigging & Tackle**: Line strengths, hook sizes, specific rigs (e.g., Method feeder, Float).
6. **Seasonal Strategies**: Distinct advice for Spring, Summer, Autumn, and Winter.
7. **Pro Tips**: 3-4 advanced expert tips for catching larger specimens.

Structure for **Rigs/Techniques**:
1. **Concept & Mechanics**: How it works and why it is effective.
2. **Component List**: Precise list of terminal tackle needed.
3. **Step-by-Step Construction**: Clear instructions on how to tie/assemble it.
4. **When to Use**: Best bottom types, weather conditions, and target species.
5. **Common Mistakes**: What anglers often do wrong with this method.

Structure for **Baits**:
1. **Profile**: Texture, attraction leakage, nutritional value.
2. **Preparation**: How to cook, soak, or mix it correctly.
3. **Application**: Hookbait vs Feed tactics.
4. **Species**: Which fish are most attracted to this.
5. **Seasonal Usage**: When is it most effective?

Tone: Authoritative, educational, passionate, and very detailed. Aim for depth and clarity.`;

const SYSTEM_INSTRUCTION_CHAT = `You are 'RiverKeeper', a friendly and knowledgeable coarse fishing expert. 
Answer questions about species, bait, tactics, and tackle. 
Keep answers concise, practical, and encouraging. 
If asked about locations, give general advice for venue types (canals, commercial lakes, etc.) rather than specific secret spots unless they are famous.`;

export const generateTactic = async (species: string, waterType: string, season: string, conditions: string, availableBaits: string): Promise<string> => {
  try {
    const prompt = `Create a tactical plan for catching ${species}.
    
    Context:
    - Venue Type: ${waterType}
    - Season: ${season}
    - Conditions: ${conditions}
    - User's Available Bait: ${availableBaits ? availableBaits : "Not specified (suggest optimal baits)"}
    
    Please provide a detailed guide including:
    1. **Location Strategy**: Where to look on this venue type in these conditions.
    2. **The Rig**: Recommended rig details (components, hooklink material, hook pattern/size).
    3. **Bait Strategy**: How to best use the AVAILABLE BAITS (${availableBaits || "suggested baits"}). If the user's bait is limited, explain how to maximize it, or suggest one essential addition.
    4. **The Approach**: How to feed and manage the swim.
    
    Keep it professional, encouraging, and under 400 words.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_TACTICS,
      }
    });

    return response.text || "I couldn't generate a tactic right now. The water is too murky.";
  } catch (error) {
    console.error("Gemini Tactic Error:", error);
    return "Error generating tactic. Please check your connection and try again.";
  }
};

export const getEncyclopediaEntry = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a comprehensive encyclopedia entry for: "${topic}"`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_ENCYCLOPEDIA,
      }
    });

    return response.text || "Entry not found.";
  } catch (error) {
    console.error("Gemini Encyclopedia Error:", error);
    return "The pages of the almanac are stuck together (API Error). Try again later.";
  }
};

export const generateMarketplaceDescription = async (itemTitle: string, category: string, condition: string, features: string): Promise<string> => {
  try {
    const prompt = `Write a compelling sales description for a fishing item.
    Item: ${itemTitle}
    Category: ${category}
    Condition: ${condition}
    Key Features/Notes: ${features}
    
    Keep it under 100 words. Emphasize value and utility for a coarse angler.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_MARKET,
      }
    });

    return response.text || "No description generated.";
  } catch (error) {
    console.error("Gemini Market Error:", error);
    return "Could not generate description automatically.";
  }
};

export const identifyFishFromImage = async (base64Image: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: {
                parts: [
                    {
                        inlineData: {
                            mimeType: 'image/jpeg',
                            data: base64Image
                        }
                    },
                    {
                        text: "Identify this fish species common in coarse fishing. Estimate its weight if possible visually. Provide a short 1 sentence summary."
                    }
                ]
            }
        });
        return response.text || "Could not identify the fish.";
    } catch (error) {
        console.error("Fish ID Error", error);
        return "Error analyzing the catch photo.";
    }
};

export const getExpertAdvice = async (history: { role: string; text: string }[], message: string): Promise<string> => {
  try {
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      history: chatHistory,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION_CHAT,
      }
    });

    const response = await chat.sendMessage({ message: message });
    return response.text || "I didn't catch that.";
  } catch (error) {
    console.error("Chat Error", error);
    return "Sorry, the line broke. Can you repeat that?";
  }
};