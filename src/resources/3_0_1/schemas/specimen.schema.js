const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let SpecimenResourceType = new GraphQLEnumType({
	name: 'SpecimenResourceType',
	values: {
		Specimen: { value: 'Specimen' }
	}
});

/**
 * @name exports
 * @summary Specimen Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Specimen',
	description: 'Base StructureDefinition for Specimen Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(SpecimenResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Id for specimen.'
		},
		accessionIdentifier: {
			type: require('./identifier.schema'),
			description: 'The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/specimen-status
		status: {
			type: CodeScalar,
			description: 'The availability of the specimen.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The availability of the specimen.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v2-0487
		type: {
			type: require('./codeableconcept.schema'),
			description: 'The kind of material that forms the specimen.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Where the specimen came from. This may be from the patient(s) or from the environment or a device.'
		},
		receivedTime: {
			type: DateTimeScalar,
			description: 'Time when specimen was received for processing or testing.'
		},
		_receivedTime: {
			type: require('./element.schema'),
			description: 'Time when specimen was received for processing or testing.'
		},
		parent: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.'
		},
		request: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Details concerning a test or procedure request that required a specimen to be collected.'
		},
		collection: {
			type: require('./specimencollection.schema'),
			description: 'Details concerning the specimen collection.'
		},
		processing: {
			type: new GraphQLList(require('./specimenprocessing.schema')),
			description: 'Details concerning processing and processing steps for the specimen.'
		},
		container: {
			type: new GraphQLList(require('./specimencontainer.schema')),
			description: 'The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).'
		}
	})
});
