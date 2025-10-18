//https://www.netlify.com/blog/how-to-schedule-deploys-with-netlify/
import fetch from 'node-fetch';
import { schedule } from '@netlify/functions';

const BUILD_HOOK = 'https://api.netlify.com/build_hooks/683e8de58a1bcaf502be8ae8'

// Schedules the handler function to run daily at 02:42
const handler = schedule( '42 2 * * *', async () => {
	await fetch( BUILD_HOOK, {
		method: 'POST'
	} ).then(response => {
		console.log('Build hook response:', response);
	} )

	return {
		statusCode: 200
	}
} )

export { handler }
