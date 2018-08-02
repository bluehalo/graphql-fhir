const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary SpecimenTreatment Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SpecimenTreatment',
	description: 'Details concerning treatment and processing steps for the specimen.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		description: {
			type: GraphQLString,
			description: 'Textual description of procedure.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Textual description of procedure.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/specimen-treatment-procedure
		procedure: {
			type: require('./codeableconcept.schema'),
			description: 'A coded value specifying the procedure used to process the specimen.'
		},
		additive: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Material used in the processing step.'
		}
	})
});
