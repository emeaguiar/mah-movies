import React from 'react';

export function getConfig() {
	const config = localStorage.getItem( `mah-movies-config` );

	if ( config && 'undefined' !== config ) {
		return JSON.parse( config );
	}

	fetchConfig();
}

function fetchConfig() {
	fetch( 'https://api.themoviedb.org/3/configuration?api_key=985e24fe0adef6dbea8259e606b71a37' )
		.then( results => {
			return results.json();
		} )
		.then( data => {
			localStorage.setItem( `mah-movies-config`, JSON.stringify( data ) );
		} );
}
