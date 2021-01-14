
const add = (a, b) => {
    return Number(a) + Number(b);
};

const multiply = (a, b) => {
    return  Number(a) * Number(b);
};

const divise = (a, b) => {
      if(b){
        return  Number(a) / Number(b);
      }else {
          return 0;
      }
    
};


const calculator = {
    add,
    multiply,
    divise
};

export default calculator;