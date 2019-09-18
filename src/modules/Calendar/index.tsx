import React from 'react';
import { Flex, Header } from '../../components';
import { connect } from 'react-redux';
import { IState } from '../../reducer'
import { IStateCalendar, calendarSelector } from './reducers/calendarReducer';
import { setCurrentDate } from './actions/calendarActions';
import CalendarGrid from './CalendarGrid';
import moment from 'moment';

interface ICalendarProps {
	calendar: IStateCalendar,

	setCurrentDate: typeof setCurrentDate;
}

interface ICalendarState {
	format: string;
}

class Calendar extends React.Component<ICalendarProps, ICalendarState> {
	format = 'YYYY-DD-MM'

	render() {
		const { calendar } = this.props;

		return(
			<Flex
				flexDirection='column'
				css={{
					position: 'relative'
				}}
			>
				<Header
					month={moment(calendar.currentDate, 'YYYY-DD-MM').format('MMMM | YYYY')}
					headers={calendar.headers}
					changeMonth={(offset: number) => {
						this.props.setCurrentDate(moment(calendar.currentDate, this.format).add(offset, 'months').format(this.format));
					}}
				/>
				<Flex
					flexDirection='column'
					css={{
						position: 'relative'
					}}
				>
					<CalendarGrid
						weeks={calendar.weeks}
					/>
				</Flex>
			</Flex>
		)
	}
}

const mapStateToProps = (state: IState) => ({
	calendar: calendarSelector(state)
});

const mapDispatchToProps = {
	setCurrentDate
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
