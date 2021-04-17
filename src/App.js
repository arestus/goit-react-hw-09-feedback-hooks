import React, { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [statistic, setStatistic] = useState({ good: 0, neutral: 0, bad: 0 });
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const handleChange = e => {
    const stateButtonName = e.target.textContent.toLowerCase();
    setStatistic(prevState => {
      for (const key in prevState) {
        if (key === stateButtonName) {
          return { ...prevState, [key]: prevState[key] + 1 };
        }
      }
    });
  };

  const countTotalFeedback = () => {
    return statistic.good + statistic.neutral + statistic.bad;
  };

  const countPositiveFeedbackPercentage = totalFeedback => {
    return totalFeedback === 0
      ? 0
      : Math.round((statistic.good * 100) / totalFeedback);
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage(totalFeedback);

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleChange}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={statistic.good}
            neutral={statistic.neutral}
            bad={statistic.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
