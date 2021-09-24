import "./QuestionBox.css"

function QuestionBox(){
return <div class="qb-surround">
        <section class="qb-setion">
            
            <h1 class="qb-question-title"> What is React?</h1>
            <section class="qb">
            <Answer text= "A JS freamework"/>
            <Answer text= "A keyboard"/>
            <Answer text= "A taco"/>
            <Answer text= "A random thing"/>
            </section>
        </section>
        <button class="qb-submit">Submit</button>
</div>
}

//txt given from props
function Answer(props){
return <p> {props.text} </p>
}

export default QuestionBox;