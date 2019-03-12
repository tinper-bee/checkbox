
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 基本用法","code":"/**\r\n * @title 基本用法\r\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用，`onDoubleClick`定义双击事件。\r\n */\r\n\r\n\r\nimport React, {Component} from 'react';\r\nimport { Checkbox } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            checkedFlag: false\r\n        }\r\n        this.onChange = this.onChange.bind(this);\r\n    }\r\n\r\n    onChange(e) {\r\n        console.log(e);\r\n        this.setState({checkedFlag: e});\r\n    }\r\n\r\n    handleDblClick = (state) => {\r\n\t\tconsole.log(state);\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo-checkbox\">\r\n                <Checkbox\r\n                    disabled\r\n                    className=\"test\" >\r\n                </Checkbox>\r\n                <Checkbox\r\n                    disabled\r\n                    checked={true}\r\n                    className=\"test\" >\r\n                </Checkbox>\r\n                <Checkbox\r\n                    // onDoubleClick={ this.handleDblClick }\r\n                    ref=\"test\"\r\n                    checked={this.state.checkedFlag}\r\n                    onChange={this.onChange}>\r\n                    全选\r\n                </Checkbox>\r\n                <Checkbox\r\n                    ref=\"test\"\r\n                    indeterminate\r\n                    onChange={this.onChange}>\r\n                    半选\r\n                </Checkbox>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用，`onDoubleClick`定义双击事件。","scss_code":""},{"example":<Demo2 />,"title":" 不同颜色的 Checkbox","code":"/**\r\n * @title 不同颜色的 Checkbox\r\n * @description `colors`参数控制背景色\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Checkbox } from 'tinper-bee';\r\n\r\nclass Demo2 extends Component {\r\n\trender(){\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-checkbox\">\r\n\t\t\t\t<Checkbox colors=\"primary\">primary</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"success\">success</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"info\">info</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"danger\">danger</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"warning\">warning</Checkbox>\r\n\t\t\t\t<Checkbox colors=\"dark\">dark</Checkbox>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n\r\n","desc":" `colors`参数控制背景色","scss_code":""},{"example":<Demo3 />,"title":" 受控的 Checkbox","code":"/**\r\n * @title 受控的 Checkbox\r\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Checkbox, Button } from 'tinper-bee';\r\n\n\r\nclass Demo3 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\tchecked: false,\r\n\t\t\tdisabled: false\r\n\t\t}\r\n\t}\r\n\tchangeCheck=()=> {\r\n\t\tthis.setState({checked:!this.state.checked});\r\n\t}\r\n\tchangeDisabled=()=> {\r\n\t\tthis.setState({disabled:!this.state.disabled});\r\n\t}\r\n\trender () {\r\n\t\tconst label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-checkbox\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<Button \r\n\t\t\t\t\t\tcolors=\"secondary\" \r\n\t\t\t\t\t\tonClick={this.changeCheck.bind(this)}\r\n\t\t\t\t\t\tstyle={{marginRight:\"8px\"}}\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t{!this.state.checked ? 'Check' : 'Uncheck'}\r\n\t\t\t\t\t</Button>\r\n\t\t\t\t\t<Button \r\n\t\t\t\t\t\tcolors=\"secondary\" \r\n\t\t\t\t\t\tonClick={this.changeDisabled.bind(this)}\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t{!this.state.disabled ? 'Disable' : 'Enable'}\r\n\t\t\t\t\t</Button>\r\n\t\t\t\t</p>\t\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<Checkbox \r\n\t\t\t\t\t\tchecked={this.state.checked} \r\n\t\t\t\t\t\tdisabled={this.state.disabled} \r\n\t\t\t\t\t\tonChange={this.changeCheck}\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t{label }\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" `checked` 参数设置是否选中，`disabled`设置是否可用。","scss_code":""},{"example":<Demo4 />,"title":" CheckboxGroup基本使用","code":"/**\r\n * @title CheckboxGroup基本使用\r\n * @description `value` 参数设置默认值，`onChange`设置值改变的回调，`disabled`设置是否可用\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Checkbox } from 'tinper-bee';\r\n\r\n\r\nconst CheckboxGroup = Checkbox.CheckboxGroup;\r\n\r\nclass Demo4 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\tvalue1:['3','4'],\r\n\t\t\tvalue2:['3','4']\r\n\t\t}\r\n\t}\r\n\tchange=(value)=>{\r\n\t\tconsole.log(value)\r\n\t\tthis.setState({\r\n\t\t\tvalue1:value\r\n\t\t})\r\n\t}\r\n\trender () {\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-checkbox\">\r\n\t\t\t\t<CheckboxGroup value={this.state.value1} onChange={this.change}>\r\n\t\t\t\t\t<Checkbox value='1'>\r\n\t\t\t\t\t\t1\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='2'>\r\n\t\t\t\t\t\t2\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='3'>\r\n\t\t\t\t\t\t3\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='4'>\r\n\t\t\t\t\t\t4\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='5'>\r\n\t\t\t\t\t\t5\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t</CheckboxGroup>\r\n\t\t\t\t<CheckboxGroup disabled value={this.state.value2}>\r\n\t\t\t\t\t<Checkbox value='1'>\r\n\t\t\t\t\t\t1\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='2'>\r\n\t\t\t\t\t\t2\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='3'>\r\n\t\t\t\t\t\t3\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='4'>\r\n\t\t\t\t\t\t4\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='5'>\r\n\t\t\t\t\t\t5\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t</CheckboxGroup>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" `value` 参数设置默认值，`onChange`设置值改变的回调，`disabled`设置是否可用"},{"example":<Demo5 />,"title":" CheckboxGroup在form中使用","code":"/**\r\n * @title CheckboxGroup在form中使用\r\n * @description `value` 参数设置默认值，`onChange`设置值改变的回调。\r\n */\r\n\r\nimport React, { Component } from 'react';\r\nimport { Checkbox, Button, Form } from 'tinper-bee';\r\n\n\n\r\n\r\nconst CheckboxGroup = Checkbox.CheckboxGroup;\r\n\r\nclass Demo4 extends Component {\r\n\tconstructor(props) {\r\n\t\tsuper(props);\r\n\t\tthis.state = {\r\n\t\t\tvalue:['3','4']\r\n\t\t}\r\n\t}\r\n\tchange=(value)=>{\r\n\t\tthis.setState({\r\n\t\t\tvalue\r\n\t\t})\r\n\t}\r\n\tclick=()=>{\r\n\t\tthis.props.form.validateFields((error,values)=>{\r\n\t\t\tconsole.log(values)\r\n\t\t})\r\n\t}\r\n\trender () {\r\n\t\tconst self = this;\r\n\t\tconst { getFieldProps, getFieldError }  = this.props.form;\r\n\t\treturn (\r\n\t\t\t<div className=\"demo-checkbox\">\r\n\t\t\t\t<CheckboxGroup \r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t...getFieldProps('name',{\r\n\t\t\t\t\t\t\tinitialValue:['2','3'],\r\n\t\t\t\t\t\t\tonChange:self.change\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t}\r\n\t\t\t\t>\r\n\t\t\t\t\t<Checkbox value='1'>\r\n\t\t\t\t\t\t1\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='2'>\r\n\t\t\t\t\t\t2\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='3'>\r\n\t\t\t\t\t\t3\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='4'>\r\n\t\t\t\t\t\t4\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t\t<Checkbox value='5'>\r\n\t\t\t\t\t\t5\r\n\t\t\t\t\t</Checkbox>\r\n\t\t\t\t</CheckboxGroup>\r\n\t\t\t\t<Button colors=\"secondary\" onClick={this.click}>submit</Button>\r\n\t\t\t</div>\r\n\t\t)\r\n\t}\r\n}\r\n","desc":" `value` 参数设置默认值，`onChange`设置值改变的回调。"},{"example":<Demo6 />,"title":" 红色填充的 Checkbox","code":"/**\r\n * @title 红色填充的 Checkbox\r\n * @description `inverse` 参数设置选中为红色填充，`disabled`设置是否可用。\r\n */\r\n\r\n\r\nimport React, {Component} from 'react';\r\nimport { Checkbox } from 'tinper-bee';\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            checkedFlag: false\r\n        }\r\n        this.onChange = this.onChange.bind(this);\r\n    }\r\n\r\n    onChange(e) {\r\n        console.log(e);\r\n        this.setState({checkedFlag: e});\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div className=\"demo-checkbox\">\r\n                <Checkbox\r\n                    inverse\r\n                    ref=\"test\"\r\n                    checked={this.state.checkedFlag}\r\n                    onChange={this.onChange}>\r\n                    全选\r\n                </Checkbox>\r\n                <Checkbox\r\n                    inverse\r\n                    ref=\"test\"\r\n                    indeterminate\r\n                    onChange={this.onChange}>\r\n                    半选\r\n                </Checkbox>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\n","desc":" `inverse` 参数设置选中为红色填充，`disabled`设置是否可用。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
