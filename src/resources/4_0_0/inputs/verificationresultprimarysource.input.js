const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary VerificationResultprimarySource Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'VerificationResultprimarySource_Input',
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
		who: {
			type: GraphQLString,
			description: 'Reference to the primary source.',
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).',
		},
		communicationMethod: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Method for communicating with the primary source (manual; API; Push).',
		},
		validationStatus: {
			type: require('./codeableconcept.input.js'),
			description:
				'Status of the validation of the target against the primary source (successful; failed; unknown).',
		},
		_validationDate: {
			type: require('./element.input.js'),
			description: 'When the target was validated against the primary source.',
		},
		validationDate: {
			type: DateTimeScalar,
			description: 'When the target was validated against the primary source.',
		},
		canPushUpdates: {
			type: require('./codeableconcept.input.js'),
			description:
				'Ability of the primary source to push updates/alerts (yes; no; undetermined).',
		},
		pushTypeAvailable: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).',
		},
	}),
});
