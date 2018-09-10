const OidScalar = require('../scalars/oid.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ImagingObjectSelectionResourceType = new GraphQLEnumType({
	name: 'ImagingObjectSelectionResourceType',
	values: {
		ImagingObjectSelection: { value: 'ImagingObjectSelection' }
	}
});

/**
 * @name exports
 * @summary ImagingObjectSelection Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ImagingObjectSelection',
	description: 'Base StructureDefinition for ImagingObjectSelection Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ImagingObjectSelectionResourceType),
			description: 'Type of this resource.'
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Instance UID of the DICOM KOS SOP Instances represented in this resource.'
		},
		_uid: {
			type: require('./element.schema'),
			description: 'Instance UID of the DICOM KOS SOP Instances represented in this resource.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'A patient resource reference which is the patient subject of all DICOM SOP Instances in this ImagingObjectSelection.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/kos-title
		title: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The reason for, or significance of, the selection of objects referenced in the resource.'
		},
		description: {
			type: GraphQLString,
			description: 'Text description of the DICOM SOP instances selected in the ImagingObjectSelection. This should be aligned with the content of the title element, and can provide further explanation of the SOP instances in the selection.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Text description of the DICOM SOP instances selected in the ImagingObjectSelection. This should be aligned with the content of the title element, and can provide further explanation of the SOP instances in the selection.'
		},
		author: {
			type: require('./reference.schema'),
			description: 'Author of ImagingObjectSelection. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attach in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion.'
		},
		authoringTime: {
			type: DateTimeScalar,
			description: 'Date and time when the selection of the referenced instances were made. It is (typically) different from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image).'
		},
		_authoringTime: {
			type: require('./element.schema'),
			description: 'Date and time when the selection of the referenced instances were made. It is (typically) different from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image).'
		},
		study: {
			type: new GraphQLList(new GraphQLNonNull(require('./imagingobjectselectionstudy.schema'))),
			description: 'Study identity and locating information of the DICOM SOP instances in the selection.'
		}
	})
});
