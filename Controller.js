export default class Controller {
    constructor (config) {
        if (config) {
            window.addEventListener('keydown', (e) => {
                let events = Object.entries(config);
                events.forEach((event) => {
                    if(e.code == event[0])
                        event[1]();
                });
            });
        };
        return     
    }  
}
