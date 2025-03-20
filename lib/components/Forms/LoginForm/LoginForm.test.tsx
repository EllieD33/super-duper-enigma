import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import LoginForm, { LoginFormProps } from "./LoginForm";

const defaultProps: LoginFormProps = {};

jest.mock("../Inputs/TextInput/TextInput", () => ({
    __esModule: true,
    default: ({ name, value, onChange, label }: any) => (
        <input
            name={name}
            value={value}
            onChange={onChange}
            aria-label={label.labelText}
            type={name === "password" ? "password" : "text"}
        />
    ),
}));

describe("LoginForm", () => {
    it("renders the form correctly", () => {
        render(<LoginForm />);

        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /sign in/i })
        ).toBeInTheDocument();
    });

    it("username and password input fields update correctly", async () => {
        render(<LoginForm />);

        const usernameInput = screen.getByLabelText(/username/i);
        const passwordInput = screen.getByLabelText(/password/i);

        await userEvent.type(usernameInput, "testuser");
        await userEvent.type(passwordInput, "testpassword");

        expect(usernameInput).toHaveValue("testuser");
        expect(passwordInput).toHaveValue("testpassword");
    });

    it("form submission works and prevents page reload", async () => {
        render(<LoginForm />);

        const logSpy = jest.spyOn(console, "log");

        const usernameInput = screen.getByLabelText(/username/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole("button", { name: /sign in/i });

        await userEvent.type(usernameInput, "testuser");
        await userEvent.type(passwordInput, "testpassword");

        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(logSpy).toHaveBeenCalledWith(
                "Username:",
                "testuser",
                "Password:",
                "testpassword"
            );
        });

        logSpy.mockRestore();
    });
});
