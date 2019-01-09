const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitaddItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitaddItem',
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
		_itemSequence: {
			type: require('./element.schema.js'),
			description:
				'Claim items which this service line is intended to replace.',
		},
		itemSequence: {
			type: new GraphQLList(PositiveIntScalar),
			description:
				'Claim items which this service line is intended to replace.',
		},
		_detailSequence: {
			type: require('./element.schema.js'),
			description:
				'The sequence number of the details within the claim item which this line is intended to replace.',
		},
		detailSequence: {
			type: new GraphQLList(PositiveIntScalar),
			description:
				'The sequence number of the details within the claim item which this line is intended to replace.',
		},
		_subDetailSequence: {
			type: require('./element.schema.js'),
			description:
				'The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.',
		},
		subDetailSequence: {
			type: new GraphQLList(PositiveIntScalar),
			description:
				'The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace.',
		},
		provider: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ExplanationOfBenefitaddItemprovider_provider_Union',
					description:
						'The providers who are authorized for the services rendered to the patient.',
					types: () => [
						require('./practitioner.schema.js'),
						require('./practitionerrole.schema.js'),
						require('./organization.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Practitioner') {
							return require('./practitioner.schema.js');
						}
						if (data && data.resourceType === 'PractitionerRole') {
							return require('./practitionerrole.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'The providers who are authorized for the services rendered to the patient.',
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
				name:
					'ExplanationOfBenefitaddItemlocationReference_locationReference_Union',
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
		bodySite: {
			type: require('./codeableconcept.schema.js'),
			description: 'Physical service site on the patient (limb, tooth, etc.).',
		},
		subSite: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'A region or surface of the bodySite, e.g. limb region or tooth surface(s).',
		},
		_noteNumber: {
			type: require('./element.schema.js'),
			description:
				'The numbers associated with notes below which apply to the adjudication of this item.',
		},
		noteNumber: {
			type: new GraphQLList(PositiveIntScalar),
			description:
				'The numbers associated with notes below which apply to the adjudication of this item.',
		},
		detail: {
			type: new GraphQLList(
				require('./explanationofbenefitadditemdetail.schema.js'),
			),
			description:
				'The second-tier service adjudications for payor added services.',
		},
	}),
});
