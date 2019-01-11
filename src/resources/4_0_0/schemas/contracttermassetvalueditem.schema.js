const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const UnsignedIntScalar = require('../scalars/unsignedint.scalar.js');

/**
 * @name exports
 * @summary ContracttermassetvaluedItem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ContracttermassetvaluedItem',
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
		entityCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description: 'Specific type of Contract Valued Item that may be priced.',
		},
		entityReference: {
			type: new GraphQLUnionType({
				name:
					'ContracttermassetvaluedItementityReference_entityReference_Union',
				description:
					'Specific type of Contract Valued Item that may be priced.',
				types: () => [require('./resource.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Resource') {
						return require('./resource.schema.js');
					}
				},
			}),
			description: 'Specific type of Contract Valued Item that may be priced.',
		},
		identifier: {
			type: require('./identifier.schema.js'),
			description: 'Identifies a Contract Valued Item instance.',
		},
		_effectiveTime: {
			type: require('./element.schema.js'),
			description:
				'Indicates the time during which this Contract ValuedItem information is effective.',
		},
		effectiveTime: {
			type: DateTimeScalar,
			description:
				'Indicates the time during which this Contract ValuedItem information is effective.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description:
				'Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances.',
		},
		unitPrice: {
			type: require('./money.schema.js'),
			description: 'A Contract Valued Item unit valuation measure.',
		},
		_factor: {
			type: require('./element.schema.js'),
			description:
				'A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.',
		},
		factor: {
			type: GraphQLFloat,
			description:
				'A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.',
		},
		_points: {
			type: require('./element.schema.js'),
			description:
				'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.',
		},
		points: {
			type: GraphQLFloat,
			description:
				'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point.',
		},
		net: {
			type: require('./money.schema.js'),
			description:
				'Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.',
		},
		_payment: {
			type: require('./element.schema.js'),
			description: 'Terms of valuation.',
		},
		payment: {
			type: GraphQLString,
			description: 'Terms of valuation.',
		},
		_paymentDate: {
			type: require('./element.schema.js'),
			description: 'When payment is due.',
		},
		paymentDate: {
			type: DateTimeScalar,
			description: 'When payment is due.',
		},
		responsible: {
			type: new GraphQLUnionType({
				name: 'ContracttermassetvaluedItemresponsible_responsible_Union',
				description: 'Who will make payment.',
				types: () => [
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description: 'Who will make payment.',
		},
		recipient: {
			type: new GraphQLUnionType({
				name: 'ContracttermassetvaluedItemrecipient_recipient_Union',
				description: 'Who will receive payment.',
				types: () => [
					require('./organization.schema.js'),
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description: 'Who will receive payment.',
		},
		_linkId: {
			type: require('./element.schema.js'),
			description:
				'Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.',
		},
		linkId: {
			type: new GraphQLList(GraphQLString),
			description:
				'Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse.',
		},
		_securityLabelNumber: {
			type: require('./element.schema.js'),
			description:
				'A set of security labels that define which terms are controlled by this condition.',
		},
		securityLabelNumber: {
			type: new GraphQLList(UnsignedIntScalar),
			description:
				'A set of security labels that define which terms are controlled by this condition.',
		},
	}),
});
