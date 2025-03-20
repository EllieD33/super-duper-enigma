import React, { ReactElement, useState } from "react";
import styles from "./LoginForm.module.css";
import TextInput from "../Inputs/TextInput/TextInput";
import Button from "../../Button/Button";
import clsx from "clsx";

export interface LoginFormProps {}

const LoginForm = ({}: LoginFormProps): ReactElement => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUsernameValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsername(event.target.value);
    };

    const handlePasswordValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Username:", username, "Password:", password);
    };

    return (
        <form className={styles.flexWrap} onSubmit={handleSubmit}>
            <div className={clsx(styles.inputContainer, styles.flexWrap)}>
                <div className={styles.usernameInput}>
                    <TextInput
                        name={"username"}
                        value={username}
                        onChange={handleUsernameValueChange}
                        label={{ labelText: "Username", labelPosition: "top" }}
                    />
                </div>
                <TextInput
                    type="password"
                    name={"password"}
                    value={password}
                    onChange={handlePasswordValueChange}
                    label={{ labelText: "Password", labelPosition: "top" }}
                />
            </div>
            <div className={styles.buttonContainer}>
                <Button buttonText="Sign in" type="submit" />
            </div>
        </form>
    );
};

export default LoginForm;
