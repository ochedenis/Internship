const Validation = require('../validation');

/**
 * @exports
 * @class
 * @extends Validation
 */
class UserValidation extends Validation {
    /**
     * @param {String} data.id - objectId
     * @returns
     * @memberof UserValidation
     */
    validateId(data) {
        return this.Joi
            .object({
                id: this.Joi
                    .objectId()
                    .required(),
                _csrf: this.Joi.string(),
            })
            .validate(data);
    }

    /**
     * @param {String} profile.email
     * @param {String} profile.fullName
     * @returns
     * @memberof UserValidation
     */
    create(profile) {
        return this.Joi
            .object({
                email: this.Joi
                    .string()
                    .email()
                    .required(),
                fullName: this.Joi
                    .string()
                    .min(3)
                    .max(50)
                    .required(),
                _csrf: this.Joi.string(),
            })
            .validate(profile);
    }

    /**
     * @param {String} data.id - objectId
     * @param {String} data.fullName
     * @returns
     * @memberof UserValidation
     */
    updateById(data) {
        return this.Joi
            .object({
                id: this.Joi.objectId(),
                email: this.Joi
                    .string()
                    .email(),
                fullName: this.Joi
                    .string()
                    .min(3)
                    .max(50),
                _csrf: this.Joi.string(),
            })
            .validate(data);
    }
}

module.exports = new UserValidation();
