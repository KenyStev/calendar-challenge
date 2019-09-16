import React from 'react';
import { Flex, Day } from '../../components';
import { IState } from '../../reducer';
import Reminders from '../../components/containers/Reminder/Reminders';
import AddReminderForm from '../../components/containers/Reminder/AddReminderForm';
import { IStateReminder, reminderSelector } from '../../components/containers/Reminder/reducers/reminderReducer';
import { setCurrentDate } from './actions/calendarActions';
import { connect } from 'react-redux';
import shortid from 'shortid';
import moment from 'moment';

interface ICalendarGridProps {
	date: string;
	weeks: any;

	reminders: IStateReminder,
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
										renderChildren={(isOpen: boolean) => (
											<>
												{
													isOpen &&
													<AddReminderForm date={moment(day.date).format(this.format)} />
												}
												<Reminders
													isOpenDate={isOpen}
													reminders={(this.props.reminders[moment(day.date).format(this.format)] || {}).reminders}
												/>
											</>
										)}
									>
									</Day>
								)
							}
						</Flex> 
					)
				}
			</>
		)
	}
}

const mapStateToProps = (state: IState) => ({
	reminders: reminderSelector(state)
})

const mapDispatchToProps = {
	setCurrentDate
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarGrid);
