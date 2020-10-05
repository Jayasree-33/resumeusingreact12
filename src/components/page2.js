import React from 'react';
import data from "../data.json";

function Page(props){
	let profile = data.details[props.location.personcard.id];
	console.log(profile);
	return(
		<div className="container">
			<div className="row">
				<div className="col-sm-10 col-md-4 col-lg-12">
					<div className="card">
						<h1>{profile.name}</h1>
						<h1>{profile.role}</h1>
					</div>
				</div>
			</div>
		</div>
		);

}

export default Page;