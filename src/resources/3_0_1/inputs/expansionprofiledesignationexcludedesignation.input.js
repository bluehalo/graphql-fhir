const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExpansionProfileDesignationExcludeDesignation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExpansionProfileDesignationExcludeDesignation_Input',
	description: 'A data group for each designation to be excluded.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/languages
		language: {
			type: CodeScalar,
			description: 'The language this designation is defined for.'
		},
		_language: {
			type: require('./element.input'),
			description: 'The language this designation is defined for.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/designation-use
		use: {
			type: require('./coding.input'),
			description: 'Which kinds of designation to exclude from the expansion.'
		}
	})
});
