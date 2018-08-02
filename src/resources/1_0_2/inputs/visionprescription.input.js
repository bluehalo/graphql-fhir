const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let VisionPrescriptionResourceInputType = new GraphQLEnumType({
	name: 'VisionPrescriptionResourceInputType',
	values: {
		VisionPrescription: { value: 'VisionPrescription' }
	}
});

/**
 * @name exports
 * @summary VisionPrescription Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'VisionPrescription_Input',
	description: 'Base StructureDefinition for VisionPrescription Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(VisionPrescriptionResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Business identifier which may be used by other parties to reference or identify the prescription.'
		},
		dateWritten: {
			type: DateTimeScalar,
			description: 'The date (and perhaps time) when the prescription was written.'
		},
		_dateWritten: {
			type: require('./element.input'),
			description: 'The date (and perhaps time) when the prescription was written.'
		},
		patient: {
			type: require('./reference.input'),
			description: 'A link to a resource representing the person to whom the vision products will be supplied.'
		},
		prescriber: {
			type: require('./reference.input'),
			description: 'The healthcare professional responsible for authorizing the prescription.'
		},
		encounter: {
			type: require('./reference.input'),
			description: 'A link to a resource that identifies the particular occurrence of contact between patient and health care provider.'
		},
		reasonCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Can be the reason or the indication for writing the prescription.'
		},
		reasonReference: {
			type: require('./reference.input'),
			description: 'Can be the reason or the indication for writing the prescription.'
		},
		dispense: {
			type: new GraphQLList(require('./visionprescriptiondispense.input')),
			description: 'Deals with details of the dispense part of the supply specification.'
		}
	})
});
