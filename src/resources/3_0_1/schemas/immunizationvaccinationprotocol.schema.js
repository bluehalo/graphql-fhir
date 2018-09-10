const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Immunization.vaccinationProtocol Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImmunizationVaccinationProtocol',
	description: 'Contains information about the protocol(s) under which the vaccine was administered.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		doseSequence: {
			type: PositiveIntScalar,
			description: 'Nominal position in a series.'
		},
		_doseSequence: {
			type: require('./element.schema'),
			description: 'Nominal position in a series.'
		},
		description: {
			type: GraphQLString,
			description: 'Contains the description about the protocol under which the vaccine was administered.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Contains the description about the protocol under which the vaccine was administered.'
		},
		authority: {
			type: require('./reference.schema'),
			description: 'Indicates the authority who published the protocol.  E.g. ACIP.'
		},
		series: {
			type: GraphQLString,
			description: 'One possible path to achieve presumed immunity against a disease - within the context of an authority.'
		},
		_series: {
			type: require('./element.schema'),
			description: 'One possible path to achieve presumed immunity against a disease - within the context of an authority.'
		},
		seriesDoses: {
			type: PositiveIntScalar,
			description: 'The recommended number of doses to achieve immunity.'
		},
		_seriesDoses: {
			type: require('./element.schema'),
			description: 'The recommended number of doses to achieve immunity.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/vaccination-protocol-dose-target
		targetDisease: {
			type: new GraphQLList(new GraphQLNonNull(require('./codeableconcept.schema'))),
			description: 'The targeted disease.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/vaccination-protocol-dose-status
		doseStatus: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Indicates if the immunization event should \'count\' against  the protocol.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/vaccination-protocol-dose-status-reason
		doseStatusReason: {
			type: require('./codeableconcept.schema'),
			description: 'Provides an explanation as to why an immunization event should or should not count against the protocol.'
		}
	})
});
