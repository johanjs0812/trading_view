export const formatDate = (isoString) => {
    if (isoString) {
        const date = new Date(isoString);

        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/New_York',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        });
    
        return formatter.format(date);  
    }

};
