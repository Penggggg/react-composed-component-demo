import * as React from 'react';

export let SearchDecorate = Wrapper => {

  
            class WrapperComponent extends React.PureComponent< IProps, IState > {
                constructor( ) { 
                    super( );
                    this.state = {
                        data: ''
                    }
                }

                fetchHandler = ( keyword ) => {
                    this.setState({
                        data: `fetching ${this.props.fetchUrl}${keyword}`
                    })
                }

                render( ) {
                    return <Wrapper 
                            {...this.props}
                            onInputChange = { e  => this.fetchHandler( e )}
                            data = { this.state.data } />
                }
            }
            
            return WrapperComponent;
    

}

interface IProps {
    fetchUrl: string
}

interface IState {
    data: any
}