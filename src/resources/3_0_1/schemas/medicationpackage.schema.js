const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MedicationPackage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationPackage',
	description: 'Information that only applies to packages (not products).',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-package-form
		container: {
			type: require('./codeableconcept.schema'),
			description: 'The kind of container that this package comes as.'
		},
		content: {
			type: new GraphQLList(require('./medicationpackagecontent.schema')),
			description: 'A set of components that go to make up the described item.'
		},
		batch: {
			type: new GraphQLList(require('./medicationpackagebatch.schema')),
			description: 'Information about a group of medication produced or packaged from one production run.'
		}
	})
});
