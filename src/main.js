/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createHead } from "@unhead/vue/client";

// Styles
import "unfonts.css";

const app = createApp(App);

registerPlugins(app);

const head = createHead();

app.use(head);
app.mount("#app");
