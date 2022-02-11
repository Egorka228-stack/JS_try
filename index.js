'use script'


//09.02.2022
/* try{

}
cath(error){
    consol.log(error); - отроботка ошибки
}finally{
    consol.log('все закончилось');
}
если блок try с ошибкой трабатывает блок cath, он передает ему ошибку. А после исполняеться finally
try - catch - finally - если есть ошибка идет схема так
try - finally - отрабатывает если нет ошибки

try - обязательно нужно заполнить и обязательно должин с ним быть catch или finally
*/
// consol.dir() - позволяет более детально смотреть на ошибку 

//parseInt(1111, 2) - переводит число или строку в двоичную или как либо систему вы укажите  1111 = 15

/* глубокоя настрокка свойств object
Object.defineProperty(test, 'test', {
    configuration - полезно, потом попробовать надо будет

})
*/

const bool = new Boolean(true);

const num = new Number(150);

const str = new String('test');

//11.02.2022

// ... - 

const obj123 = {
    arr :[0,5,15],
    method: function(){
        this.arr.forEach((value, index, arr) =>{
            console.log(value +=5);
            return value + 5;
        });
        console.log(newArr);
    },
    arrow: () => this,
}



function func(pram1, pram2, pram3){
    // return `${pram1} ${pram2} ${pram3}`
    // console.log(arguments);
}

function func1(...rest){
    let sum = 0;
    for(let i = 0; rest.length > i ;i++){
    sum += rest[i];    
    }
    return sum;
}

// Symbol - создание уникального символа, они никогда не равны между собой
const symbol1 = Symbol('test')
const symbol2 = Symbol('test')
