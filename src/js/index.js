import loadComponents from './loadComponents';
import '@/scss/index.scss';
import.meta.glob([
    '../images/**',
]);


console.log('fava');
loadComponents(document.body);
