import Glance from '../src/glance';
import dom from "./dom"

describe("Clicking", function () {
    let glance;

    beforeEach(function () {
        document.body.innerHTML = "";

        glance = new Glance();
    });

    it("should click an element", function () {
        let clicked = false;
        let clickHandler = function () {
            clicked = true;
        }

        dom.render(<button id="target" onClick={clickHandler}>Content Item</button>)

        return glance.click("button").then(()=>{
            clicked.should.equal(true);
        });
    });
});

//
// Need to figure out another way to test this
//
describe.skip("Url", function() {
    let glance;

    beforeEach(function () {
        document.body.innerHTML = "";

        glance = new Glance();
    });

    it("should change urls", function () {
        glance.url('about:blank');
        document.location.href.should.equal("about:blank");
    });
});