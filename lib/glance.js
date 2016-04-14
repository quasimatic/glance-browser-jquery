import glanceSelector from 'glance-selector';

export default class Glance {
    static url(address) {
        document.location.href = address;
        return this;
    }

    static click(selector) {
        glanceSelector(selector).click();
        return this;
    }
}