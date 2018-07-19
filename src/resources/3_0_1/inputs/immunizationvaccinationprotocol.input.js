const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ImmunizationVaccinationProtocol Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImmunizationVaccinationProtocol_Input',
	description: 'Contains information about the protocol(s) under which the vaccine was administered.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		doseSequence: {
			type: PositiveIntScalar,
			description: 'Nominal position in a series.'
		},
		_doseSequence: {
			type: require('./element.input'),
			description: 'Nominal position in a series.'
		},
		description: {
			type: GraphQLString,
			description: 'Contains the description about the protocol under which the vaccine was administered.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Contains the description about the protocol under which the vaccine was administered.'
		},
		authority: {
			type: require('./reference.input'),
			description: 'Indicates the authority who published the protocol.  E.g. ACIP.'
		},
		series: {
			type: GraphQLString,
			description: 'One possible path to achieve presumed immunity against a disease - within the context of an authority.'
		},
		_series: {
			type: require('./element.input'),
			description: 'One possible path to achieve presumed immunity against a disease - within the context of an authority.'
		},
		seriesDoses: {
			type: PositiveIntScalar,
			description: 'The recommended number of doses to achieve immunity.'
		},
		_seriesDoses: {
			type: require('./element.input'),
			description: 'The recommended number of doses to achieve immunity.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/vaccination-protocol-dose-target
		targetDisease: {
			type: new GraphQLList(new GraphQLNonNull(require('./codeableconcept.input'))),
			description: 'The targeted disease.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/vaccination-protocol-dose-status
		doseStatus: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Indicates if the immunization event should \'count\' against  the protocol.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/vaccination-protocol-dose-status-reason
		doseStatusReason: {
			type: require('./codeableconcept.input'),
			description: 'Provides an explanation as to why an immunization event should or should not count against the protocol.'
		}
	})
});
