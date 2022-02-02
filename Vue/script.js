const app = Vue.createApp({
    data() {
        return {
            index: 0,
            indexArr: [0],
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            indexCount: 0,
            count: 5,
            questions: [
                {
                    question: "According to a popular phrase, something that is easy to accomplish is said to be a 'piece of' what??",
                    answers: {a: 'Cookie', b: 'Cake', c: 'Candy', d: 'Candice'},
                    correctAnswer: 'b'
                },
                {
                    question: "When did Facebook launch?",
                    answers: {a: '2005', b: '2008', c: '2003', d: '2004'},
                    correctAnswer: 'd'
                },
                {
                    question: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
                    answers: {a: 'Pocahontas', b: 'Sleeping Beauty', c: 'Cinderella', d: 'Elsa'},
                    correctAnswer: 'c'
                },
                {
                    question: "What name is given to the revolving belt machinery in an airport that delivers checked luggage from the plane to baggage reclaim?",
                    answers: {a: 'Hangar', b: 'Terminal', c: 'Concourse', d: 'Carousel'},
                    correctAnswer: 'b'
                },
                {
                    question: "The hammer and sickle is one of the most recognisable symbols of which political ideology?",
                    answers: {a: 'Republicanism', b: 'Conservatism', c: 'Communism', d: 'Liberism'},
                    correctAnswer: 'c'
                },
                {
                    question: "A person with well-developed abdominal muscles is said to have a what?",
                    answers: {a: 'One-pack', b: 'Six-pack', c: '12-pack', d: 'Family-pack'},
                    correctAnswer: 'b'
                },
                {
                    question: "Which two words traditionally appear onscreen at the termination of a feature film?",
                    answers: {a: 'The end', b: 'The Conclusion', c: 'The Finish', d: 'It\'s Over'},
                    correctAnswer: 'a'
                },
                {
                    question: "What is the largest country in the world?",
                    answers: {a: 'Canada', b: 'China', c: 'The USA', d: 'Russia'},
                    correctAnswer: 'd'
                },
                {
                    question: "What is the capital of France?",
                    answers: {a: 'Paris', b: 'Lyon', c: 'Bordeaux', d: 'Nantes'},
                    correctAnswer: 'a'
                },
                {
                    question: "What are the first 6 digits of PI?",
                    answers: {a: '3.1413', b: '3.1414', c: '3.1415', d: '3.1316'},
                    correctAnswer: 'c'
                },
                {
                    question: "How long is an Olympic swimming pool (in meters)?",
                    answers: {a: '30', b: '40', c: '50', d: '60'},
                    correctAnswer: 'c'
                },
                {
                    question: "What geometric shape is generally used for stop signs?",
                    answers: {a: 'Pentagon', b: 'Hexagon', c: 'Octagon', d: 'Nonagon'},
                    correctAnswer: 'c'
                },
                {
                    question: "Which animal can be seen on the Porsche logo?",
                    answers: {a: 'Lion', b: 'Horse', c: 'Tiger', d: 'Bull'},
                    correctAnswer: 'b'
                },
                {
                    question: "What is the name of the largest ocean on earth?",
                    answers: {a: 'Pacific Ocean', b: 'Atlantic Ocean', c: 'Arctic Ocean', d: 'Indian Ocean'},
                    correctAnswer: 'a'
                },
                
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer']) {
                this.correctAnswer++;
            }
            else {
                this.wrongAnswer++;
            }
        },
        nextQuestion() {
            this.indexCount++
            let ind = Math.floor(Math.random() * this.questions.length);
            
            while(this.indexArr.includes(ind)) {
                ind = Math.floor(Math.random() * this.questions.length);
            }

            this.indexArr.push(ind);
            this.index = ind;
            this.selectedAnswer = '';
        },
        showResults() {
            this.indexCount++;
        },
        resetQuiz() {
            let t = Math.floor(Math.random() * this.questions.length);
            this.indexCount = 0;
            this.indexArr = [t];
            this.index = t;
            this.selectedAnswer = '';
            this.correctAnswer = 0;
            this.wrongAnswer = 0;
        }
    }
})

app.mount('#app')
