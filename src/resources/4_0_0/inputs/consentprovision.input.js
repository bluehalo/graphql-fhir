const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Consentprovision Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Consentprovision_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_type: {
			type: require('./element.input.js'),
			description:
				'Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.',
		},
		type: {
			type: CodeScalar,
			description:
				'Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.',
		},
		period: {
			type: require('./period.input.js'),
			description: 'The timeframe in this rule is valid.',
		},
		actor: {
			type: new GraphQLList(require('./consentprovisionactor.input.js')),
			description:
				"Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').",
		},
		action: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description: 'Actions controlled by this Rule.',
		},
		securityLabel: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'A security label, comprised of 0..* security label fields (Privacy tags), which define which resources are controlled by this exception.',
		},
		purpose: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'The context of the activities a user is taking - why the user is accessing the data - that are controlled by this rule.',
		},
		class: {
			type: new GraphQLList(require('./coding.input.js')),
			description:
				'The class of information covered by this rule. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to.',
		},
		code: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'If this code is found in an instance, then the rule applies.',
		},
		dataPeriod: {
			type: require('./period.input.js'),
			description:
				'Clinical or Operational Relevant period of time that bounds the data controlled by this rule.',
		},
		data: {
			type: new GraphQLList(require('./consentprovisiondata.input.js')),
			description:
				'The resources controlled by this rule if specific resources are referenced.',
		},
	}),
});
