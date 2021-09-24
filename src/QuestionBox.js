import "./QuestionBox.css"

function QuestionBox(){
return <div class="qb-surround">
        <section class="qb-setion">
            <h1 class="qb-question-title"> What is React?</h1>
            <Anser text= "A JS freamework"/>
            <Anser text= "A keyboard"/>
            <Anser text= "A taco"/>
            <Anser text= "A random thing"/>
        </section>
</div>
}

//txt given from props
function Answer(props){
return <p> {props.text} </p>
}