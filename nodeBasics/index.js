import chalk from 'chalk';

const log = console.log;

log(chalk.rgb(123, 45, 67)('Humpty Dumpty') + ' sat on a ' + chalk.green('wall') + ',');
log(chalk.rgb(123, 45, 67)('Humpty Dumpty') + ' had a ' + chalk.red('great fall') + ',');
log(chalk.hex('#38e8ebff')(
	'All the king’s horses ' +
	chalk.blue('AND') +
	' all the king’s men,'
));
log(chalk.blue('Couldn’t ', 'put ', 'Humpty ', 'together ', 'again.'));