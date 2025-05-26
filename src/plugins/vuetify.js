/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

const myCustomLightTheme = {
  dark: true,
  colors: {
    primary: "#FF6F00",
    secondary: "#558B2F",
    // background: "#FFFFFF",
    // surface: "#FFFFFF",
    // "surface-bright": "#FFFFFF", // unused
    // "surface-light": "#EEEEEE",
    // "surface-variant": "#424242",
    // "on-surface-variant": "#EEEEEE",
    // primary: "#FF8800",
    // "primary-darken-1": "#1F5592",
    // secondary: "#48A9A6",
    // "secondary-darken-1": "#018786",
    // error: "#B00020",
    // info: "#80C0F3",
    // success: "#4CAF50",
    // warning: "#FBD000",
  },
  variables: {
    // "border-color": "#000000",
    // "border-opacity": 0.12,
    // "high-emphasis-opacity": 0.87,
    // "medium-emphasis-opacity": 0.6,
    // "disabled-opacity": 0.38,
    // "idle-opacity": 0.04,
    // "hover-opacity": 0.04,
    // "focus-opacity": 0.12,
    // "selected-opacity": 0.08,
    // "activated-opacity": 0.12,
    // "pressed-opacity": 0.12,
    // "dragged-opacity": 0.08,
    // "theme-kbd": "#212529",
    // "theme-on-kbd": "#FFFFFF",
    // "theme-code": "#F5F5F5",
    // "theme-on-code": "#000000",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: { myCustomLightTheme },
  },
});
