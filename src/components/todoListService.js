export function  getTodos(){
    return window.fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json());
  };