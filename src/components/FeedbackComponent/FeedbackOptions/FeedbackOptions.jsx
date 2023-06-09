import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <Item key={option}>
            <Button type="button" value={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </Item>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
