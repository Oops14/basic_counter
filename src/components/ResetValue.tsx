import React, { useEffect, useState } from "react";

type ResetValuePropsType = {
    resetValue: number | undefined;
    setResetValue: (resetValue: number) => void;
    maxValue: number;
    startValue: number;
};

export const ResetValue = (props: ResetValuePropsType) => {
    const [activeValue, setActiveValue] = useState(false);

    const [inputValue, setInputValue] = useState<number | undefined>();

    useEffect(() => {
        if (
            props.resetValue ||
            props.resetValue !== undefined ||
            inputValue ||
            inputValue !== undefined
        ) {
            setActiveValue(true);

            setInputValue(props.resetValue);

            if (props.resetValue === props.startValue) {
                localStorage.setItem(
                    "default_value",
                    JSON.stringify(props.resetValue)
                );
            }
        } else {
            setActiveValue(false);
        }
    }, [props.resetValue, inputValue, props.startValue]);

    // React.useEffect(
    //     () => console.log("activeValue", inputValue),
    //     [inputValue]
    // );

    let increaseValue = () => {
        if (
            props.resetValue !== undefined &&
            props.resetValue < props.maxValue
        ) {
            // let num = e.currentTarget.valueAsNumber;

            // setInputValue(props.resetValue);
            // localStorage.removeItem('default_value');
            props.setResetValue(props.resetValue + 1);
        }
    };

    let resetData = () => {
        props.setResetValue(props.startValue);

        let stringValue = localStorage.getItem("default_value");
        if (stringValue) {
            let newValue = JSON.parse(stringValue);
            props.setResetValue(newValue);
        }
    };

    // useEffect(() => {
    //     let stringValue = localStorage.getItem("default_value");
    //     if (stringValue) {
    //         let newValue = JSON.parse(stringValue);
    //         props.setResetValue(newValue);
    //     }
    // }, [props, props.startValue]);

    useEffect(() => {
        let stringValue = localStorage.getItem("default_value");
        if (stringValue) {
            let newValue = JSON.parse(stringValue);
            props.setResetValue(newValue);
        }
    }, []); // Empty dependency array

    return (
        <div className="reset-value-form">
            <div className="top-inner-column">
                <div className="reset-value-inner-column">
                    {(() => {
                        if (
                            props.maxValue <= props.startValue ||
                            props.startValue < 0
                        ) {
                            return (
                                <div
                                    className={
                                        "not-active-reset-area incorrect-value"
                                    }
                                >
                                    Incorrect value!
                                </div>
                            );
                        } else if (activeValue) {
                            return (
                                <input
                                    type="number"
                                    // defaultValue={inputValue}
                                    value={props.resetValue}
                                    // onChange={increaseValue}
                                    className={
                                        props.resetValue === props.maxValue
                                            ? "max-number"
                                            : ""
                                    }
                                    readOnly
                                />
                            );
                        } else {
                            return (
                                <div className={"not-active-reset-area"}>
                                    Enter value and press 'Set'
                                </div>
                            );
                        }
                        // else if (activeValue === false) {
                        //     return (
                        //         <div className={"not-active-reset-area"}>
                        //             Enter value and press 'Set'
                        //         </div>
                        //     );
                        // } else if (props.maxValue === props.startValue) {
                        //     return (
                        //         <div className={"not-active-reset-area"}>
                        //             Incorrect value!
                        //         </div>
                        //     );
                        // }
                    })()}
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
                        props.resetValue === props.maxValue ? "disabled" : ""
                    }
                >
                    Inc
                </button>
                <button onClick={resetData}>Reset</button>
            </div>
        </div>
    );
};
