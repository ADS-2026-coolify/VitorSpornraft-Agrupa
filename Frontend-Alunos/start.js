const os = require('os');
const { execSync } = require('child_process');
const { spawn } = require('child_process');

function getWifiIp() {
  const interfaces = os.networkInterfaces();
  
  for (const name of Object.keys(interfaces)) {
    if (name.toLowerCase().includes('wi-fi') || name.toLowerCase().includes('wlan')) {
      for (const net of interfaces[name]) {
        if ((net.family === 'IPv4' || net.family === 4) && !net.internal) {
          return net.address;
        }
      }
    }
  }

  return 'localhost';
}

const ip = getWifiIp();

console.log(`Angular iniciado no IP: ${ip}`);

const ng = spawn(
  'npx',
  ['ng', 'serve', '--host', ip],
  { stdio: 'inherit', shell: true }
);

ng.on('close', code => process.exit(code));