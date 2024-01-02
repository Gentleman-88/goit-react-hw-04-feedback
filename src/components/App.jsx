import React, { useState } from 'react'
import { Section } from "./Section/Section";
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0); 

  const handleFeedbackGood = () => {
    setGood((prevState) => prevState + 1)
  }

  const handleFeedbackNeutral = () => {
    setNeutral((prevState) => prevState + 1)
  }

  const handleFeedbackBad = () => {
    setBad((prevState) => prevState + 1)
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            handleFeedbackGood={handleFeedbackGood}
            handleFeedbackNeutral={handleFeedbackNeutral}
            handleFeedbackBad={handleFeedbackBad}
          />  
        </Section>
        {countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
  )
}