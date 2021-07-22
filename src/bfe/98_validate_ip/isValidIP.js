/**
 * @param {string} str
 * @return {boolean}
 */
function isValidIP(str) {
  if(str.indexOf('.') > 0) {
    const list = str.split('.');
    if(list.length !== 4) return false;

    for(let item of list) {
      if(item.length > 1 && item.startsWith('0')) return false;

      const num = parseInt(item, 10);
      if(isNaN(num)) return false;
      if(num < 0 || num > 255) return false;
    }

    return true;
  }

  else if(str.indexOf(':') > 0) {
    const list  = str.split(':');
    if(list.length !== 8) return false;

    for(let _item of list) {
      const item = _item.toLowerCase();
      const num = parseInt(item, 16);

      if(isNaN(num)) return false;

      if(num < 0 || num > 0xffff) return false;
      if(num.toString(16).padStart(item.length, '0') !== item) return false;
    }

    return true;
  }

  return false;
}

function isValidIp(str) {
  const ipv4 =
    /^((([1-9][0-9])|([0-9])|((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])))\.){3}(([1-9][0-9])|([0-9])|((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])))$/;
  const isIpv4 = ipv4.test(str);
  const ipv6 = /^([0-9|a-f]{1,4}\:){7}[0-9|a-f]{1,4}$/i;
  const isIpv6 = ipv6.test(str);

  return (isIpv4 || isIpv6);
}
