import React from 'react';
import data from '../data.json';
import photo from '../ram.jpg';
import{ Link } from 'react-router-dom';


let Resume=()=>{
	let resumeData=data.details;
	let resumeData1=data.careerobjective;
	let resumeData2=data.educationalqualifications;
	let resumeData3=data.technicalskills;
	//console.log(resumeData1);
	//console.log(resumeData);
	//console.log(resumeData1);
	//console.log(resumeData2);
	//console.log(resumeData3);

	let image=[photo];
	return(
		<div>
			<h1 className="text-primary">Resume</h1>
			<div className="container">
				<div className="row info">

					<div className="col-sm-10 col-md-12 col-lg-4">
						{resumeData.map((item,index)=>(					
							<div className="card left" key={index}>
								<div className="img-name">
									<img src={image[index]}/>
									<h3>{item.name}</h3>
									<p>{item.rollno}</p>
									
								</div>
								<div className="other-info">
								<p>{item.college}</p>
									<a href={"mailto:"+item.email}>
										<p>{item.email}</p>
									</a>
									<p>{item.mobile}</p>
									<p>{item.role}</p>
									<a href="https://github.com/Jayasree-33">Git Hub</a><br/>
									<Link to={{pathname:"/page2",personcard:{id:index}}} className="btn btn-primary">
									Click Me
								</Link>
								</div>
							</div>
						))}
					</div>
					<div className="col-sm-10 col-md-12 col-lg-8">
						<div className="card">							
							{resumeData1.map((item1,index1)=>(							
								<h5>Career Objectives: {item1.information}</h5>									
							))}
							<h5>Educational Qualifications:</h5>
							<table className="table table-bordered">
								<tr>
									<th>Institute</th>
									<th>Degree</th>
									<th>Pass Out Year</th>
									<th>Percentage</th>
								</tr>
								
								{resumeData2.map((item2,index2)=>(
								<tr>															
									<td>{item2.institute}</td>
									<td>{item2.degree}</td>							
									<td>{item2.passoutyear}</td>
									<td>{item2.percentage}</td>
								</tr>
								))}
							</table>
							<h5>Languauges Known:</h5>							
							<ul>
							{resumeData3.map((item3,index3)=>(															
								<li>{item3.title}: {item3.info}</li>								
							))}
							</ul>

						</div>
					</div>
				</div>
			</div>
		</div>
		);
}

export default Resume;

