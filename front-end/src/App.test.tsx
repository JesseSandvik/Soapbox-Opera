import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("<App />", () => {
  test("01. Outbound messages display in the conversation window", () => {
    render(<App />);

    const msgTextArea = screen.getByRole("textbox");

    userEvent.click(msgTextArea);
    userEvent.type(msgTextArea, "Hello{space}Clarice.");

    const sendMsgBtn = screen.getByRole("button", { name: /send/i });

    userEvent.click(sendMsgBtn);

    const conversationWindow = screen.getByText("Hello Clarice.");
    
    expect(conversationWindow).toBeInTheDocument();
    expect(conversationWindow).toHaveAttribute("id", "conversation-window");
  });
});
