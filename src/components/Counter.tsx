import React, { useEffect, useState } from "react";
import { SetValue } from "./SetValue";
import { ResetValue } from "./ResetValue";

export const Counter = () => {
    // Set start number for the input.
    const [startValue, setStartValue] = useState(0);
    // Set max number for the input.
    const [maxValue, setMaxValue] = useState(5);
    // Define the "reset" value in the appropriate component.
    const [resetValue, setResetValue] = useState<number>();

    // React.useEffect(() => console.log("Start", startValue), [startValue]);
    // React.useEffect(() => console.log("Max", maxValue), [maxValue]);
    // React.useEffect(() => console.log("Reset", resetValue), [resetValue]);

    return (
        <div className="counter">
            <SetValue
                startValue={startValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                setResetValue={setResetValue}
            />
            <ResetValue
                resetValue={resetValue}
                setResetValue={setResetValue}
                maxValue={maxValue}
                startValue={startValue}
            />
        </div>
    );
};
