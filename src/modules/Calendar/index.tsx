import React from 'react';
import { Flex, Header } from '../../components';
import { connect } from 'react-redux';
import { IState } from '../../reducer'
import { IStateCalendar, calendarSelector } from './reducers/calendarReducer';
import CalendarGrid from './CalendarGrid';

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
				<Header headers={calendar.headers}/>
				<CalendarGrid
					date={calendar.currentDate}
					weeks={calendar.weeks}
				/>
			</Flex>
		)
	}
}

const mapStateToProps = (state: IState) => ({
	calendar: calendarSelector(state)
});

export default connect(mapStateToProps)(Calendar);
