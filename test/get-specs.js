import Glance from '../src/glance';
import dom from "./dom"

describe("Get", function () {
    let glance;

    beforeEach(function () {
        document.body.innerHTML = "";
        glance = new Glance();
    });

    it("should get a text input value", function () {
        dom.render(<input value="value 1"/>);

        return glance.get("input").then(function (value) {
            value.should.equal("value 1");
        });
    });
});