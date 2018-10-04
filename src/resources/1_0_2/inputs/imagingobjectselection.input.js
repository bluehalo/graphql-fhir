const OidScalar = require('../scalars/oid.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let ImagingObjectSelectionResourceInputType = new GraphQLEnumType({
	name: 'ImagingObjectSelectionResourceInputType',
	values: {
		ImagingObjectSelection: { value: 'ImagingObjectSelection' }
	}
});

/**
 * @name exports
 * @summary ImagingObjectSelection Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ImagingObjectSelection_Input',
	description: 'Base StructureDefinition for ImagingObjectSelection Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ImagingObjectSelectionResourceInputType),
			description: 'Type of this resource.'
		},
		uid: {
			type: new GraphQLNonNull(OidScalar),
			description: 'Instance UID of the DICOM KOS SOP Instances represented in this resource.'
		},
		_uid: {
			type: require('./element.input'),
			description: 'Instance UID of the DICOM KOS SOP Instances represented in this resource.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A patient resource reference which is the patient subject of all DICOM SOP Instances in this ImagingObjectSelection.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/kos-title
		title: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'The reason for, or significance of, the selection of objects referenced in the resource.'
		},
		description: {
			type: GraphQLString,
			description: 'Text description of the DICOM SOP instances selected in the ImagingObjectSelection. This should be aligned with the content of the title element, and can provide further explanation of the SOP instances in the selection.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Text description of the DICOM SOP instances selected in the ImagingObjectSelection. This should be aligned with the content of the title element, and can provide further explanation of the SOP instances in the selection.'
		},
		author: {
			type: require('./reference.input'),
			description: 'Author of ImagingObjectSelection. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attach in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion.'
		},
		authoringTime: {
			type: DateTimeScalar,
			description: 'Date and time when the selection of the referenced instances were made. It is (typically) different from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image).'
		},
		_authoringTime: {
			type: require('./element.input'),
			description: 'Date and time when the selection of the referenced instances were made. It is (typically) different from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image).'
		},
		study: {
			type: new GraphQLList(new GraphQLNonNull(require('./imagingobjectselectionstudy.input'))),
			description: 'Study identity and locating information of the DICOM SOP instances in the selection.'
		}
	})
});
