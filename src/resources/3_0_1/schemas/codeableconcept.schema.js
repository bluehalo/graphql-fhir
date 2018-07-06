const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

/**
 * @name exports
 * @summary CodeableConcept Fields
 */
let CodeableConcept = new GraphQLObjectType({
	name: 'CodeableConcept',
	description: 'A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.',
	fields: () => extendSchema(require('./element.schema'), {
		coding: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'The start of the period. The boundary is inclusive.'
		},
		text: {
			type: GraphQLString,
			description: 'A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'Extensions for text'
		}
	})
});

module.exports = CodeableConcept;
