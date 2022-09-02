import qrcode from 'qrcode-terminal';
import os from 'os';

const nets = os.networkInterfaces();
const results = {};

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
    // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
    const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
    if (net.family === familyV4Value && !net.internal) {
      if (!results[name]) {
        results[name] = [];
      }
      results[name].push(net.address);
    }
  }
}

const address = results?.['Ethernet']?.[0];

if (results?.['Wi-Fi']) {
  address = results['Wi-Fi']?.[0];
} else if (results?.['en0']) {
  address = results['en0']?.[0];
} else if (results?.['en1']) {
  address = results['en1']?.[0];
} else if (results?.['en2']) {
  address = results['en2']?.[0];
} else if (results?.['en3']) {
  address = results['en3']?.[0];
}

qrcode.generate(`exp://${address}:8081/`);
