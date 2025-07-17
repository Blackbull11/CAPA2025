class CmsData {

    #store = {
        message: {
            display: false,
            text: "",
            bgColor: null
        }
    };

    static verify(data) {
        return data && data['message'];
    }

    replaceData(data) {
        if (CmsData.verify(data)) {
            this.#store = data;
        }
    }

    getFullData() {
        return this.#store;
    }

    getMessage() {
        return this.#store['message'];
    }

}

export default CmsData;