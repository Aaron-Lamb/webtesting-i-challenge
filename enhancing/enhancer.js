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
  if(item.enhancement >= 15){
    if(item.enhancement > 16){
      return {
        ...item,
        enhancement: item.enhancement - 1,
        durability: item.durability - 10
      }
    } else{
      return {
        ...item,
        durability: item.durability - 10
      }
    }
  } else if(item.enhancement < 15){
    return{ 
      ...item,
      durability: item.durability - 5
    }
  }
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
