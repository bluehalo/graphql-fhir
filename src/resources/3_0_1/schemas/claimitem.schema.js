const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary Claimitem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Claimitem',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_sequence: {
			type: require('./element.schema.js'),
			description: 'A service line number.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.',
		},
		_careTeamLinkId: {
			type: require('./element.schema.js'),
			description: 'CareTeam applicable for this service or product line.',
		},
		careTeamLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'CareTeam applicable for this service or product line.',
		},
		_diagnosisLinkId: {
			type: require('./element.schema.js'),
			description: 'Diagnosis applicable for this service or product line.',
		},
		diagnosisLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Diagnosis applicable for this service or product line.',
		},
		_procedureLinkId: {
			type: require('./element.schema.js'),
			description: 'Procedures applicable for this service or product line.',
		},
		procedureLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Procedures applicable for this service or product line.',
		},
		_informationLinkId: {
			type: require('./element.schema.js'),
			description:
				'Exceptions, special conditions and supporting information pplicable for this service or product line.',
		},
		informationLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description:
				'Exceptions, special conditions and supporting information pplicable for this service or product line.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ex-revenue-center
		revenue: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of reveneu or cost center providing the product and/or service.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Health Care Service Type Codes  to identify the classification of service or benefits.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: require('./codeableconcept.schema.js'),
			description:
				"If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,RXNorm,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-modifiers
		modifier: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ex-program-code
		programCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'For programs which require reason codes for the inclusion or covering of this billed item under the program or sub-program.',
		},
		_servicedDate: {
			type: require('./element.schema.js'),
			description:
				'The date or dates when the enclosed suite of services were performed or completed.',
		},
		servicedDate: {
			type: DateScalar,
			description:
				'The date or dates when the enclosed suite of services were performed or completed.',
		},
		servicedPeriod: {
			type: require('./period.schema.js'),
			description:
				'The date or dates when the enclosed suite of services were performed or completed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-place
		locationCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description: 'Where the service was provided.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-place
		locationAddress: {
			type: require('./address.schema.js'),
			description: 'Where the service was provided.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-place
		locationReference: {
			type: new GraphQLUnionType({
				name: 'ClaimitemlocationReference_locationReference_Union',
				description: 'Where the service was provided.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'Where the service was provided.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description: 'The number of repetitions of a service or product.',
		},
		unitPrice: {
			type: require('./money.schema.js'),
			description:
				'If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.',
		},
		_factor: {
			type: require('./element.schema.js'),
			description:
				'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.',
		},
		factor: {
			type: GraphQLFloat,
			description:
				'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.',
		},
		net: {
			type: require('./money.schema.js'),
			description:
				'The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.',
		},
		udi: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Claimitemudi_udi_Union',
					description:
						'List of Unique Device Identifiers associated with this line item.',
					types: () => [require('./device.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
					},
				}),
			),
			description:
				'List of Unique Device Identifiers associated with this line item.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/tooth
		bodySite: {
			type: require('./codeableconcept.schema.js'),
			description: 'Physical service site on the patient (limb, tooth, etc).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/surface
		subSite: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A region or surface of the site, eg. limb region or tooth surface(s).',
		},
		encounter: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Claimitemencounter_encounter_Union',
					description:
						'A billed item may include goods or services provided in multiple encounters.',
					types: () => [require('./encounter.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Encounter') {
							return require('./encounter.schema.js');
						}
					},
				}),
			),
			description:
				'A billed item may include goods or services provided in multiple encounters.',
		},
		detail: {
			type: new GraphQLList(require('./claimitemdetail.schema.js')),
			description: 'Second tier of goods and services.',
		},
	}),
});
