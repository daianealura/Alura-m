alert('Essa página contém vírus');

function tocaSomPom(){document.querySelector('#som_tecla_pom').play();}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomclap(){document.querySelector('#som_tecla_clap').play();}

document.querySelector('.tecla_clap').onclick = tocaSomclap;

function tocaSompuff(){document.querySelector('#som_tecla_puff').play();}

document.querySelector('.tecla_puff').onclick = tocaSompuff;

function tocaSomsplash(){document.querySelector('#som_tecla_splash').play();}

document.querySelector('.tecla_splash').onclick = tocaSomsplash;

function tocaSomtoim(){document.querySelector('#som_tecla_toim').play();}

document.querySelector('.tecla_toim').onclick = tocaSomtoim;

function tocaSompsh(){document.querySelector('#som_tecla_psh').play();}

document.querySelector('.tecla_psh').onclick = tocaSompsh;

function tocaSomtic(){document.querySelector('#som_tecla_tic').play();}

document.querySelector('.tecla_tic').onclick = tocaSomtic;

function tocaSomtom(){document.querySelector('#som_tecla_tom').play();}

document.querySelector('.tecla_tom').onclick = tocaSomtom;

 
const listadeTecla =document.querySelectorAll('.tecla');

listadeTecla['0'].onclick = tocaSomPom;

let contador = 0;

while (contador< 9) {listadeTecla['0'].onclick= tocaSomPom;
contador+1;
console.log(contador);
    
}
