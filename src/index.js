import modals from '../src/modules/modals';
import tabs from '../src/modules/tabs';
import timer from '../src/modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    let deadline = '2021-07-07';

    modals();
    tabs('.slider', '.slider-preview', '.slider-content-block', 'active');
    timer('.container1', deadline);
})
