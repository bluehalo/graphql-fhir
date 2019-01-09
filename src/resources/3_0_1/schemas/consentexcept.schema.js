const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Consentexcept Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Consentexcept',
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
				'Action  to take - permit or deny - when the exception conditions are met.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-except-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'Action  to take - permit or deny - when the exception conditions are met.',
		},
		period: {
			type: require('./period.schema.js'),
			description: 'The timeframe in this exception is valid.',
		},
		actor: {
			type: new GraphQLList(require('./consentexceptactor.schema.js')),
			description:
				"Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-action
		action: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Actions controlled by this Exception.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'A set of security labels that define which resources are controlled by this exception. If more than one label is specified, all resources must have all the specified labels.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		purpose: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'The context of the activities a user is taking - why the user is accessing the data - that are controlled by this exception.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-content-class
		class: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'The class of information covered by this exception. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/consent-content-code
		code: {
			type: new GraphQLList(require('./coding.schema.js')),
			description:
				'If this code is found in an instance, then the exception applies.',
		},
		dataPeriod: {
			type: require('./period.schema.js'),
			description:
				'Clinical or Operational Relevant period of time that bounds the data controlled by this exception.',
		},
		data: {
			type: new GraphQLList(require('./consentexceptdata.schema.js')),
			description:
				'The resources controlled by this exception, if specific resources are referenced.',
		},
	}),
});
