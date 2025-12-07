import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

const enableCodex = process.env.FEATURE_ENABLE_GPT_5_1_CODEX_MAX === 'true';
const openAIModel = process.env.OPENAI_MODEL || 'openai/gpt-5.1-codex-max';
const googleModel = process.env.GOOGLE_AI_MODEL || 'googleai/gemini-2.5-flash';

let plugins = [googleAI()];
let model = googleModel;

if (enableCodex) {
  try {
    // Avoid Webpack/Next static analysis of the require by obtaining the
    // runtime `require` function via the Function constructor. This prevents
    // the bundler from failing the build when the package isn't installed.
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const runtimeRequire = new Function('return require')();
    const openaiPkg = runtimeRequire('@genkit-ai/openai');
    const openAIPlugin = openaiPkg?.openai || openaiPkg?.OpenAI || openaiPkg?.default || openaiPkg;
    plugins = [typeof openAIPlugin === 'function' ? openAIPlugin() : openAIPlugin];
    model = openAIModel;
  } catch (err) {
    // If the OpenAI plugin isn't installed, keep using Google plugin and model.
    // The env toggle will still exist so you can enable it once the plugin is added.
    // eslint-disable-next-line no-console
    console.warn(
      "[ai] FEATURE_ENABLE_GPT_5_1_CODEX_MAX=true but '@genkit-ai/openai' isn't installed or couldn't be loaded. Falling back to Google AI plugin."
    );
    model = googleModel;
  }
}

export const ai = genkit({
  plugins,
  model,
});
