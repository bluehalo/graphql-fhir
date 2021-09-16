const { coerceInputValue } = require('graphql/utilities');

/**
 * @name mapJsonToSchema
 * @summary Coerce JSON to schema values or return errors if value is incorrect
 */
const mapJsonToSchema = (json, graphqlInputObject) =>
	coerceInputValue(json, graphqlInputObject);

module.exports = {
	mapJsonToSchema,
};
