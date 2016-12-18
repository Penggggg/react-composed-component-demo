import * as React from 'react';

export default class Seletor extends React.PureComponent< IProps, { }> {

    injectPropsToChild = ( item, index ) => {
        let { needProps } =  item.type;
        let injectObj = { key: index };
        if ( needProps ) {
            needProps.forEach(( propName, index ) => {
                injectObj[ propName ] = this.props[ propName ];
            })
            return React.cloneElement( item, injectObj );
        } else {
            return React.cloneElement( item, { 'key' : 'test' });
        }

    }

    cloneChildren = ( ) => {
        return ( this.props.children as Array<any> ).map( this.injectPropsToChild );
    }

    render( ) {
        return <div>
            { this.cloneChildren( )}
        </div>
    }
}

interface IProps {
    listData?: any
    onInputChange?: any
}