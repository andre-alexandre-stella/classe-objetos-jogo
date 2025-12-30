class Heroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
        let tipoAtaque = '';
        switch(this.tipoHeroi){
            case('mago'):
                tipoAtaque = 'magia';
                break;
            case('guerreiro'):
                tipoAtaque = 'espada';
                break;
            case('monge'):
                tipoAtaque = 'artes marciais';
                break;
            case('ninja'):
                tipoAtaque = 'shuriken';
                break;
            default:
                tipoAtaque = 'Tipo de herói inexistente!';
        }
        this.tipoAtaque = tipoAtaque;
    }

    atacar(){
        let tiposDeHeroi = ['mago', 'guerreiro', 'monge', 'ninja'];
        let mensagem = '';
        if(tiposDeHeroi.includes(this.tipoHeroi)){
            mensagem = `O ${this.tipoHeroi} ${this.nomeHeroi}, com seus ${this.idadeHeroi} anos, atacou usando ${this.tipoAtaque}.`;
        } else{
            mensagem = this.tipoAtaque;
        }        
        console.log(mensagem);
    }
}

let mago = new Heroi('Merlin', 200, 'mago');
mago.atacar();

let guerreiro = new Heroi('He-man', 35, 'guerreiro');
guerreiro.atacar();

let monge = new Heroi('Dalai Lama', 90, 'monge');
monge.atacar();

let ninja = new Heroi('Bruce Lee', 25, 'ninja');
ninja.atacar();

let soldado = new Heroi('Rambo', 30, 'soldado');
soldado.atacar();