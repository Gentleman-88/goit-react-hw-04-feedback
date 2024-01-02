import css from './Feedback.module.css'

export const FeedbackOptions = ({handleFeedbackGood, handleFeedbackNeutral, handleFeedbackBad}) => {
    return (
        <ul className={css.buttons_list}>
                <li>
                    <button
                        className={css.feedback_button}
                        key='1'
                        onClick={() => handleFeedbackGood()}>Good
                </button>
            </li>
            <li>
                    <button
                        className={css.feedback_button}
                        key='2'
                        onClick={() => handleFeedbackNeutral()}>Neutral
                </button>
            </li>
            <li>
                    <button
                        className={css.feedback_button}
                        key='3'
                        onClick={() => handleFeedbackBad()}>Bad
                </button>
            </li>
        </ul>
    );
}