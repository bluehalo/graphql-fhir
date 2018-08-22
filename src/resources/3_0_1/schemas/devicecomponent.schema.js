const InstantScalar = require('../scalars/instant.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let DeviceComponentResourceType = new GraphQLEnumType({
	name: 'DeviceComponentResourceType',
	values: {
		DeviceComponent: { value: 'DeviceComponent' }
	}
});

/**
 * @name exports
 * @summary DeviceComponent Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DeviceComponent',
	description: 'Base StructureDefinition for DeviceComponent Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DeviceComponentResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLNonNull(require('./identifier.schema')),
			description: 'The locally assigned unique identification by the software. For example: handle ID.'
		},
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The component type as defined in the object-oriented or metric nomenclature partition.'
		},
		lastSystemChange: {
			type: InstantScalar,
			description: 'The timestamp for the most recent system change which includes device configuration or setting change.'
		},
		_lastSystemChange: {
			type: require('./element.schema'),
			description: 'The timestamp for the most recent system change which includes device configuration or setting change.'
		},
		source: {
			type: require('./reference.schema'),
			description: 'The link to the source Device that contains administrative device information such as manufacture, serial number, etc.'
		},
		parent: {
			type: require('./reference.schema'),
			description: 'The link to the parent resource. For example: Channel is linked to its VMD parent.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/operational-status
		operationalStatus: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The current operational status of the device. For example: On, Off, Standby, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/parameter-group
		parameterGroup: {
			type: require('./codeableconcept.schema'),
			description: 'The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/measurement-principle
		measurementPrinciple: {
			type: CodeScalar,
			description: 'The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.'
		},
		_measurementPrinciple: {
			type: require('./element.schema'),
			description: 'The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.'
		},
		productionSpecification: {
			type: new GraphQLList(require('./devicecomponentproductionspecification.schema')),
			description: 'The production specification such as component revision, serial number, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/languages
		languageCode: {
			type: require('./codeableconcept.schema'),
			description: 'The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.'
		}
	})
});
