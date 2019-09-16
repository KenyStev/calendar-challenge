import React from 'react';
import { Flex, Box } from '../../components';
import { theme } from '../../theme';
import moment from 'moment';
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
									<Box
										width={1}
										css={{
											border: `1px solid ${theme.colors.lightblack}`
										}}
										key={shortid.generate()}
									>
										{moment(day.date).date()}
									</Box>
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
