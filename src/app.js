class TodoApp extends React.Component {
    render() {
        const title = 'TodoApps';
        const subtitle = 'Organize schedule';
        const options = ['Thing one', 'Thing two']
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        )
    }
}        

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)

class Action extends React.Component {
    handlePick() {
        alert('Seattle is awesome')
    }
    render() {
        return(
        <div>
            <button onClick={this.handlePick}> What should I do?</button>
        </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeData = this.removeData.bind(this)
    }
    removeData() {
        alert('remove data options')
    }
    render() {
        return (
            <div>
            <button onClick={this.removeData}>RemoveAll </button>
            {this.props.options.map((option) => {
            return(
                <Option key={option} optionText={option}/>
            )
        })}</div>
        )
    }
}

const Option = (props) => (
<div>{props.optionText}</div>
)

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option =e.target.elements.option.value.trim();
        if (option) {
            alert(option)
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<TodoApp/>, document.getElementById('app'))