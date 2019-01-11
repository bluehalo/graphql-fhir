const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
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
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActInvoiceGroupCode
		type: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description: 'The type of product or service.',
		},
		provider: {
			type: new GraphQLUnionType({
				name: 'Claimitemprovider_provider_Union',
				description:
					'The practitioner who is responsible for the services rendered to the patient.',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
				},
			}),
			description:
				'The practitioner who is responsible for the services rendered to the patient.',
		},
		_diagnosisLinkId: {
			type: require('./element.schema.js'),
			description: 'Diagnosis applicable for this service or product line.',
		},
		diagnosisLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Diagnosis applicable for this service or product line.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description:
				"If a grouping item then 'GROUP' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.",
		},
		_serviceDate: {
			type: require('./element.schema.js'),
			description:
				'The date when the enclosed suite of services were performed or completed.',
		},
		serviceDate: {
			type: DateScalar,
			description:
				'The date when the enclosed suite of services were performed or completed.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description: 'The number of repetitions of a service or product.',
		},
		unitPrice: {
			type: require('./quantity.schema.js'),
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
		_points: {
			type: require('./element.schema.js'),
			description:
				'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.',
		},
		points: {
			type: GraphQLFloat,
			description:
				'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.',
		},
		net: {
			type: require('./quantity.schema.js'),
			description:
				'The quantity times the unit price for an additional  service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/udi
		udi: {
			type: require('./coding.schema.js'),
			description:
				'List of Unique Device Identifiers associated with this line item.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/tooth
		bodySite: {
			type: require('./coding.schema.js'),
			description: 'Physical service site on the patient (limb, tooth, etc.).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/surface
		subSite: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'A region or surface of the site, e.g. limb region or tooth surface(s).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/claim-modifiers
		modifier: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or an appliance was lost or stolen.',
		},
		detail: {
			type: new GraphQLList(require('./claimitemdetail.schema.js')),
			description: 'Second tier of goods and services.',
		},
		prosthesis: {
			type: require('./claimitemprosthesis.schema.js'),
			description:
				'The materials and placement date of prior fixed prosthesis.',
		},
	}),
});
