const PositiveIntScalar = require('../scalars/positiveint.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ClaimItem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimItem_Input',
	description: 'First tier of goods and services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.'
		},
		_sequence: {
			type: require('./element.input'),
			description: 'A service line number.'
		},
		careTeamLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'CareTeam applicable for this service or product line.'
		},
		_careTeamLinkId: {
			type: require('./element.input'),
			description: 'CareTeam applicable for this service or product line.'
		},
		diagnosisLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Diagnosis applicable for this service or product line.'
		},
		_diagnosisLinkId: {
			type: require('./element.input'),
			description: 'Diagnosis applicable for this service or product line.'
		},
		procedureLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Procedures applicable for this service or product line.'
		},
		_procedureLinkId: {
			type: require('./element.input'),
			description: 'Procedures applicable for this service or product line.'
		},
		informationLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Exceptions, special conditions and supporting information pplicable for this service or product line.'
		},
		_informationLinkId: {
			type: require('./element.input'),
			description: 'Exceptions, special conditions and supporting information pplicable for this service or product line.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ex-revenue-center
		revenue: {
			type: require('./codeableconcept.input'),
			description: 'The type of reveneu or cost center providing the product and/or service.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		category: {
			type: require('./codeableconcept.input'),
			description: 'Health Care Service Type Codes  to identify the classification of service or benefits.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: require('./codeableconcept.input'),
			description: 'If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,RXNorm,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. \'glasses\' or \'compound\'.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-modifiers
		modifier: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ex-program-code
		programCode: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'For programs which require reason codes for the inclusion or covering of this billed item under the program or sub-program.'
		},
		servicedDate: {
			type: DateScalar,
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		_servicedDate: {
			type: require('./element.input'),
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		servicedPeriod: {
			type: require('./period.input'),
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-place
		locationCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Where the service was provided.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-place
		locationAddress: {
			type: require('./address.input'),
			description: 'Where the service was provided.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/service-place
		locationReference: {
			type: require('./reference.input'),
			description: 'Where the service was provided.'
		},
		quantity: {
			type: require('./quantity.input'),
			description: 'The number of repetitions of a service or product.'
		},
		unitPrice: {
			type: require('./money.input'),
			description: 'If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.'
		},
		factor: {
			type: GraphQLFloat,
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		_factor: {
			type: require('./element.input'),
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		net: {
			type: require('./money.input'),
			description: 'The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.'
		},
		udi: {
			type: new GraphQLList(require('./reference.input')),
			description: 'List of Unique Device Identifiers associated with this line item.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/tooth
		bodySite: {
			type: require('./codeableconcept.input'),
			description: 'Physical service site on the patient (limb, tooth, etc).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/surface
		subSite: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A region or surface of the site, eg. limb region or tooth surface(s).'
		},
		encounter: {
			type: new GraphQLList(require('./reference.input')),
			description: 'A billed item may include goods or services provided in multiple encounters.'
		},
		detail: {
			type: new GraphQLList(require('./claimitemdetail.input')),
			description: 'Second tier of goods and services.'
		}
	})
});
