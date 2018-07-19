const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Specimen Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Specimen_Input',
	description: 'Base StructureDefinition for Specimen Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Id for specimen.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/specimen-status
		status: {
			type: CodeScalar,
			description: 'The availability of the specimen.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The availability of the specimen.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0487
		type: {
			type: require('./codeableconcept.input'),
			description: 'The kind of material that forms the specimen.'
		},
		parent: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Where the specimen came from. This may be from the patient(s) or from the environment or a device.'
		},
		accessionIdentifier: {
			type: require('./identifier.input'),
			description: 'The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.'
		},
		receivedTime: {
			type: DateTimeScalar,
			description: 'Time when specimen was received for processing or testing.'
		},
		_receivedTime: {
			type: require('./element.input'),
			description: 'Time when specimen was received for processing or testing.'
		},
		collection: {
			type: require('./specimencollection.input'),
			description: 'Details concerning the specimen collection.'
		},
		treatment: {
			type: new GraphQLList(require('./specimentreatment.input')),
			description: 'Details concerning treatment and processing steps for the specimen.'
		},
		container: {
			type: new GraphQLList(require('./specimencontainer.input')),
			description: 'The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.'
		}
	})
});
