const {
	GraphQLInputObjectType,
	GraphQLEnumType,
	GraphQLString
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

let NarrativeStatusType = new GraphQLEnumType({
	name: 'NarrativeStatusTypeInput',
	values: {
		generated: { value: 'generated' },
		extensions: { value: 'extensions' },
		additional: { value: 'additional' },
		empty: { value: 'empty' }
	}
});

/**
 * @name exports
 * @summary Narrative Fields
 */
let NarrativeInput = new GraphQLInputObjectType({
	name: 'NarrativeInput',
	description: 'A human-readable formatted text, including images.',
	fields: () => extendSchema(require('./element.input'), {
		status: {
			type: NarrativeStatusType,
			description: 'Identifies the purpose for this name.'
		},
		_status: {
			type: require('./extension.input'),
			description: 'Extensions for status'
		},
		div: {
			type: GraphQLString,
			description: 'The actual narrative content, a stripped down version of XHTML.'
		}
	})
});

module.exports = NarrativeInput;
