import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const enableCodex = process.env.FEATURE_ENABLE_GPT_5_1_CODEX_MAX === 'true';
const openAIModel = process.env.OPENAI_MODEL || 'openai/gpt-5.1-codex-max';
const googleModel = process.env.GOOGLE_AI_MODEL || 'googleai/gemini-2.5-flash';

let plugins = [googleAI()];
let model = googleModel;

if (enableCodex) {
  try {
    // Try to dynamically require the genkit OpenAI plugin. If it's not installed,
    // fall back to the existing Google plugin and warn — this keeps runtime safe.
    // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment
    const openaiPkg = require('@genkit-ai/openai');
    // plugin might be exported as `openai` or `OpenAI` depending on package; handle both.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const openAIPlugin = openaiPkg.openai || openaiPkg.OpenAI || openaiPkg.default || openaiPkg;
    // If it's a function, call it to get the plugin instance.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    plugins = [typeof openAIPlugin === 'function' ? openAIPlugin() : openAIPlugin];
    model = openAIModel;
  } catch (err) {
    // If the OpenAI plugin isn't installed, keep using Google plugin and model.
    // The env toggle will still exist so you can enable it once the plugin is added.
    // eslint-disable-next-line no-console
    console.warn(
      "[ai] FEATURE_ENABLE_GPT_5_1_CODEX_MAX=true but '@genkit-ai/openai' isn't installed.\nInstall '@genkit-ai/openai' and set OPENAI_API_KEY to use GPT-5.1-Codex-Max. Falling back to Google AI plugin."
    );
    model = googleModel;
  }
}

export const ai = genkit({
  plugins,
  model,
});
