require( 'dotenv' ).config();

const sanityClient = require( '@sanity/client' )
const client = sanityClient( {
	projectId: process.env.SANITY_PROJECTID
	,dataset: process.env.SANITY_DATASET
	,token: process.env.SANITY_TOKEN
	,apiVersion: '2021-03-25'
	,useCdn: false
} );

module.exports = async function() {
	const query = '*[ _type == "link"] | order( order asc )'

	return await client.fetch( query, {} )
		.then( response => {
			return response.map( record => {
				return {
					label: record.label
					,description: record.description
					,url: record.url
				}
			} );
		} )
		.catch(
			error => console.error( error )
		);
}
