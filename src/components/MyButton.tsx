import React, {ButtonHTMLAttributes, ReactElement} from 'react';
import {LoadingOutlined} from "@ant-design/icons";
import {MyButtonStatusTypes} from "../types/Types";


interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size: string
    myTitle: string | ReactElement
    status?: MyButtonStatusTypes
    okMessage?: string | ReactElement
    errorMessage?: string | ReactElement
}

function MyButton({
                      myTitle,
                      size,
                      className,
                      okMessage,
                      errorMessage,
                      children,
                      status,
                      ...rest
                  }: MyButtonProps) {

    const loadingIcon = <LoadingOutlined style={{fontSize: `${size}`}} spin/>;
    const errorStatusClass = (status === 'err') && 'is-danger'
    const renderChildren = () => {
        if (status === 'ok') {
            return okMessage
        } else if (status === 'err') {
            return errorMessage
        } else if (status === 'pending') {
            return loadingIcon
        }
        return myTitle
    }

    return (
        <button className={`my-button ${className} ${errorStatusClass}`}
                disabled={status === 'pending'}
                style={{fontSize: `${size}`}}
                {...rest}
        >
            {renderChildren()}
        </button>
    );
}

export default MyButton;