// let questions = document.querySelectorAll('.faq-question');

// questions.forEach((question)=>{
//     question.addEventListener('click', ()=> {
//         let answer = question.nextElementSibling;
//         let plusSign = question.querySelector('.plus-sign');
//         let minusSign = question.querySelector('.minus-sign');
//         let allAnswers = document.querySelectorAll('.faq-answer');
//         let isExpanded = answer.classList.contains('expanded');

//         allAnswers.forEach((answer)=> {
//             answer.classList.remove('expanded');
//             answer.previousElementSibling.querySelector('.plus-sign').classList.add('show');
//             answer.previousElementSibling.querySelector('.minus-sign').classList.remove('active');
//         });

//         if (!isExpanded) {
//             answer.classList.add('expanded');
//             minusSign.classList.add('active');
//             plusSign.classList.add('none');
//             plusSign.classList.remove('show');
//         }
//     });
// });