const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary DetectedIssuemitigation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DetectedIssuemitigation_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/detectedissue-mitigation-action
		action: {
			type: new GraphQLNonNull(require('./codeableconcept.input.js')),
			description:
				'Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.',
		},
		_date: {
			type: require('./element.input.js'),
			description: 'Indicates when the mitigating action was documented.',
		},
		date: {
			type: DateTimeScalar,
			description: 'Indicates when the mitigating action was documented.',
		},
		author: {
			type: GraphQLString,
			description:
				'Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.',
		},
	}),
});
