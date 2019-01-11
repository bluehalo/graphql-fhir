const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary DiagnosticOrderitem Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DiagnosticOrderitem',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-requests
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'A code that identifies a particular diagnostic investigation, or panel of investigations, that have been requested.',
		},
		specimen: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'DiagnosticOrderitemspecimen_specimen_Union',
					description: 'If the item is related to a specific specimen.',
					types: () => [require('./specimen.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Specimen') {
							return require('./specimen.schema.js');
						}
					},
				}),
			),
			description: 'If the item is related to a specific specimen.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Anatomical location where the request test should be performed.  This is the target site.',
		},
		_status: {
			type: require('./element.schema.js'),
			description: 'The status of this individual item within the order.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-status
		status: {
			type: CodeScalar,
			description: 'The status of this individual item within the order.',
		},
	}),
});
