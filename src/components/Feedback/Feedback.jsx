import css from './Feedback.module.css'

export const FeedbackOptions = ({handleFeedback, options}) => {
    return (
        <ul className={css.buttons_list}>
            {options.map((option, index) => (
            <li>
                    <button
                        className={css.feedback_button}
                        key={index}
                        onClick={() => handleFeedback(option)}>
                        {option}
                </button>
            </li>
            ))}
        </ul>
    );
}