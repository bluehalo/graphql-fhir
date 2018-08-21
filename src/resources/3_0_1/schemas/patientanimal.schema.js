const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PatientAnimal Schema
 */
module.exports = new GraphQLObjectType({
	name: 'PatientAnimal',
	description: 'This patient is known to be an animal.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/animal-species
		species: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Identifies the high level taxonomic categorization of the kind of animal.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/animal-breeds
		breed: {
			type: require('./codeableconcept.schema'),
			description: 'Identifies the detailed categorization of the kind of animal.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/animal-genderstatus
		genderStatus: {
			type: require('./codeableconcept.schema'),
			description: 'Indicates the current state of the animal\'s reproductive organs.'
		}
	})
});
