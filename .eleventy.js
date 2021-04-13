module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md,liquid' );
	eleventyConfig.setQuietMode( true );

	eleventyConfig.addPassthroughCopy( './src/files' );
	eleventyConfig.addPassthroughCopy( './src/uploads' );
	eleventyConfig.addPassthroughCopy( './src/robots.txt' );
	eleventyConfig.addPassthroughCopy( './src/favicon.ico' );

	eleventyConfig.addPassthroughCopy( './src/_redirects' );

// error handler
	// eleventyConfig.addPlugin( ErrorOverlay );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.addFilter( 'where', function( array, property, value ) {
		return array.filter( p => p[ property ] == value );
	} );

	eleventyConfig.setBrowserSyncConfig( {
		...eleventyConfig.browserSyncConfig
		,ui: false
		,ghostMode: false
		,logLevel: 'silent'
	} );
};
