const { GraphQLInputObjectType, GraphQLList, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Specimen.container Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SpecimenContainer_Input',
	description: 'The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Id for container. There may be multiple; a manufacturer\'s bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.'
		},
		description: {
			type: GraphQLString,
			description: 'Textual description of the container.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Textual description of the container.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/specimen-container-type
		type: {
			type: require('./codeableconcept.input'),
			description: 'The type of container associated with the specimen (e.g. slide, aliquot, etc.).'
		},
		capacity: {
			type: require('./quantity.input'),
			description: 'The capacity (volume or other measure) the container may contain.'
		},
		specimenQuantity: {
			type: require('./quantity.input'),
			description: 'The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0371
		additiveCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0371
		additiveReference: {
			type: require('./reference.input'),
			description: 'Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.'
		}
	})
});
