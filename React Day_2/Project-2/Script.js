function HtmlBox(){
    return(
        <div className="Box_1">
            <p>Box1</p>
        </div>
    );
};
function HtmlTag(){
    return(
        <div className="Box_2">
            <HtmlBox/>
            <p>Box1</p>
            <h1>I am H1</h1>
            <a href="#"></a>
        </div>
    );
};
ReactDOM.render(<HtmlTag/> , document.getElementById("root"))