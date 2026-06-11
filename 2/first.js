const React = {
    createElement : function(tag,styles,children){
        const element = document.createElement(tag);

        if(typeof children === 'object'){
            for(let value of children){
                element.append(value);
            }
        }
        else
        element.innerText = children;
        for(let key in styles){
            element.style[key]  = styles[key];
        }
        return element;
    }
}

const ReactDOM = {
    render: function(element,root){
        root.append(element);
    }
}

const header1 = React.createElement('h1',{backgroundColor : "Black",fontSize:"30px",color :"white"},"Hello Aman");
const header2 = React.createElement('h1',{backgroundColor : "Blue",fontSize:"30px",color :"white"},"Kaise ho! ");


//unordered List  - HTML , CSS ,JS
const li1 = React.createElement('li',{},"HTML");
const li2 = React.createElement('li',{},"CSS");
const li3 = React.createElement('li',{},"JS");


const Ul = React.createElement('ul',{backgroundColor : "Black",fontSize:"30px",color :"white"},[li1,li2,li3])











ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(Ul,document.getElementById('root'));





// const header1 = document.createElement('h1');
// header1.innerText = 'Hello Aman';
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";


// const header2 = document.createElement('h1');
// header2.innerText = 'Kaise ho';
// header2.style.backgroundColor = "Black";
// header2.style.fontSize = "30px";
// header2.style.color = "white";

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);