function alertThenReturn() {
    console.log('Message 1!');
  
    return function () {
        console.log('Message 2!');
    };
  }


  alertThenReturn.length
  alertThenReturn.name
  

  
alertThenReturn()();
const retorno = alertThenReturn();
retorno();