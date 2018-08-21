const PositiveIntScalar = require('../scalars/positiveint.scalar');
const { GraphQLObjectType, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExplanationOfBenefitAddItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitAddItem',
	description: 'The first tier service adjudications for payor added services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequenceLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'List of input service items which this service line is intended to replace.'
		},
		_sequenceLinkId: {
			type: require('./element.schema'),
			description: 'List of input service items which this service line is intended to replace.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ex-revenue-center
		revenue: {
			type: require('./codeableconcept.schema'),
			description: 'The type of reveneu or cost center providing the product and/or service.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		category: {
			type: require('./codeableconcept.schema'),
			description: 'Health Care Service Type Codes  to identify the classification of service or benefits.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: require('./codeableconcept.schema'),
			description: 'If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. \'glasses\' or \'compound\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-modifiers
		modifier: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.'
		},
		fee: {
			type: require('./money.schema'),
			description: 'The fee charged for the professional service or product.'
		},
		noteNumber: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'A list of note references to the notes provided below.'
		},
		_noteNumber: {
			type: require('./element.schema'),
			description: 'A list of note references to the notes provided below.'
		},
		detail: {
			type: new GraphQLList(require('./explanationofbenefitadditemdetail.schema')),
			description: 'The second tier service adjudications for payor added services.'
		}
	})
});
