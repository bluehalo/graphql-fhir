const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary AllergyIntolerance Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AllergyIntolerance',
	description: 'Base StructureDefinition for AllergyIntolerance Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'This records identifiers associated with this allergy/intolerance concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).'
		},
		onset: {
			type: DateTimeScalar,
			description: 'Record of the date and/or time of the onset of the Allergy or Intolerance.'
		},
		_onset: {
			type: require('./element.schema'),
			description: 'Record of the date and/or time of the onset of the Allergy or Intolerance.'
		},
		recordedDate: {
			type: DateTimeScalar,
			description: 'Date when the sensitivity was recorded.'
		},
		_recordedDate: {
			type: require('./element.schema'),
			description: 'Date when the sensitivity was recorded.'
		},
		recorder: {
			type: require('./reference.schema'),
			description: 'Individual who recorded the record and takes responsibility for its conten.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient who has the allergy or intolerance.'
		},
		reporter: {
			type: require('./reference.schema'),
			description: 'The source of the information about the allergy that is recorded.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/allergyintolerance-substance-code
		substance: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Identification of a substance, or a class of substances, that is considered to be responsible for the adverse reaction risk.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-status
		status: {
			type: CodeScalar,
			description: 'Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified Substance.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified Substance.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality
		criticality: {
			type: CodeScalar,
			description: 'Estimate of the potential clinical harm, or seriousness, of the reaction to the identified Substance.'
		},
		_criticality: {
			type: require('./element.schema'),
			description: 'Estimate of the potential clinical harm, or seriousness, of the reaction to the identified Substance.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-type
		type: {
			type: CodeScalar,
			description: 'Identification of the underlying physiological mechanism for the reaction risk.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Identification of the underlying physiological mechanism for the reaction risk.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/allergy-intolerance-category
		category: {
			type: CodeScalar,
			description: 'Category of the identified Substance.'
		},
		_category: {
			type: require('./element.schema'),
			description: 'Category of the identified Substance.'
		},
		lastOccurence: {
			type: DateTimeScalar,
			description: 'Represents the date and/or time of the last known occurrence of a reaction event.'
		},
		_lastOccurence: {
			type: require('./element.schema'),
			description: 'Represents the date and/or time of the last known occurrence of a reaction event.'
		},
		note: {
			type: require('./annotation.schema'),
			description: 'Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.'
		},
		reaction: {
			type: new GraphQLList(require('./allergyintolerancereaction.schema')),
			description: 'Details about each adverse reaction event linked to exposure to the identified Substance.'
		}
	})
});
