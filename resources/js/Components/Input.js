import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

Input.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    visiblePass: PropTypes.bool,
    isError: PropTypes.bool,
};

export default function Input({
    type = "text",
    name,
    value,
    defaultValue,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    visiblePass,
    isError,
}) {
    const [visible, setVisible] = useState(false);

    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const toggleVisible = () => {
        setVisible((value) => !value);
    };

    return (
        <div className="flex flex-col items-start relative">
            <input
                type={visible ? "text" : type}
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-primary focus:ring-primary focus:ring-opacity-50 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />

            {visiblePass && (
                <div
                    className="absolute top-[14px] right-3 cursor-pointer"
                    onClick={toggleVisible}
                >
                    <i
                        class={`fa-regular ${
                            visible ? "fa-eye-slash" : "fa-eye"
                        } text-neutral-500`}
                    ></i>
                </div>
            )}
        </div>
    );
}
