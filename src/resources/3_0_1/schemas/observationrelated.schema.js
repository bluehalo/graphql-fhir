const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Observationrelated Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Observationrelated',
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
		_type: {
			type: require('./element.schema.js'),
			description:
				'A code specifying the kind of relationship that exists with the target resource.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/observation-relationshiptypes
		type: {
			type: CodeScalar,
			description:
				'A code specifying the kind of relationship that exists with the target resource.',
		},
		target: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Observationrelatedtarget_target_Union',
					description:
						'A reference to the observation or [QuestionnaireResponse](questionnaireresponse.html#) resource that is related to this observation.',
					types: () => [
						require('./observation.schema.js'),
						require('./questionnaireresponse.schema.js'),
						require('./sequence.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'QuestionnaireResponse') {
							return require('./questionnaireresponse.schema.js');
						}
						if (data && data.resourceType === 'Sequence') {
							return require('./sequence.schema.js');
						}
					},
				}),
			),
			description:
				'A reference to the observation or [QuestionnaireResponse](questionnaireresponse.html#) resource that is related to this observation.',
		},
	}),
});
