const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

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
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Business identifier which may be used by other parties to reference or identify the prescription.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the resource instance.'
		},
		patient: {
			type: require('./reference.input'),
			description: 'A link to a resource representing the person to whom the vision products will be supplied.'
		},
		encounter: {
			type: require('./reference.input'),
			description: 'A link to a resource that identifies the particular occurrence of contact between patient and health care provider.'
		},
		dateWritten: {
			type: DateTimeScalar,
			description: 'The date (and perhaps time) when the prescription was written.'
		},
		_dateWritten: {
			type: require('./element.input'),
			description: 'The date (and perhaps time) when the prescription was written.'
		},
		prescriber: {
			type: require('./reference.input'),
			description: 'The healthcare professional responsible for authorizing the prescription.'
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
