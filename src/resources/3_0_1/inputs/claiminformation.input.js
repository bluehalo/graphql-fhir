const PositiveIntScalar = require('../scalars/positiveint.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ClaimInformation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimInformation_Input',
	description: 'Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'Sequence of the information element which serves to provide a link.'
		},
		_sequence: {
			type: require('./element.input'),
			description: 'Sequence of the information element which serves to provide a link.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/claim-informationcategory
		category: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'The general class of the information supplied: information; exception; accident, employment; onset, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/claim-exception
		code: {
			type: require('./codeableconcept.input'),
			description: 'System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought which may influence the adjudication.'
		},
		timingDate: {
			type: DateScalar,
			description: 'The date when or period to which this information refers.'
		},
		_timingDate: {
			type: require('./element.input'),
			description: 'The date when or period to which this information refers.'
		},
		timingPeriod: {
			type: require('./period.input'),
			description: 'The date when or period to which this information refers.'
		},
		valueString: {
			type: GraphQLString,
			description: 'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.'
		},
		_valueString: {
			type: require('./element.input'),
			description: 'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.'
		},
		valueQuantity: {
			type: require('./quantity.input'),
			description: 'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.'
		},
		valueAttachment: {
			type: require('./attachment.input'),
			description: 'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.'
		},
		valueReference: {
			type: require('./reference.input'),
			description: 'Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/missing-tooth-reason
		reason: {
			type: require('./codeableconcept.input'),
			description: 'For example, provides the reason for: the additional stay, or missing tooth or any other situation where a reason code is required in addition to the content.'
		}
	})
});
