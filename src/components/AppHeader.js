import React from 'react';
import GitHubButton from "react-github-btn"

export default class AppHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: localStorage.getItem("theme") === "dark",
            theme: localStorage.getItem("theme"),
        }
    }

    componentDidMount() {
        document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
    }

    toggleThemeChange = () => {
        const { checked } = this.state;
        // If theme is light then change to dark
        if (!checked) {
        // Update localstorage
        localStorage.setItem("theme", "dark");
        /**
         * The document.getElementsByTagName(...).setAttribute(...)
         * will only update the value
         */
        // Update the data-theme attribute of our html tag
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
        // Update our state
        this.setState({
            // Ensure our switch is on if we change to dark theme
            checked: true
        });
        } else {
        // Update localstorage
        localStorage.setItem("theme", "light");
        /**
         * The document.getElementsByTagName(...).setAttribute(...)
         * will only update the value until the App is mounted and we change
         * the state of the switch so we will need to introduce
         * a React lifecycle called ˝componentDidMount()˝
         */
        // Update the data-theme attribute of our html tag
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme"));
        // Update our state
        this.setState({
            // Ensure our switch is off if we change to light theme
            checked: false
        });
        }
    };

    render() {
        return (
            <>
                <div className="gitBtn">
                <GitHubButton href="https://github.com/arjunmahishi/type-test" 
                data-color-scheme="no-preference: light; light: light; dark: dark;" 
                data-icon="octicon-star" data-size="large" data-show-count="true" 
                aria-label="Star arjunmahishi/type-test on GitHub">Star</GitHubButton>
                </div>
                <label className="switch">
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.toggleThemeChange}
                />
                <span className="slider round" />
                </label>
                <h1 className="appName">type-test</h1>
            </>
        )
    }
}