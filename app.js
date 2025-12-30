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
        let mensagem = `O ${this.tipoHeroi} ${this.nomeHeroi}, com seus ${this.idadeHeroi} anos, atacou usando ${this.tipoAtaque}.`;
        console.log(mensagem);
    }
}