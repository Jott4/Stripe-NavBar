import React, { useContext } from 'react';
import { Container, DropdownStyles } from './styles';
import { DropdownOption, DropdownProvider, DropdownRoot} from '../dropdown/index';

import { Products, Developers, Company } from '../Content';

function navbar() {
    return (
        <DropdownProvider>
            <DropdownStyles>
                <Container>
                    <ul>
                        <li>
                            <DropdownOption
                                name="Produtos"
                                content={Products}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Desenvolvedores"
                                content={Developers}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Empresas"
                                content={Company}
                            />
                        </li>

                    </ul>

                </Container>

                <DropdownRoot />
            </DropdownStyles>
        </DropdownProvider>
    )
}

export default navbar;