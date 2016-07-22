import Glance from '../src/glance';
import dom from "./dom"

describe("Set", function () {
    let glance;

    beforeEach(function () {
        document.body.innerHTML = "";
        glance = new Glance();
    });

    it("should set a text input value", function () {
        dom.render(<input id='target' value=""/>);

        return glance.set("input", "value 1").then(function (value) {
            dom.get("target").value.should.equal("value 1");
        });
    });
});