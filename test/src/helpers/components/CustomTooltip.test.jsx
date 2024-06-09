const { render } = require("@testing-library/react");
const { CustomTooltip } = require("../../../../src/helpers/components/CustomTooltip");

describe('Prueba en componente CustomTooltip', () => { 
    const text = "Temperatura actual"
    test('Deberia de hacer match con el snapshot', () => { 
        const {container} = render( <CustomTooltip text={text}></CustomTooltip>);
        expect(container).toMatchSnapshot();
     });

 });