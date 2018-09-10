const InstantScalar = require('../scalars/instant.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let DeviceComponentResourceInputType = new GraphQLEnumType({
	name: 'DeviceComponentResourceInputType',
	values: {
		DeviceComponent: { value: 'DeviceComponent' }
	}
});

/**
 * @name exports
 * @summary DeviceComponent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DeviceComponent_Input',
	description: 'Base StructureDefinition for DeviceComponent Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(DeviceComponentResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLNonNull(require('./identifier.input')),
			description: 'The locally assigned unique identification by the software. For example: handle ID.'
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'The component type as defined in the object-oriented or metric nomenclature partition.'
		},
		lastSystemChange: {
			type: InstantScalar,
			description: 'The timestamp for the most recent system change which includes device configuration or setting change.'
		},
		_lastSystemChange: {
			type: require('./element.input'),
			description: 'The timestamp for the most recent system change which includes device configuration or setting change.'
		},
		source: {
			type: require('./reference.input'),
			description: 'The link to the source Device that contains administrative device information such as manufacture, serial number, etc.'
		},
		parent: {
			type: require('./reference.input'),
			description: 'The link to the parent resource. For example: Channel is linked to its VMD parent.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/operational-status
		operationalStatus: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The current operational status of the device. For example: On, Off, Standby, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/parameter-group
		parameterGroup: {
			type: require('./codeableconcept.input'),
			description: 'The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/measurement-principle
		measurementPrinciple: {
			type: CodeScalar,
			description: 'The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.'
		},
		_measurementPrinciple: {
			type: require('./element.input'),
			description: 'The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.'
		},
		productionSpecification: {
			type: new GraphQLList(require('./devicecomponentproductionspecification.input')),
			description: 'The production specification such as component revision, serial number, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/languages
		languageCode: {
			type: require('./codeableconcept.input'),
			description: 'The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.'
		}
	})
});
