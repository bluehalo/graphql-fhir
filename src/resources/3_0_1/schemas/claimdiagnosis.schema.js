const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');

/**
 * @name exports
 * @summary Claimdiagnosis Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Claimdiagnosis',
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
			description: 'Sequence of diagnosis which serves to provide a link.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'Sequence of diagnosis which serves to provide a link.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/icd-10
		diagnosisCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'The diagnosis.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/icd-10
		diagnosisReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ClaimdiagnosisdiagnosisReference_diagnosisReference_Union',
					description: 'The diagnosis.',
					types: () => [require('./condition.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
					},
				}),
			),
			description: 'The diagnosis.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ex-diagnosistype
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The type of the Diagnosis, for example: admitting, primary, secondary, discharge.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/ex-diagnosisrelatedgroup
		packageCode: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The package billing code, for example DRG, based on the assigned grouping code system.',
		},
	}),
});
