import * as classNames from 'classnames';
import * as React from 'react';

import './inlineSelectionRow.css';

interface InlineSelectionChoices<T> {
  label: string;
  value: T;
}

interface InlineSelectionRowProps<T> extends React.HTMLAttributes<{}> {
  selectedValue: T;
  handleOnClick: (value: T) => () => void;
  label?: string;
  choices: Array<InlineSelectionChoices<T>>;
}

export function InlineSelectionRow<T>(props: InlineSelectionRowProps<T>) {
  const buttonsBoxClasses = (quantity: number): string =>
    classNames('InlineSelectionRow-componentBox', {
      'is-halfSize': quantity === 2,
      'no-gutter': quantity > 4
    });

  const buttonClasses = (choiceValue: T): string =>
    classNames('InlineSelectionRow-button', {
      'is-active': props.selectedValue === choiceValue
    });

  return (
    <div className={props.className + ' InlineSelectionRow'}>
      {props.label && (
        <div className="InlineSelectionRow-componentBox">
          <label className="InlineSelectionRow-label">{props.label}</label>
        </div>
      )}

      <div className={buttonsBoxClasses(props.choices.length)}>
        {props.choices.map(choice => (
          <button
            key={'choice-' + choice.value}
            type="button"
            className={buttonClasses(choice.value)}
            onClick={props.handleOnClick(choice.value)}
          >
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}
