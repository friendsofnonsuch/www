var numeral = require( 'numeral' );
require( 'numeral/locales/en-gb' );

numeral.locale( 'en-gb' );

const sanityClient = require( '@sanity/client' )
const client = sanityClient( {
	apiVersion: '2021-03-25',
	projectId: process.env.SANITY_PROJECTID,
	dataset: process.env.SANITY_DATASET,
	token: process.env.SANITY_TOKEN,
	useCdn: false
} );

module.exports = async function() {
	const query = '*[ _type == "product"] | order(order asc)'

	return await client.fetch( query, {} )
		.then( response => {
			return response.map( record => {
				var product = record.product;

				var variants = record.variants.map( variant => {
					return {
						size: variant.size,
						price: variant.price == undefined ? '' : numeral( variant.price ).format( '$0.00' )
					}
				} );

				return {
					product: product,
					variants: variants
				}
			} );
		} )
		.catch(
			error => console.error( error )
		);
}
