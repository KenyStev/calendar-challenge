import React from 'react';
import { Flex, Day } from '../../components';
import { setCurrentDate } from './actions/calendarActions';
import { connect } from 'react-redux';
import shortid from 'shortid';
import moment from 'moment';

interface ICalendarGridProps {
	date: string;
	weeks: any;

	setCurrentDate: typeof setCurrentDate;
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
							className='grid-dates'
							width={1}
							key={shortid.generate()}
						>
							{
								week.map((day: any) =>
									<Day
										onClick={() => {
											this.props.setCurrentDate(moment(day.date).format(this.format));
										}}
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

const mapDispatchToProps = {
	setCurrentDate
}

export default connect(null, mapDispatchToProps)(CalendarGrid);
