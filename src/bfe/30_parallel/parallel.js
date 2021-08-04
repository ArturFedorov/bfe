function parallel(funcs){
  // your code here

  return function(callBack){
    let isError = false;
    const res = []

    funcs.map((func, index)=> {
      func((error, data)=> {
        if(!isError){
          if(error){
            isError = true;
            callBack(error, undefined)
          }
          res.push(data);
          if(res.length===funcs.length){
            callBack(undefined, res)
          }
        }
      })
    })
  }
}
