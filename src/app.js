let test = () => console.log('I am compiled. Success!')

test()


// test modules
import { myMod, funcConfirm } from './lib'
console.log("Test module import: " + myMod.msg, myMod.confirm)

// test function 
console.log(funcConfirm('True!!!'))

// test async await function    
async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await response.json()
    return data
}

getPosts()
    .then(posts => console.log(posts))