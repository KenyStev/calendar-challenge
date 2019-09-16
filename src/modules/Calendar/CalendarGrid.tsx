import React from 'react';
import { Flex, Day } from '../../components';
import shortid from 'shortid';

interface ICalendarGridProps {
	date: string;
	weeks: any;
}

class CalendarGrid extends React.Component<ICalendarGridProps> {
	format = 'YYYY-DD-MM';
	weeks = 6;
	daysPerWeek = 7;

	render() {
		const { weeks } = this.props;

		return (
			<>
				{
					weeks.map((week: any) =>
						<Flex
							width={1}
							key={shortid.generate()}
						>
							{
								week.map((day: any) =>
									<Day
										key={shortid.generate()}
										{...day}
									/>
								)
							}
						</Flex> 
					)
				}
			</>
		)
	}
}

export default CalendarGrid;
