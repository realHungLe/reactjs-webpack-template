import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './main.css';
const styles = {
    background: '#f1f1f1',
    color: '#125a99',
    padding: '10px'
}

// require('bootstrap');
class App extends React.Component {

    render() {
        const title = 'Date Time';
        return (
            <div style={styles}>
                <h1>Welcome to ReacJS</h1>
                <Clock title={title}/>
                <hr/>
                <h3>Counter</h3>
                <Counter/>
                <hr/>
                <h3>Toggle status</h3>
                <Toggle/>
                <hr/>
                <h3>To do list </h3>
                <TodoList/>
            </div>
        )
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleCounter() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
        }));
    }

    render() {
        return (
            <button onClick={this.handleCounter.bind(this)}>Counter {this.state.counter}</button>
        )
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: false
        }
    }

    handleToggle() {
        this.setState((prevState, props) => ({
            isToggle: !prevState.isToggle
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggle.bind(this)}>{this.state.isToggle ? "On" : "Off"}</button>
            </div>
        )
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["Task Webpack", "Task Reactjs"]
        }
    }

    handleAddTask() {
        var task = this.refs.task.value;
        if (task) {
            this.setState((prevState, props) => ({
                    list: [...prevState.list, task]
                }
            ));
        }
        this.refs.task.value = '';
    }

    handleDelTask(event) {
        console.log(event);
    }

    handleEditTask(event) {
        console.log(event);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" ref="task"/>
                    <button onClick={this.handleAddTask.bind(this)}>Add task</button>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>
                            <input type="checkbox"/>
                        </th>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.list.map((item, index) => {
                            return (<tr
                                index={index} key={index}
                            >
                                <td><input type="checkbox"/></td>
                                <td>{item}</td>
                                <td>
                                    <a href="#" onClick={this.handleDelTask.bind(this)}>delete</a>|
                                    <a href="#" onClick={this.handleEditTask.bind(this)}>edit</a>
                                </td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));