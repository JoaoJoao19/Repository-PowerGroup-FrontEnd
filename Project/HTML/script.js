let labels1 = ['Bajo peso', 'Normal', 'Sobrepeso', 'Obesidad']; /*This is to set the info into line 10*/
let data1= [25, 32, 33, 10]; /* This set the info into a line 12*/
let colors1 = ['#49A9EA', '#36CAAB', '#c96036', '#C93656']; /* And this set the info in 13*/

let myChart1 = document.getElementById("myChart").getContext('2d');

let Chart1 = new Chart(myChart1,{
    type: 'doughnut',/* we can use: bar/doughnut/radar/pie and others */
    data: {
        labels: labels1,
        datasets: [ {
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "Grafico IMC referente",
            display: true
        }
    }
});