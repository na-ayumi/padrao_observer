interface Subject {
    registerPlayer(o: Observer): void; //registra novo jogador
    removePlayer(o: Observer): void; //remove o jogador
    notifyPlayer(attackOrHeal: boolean): void; //notifica sobre a vida do jogador
}

interface Observer {
    update(health: number): void; //atualiza a vida do jogador
}

class Game implements Subject{
    private players: Player [] = [];
    public gameEvents = new GameEvents;
    
    public registerPlayer(player: Player): void { 
        this.players.push(player);
        console.log(`Jogador ${player.getNickName()} registrado na equipe!`);
    }

    public removePlayer(player: Player): void {
        this.players = this.players.filter(p => p !== player);
        console.log("Jogador removido da equipe!");
    }

    public notifyPlayer(attackOrHeal: boolean): void {
        let i:number = Math.floor(Math.random() * this.players.length)
        let targetPlayer = this.players[i]; //seleciona um jogador aleatório para sofrer a ação
        let event: number;

        if (!targetPlayer){
            console.log("Jogador não encontrado!");
            return;
        }

        if (attackOrHeal) {
            let damage = this.gameEvents.setAttack(); //ataque
            event = -damage; //precisa ser negativo, para diminuir a vida do jogador
            console.log("O INIMIGO ATACOU!");
            console.log(`Jogador ${targetPlayer.getNickName()} foi atacado! Dano sofrido: ${damage}`);
        } else {
            let heal = this.gameEvents.setHealing();
            event = heal; //precisa ser positivo, para aumentar a vida
            console.log("POÇÃO DE CURA ENCONTRADA!")
            console.log(`Jogador ${targetPlayer.getNickName()} encontrou uma poção! Vida aumentada em: ${heal}`);
        }

        targetPlayer.update(event);
    }
}

class Player implements Observer{
    private health = 100; //quantidade de vida padrão
    constructor(
        private nickName: string,
        private game: Game
    ) {}

    public update(event: number): void{
        this.health += event;
        if (this.health > 0){ 
            console.log(`${this.nickName} está com ${this.health} de vida.`) //o jogador ainda está vivo e continua no jogo
        } else {
            console.log("GAME OVER!"); 
            console.log(`${this.nickName} está com a vida zerada!`)
            this.game.removePlayer(this); //o jogador zerou a vida e foi removido
        }
    }

    public getNickName(): string{
        return this.nickName;
    }
}

class GameEvents {
    public setAttack(): number{
        return Math.floor(Math.random() * 70); //gera um dano aleatório
    
    }

    public setHealing(): number{
        return Math.floor(Math.random() * 30); //gera uma cura aleatória
    }

    public attackOrHeal(): boolean{ //cria um evento aleatório (ataque ou cura)
        let dado = Math.floor(Math.random() * 10); 
        
        if (dado % 2 == 0) {
            return true; //ataque
        } else {
            return false; //cura
        }
    }
}

const gameTeste = new Game();
const p1 = new Player("Percy", gameTeste);
const p2 = new Player("Annabeth", gameTeste);
const p3 = new Player("Nico", gameTeste);
const p4 = new Player("Grover", gameTeste);

console.log("=== INÍCIO DO JOGO ===")
gameTeste.registerPlayer(p1);
gameTeste.registerPlayer(p2);
gameTeste.registerPlayer(p3);
gameTeste.registerPlayer(p4);


// Simula 15 rodadas
console.log()
for (let i = 0; i < 15; i++) {
    console.log(`=== RODADA ${i + 1} ===`);
    gameTeste.notifyPlayer(gameTeste.gameEvents.attackOrHeal());
    console.log();
}

console.log("=== JOGO FINALIZADO ===")