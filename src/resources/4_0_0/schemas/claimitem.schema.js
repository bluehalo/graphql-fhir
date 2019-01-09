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
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_sequence: {
			type: require('./element.schema.js'),
			description: 'A number to uniquely identify item entries.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A number to uniquely identify item entries.',
		},
		_careTeamSequence: {
			type: require('./element.schema.js'),
			description: 'CareTeam members related to this service or product.',
		},
		careTeamSequence: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'CareTeam members related to this service or product.',
		},
		_diagnosisSequence: {
			type: require('./element.schema.js'),
			description: 'Diagnosis applicable for this service or product.',
		},
		diagnosisSequence: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Diagnosis applicable for this service or product.',
		},
		_procedureSequence: {
			type: require('./element.schema.js'),
			description: 'Procedures applicable for this service or product.',
		},
		procedureSequence: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Procedures applicable for this service or product.',
		},
		_informationSequence: {
			type: require('./element.schema.js'),
			description:
				'Exceptions, special conditions and supporting information applicable for this service or product.',
		},
		informationSequence: {
			type: new GraphQLList(PositiveIntScalar),
			description:
				'Exceptions, special conditions and supporting information applicable for this service or product.',
		},
		revenue: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The type of revenue or cost center providing the product and/or service.',
		},
		category: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Code to identify the general type of benefits under which products and services are provided.',
		},
		productOrService: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item.',
		},
		modifier: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Item typification or modifiers codes to convey additional context for the product or service.',
		},
		programCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Identifies the program under which this may be recovered.',
		},
		_servicedDate: {
			type: require('./element.schema.js'),
			description:
				'The date or dates when the service or product was supplied, performed or completed.',
		},
		servicedDate: {
			type: DateScalar,
			description:
				'The date or dates when the service or product was supplied, performed or completed.',
		},
		servicedPeriod: {
			type: require('./period.schema.js'),
			description:
				'The date or dates when the service or product was supplied, performed or completed.',
		},
		locationCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description: 'Where the product or service was provided.',
		},
		locationAddress: {
			type: require('./address.schema.js'),
			description: 'Where the product or service was provided.',
		},
		locationReference: {
			type: new GraphQLUnionType({
				name: 'ClaimitemlocationReference_locationReference_Union',
				description: 'Where the product or service was provided.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'Where the product or service was provided.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description: 'The number of repetitions of a service or product.',
		},
		unitPrice: {
			type: require('./money.schema.js'),
			description:
				'If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group.',
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
				'The quantity times the unit price for an additional service or product or charge.',
		},
		udi: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Claimitemudi_udi_Union',
					description:
						'Unique Device Identifiers associated with this line item.',
					types: () => [require('./device.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
					},
				}),
			),
			description: 'Unique Device Identifiers associated with this line item.',
		},
		bodySite: {
			type: require('./codeableconcept.schema.js'),
			description: 'Physical service site on the patient (limb, tooth, etc.).',
		},
		subSite: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A region or surface of the bodySite, e.g. limb region or tooth surface(s).',
		},
		encounter: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Claimitemencounter_encounter_Union',
					description:
						'The Encounters during which this Claim was created or to which the creation of this record is tightly associated.',
					types: () => [require('./encounter.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Encounter') {
							return require('./encounter.schema.js');
						}
					},
				}),
			),
			description:
				'The Encounters during which this Claim was created or to which the creation of this record is tightly associated.',
		},
		detail: {
			type: new GraphQLList(require('./claimitemdetail.schema.js')),
			description:
				"A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items.",
		},
	}),
});
