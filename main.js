const log4js = require('log4js')
const logger = log4js.getLogger();
logger.level = 'info';

//  set GPIO
const Gpio = require('onoff').Gpio
const relay = new Gpio(14, 'out')

// set cron
const cron = require('node-cron');
let light_state = 1;
cron.schedule('0 */10 * * * *', chg_light_state);


function chg_light_state(){
    light_state = Number(1 - light_state)
    relay.writeSync(light_state) // use GPIO
    logger.info("RECV mystate: ", light_state)
}



