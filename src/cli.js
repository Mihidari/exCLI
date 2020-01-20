import minimist from 'minimist'
import { boilerplate } from './boilerplate'

export function cli(argsArray) {
    const args = minimist(argsArray.slice(2));
    let cmd = args._[0] || 'help';

    switch(cmd) {

        case 'boilerplate':
            boilerplate(args)
        break;

        default:
            console.error(`"${cmd}" is not a valid command!`);
        break;
    }
}