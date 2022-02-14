let pronoun = ["0", "1"];
let adj = ["0", "1"];
let noun = ["0", "1"];


function domainGenerator(arr, arr1, arr2) {
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr1.length; k++){
            for(let b = 0; b < arr2.length; b++){
                console.log(arr[i] + arr1[k] + arr2[b] + '.com')
            }
        }
    }
  }

console.log(domainGenerator(pronoun, adj, noun))

function spell(ab, ba, ki){
    for(let i = 0; i < ab.length; i++){
        for(let b = 0; b < ba.length; b++){
            for(let k = 0; k < ki.length; k++){
                console.log(ab[i] + ba[b] + ki[k])
            }
        }
    }
}
console.log(spell(pronoun, adj, noun))
//logs 
// 0,0,0
// 0,0,1
// 0,1,0
// 0,1,1
// 1,0,0
// 1,0,1
// 1,1,0
// 1,1,1


