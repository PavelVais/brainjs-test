import * as Brain from "brain.js";

export class MyBrain {


    constructor() {
        this.data = [
            {
                input: [0, 0, 0, 0],
                output: {"empty": 1}
            },
            {
                input: [1, 1, 0, 0],
                output: {"horizontal": 1}
            },
            {
                input: [1, 0, 1, 0],
                output: {"vertical": 1}
            },

            {
                input: [1, 0, 0, 1],
                output: {"diagonal": 1}
            },
            {
                input: [1, 1, 1, 1],
                output: {"full": 1}
            },
            /*{
                input: [0, 1, 1, 0],
                output: {"diagonal": 1}
            },
            {
                input: [0, 1, 0, 1],
                output: {"vertical": 1}
            },
            {
                input: [0, 1, 0, 1],
                output: {"vertical": 1}
            },*/
        ];

        this.brain = new Brain.NeuralNetwork({
            hiddenLayers: [3, 4]
        });
    }

    train() {
        console.log("trenuji data");
        this.brain.train(this.data, {});
    }

    run(data) {
        let run = this.brain.run(data);
        let sort = Object.entries(run).sort((a, b) => b[1] - a[1]);
        console.log(sort);
        return sort[0];
    }

    learn(data, result) {
        let obj = {};
        obj[result] = 1;
        this.data.push({
            input: data,
            output: obj
        })
        this.train();
    }
}