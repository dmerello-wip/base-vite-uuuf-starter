import { makeLoadComponents } from 'uuuf';

async function importComponent(componentName) {
    if(/^pages\/.*/.test(componentName)){
        const striped = componentName.split('/')[1];
        return import(`./components/pages/${striped}.js`).then(mod => mod.default);
    }
    // vite doesn't accept paths  variables
    return import(`./components/${componentName}.js`).then(mod => mod.default);
}

export default makeLoadComponents(importComponent);
