const { coerceValue } = require('graphql/utilities');

/**
 * @name mapJsonToSchema
 * @summary Coerce JSON to schema values or return errors if value is incorrect
 */
const mapJsonToSchema = (json, graphqlInputObject) =>
	coerceValue(json, graphqlInputObject);

module.exports = {
	mapJsonToSchema,
};
