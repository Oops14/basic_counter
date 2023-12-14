import React, { useEffect, useState } from "react";

type ResetValuePropsType = {
    resetValue: number | undefined;
    setResetValue: (resetValue: number) => void;
    maxValue: number;
    startValue: number;
};

export const ResetValue = (props: ResetValuePropsType) => {
    useEffect(() => {
        props.resetValue || props.resetValue !== undefined
            ? setActiveValue(true)
            : setActiveValue(false);
    }, [props.resetValue]);

    const [activeValue, setActiveValue] = useState(false);
    // React.useEffect(
    //     () => console.log("activeValue", activeValue),
    //     [activeValue]
    // );

    let increaseValue = () => {
        if (
            props.resetValue !== undefined &&
            props.resetValue < props.maxValue
        ) {
            props.setResetValue(props.resetValue + 1);
        }
    };

    let resetData = () => {
        props.setResetValue(props.startValue);
    };

    return (
        <div className="reset-value-form">
            <div className="top-inner-column">
                <div className="reset-value-inner-column">
                    {activeValue ? (
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
                    ) : (
                        <div className={"not-active-reset-area"}>
                            Enter value and press 'Set'
                        </div>
                    )}
                </div>
            </div>
            <div
                className={
                    activeValue
                        ? "button-wrapper reset-button-wrapper"
                        : "button-wrapper reset-button-wrapper buttons-disabled"
                }
            >
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
