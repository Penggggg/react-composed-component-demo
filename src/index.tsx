import * as React from 'react';
import * as ReactDom from 'react-dom';

import Search from './component/Search.compont';


class Hello extends React.PureComponent<{ }, { }> {
    render( ) {
        return (<div>
            <h1>一个组合式的Search组件demo</h1>
            <code>
                使用方法： Search fetchUrl="https://api.github.user/" />
            </code>
            <Search fetchUrl="https://api.github.user/" />
        </div>)
    }
}


ReactDom.render(
    <Hello />,
    document.getElementById('sss')
)



