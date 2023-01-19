import React from 'react';

function ResidentsList(myResidentList) {

	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>

			{/* {myResidentList.map((name, index) => ( */}

				<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
					<li key={"index"}className="slide-up-fade-in">
						{name}
						John
					</li>
				</ul>
			{/* ))} */}

		</div>
	);
}

export default ResidentsList;
