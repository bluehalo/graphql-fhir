const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary RelatedPerson Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'RelatedPerson_Input',
	description: 'Base StructureDefinition for RelatedPerson Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifier for a person within a particular scope.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The patient this person is related to.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/relatedperson-relationshiptype
		relationship: {
			type: require('./codeableconcept.input'),
			description: 'The nature of the relationship between a patient and the related person.'
		},
		name: {
			type: require('./humanname.input'),
			description: 'A name associated with the person.'
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'A contact detail for the person, e.g. a telephone number or an email address.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
		gender: {
			type: CodeScalar,
			description: 'Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.'
		},
		_gender: {
			type: require('./element.input'),
			description: 'Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.'
		},
		birthDate: {
			type: DateScalar,
			description: 'The date on which the related person was born.'
		},
		_birthDate: {
			type: require('./element.input'),
			description: 'The date on which the related person was born.'
		},
		address: {
			type: new GraphQLList(require('./address.input')),
			description: 'Address where the related person can be contacted or visited.'
		},
		photo: {
			type: new GraphQLList(require('./attachment.input')),
			description: 'Image of the person.'
		},
		period: {
			type: require('./period.input'),
			description: 'The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown.'
		}
	})
});
