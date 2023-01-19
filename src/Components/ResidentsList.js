import React from 'react';

function ResidentsList({ myResidentList }) {

	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>

			{/* {Array.isArray(myResidentList) ? myResidentList.map((name, index) => (

				<ul key={index} className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
					<li className="slide-up-fade-in">
						{name}
					</li>
				</ul>
			)) : null} */}

			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{myResidentList.map((name, index) => (
					<li className="slide-up-fade-in" key={index} >
						{name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ResidentsList;
