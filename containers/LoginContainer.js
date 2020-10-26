import React from 'react'
import Login from '../Com__Login'

const LoginContainer = () => {
    const Tabs = React.createClass({
        getInitialState() {
            return {
                selected: this.props.selected || 0,
            };
        },
        render() {
            return (
                <>
                    <div className='tabcontent'>
                        {this.props.children.map((elem, index) => {
                            let style = index == this.state.selected ? "selected" : "";
                            return (
                                <div
                                    className={style}
                                    key={index}
                                    onClick={this.handleChange.bind(this, index)}
                                >
                                    {elem.props.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className='login__tabs-link'>
                        {this.props.children[this.state.selected]}
                    </div>
                </>
            );
        },
        handleChange(index) {
            this.setState({ selected: index });
        },
    });

    const Panel = React.createClass({
        render() {
            return <div>{this.props.children}</div>;
        },
    });

    const App = React.createClass({
        render() {
            return (
                <Tabs selected={1}>
                    <Panel title='Login'>
                        <Login/>
                    </Panel>
                    <Panel title='Create Account'>
                        <Login/>
                    </Panel>
                </Tabs>
            );
        },
    });

    // return (
    //     <main class='login'>
    //         <div className='login__tabs-link'>
    //             <button className='tablinks'>Login</button>
    //             <button className='tablinks'>Create account</button>
    //         </div>
    //     </main>
	// );
}

export default LoginContainer