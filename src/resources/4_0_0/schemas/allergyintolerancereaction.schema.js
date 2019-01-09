const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary AllergyIntolerancereaction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AllergyIntolerancereaction',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		substance: {
			type: require('./codeableconcept.schema.js'),
			description:
				"Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.",
		},
		manifestation: {
			type: new GraphQLList(
				new GraphQLNonNull(require('./codeableconcept.schema.js')),
			),
			description:
				'Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'Text description about the reaction as a whole, including details of the manifestation if required.',
		},
		description: {
			type: GraphQLString,
			description:
				'Text description about the reaction as a whole, including details of the manifestation if required.',
		},
		_onset: {
			type: require('./element.schema.js'),
			description:
				'Record of the date and/or time of the onset of the Reaction.',
		},
		onset: {
			type: DateTimeScalar,
			description:
				'Record of the date and/or time of the onset of the Reaction.',
		},
		_severity: {
			type: require('./element.schema.js'),
			description:
				'Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.',
		},
		severity: {
			type: CodeScalar,
			description:
				'Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.',
		},
		exposureRoute: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Identification of the route by which the subject was exposed to the substance.',
		},
		note: {
			type: new GraphQLList(require('./annotation.schema.js')),
			description:
				'Additional text about the adverse reaction event not captured in other fields.',
		},
	}),
});
