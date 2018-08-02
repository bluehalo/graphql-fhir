const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let VisionPrescriptionResourceType = new GraphQLEnumType({
	name: 'VisionPrescriptionResourceType',
	values: {
		VisionPrescription: { value: 'VisionPrescription' }
	}
});

/**
 * @name exports
 * @summary VisionPrescription Schema
 */
module.exports = new GraphQLObjectType({
	name: 'VisionPrescription',
	description: 'Base StructureDefinition for VisionPrescription Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(VisionPrescriptionResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Business identifier which may be used by other parties to reference or identify the prescription.'
		},
		dateWritten: {
			type: DateTimeScalar,
			description: 'The date (and perhaps time) when the prescription was written.'
		},
		_dateWritten: {
			type: require('./element.schema'),
			description: 'The date (and perhaps time) when the prescription was written.'
		},
		patient: {
			type: require('./reference.schema'),
			description: 'A link to a resource representing the person to whom the vision products will be supplied.'
		},
		prescriber: {
			type: require('./reference.schema'),
			description: 'The healthcare professional responsible for authorizing the prescription.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'A link to a resource that identifies the particular occurrence of contact between patient and health care provider.'
		},
		reasonCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Can be the reason or the indication for writing the prescription.'
		},
		reasonReference: {
			type: require('./reference.schema'),
			description: 'Can be the reason or the indication for writing the prescription.'
		},
		dispense: {
			type: new GraphQLList(require('./visionprescriptiondispense.schema')),
			description: 'Deals with details of the dispense part of the supply specification.'
		}
	})
});
