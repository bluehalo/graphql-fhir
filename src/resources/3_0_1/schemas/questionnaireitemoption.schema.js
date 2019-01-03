const DateScalar = require('../scalars/date.scalar');
const TimeScalar = require('../scalars/time.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Questionnaire.item.option Schema
 */
module.exports = new GraphQLObjectType({
	name: 'QuestionnaireItemOption',
	description: 'One of the permitted answers for a \'choice\' or \'open-choice\' question.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueInteger: {
			type: new GraphQLNonNull(GraphQLInt),
			description: 'A potential answer that\'s allowed as the answer to this question.'
		},
		_valueInteger: {
			type: require('./element.schema'),
			description: 'A potential answer that\'s allowed as the answer to this question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueDate: {
			type: new GraphQLNonNull(DateScalar),
			description: 'A potential answer that\'s allowed as the answer to this question.'
		},
		_valueDate: {
			type: require('./element.schema'),
			description: 'A potential answer that\'s allowed as the answer to this question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueTime: {
			type: new GraphQLNonNull(TimeScalar),
			description: 'A potential answer that\'s allowed as the answer to this question.'
		},
		_valueTime: {
			type: require('./element.schema'),
			description: 'A potential answer that\'s allowed as the answer to this question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueString: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A potential answer that\'s allowed as the answer to this question.'
		},
		_valueString: {
			type: require('./element.schema'),
			description: 'A potential answer that\'s allowed as the answer to this question.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-answers
		valueCoding: {
			type: new GraphQLNonNull(require('./coding.schema')),
			description: 'A potential answer that\'s allowed as the answer to this question.'
		}
	})
});
