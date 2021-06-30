import modals from '../src/modules/modals';
import tabs from '../src/modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tabs('.slider', '.slider-preview', '.slider-content-block', 'active');
})
