import React from 'react';
import { Flex, Header } from '../../components';
import { connect } from 'react-redux';
import { IState } from '../../reducer'
import { IStateCalendar, calendarSelector } from './reducers/calendarReducer';
import CalendarGrid from './CalendarGrid';
import moment from 'moment';

interface ICalendarProps {
	calendar: IStateCalendar
}

class Calendar extends React.Component<ICalendarProps> {

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
					month={moment(calendar.currentDate, 'YYYY-DD-MM').format('MMMM')}
					headers={calendar.headers}
				/>
				<Flex
					flexDirection='column'
					css={{
						position: 'relative'
					}}
				>
					<CalendarGrid
						date={calendar.currentDate}
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

export default connect(mapStateToProps)(Calendar);
