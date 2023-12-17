import React, { ChangeEvent, useEffect } from "react";

type SetValuePropsType = {
    startValue: number;
    maxValue: number;
    setStartValue: (startValue: number) => void;
    setMaxValue: (maxValue: number) => void;
    setResetValue: (resetValue: number) => void;
};

export const SetValue = (props: SetValuePropsType) => {
    let setMaxInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber);

        localStorage.setItem(
            "Max_value",
            JSON.stringify(e.currentTarget.valueAsNumber)
        );
    };

    useEffect(() => {
        let valueAsString = localStorage.getItem("Max_value");

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            props.setMaxValue(newValue);
        }
    }, [props, props.maxValue]);

    let setStartInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber);

        localStorage.setItem(
            "Start_value",
            JSON.stringify(e.currentTarget.valueAsNumber)
        );
    };

    useEffect(() => {
        let valueAsString = localStorage.getItem("Start_value");

        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            props.setStartValue(newValue);
        }
    }, [props, props.startValue]);

    return (
        <div className="set-value-form">
            <div className="top-inner-column">
                <div className="set-value-inner-column">
                    <label>Max value: </label>
                    <input
                        className={
                            props.startValue === props.maxValue ||
                            props.maxValue <= props.startValue ||
                            props.maxValue < 0
                                ? "disabled"
                                : ""
                        }
                        type="number"
                        value={props.maxValue}
                        onChange={setMaxInputValue}
                    />
                </div>
                <div className="set-value-inner-column">
                    <label>Start value: </label>
                    <input
                        className={
                            props.startValue === props.maxValue ||
                            props.startValue > props.maxValue ||
                            props.startValue < 0
                                ? "disabled"
                                : ""
                        }
                        type="number"
                        value={props.startValue}
                        onChange={setStartInputValue}
                    />
                </div>
            </div>
            <div className="button-wrapper set-button-wrapper">
                <button
                    className={
                        props.startValue === props.maxValue ||
                        props.startValue > props.maxValue
                            ? "disabled"
                            : ""
                    }
                    onClick={() => {
                        if (props.startValue < props.maxValue) {
                            props.setResetValue(props.startValue);
                        }
                    }}
                >
                    Set
                </button>
            </div>
        </div>
    );
};
