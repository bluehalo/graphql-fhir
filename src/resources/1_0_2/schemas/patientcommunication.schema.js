const {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLBoolean,
} = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

/**
 * @name exports
 * @summary Patient.communication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PatientCommunication',
	description:
		'Languages which may be used to communicate with the patient about his or her health.',
	fields: () =>
		extendSchema(require('./backboneelement.schema'), {
			language: {
				type: new GraphQLNonNull(require('./codeableconcept.schema')),
				description:
					"The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. 'en' for English, or 'en-US' for American English versus 'en-EN' for England English.",
			},
			preferred: {
				type: GraphQLBoolean,
				description:
					'Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).',
			},
			_preferred: {
				type: require('./element.schema'),
				description:
					'Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).',
			},
		}),
});
