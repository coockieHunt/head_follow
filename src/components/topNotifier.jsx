/**
 * A React component that displays a top notification message with a timeout.
 * The notification becomes visible when the `trigger` prop changes and automatically hides after the specified `timeout`.
 *
 * @param {Object} props - The props object.
 * @param {string} props.message - The message to be displayed in the notification.
 * @param {*} props.trigger - A value that, when changed, triggers the notification to show.
 * @param {number} [props.timeout=3000] - The duration in milliseconds after which the notification hides.
 * @returns {JSX.Element} The rendered TopNotifier component.
 */
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
