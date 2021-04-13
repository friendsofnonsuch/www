require( 'dotenv' ).config();

let baseURL = 'https://www.friendsofnonsuch.co.uk/';

switch ( process.env.ELEVENTY_ENV ) {
	case 'development':
		baseURL = 'http://localhost:8080/';
	break;

	case 'preview':
		baseURL = 'https://preview.friendsofnonsuch.co.uk/';
	break;

	default:
		baseURL = '/';
}

module.exports = {
	baseURL: baseURL
	,title: 'Friends of Nonsuch'
	,environment: process.env.ELEVENTY_ENV
};
