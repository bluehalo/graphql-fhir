const UriScalar = require('../scalars/uri.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let QuestionnaireResourceInputType = new GraphQLEnumType({
	name: 'QuestionnaireResourceInputType',
	values: {
		Questionnaire: { value: 'Questionnaire' }
	}
});

/**
 * @name exports
 * @summary Questionnaire Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Questionnaire_Input',
	description: 'Base StructureDefinition for Questionnaire Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(QuestionnaireResourceInputType),
			description: 'Type of this resource.'
		},
		url: {
			type: UriScalar,
			description: 'An absolute URI that is used to identify this questionnaire when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this questionnaire is (or will be) published. The URL SHOULD include the major version of the questionnaire. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		_url: {
			type: require('./element.input'),
			description: 'An absolute URI that is used to identify this questionnaire when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this questionnaire is (or will be) published. The URL SHOULD include the major version of the questionnaire. For more information see [Technical and Business Versions](resource.html#versions).'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'A formal identifier that is used to identify this questionnaire when it is represented in other formats, or referenced in a specification, model, design or an instance.'
		},
		version: {
			type: GraphQLString,
			description: 'The identifier that is used to identify this version of the questionnaire when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the questionnaire author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The identifier that is used to identify this version of the questionnaire when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the questionnaire author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.'
		},
		name: {
			type: GraphQLString,
			description: 'A natural language name identifying the questionnaire. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		_name: {
			type: require('./element.input'),
			description: 'A natural language name identifying the questionnaire. This name should be usable as an identifier for the module by machine processing applications such as code generation.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive, user-friendly title for the questionnaire.'
		},
		_title: {
			type: require('./element.input'),
			description: 'A short, descriptive, user-friendly title for the questionnaire.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/publication-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of this questionnaire. Enables tracking the life-cycle of the content.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of this questionnaire. Enables tracking the life-cycle of the content.'
		},
		experimental: {
			type: GraphQLBoolean,
			description: 'A boolean value to indicate that this questionnaire is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		_experimental: {
			type: require('./element.input'),
			description: 'A boolean value to indicate that this questionnaire is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.'
		},
		date: {
			type: DateTimeScalar,
			description: 'The date  (and optionally time) when the questionnaire was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the questionnaire changes.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date  (and optionally time) when the questionnaire was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the questionnaire changes.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the questionnaire.'
		},
		_publisher: {
			type: require('./element.input'),
			description: 'The name of the individual or organization that published the questionnaire.'
		},
		description: {
			type: GraphQLString,
			description: 'A free text natural language description of the questionnaire from a consumer\'s perspective.'
		},
		_description: {
			type: require('./element.input'),
			description: 'A free text natural language description of the questionnaire from a consumer\'s perspective.'
		},
		purpose: {
			type: GraphQLString,
			description: 'Explaination of why this questionnaire is needed and why it has been designed as it has.'
		},
		_purpose: {
			type: require('./element.input'),
			description: 'Explaination of why this questionnaire is needed and why it has been designed as it has.'
		},
		approvalDate: {
			type: DateScalar,
			description: 'The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.'
		},
		_approvalDate: {
			type: require('./element.input'),
			description: 'The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.'
		},
		lastReviewDate: {
			type: DateScalar,
			description: 'The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn\'t change the original approval date.'
		},
		_lastReviewDate: {
			type: require('./element.input'),
			description: 'The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn\'t change the original approval date.'
		},
		effectivePeriod: {
			type: require('./period.input'),
			description: 'The period during which the questionnaire content was or is planned to be in active use.'
		},
		useContext: {
			type: new GraphQLList(require('./usagecontext.input')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate questionnaire instances.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A legal or geographic region in which the questionnaire is intended to be used.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input')),
			description: 'Contact details to assist a user in finding and communicating with the publisher.'
		},
		copyright: {
			type: GraphQLString,
			description: 'A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.'
		},
		_copyright: {
			type: require('./element.input'),
			description: 'A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/questionnaire-questions
		code: {
			type: new GraphQLList(require('./coding.input')),
			description: 'An identifier for this question or group of questions in a particular terminology such as LOINC.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/resource-types
		subjectType: {
			type: new GraphQLList(CodeScalar),
			description: 'The types of subjects that can be the subject of responses created for the questionnaire.'
		},
		_subjectType: {
			type: require('./element.input'),
			description: 'The types of subjects that can be the subject of responses created for the questionnaire.'
		},
		item: {
			type: new GraphQLList(require('./questionnaireitem.input')),
			description: 'A particular question, question grouping or display text that is part of the questionnaire.'
		}
	})
});
