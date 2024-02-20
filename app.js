function getRandomValue(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        };
    },
    methods: {
        attackMonster(){
            this.currentRound ++;
            const attackValue = getRandomValue(5,12);
            if((this.monsterHealth -= attackValue) < 0){
                this.monsterHealth = 0;
            }
            else{
                this.monsterHealth -= attackValue;
            }
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRandomValue(8,15);
            if((this.playerHealth - attackValue) < 0){
                this.playerHealth = 0;
            }
            else{
                this.playerHealth -= attackValue;
            }
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(8,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }
            else{
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
        specialAttackMonster(){
            this.currentRound ++;
            const attackValue = getRandomValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    },
    computed: {
        monsterBarStyles(){
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles(){
            return { width: this.playerHealth + '%' }
        },
        specialAttackIsAvailable(){
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {

    }
});

app.mount('#game');