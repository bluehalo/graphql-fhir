const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DeviceUseStatement Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DeviceUseStatement_Input',
	description: 'Base StructureDefinition for DeviceUseStatement Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'An external identifier for this statement such as an IRI.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/device-statement-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'A code representing the patient or other source\'s judgment about the state of the device used that this statement is about.  Generally this will be active or completed.'
		},
		_status: {
			type: require('./element.input'),
			description: 'A code representing the patient or other source\'s judgment about the state of the device used that this statement is about.  Generally this will be active or completed.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The patient who used the device.'
		},
		whenUsed: {
			type: require('./period.input'),
			description: 'The time period over which the device was used.'
		},
		timingTiming: {
			type: require('./timing.input'),
			description: 'How often the device was used.'
		},
		timingPeriod: {
			type: require('./period.input'),
			description: 'How often the device was used.'
		},
		timingDateTime: {
			type: DateTimeScalar,
			description: 'How often the device was used.'
		},
		_timingDateTime: {
			type: require('./element.input'),
			description: 'How often the device was used.'
		},
		recordedOn: {
			type: DateTimeScalar,
			description: 'The time at which the statement was made/recorded.'
		},
		_recordedOn: {
			type: require('./element.input'),
			description: 'The time at which the statement was made/recorded.'
		},
		source: {
			type: require('./reference.input'),
			description: 'Who reported the device was being used by the patient.'
		},
		device: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The details of the device used.'
		},
		indication: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Reason or justification for the use of the device.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the site on the subject\'s body where the device was used ( i.e. the target site).'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.'
		}
	})
});
