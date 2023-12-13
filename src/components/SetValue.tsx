import React, { ChangeEvent } from "react";

type SetValuePropsType = {
    startValue: number;
    maxValue: number;
    setStartValue:(startValue: number) => void;
    setMaxValue: (maxValue: number) => void;
    setResetValue: (resetValue: number) => void;
};

export const SetValue = (props: SetValuePropsType) => {

    let setMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber);
    }

    let setStartInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber);
    }

    return (
        <div className="set-value-form">
            <div className="top-inner-column">
                <div className="set-value-inner-column">
                    <label>Max value: </label>
                    <input type="number" value={props.maxValue} onChange={setMaxInputValue}/>
                </div>
                <div className="set-value-inner-column">
                    <label>Start value: </label>
                    <input type="number" value={props.startValue} onChange={setStartInputValue}/>
                </div>
            </div>
            <div className="button-wrapper set-button-wrapper">
                <button onClick={() => {
                    props.setResetValue(props.startValue);
                }}>Set</button>
            </div>
        </div>
    );
};
