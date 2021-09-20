const crypto = require('crypto');

function sha1(input) {
  return crypto.createHash('sha1').update(input).digest();
}

const ENCRYPTION = {
  ALGORITHM: 'aes-256-cbc',
  IV_LENGTH: 16,
  KEY: 'GOLDFISH_N26_ENCRYPTION_KEY_WEB_',
  STRING_FORMAT: 'hex',
}

const IV_SEPARATOR_CHARACTER = '[N26]'

const decrypt = (text) => {
  let key = '';
  crypto.pbkdf2(text, '', 100, ENCRYPTION.IV_LENGTH, 'AES-256-CBC', (err, derivedKey) => {
    if (err) throw err;
    console.log(derivedKey.toString('hex'));
    key = derivedKey.toString('hex');
  });

  let decipher = crypto.createDecipheriv(ENCRYPTION.ALGORITHM, key, IV_SEPARATOR_CHARACTER);

  let decryptedPassword = decipher.update(text, 'base64', 'utf8');
  decryptedPassword += decipher.final('utf8');

  return decryptedPassword;
}


console.log(decrypt('e2f9f28aa85f2ea1cf99b0b13950217e[N26]544f37e4f58ca50dfacc15415278900c1b0faee1ea897defd9b410a747a54fab9788d0a95cb588d097c57a608fcce22b93fc260ef15c987e9194d4007f9a392d31d3ad71a88d15f266f7e7e8802531d3819950d667cbd082d7ce9e766d9d5124'));
