enum Shoes {
    Nike, // 0
    Adidas // 1
}
// enum을 썼을 때 별도의 값을 지정하지 않으면 숫자형 enum으로 취급

var myShoes = Shoes.Nike;

enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}
// enum을 썼을 때 별도의 값을 지정하지 않으면 숫자형 enum으로 취급

var myShoes2 = Shoes2.Nike;

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답');
    }
    if(answer === Answer.No){
        console.log('오답')
    }
}
// askQuestion('예스');
// askQuestion('Y');
askQuestion(Answer.Yes);
console.log('Y' === Answer.Yes); // true