const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/dateTime.scalar.js');

/**
 * @name exports
 * @summary MarketingStatus Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MarketingStatus',
	description:
		'Base StructureDefinition for MarketingStatus Type: The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.',
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
		country: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements.',
		},
		jurisdiction: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified.',
		},
		status: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples.',
		},
		dateRange: {
			type: new GraphQLNonNull(require('./period.schema.js')),
			description:
				'The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.',
		},
		_restoreDate: {
			type: require('./element.schema.js'),
			description:
				'The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.',
		},
		restoreDate: {
			type: DateTimeScalar,
			description:
				'The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain.',
		},
	}),
});
