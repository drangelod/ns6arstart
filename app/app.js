import Vue from "nativescript-vue";
import Home from "./components/Home";

Vue.config.silent = false;
Vue.registerElement("AR", () => require("nativescript-ar").AR);

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
