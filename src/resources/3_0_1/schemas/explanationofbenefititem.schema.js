const PositiveIntScalar = require('../scalars/positiveint.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ExplanationOfBenefitItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitItem',
	description: 'First tier of goods and services.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.'
		},
		_sequence: {
			type: require('./element.schema'),
			description: 'A service line number.'
		},
		careTeamLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Careteam applicable for this service or product line.'
		},
		_careTeamLinkId: {
			type: require('./element.schema'),
			description: 'Careteam applicable for this service or product line.'
		},
		diagnosisLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Diagnosis applicable for this service or product line.'
		},
		_diagnosisLinkId: {
			type: require('./element.schema'),
			description: 'Diagnosis applicable for this service or product line.'
		},
		procedureLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Procedures applicable for this service or product line.'
		},
		_procedureLinkId: {
			type: require('./element.schema'),
			description: 'Procedures applicable for this service or product line.'
		},
		informationLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Exceptions, special conditions and supporting information pplicable for this service or product line.'
		},
		_informationLinkId: {
			type: require('./element.schema'),
			description: 'Exceptions, special conditions and supporting information pplicable for this service or product line.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ex-revenue-center
		revenue: {
			type: require('./codeableconcept.schema'),
			description: 'The type of reveneu or cost center providing the product and/or service.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		category: {
			type: require('./codeableconcept.schema'),
			description: 'Health Care Service Type Codes  to identify the classification of service or benefits.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: require('./codeableconcept.schema'),
			description: 'If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. \'glasses\' or \'compound\'.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/claim-modifiers
		modifier: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ex-program-code
		programCode: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program.'
		},
		servicedDate: {
			type: DateScalar,
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		_servicedDate: {
			type: require('./element.schema'),
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		servicedPeriod: {
			type: require('./period.schema'),
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/service-place
		locationCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'Where the service was provided.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/service-place
		locationAddress: {
			type: require('./address.schema'),
			description: 'Where the service was provided.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/service-place
		locationReference: {
			type: require('./reference.schema'),
			description: 'Where the service was provided.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'The number of repetitions of a service or product.'
		},
		unitPrice: {
			type: require('./money.schema'),
			description: 'If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.'
		},
		factor: {
			type: GraphQLFloat,
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		_factor: {
			type: require('./element.schema'),
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		net: {
			type: require('./money.schema'),
			description: 'The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.'
		},
		udi: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'List of Unique Device Identifiers associated with this line item.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/tooth
		bodySite: {
			type: require('./codeableconcept.schema'),
			description: 'Physical service site on the patient (limb, tooth, etc).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/surface
		subSite: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A region or surface of the site, eg. limb region or tooth surface(s).'
		},
		encounter: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A billed item may include goods or services provided in multiple encounters.'
		},
		noteNumber: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'A list of note references to the notes provided below.'
		},
		_noteNumber: {
			type: require('./element.schema'),
			description: 'A list of note references to the notes provided below.'
		},
		adjudication: {
			type: new GraphQLList(require('./explanationofbenefititemadjudication.schema')),
			description: 'The adjudications results.'
		},
		detail: {
			type: new GraphQLList(require('./explanationofbenefititemdetail.schema')),
			description: 'Second tier of goods and services.'
		}
	})
});
