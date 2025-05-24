import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import markdownIt from 'markdown-it';
import markdownItAttrs from 'markdown-it-attrs';

export default async function( eleventyConfig ) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	eleventyConfig.addGlobalData( 'layout', 'layouts/default.html' );

	eleventyConfig.setLibrary( 'md', markdownIt( options ) );

	eleventyConfig.amendLibrary( 'md', ( mdLib ) => mdLib.use( markdownIt ) );
	eleventyConfig.amendLibrary( 'md', ( mdLib ) => mdLib.use( markdownItAttrs ) );

	eleventyConfig.addPlugin( eleventyImageTransformPlugin );
};
