import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, countTotalFeedback, positivePercentage}) => {
    return (
        <div>
                <ul className={css.Statistics_list}>
                    <li className={css.statistics_item}>Good: {good}</li>
                    <li className={css.statistics_item}>Neutral: {neutral}</li>
                    <li className={css.statistics_item}>Bad: {bad}</li>
                    <li className={css.statistics_item}>Total: {countTotalFeedback}</li>
                    <li className={css.statistics_item}>Positive feedback: {positivePercentage}%</li>
                </ul>
        </div>
    )
}

export {Statistics}