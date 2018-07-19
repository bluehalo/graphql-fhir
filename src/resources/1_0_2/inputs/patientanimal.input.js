const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary PatientAnimal Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PatientAnimal_Input',
	description: 'This patient is known to be an animal.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/animal-species
		species: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Identifies the high level taxonomic categorization of the kind of animal.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/animal-breeds
		breed: {
			type: require('./codeableconcept.input'),
			description: 'Identifies the detailed categorization of the kind of animal.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/animal-genderstatus
		genderStatus: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the current state of the animal\'s reproductive organs.'
		}
	})
});
