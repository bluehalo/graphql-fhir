const InstantScalar = require('../scalars/instant.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

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
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Describes the specific component type as defined in the object-oriented or metric nomenclature partition.'
		},
		identifier: {
			type: new GraphQLNonNull(require('./identifier.input')),
			description: 'Describes the local assigned unique identification by the software. For example: handle ID.'
		},
		lastSystemChange: {
			type: new GraphQLNonNull(InstantScalar),
			description: 'Describes the timestamp for the most recent system change which includes device configuration or setting change.'
		},
		_lastSystemChange: {
			type: require('./element.input'),
			description: 'Describes the timestamp for the most recent system change which includes device configuration or setting change.'
		},
		source: {
			type: require('./reference.input'),
			description: 'Describes the link to the source Device that contains administrative device information such as manufacture, serial number, etc.'
		},
		parent: {
			type: require('./reference.input'),
			description: 'Describes the link to the parent resource. For example: Channel is linked to its VMD parent.'
		},
		operationalStatus: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Indicates current operational status of the device. For example: On, Off, Standby, etc.'
		},
		parameterGroup: {
			type: require('./codeableconcept.input'),
			description: 'Describes the parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/measurement-principle
		measurementPrinciple: {
			type: CodeScalar,
			description: 'Describes the physical principle of the measurement. For example: thermal, chemical, acoustical, etc.'
		},
		_measurementPrinciple: {
			type: require('./element.input'),
			description: 'Describes the physical principle of the measurement. For example: thermal, chemical, acoustical, etc.'
		},
		productionSpecification: {
			type: new GraphQLList(require('./devicecomponentproductionspecification.input')),
			description: 'Describes the production specification such as component revision, serial number, etc.'
		},
		languageCode: {
			type: require('./codeableconcept.input'),
			description: 'Describes the language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.'
		}
	})
});
