const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>It is a markup language used to build web pages..</p> <br>',
                    '<p>CSS</p> <br> <p> It is a mechanism to add style to a web document.</p> <br>',
                    '<p>JavaScript</p> <br> <p>It is a programming language. Along with HTML and CSS, it is one of the top three web technologies.</p> <br>',
                    '<p>ReactJS</p> <br> <p>React is an open source JavaScript library focused on creating user interfaces on web pages.</p> <br>',
                    '<p>TypeScript</p> <br> <p>TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language..</p> <br>',
                    '<p>Node.Js</p> <br> <p>Node.js is a JavaScript execution environment that allows running applications developed with the language autonomously, without depending on a browser. Allows you to create APIs, Routes and work with other technologies such as Express.js</p> <br>',
                    '<p>Git</p> <br> <p>It is a distributed version control system, mainly used in software development.</p> <br>',
                    '<p>Github</p> <br> <p>It is a source code and file hosting platform with version control using Git. </p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Mouse over a skill to read the description */';
    } )
} );



