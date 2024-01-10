const BaseEntity = require("../common/baseEntity");

class Rockets extends BaseEntity{
    constructor({
        rocket_id = null,
        rocket_name = null,
        rocket_type = null,
        country  = null,
        company = null,
        description = null,
        wikipedia = null,
    } = {}) {
        super();
        this.rocket_id = rocket_id;
        this.rocket_name = rocket_name;
        this.rocket_type = rocket_type;
        this.country = country;
        this.company = company;
        this.description = description;
        this._wikipedia = wikipedia;

    }
}

module.exports = Rockets;

