"use strict";
const React = require("react");
const react_native_1 = require("react-native");
class scry extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, {style: styles.container}, React.createElement(react_native_1.Text, {style: styles.welcome}, "Welcome to React Native!"), React.createElement(react_native_1.Text, {style: styles.instructions}, "To get started, edit yup.ios.js"), React.createElement(react_native_1.Text, {style: styles.instructions}, "Press Cmd+R to reload, ", '\n', "Cmd+D or shake for dev menu")));
    }
}
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
react_native_1.AppRegistry.registerComponent('scry', () => scry);
module.exports = scry;
//# sourceMappingURL=index.ios.js.map