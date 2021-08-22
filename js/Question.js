class Question {

  constructor() {
    this.title = createElement('h1')
    
    this.input1 = createInput("").attribute("placeholder", "Enter Your Name Here...");
    this.input2 = createInput("").attribute("placeholder", "Enter Correct Option No...");
    
    this.question = createElement('h3');

    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

    this.button = createButton('Submit');
    
    this.greeting = createElement("h2");
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350,10);
    
    this.question.html("Question:- What is the capital of Canada?");
    this.question.position(100,90);

    this.option1.html("A. Toronto");
    this.option1.position(100,130);

    this.option2.html("B. Tokyo");
    this.option2.position(100,150);

    this.option3.html("C. Ottawa");
    this.option3.position(100,170);

    this.option4.html("D. New York");
    this.option4.position(100,190);

    this.input1.position(150,290);
    this.input2.position(350,290);

    this.button.position(305, 340);

    this.greeting.position(180,270);


    this.button.mousePressed(() => {
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
      var message = 
      `Thank you, your answer has been submitted.<br>
       The correct answer is C. Ottawa`             
      
      this.greeting.html(message);
    });
  }
}
