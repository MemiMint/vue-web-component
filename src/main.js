import Vue from "vue";
import Wrap from "@vue/web-component-wrapper";
import App from "./App.vue";

const wrappedElement = Wrap(Vue, App);

window.customElements.define("v-card", wrappedElement);