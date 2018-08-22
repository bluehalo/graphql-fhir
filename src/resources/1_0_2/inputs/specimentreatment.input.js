const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary SpecimenTreatment Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SpecimenTreatment_Input',
	description: 'Details concerning treatment and processing steps for the specimen.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		description: {
			type: GraphQLString,
			description: 'Textual description of procedure.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Textual description of procedure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/specimen-treatment-procedure
		procedure: {
			type: require('./codeableconcept.input'),
			description: 'A coded value specifying the procedure used to process the specimen.'
		},
		additive: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Material used in the processing step.'
		}
	})
});
