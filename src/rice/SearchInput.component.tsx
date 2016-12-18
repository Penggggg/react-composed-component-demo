import * as React from 'react';
import * as ReactDom from 'react-dom';

export default class SearchInput extends React.PureComponent< IProps, { }> {

    static needProps = ['onInputChange']

    render( ) {
        let { onInputChange } = this.props;
        return <div>
            <input type="text" onChange={( e: any ) => onInputChange( e.target.value )} />
        </div>
    }

}

interface IProps  {
    onInputChange?: Function
}