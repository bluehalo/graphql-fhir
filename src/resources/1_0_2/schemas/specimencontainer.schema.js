const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Specimen.container Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SpecimenContainer',
	description: 'The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Id for container. There may be multiple; a manufacturer\'s bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.'
		},
		description: {
			type: GraphQLString,
			description: 'Textual description of the container.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Textual description of the container.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/specimen-container-type
		type: {
			type: require('./codeableconcept.schema'),
			description: 'The type of container associated with the specimen (e.g. slide, aliquot, etc.).'
		},
		capacity: {
			type: require('./quantity.schema'),
			description: 'The capacity (volume or other measure) the container may contain.'
		},
		specimenQuantity: {
			type: require('./quantity.schema'),
			description: 'The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0371
		additiveCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0371
		additiveReference: {
			type: require('./reference.schema'),
			description: 'Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.'
		}
	})
});
