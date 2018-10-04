const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary AllergyIntolerance.reaction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'AllergyIntoleranceReaction_Input',
	description: 'Details about each adverse reaction event linked to exposure to the identified substance.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/substance-code
		substance: {
			type: require('./codeableconcept.input'),
			description: 'Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the \'code\' and ignore the \'reaction.substance\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		manifestation: {
			type: new GraphQLList(new GraphQLNonNull(require('./codeableconcept.input'))),
			description: 'Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.'
		},
		description: {
			type: GraphQLString,
			description: 'Text description about the reaction as a whole, including details of the manifestation if required.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Text description about the reaction as a whole, including details of the manifestation if required.'
		},
		onset: {
			type: DateTimeScalar,
			description: 'Record of the date and/or time of the onset of the Reaction.'
		},
		_onset: {
			type: require('./element.input'),
			description: 'Record of the date and/or time of the onset of the Reaction.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/reaction-event-severity
		severity: {
			type: CodeScalar,
			description: 'Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.'
		},
		_severity: {
			type: require('./element.input'),
			description: 'Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/route-codes
		exposureRoute: {
			type: require('./codeableconcept.input'),
			description: 'Identification of the route by which the subject was exposed to the substance.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Additional text about the adverse reaction event not captured in other fields.'
		}
	})
});
