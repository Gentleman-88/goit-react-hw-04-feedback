import css from './Feedback.module.css'

import React, { Component } from 'react';

export class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ul className={css.buttons_list}>
                {options.map(option => (
                    <li>
                        <button
                            className={css.feedback_button}
                            key={option}
                            onClick={() => onLeaveFeedback(option)}>{option}
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}
