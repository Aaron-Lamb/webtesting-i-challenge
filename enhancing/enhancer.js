module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement <= 19){
    return {
      ...item,
      enhancement: item.enhancement + 1
    }
  } else if(item.enhancement > 19){
    return{ ...item }
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { 
    ...item,
    durability: 100
   };
}

function get(item) {
  return { ...item };
}
