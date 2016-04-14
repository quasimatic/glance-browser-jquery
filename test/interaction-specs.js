import Glance from '../src/glance';
import dom from "./dom"

describe("Clicking", function () {
    beforeEach(function () {
        document.body.innerHTML = "";
    });

    it("should click an element", function () {
        let clicked = false;
        let clickHandler = function () {
            clicked = true;
        }
        dom.render(<button onClick={clickHandler}>Content Item</button>)

        Glance.click("button")
        clicked.should.equal(true)
    });
});

//
// Need to figure out another way to test this
//
describe.skip("Url", function() {
    beforeEach(function () {
        document.body.innerHTML = "";
    });

    it("should change urls", function () {
        Glance.url('about:blank');
        document.location.href.should.equal("about:blank");
    });
});