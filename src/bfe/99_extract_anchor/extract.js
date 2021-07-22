
/**
 * @param {string} str
 * @param {string[]} results
 * @return {string[]}
 */
function extract(str) {
  let i = 0;
  let res = [];

  while (i < str.length) {
    let start = str.indexOf('<a', i);
    if(start === -1) return res;

    if(str[start+2] !== ' ' && str[start + 2] !== '>') {
      i += 2;
    } else {
      let end = str.indexOf('a>', start + 2);
      if(end === -1) return res;
      res.push(str.slice(start, end + 2));
      i = end + 2;
    }
  }

  return res;
}


console.log(extract(`
<div>
    <a>link1< / a><a href="https://bfe.dev">link1< / a>
    <div<abbr>bfe</abbr>div>
    <div>
<abbr>bfe</abbr><a href="https://bfe.dev" class="link2"> <abbr>bfe</abbr>   <span class="l">l</span><span  class="i">i</span>   nk2   </a>
    </div>
</div>
`));

// [
//    '<a>link1< / a>',
//    '<a href="https://bfe.dev">link1< / a>',
//    '<a href="https://bfe.dev" class="link2"> <abbr>bfe</abbr>   <span class="l">l</span><span  //class="i">i</span>   nk2   </a>'
//]

