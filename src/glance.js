import GlanceCommon from "glance-common";
import JQueryAdapter from "./jquery-adapter";

export default class Glance extends GlanceCommon {
    constructor(config = {}) {
        config.browser = new JQueryAdapter();
        super(config);
    }
}

window.Glance = Glance

window.addEventListener("unhandledrejection", function(err, promise) {
    glance.catch();
});