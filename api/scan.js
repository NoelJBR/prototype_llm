const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

router.post('/', (req, res) => {
    const { target, options } = req.body;

    // Basic validation
    if (!target) {
        return res.status(400).json({ error: 'Target is required' });
    }

    // Clean the target by removing http:// or https://
    let cleanTarget = target;
    if (cleanTarget.startsWith('http://')) {
        cleanTarget = cleanTarget.substring(7);
    } else if (cleanTarget.startsWith('https://')) {
        cleanTarget = cleanTarget.substring(8);
    }

    // Sanitize options, allow only safe nmap options
    const allowedOptions = ['-sV', '-O', '-p-', '-A', '-T4', '-T5', '--script', '-v'];
    const safeOptions = options ? options.split(' ').filter(opt => allowedOptions.some(allowed => opt.startsWith(allowed))) : [];

    const command = `nmap ${safeOptions.join(' ')} ${cleanTarget}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json({ result: stdout });
    });
});

module.exports = router;