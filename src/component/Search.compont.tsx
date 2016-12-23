import * as React from 'react';

import Seletor from '../selector';
import SearchInput from '../rice/SearchInput.component';
import List from '../rice/List.component';

import { SearchDecorate } from '../decorator/Search.decorate';

@SearchDecorate
export default class Search extends React.PureComponent< IProps, { }> {

    render( ) {
        // Selector是智能的数据注入层，往SearchInput、List的props注入外部数据
        // decorator能够访问到外部传入的数据，把内部/外部数据注入给Selector
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

