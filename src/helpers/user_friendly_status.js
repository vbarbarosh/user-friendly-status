const fs = require('fs');

// Treat /dev/fd/3 as a special file for user-friendly messages.
// But, if no such file was open, print use-friendly messages to the stderr.
function user_friendly_status(s)
{
    const tmp = s + '\n';
    fs.write(3, tmp, function (error) {
        if (error) {
            process.stderr.write(tmp);
        }
    });
}

module.exports = user_friendly_status;
