import * as C from './styles'
import { formatCurrentmonth } from '../../helpers/dateFilter'
type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange}: Props) => {
    const HandlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }

    const HandleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={HandlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentmonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={HandleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                
            </C.ResumeArea>

        </C.Container>
    )
}