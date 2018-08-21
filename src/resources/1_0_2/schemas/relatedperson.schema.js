const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let RelatedPersonResourceType = new GraphQLEnumType({
	name: 'RelatedPersonResourceType',
	values: {
		RelatedPerson: { value: 'RelatedPerson' }
	}
});

/**
 * @name exports
 * @summary RelatedPerson Schema
 */
module.exports = new GraphQLObjectType({
	name: 'RelatedPerson',
	description: 'Base StructureDefinition for RelatedPerson Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(RelatedPersonResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifier for a person within a particular scope.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The patient this person is related to.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype
		relationship: {
			type: require('./codeableconcept.schema'),
			description: 'The nature of the relationship between a patient and the related person.'
		},
		name: {
			type: require('./humanname.schema'),
			description: 'A name associated with the person.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'A contact detail for the person, e.g. a telephone number or an email address.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description: 'Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.'
		},
		_gender: {
			type: require('./element.schema'),
			description: 'Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.'
		},
		birthDate: {
			type: DateScalar,
			description: 'The date on which the related person was born.'
		},
		_birthDate: {
			type: require('./element.schema'),
			description: 'The date on which the related person was born.'
		},
		address: {
			type: new GraphQLList(require('./address.schema')),
			description: 'Address where the related person can be contacted or visited.'
		},
		photo: {
			type: new GraphQLList(require('./attachment.schema')),
			description: 'Image of the person.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.'
		}
	})
});
