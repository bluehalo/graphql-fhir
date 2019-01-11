const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');
const TimeScalar = require('../scalars/time.scalar.js');

/**
 * @name exports
 * @summary Questionnaireitemoption Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Questionnaireitemoption',
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
		_valueInteger: {
			type: require('./element.schema.js'),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		_valueDate: {
			type: require('./element.schema.js'),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueDate: {
			type: new GraphQLNonNull(DateScalar),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		_valueTime: {
			type: require('./element.schema.js'),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueTime: {
			type: new GraphQLNonNull(TimeScalar),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		_valueString: {
			type: require('./element.schema.js'),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description:
				"A potential answer that's allowed as the answer to this question.",
		},
	}),
});
