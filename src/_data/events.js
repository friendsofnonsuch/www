require( 'dotenv' ).config();

const EleventyFetch = require( '@11ty/eleventy-fetch' );

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		url = 'http://admin.friendsofnonsuch.localhost/api/events/';
	break;

	default:
		url = 'http://admin.friendsofnonsuch.co.uk/api/events/';
}

module.exports = async function () {
	return EleventyFetch( url, {
		duration: '0d'
		,type: 'json'
		,fetchOptions: {
			headers: {
				'Authorization': 'Bearer ' + process.env.BEARER_TOKEN
			}
		}
	} );
};
