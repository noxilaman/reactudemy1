import react from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = props => {
    const chartDataPoints = [
        {label: 'Jan',value: 5},
        {label: 'Feb',value: 3},
        {label: 'Mar',value: 2},
        {label: 'Apr',value: 3},
        {label: 'May',value: 5},
        {label: 'Jun',value: 6},
        {label: 'Jul',value: 2},
        {label: 'Aug',value: 4},
        {label: 'Sep',value: 5},
        {label: 'Oct',value: 1},
        {label: 'Nov',value: 2},
        {label: 'Dec',value: 7}
    ];

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value = expense.amount;
    }
    return <Chart dataPoints={chartDataPoints} />
}

export default ExpenseChart;