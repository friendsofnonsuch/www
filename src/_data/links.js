require( 'dotenv' ).config();

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
