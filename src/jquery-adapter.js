import jquery from "jquery";

class JQueryAdapter {
    constructor(config) {
        this.driver = jquery;
    }

    click(element) {
        element.click();
    }

    element(reference) {
        return this.driver(reference)[0];
    }

    execute(func, ...args) {
        return func(...args);
    }

    executeAsync(func, ...args) {
        return func(...args);
    }

    getValue(element) {
        return this.driver(element).val();
    }

    setValue(element, values) {
        return this.driver(element).val(values);
    }

    log(type) {
        console.log('No logger setup');
        return [];
    }

    // elementReference(element) {
    //     return this.execute(tagElementWithID, element, shortid.generate()).then(function (id) {
    //         return `[data-glance-id="${id}"]`;
    //     });
    // }

    getUrl(address) {
        return document.location.href;
    }

    setUrl(address) {
        document.location.href = address;
    }

    type(keys) {
    }

    doubleClick(element) {
    }

    middleClick(element) {
    }

    moveMouseTo(element, xOffset, yOffset) {
    }

    rightClick(elementReference) {
    }

    mouseDown(button) {
    }

    mouseUp(button) {
    }


    dragAndDrop(elementReferenceSource, elementReferenceTarget, xOffset, yOffset) {
    }

    pause(delay) {
    }

    saveScreenshot(filename) {
    }

    end() {
    }

    find(reference) {
        return this.element(reference);
    }

    elements(reference) {
        return this.driver(reference).map(function(element){ return element; });
    }


    getTitle() {
        return document.title;
    }

}

export default JQueryAdapter;