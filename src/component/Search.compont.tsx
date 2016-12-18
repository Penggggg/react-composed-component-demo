import * as React from 'react';

import Seletor from '../selector';
import SearchInput from '../rice/SearchInput.component';
import List from '../rice/List.component';

import { SearchDecorate } from '../decorator/Search.decorate';

@SearchDecorate
export default class Search extends React.PureComponent< IProps, { }> {

    render( ) {
        // 通过往Selector注入外部props，让decorator能够访问到外部传入的数据
        return (
            <Seletor {...this.props}>
                <SearchInput />
                <List />
            </Seletor>
        )
    }
}



interface IProps {
    fetchUrl: string
}

