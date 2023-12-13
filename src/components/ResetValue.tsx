import React, { ChangeEvent, MouseEventHandler } from "react";

type ResetValuePropsType = {
    resetValue: number;
    setResetValue: (resetValue: number) => void;
    maxValue: number;
    startValue: number;
};

export const ResetValue = (props: ResetValuePropsType) => {
    let increaseValue = () => {
        if (props.resetValue < props.maxValue) {
            props.setResetValue(props.resetValue + 1);
        }
    };

    let resetData = () => {
        props.setResetValue(props.startValue);
    }

    return (
        <div className="reset-value-form">
            <div className="top-inner-column">
                <div className="reset-value-inner-column">
                    <input
                        type="number"
                        value={props.resetValue}
                        onChange={increaseValue}
                        className={
                            props.resetValue === props.maxValue
                                ? "max-number"
                                : ""
                        }
                    />
                </div>
            </div>
            <div className={"button-wrapper reset-button-wrapper"}>
                <button
                    onClick={increaseValue}
                    className={
                        props.resetValue === props.maxValue
                            ? "max-number-btn"
                            : ""
                    }
                >
                    Inc
                </button>
                <button onClick={resetData}>Reset</button>
            </div>
        </div>
    );
};
