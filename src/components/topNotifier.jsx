
import { useEffect, useState } from "react";

const TopNotifier = ({ message, trigger, timeout = 3000 }) => {
    // State to control visibility and message display
    const [visible, setVisible] = useState(false);
    const [displayMessage, setDisplayMessage] = useState("");

    // Handle if message changes
    useEffect(() => {
        if (message && message.trim() !== "") {setDisplayMessage(message);}
    }, [message]);

    // handle triger changes to show notification
    useEffect(() => {
        if (trigger !== undefined) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, timeout);
            return () => clearTimeout(timer);
        }
    }, [trigger, timeout]);

    // Render the notifier
    return (
        <div className={`topNotifier ${visible ? "visible_TopNotifier" : "hidden_TopNotifier"}`}>
            <p>{displayMessage}</p>
        </div>
    );
};

export default TopNotifier;
