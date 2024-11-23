import React, { useEffect, useState } from 'react';
import './user.css'; // Import CSS for styling

const UserNotification = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 3000); // Message will be visible for 3 seconds
        }, 30000); // Show message every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className={`notification ${visible ? 'show' : ''}`}>
            Um usuário acabou de realizar uma compra no site.
        </div>
    );
};

export default UserNotification;
