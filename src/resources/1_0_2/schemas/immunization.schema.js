const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ImmunizationResourceType = new GraphQLEnumType({
	name: 'ImmunizationResourceType',
	values: {
		Immunization: { value: 'Immunization' }
	}
});

/**
 * @name exports
 * @summary Immunization Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Immunization',
	description: 'Base StructureDefinition for Immunization Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ImmunizationResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'A unique identifier assigned to this immunization record.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/medication-admin-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the current status of the vaccination event.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Indicates the current status of the vaccination event.'
		},
		date: {
			type: DateTimeScalar,
			description: 'Date vaccine administered or was to be administered.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'Date vaccine administered or was to be administered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/vaccine-code
		vaccineCode: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Vaccine that was administered or was to be administered.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient who either received or did not receive the immunization.'
		},
		wasNotGiven: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'Indicates if the vaccination was or was not given.'
		},
		_wasNotGiven: {
			type: require('./element.schema'),
			description: 'Indicates if the vaccination was or was not given.'
		},
		reported: {
			type: new GraphQLNonNull(GraphQLBoolean),
			description: 'True if this administration was reported rather than directly administered.'
		},
		_reported: {
			type: require('./element.schema'),
			description: 'True if this administration was reported rather than directly administered.'
		},
		performer: {
			type: require('./reference.schema'),
			description: 'Clinician who administered the vaccine.'
		},
		requester: {
			type: require('./reference.schema'),
			description: 'Clinician who ordered the vaccination.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'The visit or admission or other contact between patient and health care provider the immunization was performed as part of.'
		},
		manufacturer: {
			type: require('./reference.schema'),
			description: 'Name of vaccine manufacturer.'
		},
		location: {
			type: require('./reference.schema'),
			description: 'The service delivery location where the vaccine administration occurred.'
		},
		lotNumber: {
			type: GraphQLString,
			description: 'Lot number of the  vaccine product.'
		},
		_lotNumber: {
			type: require('./element.schema'),
			description: 'Lot number of the  vaccine product.'
		},
		expirationDate: {
			type: DateScalar,
			description: 'Date vaccine batch expires.'
		},
		_expirationDate: {
			type: require('./element.schema'),
			description: 'Date vaccine batch expires.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/immunization-site
		site: {
			type: require('./codeableconcept.schema'),
			description: 'Body site where vaccine was administered.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/immunization-route
		route: {
			type: require('./codeableconcept.schema'),
			description: 'The path by which the vaccine product is taken into the body.'
		},
		doseQuantity: {
			type: require('./quantity.schema'),
			description: 'The quantity of vaccine product that was administered.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Extra information about the immunization that is not conveyed by the other attributes.'
		},
		explanation: {
			type: require('./immunizationexplanation.schema'),
			description: 'Reasons why a vaccine was or was not administered.'
		},
		reaction: {
			type: new GraphQLList(require('./immunizationreaction.schema')),
			description: 'Categorical data indicating that an adverse event is associated in time to an immunization.'
		},
		vaccinationProtocol: {
			type: new GraphQLList(require('./immunizationvaccinationprotocol.schema')),
			description: 'Contains information about the protocol(s) under which the vaccine was administered.'
		}
	})
});
